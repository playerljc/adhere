const path = require('path');

module.exports = (options = {}) => {
  // 默认配置
  const defaults = {
    rootValue: 16,
    unitPrecision: 5,
    minPixelValue: 0,
    excludeProperties: [], // 支持字符串或正则
    excludeFiles: [], // 支持字符串、正则或glob（需自行引入glob库）
    excludeFileExtensions: [],
    mediaQueries: false,
  };

  const opts = { ...defaults, ...options };

  return {
    postcssPlugin: 'postcss-var-pxtorem',

    prepare(result) {
      const filePath = result.root.source?.input.file;

      // 检查是否应该排除当前文件
      const shouldExcludeFile = () => {
        if (!filePath) return false;

        // 检查文件扩展名
        if (opts.excludeFileExtensions.length) {
          const ext = path.extname(filePath).toLowerCase();
          return opts.excludeFileExtensions.some((ex) => {
            const targetExt = ex.startsWith('.') ? ex : `.${ex}`;
            return ext === targetExt.toLowerCase();
          });
        }

        // 检查文件路径匹配
        if (opts.excludeFiles.length) {
          const normalizedPath = path.normalize(filePath);
          return opts.excludeFiles.some((pattern) => {
            if (typeof pattern === 'string') {
              // 处理绝对路径和相对路径的精确匹配
              const resolvedPattern = path.isAbsolute(pattern)
                ? pattern
                : path.resolve(process.cwd(), pattern);
              return normalizedPath === path.normalize(resolvedPattern);
            }
            return pattern instanceof RegExp && pattern.test(normalizedPath);
          });
        }

        return false;
      };

      if (shouldExcludeFile()) {
        return {};
      }

      // 转换函数：修复负数、科学计数法匹配，优化精度
      const convertPxToRem = (value) => {
        return value.replace(/(-?\d*\.?\d+(?:e[+-]?\d+)?)\s*px/g, (match, pxValue) => {
          const num = parseFloat(pxValue);
          if (num < opts.minPixelValue) {
            return match;
          }
          const remValue = num / opts.rootValue;
          // 移除末尾多余的0和小数点（如0.500→0.5，1.000→1）
          const fixedValue = remValue.toFixed(opts.unitPrecision).replace(/\.?0+$/, '');
          return (fixedValue || '0') + 'rem';
        });
      };

      return {
        Declaration(decl) {
          // 检查排除属性（支持正则）
          const isExcluded = opts.excludeProperties.some((prop) =>
            typeof prop === 'string' ? prop === decl.prop : prop.test(decl.prop),
          );
          if (isExcluded) return;

          // 仅处理带默认值的var()
          if (decl.value.includes('var(')) {
            decl.value = decl.value.replace(
              /var\((--[^,]+),\s*([^)]+)\)/g,
              (match, varName, defaultValue) => `var(${varName}, ${convertPxToRem(defaultValue)})`,
            );
          }
        },

        // 处理媒体查询中的var()默认值
        AtRule(atRule) {
          if (atRule.name === 'media' && opts.mediaQueries) {
            atRule.walkDecls((decl) => {
              // 处理媒体查询内的带默认值var()
              if (decl.value.includes('var(')) {
                decl.value = decl.value.replace(
                  /var\((--[^,]+),\s*([^)]+)\)/g,
                  (match, varName, defaultValue) =>
                    `var(${varName}, ${convertPxToRem(defaultValue)})`,
                );
              }
              // 额外处理媒体查询条件中的px（如min-width: 768px）
              if (decl.parent === atRule && decl.prop.includes('width')) {
                decl.value = convertPxToRem(decl.value);
              }
            });
          }
        },
      };
    },
  };
};

module.exports.postcss = true;
