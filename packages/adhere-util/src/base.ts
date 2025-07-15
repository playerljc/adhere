// 特殊符号
const SPECIAL_SYMBOL = '__';

// 记录对象路径的变量
const PATH_SYMBOLS = [
  `${SPECIAL_SYMBOL}parentName${SPECIAL_SYMBOL}`,
  `${SPECIAL_SYMBOL}parent${SPECIAL_SYMBOL}`,
] as const;

/**
 * 基础工具类
 * @description 提供常用的基础工具函数
 */
export default {
  /**----------------------------基本---------------------------**/
  /**
   * 检查值是否为空
   * @description 判断值是否为 null、undefined 或空字符串
   * @param value - 要检查的值
   * @returns 如果值为空返回 true，否则返回 false
   * @example
   * ```typescript
   * isEmpty(null) // true
   * isEmpty(undefined) // true
   * isEmpty('') // true
   * isEmpty('hello') // false
   * isEmpty(0) // false
   * ```
   */
  isEmpty(value: unknown): value is null | undefined | '' {
    return value === null || value === '' || value === undefined;
  },

  /**
   * 检查值是否为数字类型
   * @description 判断值是否为有效的数字类型（不包括 NaN、Infinity）
   * @param val - 要检查的值
   * @returns 如果值为数字类型返回 true，否则返回 false
   * @example
   * ```typescript
   * isNumber(123) // true
   * isNumber(0) // true
   * isNumber(-1.5) // true
   * isNumber('123') // false
   * isNumber(NaN) // false
   * ```
   */
  isNumber(val: unknown): val is number {
    return (
      !this.isObject(val) && 
      !this.isArray(val) && 
      !this.isFunction(val) && 
      typeof val === 'number' &&
      !Number.isNaN(val) &&
      Number.isFinite(val)
    );
  },

  /**
   * 检查值是否为布尔类型
   * @param val - 要检查的值
   * @returns 如果值为布尔类型返回 true，否则返回 false
   * @example
   * ```typescript
   * isBoolean(true) // true
   * isBoolean(false) // true
   * isBoolean(1) // false
   * ```
   */
  isBoolean(val: unknown): val is boolean {
    return typeof val === 'boolean';
  },

  /**
   * 检查值是否为字符串类型
   * @param val - 要检查的值
   * @returns 如果值为字符串类型返回 true，否则返回 false
   * @example
   * ```typescript
   * isString('hello') // true
   * isString('') // true
   * isString(123) // false
   * ```
   */
  isString(val: unknown): val is string {
    return typeof val === 'string';
  },

  /**
   * 检查值是否为 Symbol 类型
   * @param val - 要检查的值
   * @returns 如果值为 Symbol 类型返回 true，否则返回 false
   * @example
   * ```typescript
   * isSymbol(Symbol('test')) // true
   * isSymbol('symbol') // false
   * ```
   */
  isSymbol(val: unknown): val is symbol {
    return typeof val === 'symbol';
  },

  /**
   * 检查值是否为基本类型
   * @description 基本类型包括：boolean、number、string、symbol
   * @param val - 要检查的值
   * @returns 如果值为基本类型返回 true，否则返回 false
   * @example
   * ```typescript
   * isPrimitive('hello') // true
   * isPrimitive(123) // true
   * isPrimitive(true) // true
   * isPrimitive({}) // false
   * isPrimitive([]) // false
   * ```
   */
  isPrimitive(val: unknown): val is boolean | number | string | symbol {
    return this.isBoolean(val) || this.isNumber(val) || this.isString(val) || this.isSymbol(val);
  },

  /**
   * 检查值是否为数组
   * @param obj - 要检查的值
   * @returns 如果值为数组返回 true，否则返回 false
   * @example
   * ```typescript
   * isArray([]) // true
   * isArray([1, 2, 3]) // true
   * isArray({}) // false
   * ```
   */
  isArray(obj: unknown): obj is unknown[] {
    return Array.isArray(obj);
  },

  /**
   * 检查值是否为函数
   * @param obj - 要检查的值
   * @returns 如果值为函数返回 true，否则返回 false
   * @example
   * ```typescript
   * isFunction(() => {}) // true
   * isFunction(function() {}) // true
   * isFunction('function') // false
   * ```
   */
  isFunction(obj: unknown): obj is Function {
    return typeof obj === 'function';
  },

  /**
   * 检查值是否为对象
   * @description 纯对象，不包括数组和函数
   * @param obj - 要检查的值
   * @returns 如果值为对象返回 true，否则返回 false
   * @example
   * ```typescript
   * isObject({}) // true
   * isObject({ a: 1 }) // true
   * isObject([]) // false
   * isObject(() => {}) // false
   * ```
   */
  isObject(obj: unknown): obj is Record<string, unknown> {
    return obj !== null && typeof obj === 'object' && !Array.isArray(obj) && !(obj instanceof Function);
  },

  /**
   * 检查值是否为引用类型
   * @description 引用类型包括：数组和对象
   * @param obj - 要检查的值
   * @returns 如果值为引用类型返回 true，否则返回 false
   * @example
   * ```typescript
   * isRef({}) // true
   * isRef([]) // true
   * isRef('string') // false
   * ```
   */
  isRef(obj: unknown): obj is unknown[] | Record<string, unknown> {
    return this.isArray(obj) || this.isObject(obj);
  },

  /**
   * 检查值是否为 Promise
   * @param obj - 要检查的值
   * @returns 如果值为 Promise 返回 true，否则返回 false
   * @example
   * ```typescript
   * isPromise(Promise.resolve()) // true
   * isPromise({ then: () => {} }) // true
   * isPromise({}) // false
   * ```
   */
  isPromise(obj: unknown): obj is Promise<unknown> {
    return obj !== null && typeof obj === 'object' && typeof (obj as any).then === 'function';
  },

  /**
   * 对象的链式赋值
   * @description 通过链式字符串对对象进行深度赋值
   * @param obj - 要赋值的对象
   * @param chainStr - 属性链式表达式，如 'a.b.c'
   * @param value - 要赋值的值
   * @returns 赋值成功返回 true，失败返回 false
   * @example
   * ```typescript
   * const obj = {};
   * chainCallAssignment({ obj, chainStr: 'a.b.c', value: 123 });
   * // obj.a.b.c = 123
   * ```
   */
  chainCallAssignment({ 
    obj, 
    chainStr, 
    value 
  }: { 
    obj: Record<string, unknown>; 
    chainStr: string; 
    value: unknown; 
  }): boolean {
    if (
      !this.isObject(obj) ||
      !this.isString(chainStr) ||
      this.isEmpty(chainStr) ||
      this.isEmpty(obj)
    ) {
      return false;
    }

    const chain = chainStr.split('.');
    let target: Record<string, unknown> = obj;

    for (let i = 0; i < chain.length; i++) {
      const property = chain[i];

      if (i < chain.length - 1) {
        if (!target[property] || !this.isObject(target[property])) {
          target[property] = {};
        }
        target = target[property] as Record<string, unknown>;
      } else {
        target[property] = value;
      }
    }

    return true;
  },

  /**
   * 通过链式字符串获取对象属性值
   * @description 通过链式字符串获取对象的深度属性值
   * @param obj - 要查询的对象
   * @param chainStr - 属性链式表达式，如 'a.b.c'
   * @returns 返回属性值，如果路径不存在返回 undefined
   * @example
   * ```typescript
   * const obj = { a: { b: { c: 123 } } };
   * getObjectByChainStr({ obj, chainStr: 'a.b.c' }); // 123
   * getObjectByChainStr({ obj, chainStr: 'a.b.d' }); // undefined
   * ```
   */
  getObjectByChainStr({ 
    obj, 
    chainStr 
  }: { 
    obj: Record<string, unknown>; 
    chainStr: string; 
  }): unknown {
    if (
      !this.isObject(obj) ||
      !this.isString(chainStr) ||
      this.isEmpty(chainStr) ||
      this.isEmpty(obj)
    ) {
      return obj;
    }

    const chain = chainStr.split('.');
    let target: unknown = obj;

    for (let i = 0; i < chain.length; i++) {
      if (target === null || target === undefined || !this.isObject(target)) {
        return undefined;
      }
      target = (target as Record<string, unknown>)[chain[i]];
    }

    return target;
  },

  /**
   * 将连接符分隔的字符串转换为驼峰命名
   * @param str - 用连接符分隔的字符串
   * @param split - 分隔符，默认为下划线
   * @param toUpperCase - 是否转换为大写开头，默认为 false
   * @returns 转换后的驼峰字符串
   * @example
   * ```typescript
   * toCamelCase('abc-def') // 'abcDef'
   * toCamelCase('abc_def', '_') // 'abcDef'
   * toCamelCase('abc-def', '-', true) // 'AbcDef'
   * ```
   */
  toCamelCase(str: string, split: string = '_', toUpperCase: boolean = false): string {
    if (!this.isString(str) || this.isEmpty(str)) {
      return str;
    }

    const result = str
      .split(split)
      .map((item) => item.charAt(0).toUpperCase() + item.substring(1))
      .join('');
    
    return !toUpperCase ? `${result.charAt(0).toLowerCase()}${result.substring(1)}` : result;
  },

  /**
   * 检查字符串是否为 kebab-case 格式
   * @description kebab-case 格式：小写字母和数字，用连字符分隔
   * @param name - 要检查的字符串
   * @returns 如果是 kebab-case 格式返回 true，否则返回 false
   * @example
   * ```typescript
   * isKebabCase('my-component') // true
   * isKebabCase('myComponent') // false
   * isKebabCase('MY-COMPONENT') // false
   * ```
   */
  isKebabCase(name: string): boolean {
    return /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/.test(name);
  },

  /**
   * 检查字符串是否为 PascalCase 格式
   * @description PascalCase 格式：每个单词首字母大写
   * @param name - 要检查的字符串
   * @returns 如果是 PascalCase 格式返回 true，否则返回 false
   * @example
   * ```typescript
   * isPascalCase('MyComponent') // true
   * isPascalCase('myComponent') // false
   * isPascalCase('my-component') // false
   * ```
   */
  isPascalCase(name: string): boolean {
    return /^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/.test(name);
  },

  /**
   * 将 PascalCase 转换为 kebab-case
   * @param str - PascalCase 格式的字符串
   * @param symbol - 分隔符，默认为连字符
   * @returns 转换后的 kebab-case 字符串
   * @example
   * ```typescript
   * pascalCaseToKebabCase('MyComponent') // 'my-component'
   * pascalCaseToKebabCase('MyComponent', '_') // 'my_component'
   * ```
   */
  pascalCaseToKebabCase(str: string, symbol: string = '-'): string {
    if (!this.isString(str) || this.isEmpty(str)) {
      return str;
    }

    const cells = str.match(/([A-Z]+(?=[A-Z]|$))|([A-Z]?[^A-Z]+)/g) || [];
    return cells.map((c) => c.toLowerCase()).join(symbol);
  },

  /**
   * 将 PascalCase 转换为 kebab-case（方法2）
   * @param name - PascalCase 格式的字符串
   * @param symbol - 分隔符，默认为连字符
   * @returns 转换后的 kebab-case 字符串
   * @example
   * ```typescript
   * pascalCaseToKebabCase2('MyComponent') // 'my-component'
   * pascalCaseToKebabCase2('MyComponent', '_') // 'my_component'
   * ```
   */
  pascalCaseToKebabCase2(name: string, symbol: string = '-'): string {
    if (!this.isString(name) || this.isEmpty(name)) {
      return name;
    }

    const result = name.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, `$1${symbol}$2`);
    return (result.startsWith(symbol) ? result.substring(1) : result).toLowerCase();
  },

  /**
   * 执行表达式
   * @description 在指定上下文中执行表达式
   * @param context - 执行上下文对象
   * @param expressionStr - 要执行的表达式字符串
   * @param data - 额外的数据参数
   * @returns 表达式执行结果
   * @example
   * ```typescript
   * const context = { name: 'John', age: 30 };
   * execExpression(context, 'name + " is " + age + " years old"', {});
   * // 返回: "John is 30 years old"
   * ```
   */
  execExpression(
    context: Record<string, unknown>, 
    expressionStr: string, 
    data: unknown
  ): unknown {
    // 实参列表，调用函数传递的参数
    const argv: unknown[] = [data];

    // 形参列表，函数声明的参数列表
    const parameters: string[] = ['context'];

    // 迭代context
    for (const p in context) {
      if (Object.prototype.hasOwnProperty.call(context, p)) {
        // 拼凑其他实参
        argv.push(context[p]);
        // 拼凑其他形参
        parameters.push(p);
      }
    }

    // 创建函数并调用
    return eval(
      `
    const fun = new Function(
      \`${parameters.join(',')}\`,
      \`return eval("with(context){${expressionStr}}")\`,
    );

    fun.apply(window, argv);
  `,
    );
  },

  /**
   * 获取 Cookie 值
   * @param name - Cookie 名称，默认为 'lang'
   * @returns Cookie 值，如果不存在返回空字符串
   * @example
   * ```typescript
   * getCookie('sessionId') // 返回 sessionId 的值
   * getCookie() // 返回 lang 的值
   * ```
   */
  getCookie(name: string = 'lang'): string {
    if (typeof document === 'undefined') {
      return '';
    }

    const strCookie = document.cookie;
    const arrCookie = strCookie.split(';');

    // 遍历匹配
    for (let i = 0; i < arrCookie.length; i++) {
      const arr = arrCookie[i].split('=');

      if (arr[0].trim() === name) {
        return arr[1] || '';
      }
    }

    return '';
  },

  /**
   * 返回一个空实现的函数
   * @returns 空函数
   * @example
   * ```typescript
   * const noop = noop();
   * noop(); // 什么都不做
   * ```
   */
  noop(): () => void {
    return () => {};
  },

  /**
   * 生成指定范围内的随机整数
   * @param lowerValue - 最小值（包含）
   * @param upperValue - 最大值（包含）
   * @returns 指定范围内的随机整数
   * @example
   * ```typescript
   * generatorRandom(1, 10) // 返回 1-10 之间的随机整数
   * generatorRandom(0, 1) // 返回 0 或 1
   * ```
   */
  generatorRandom(lowerValue: number, upperValue: number): number {
    const choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
  },

  /**
   * 生成 UUID
   * @description 生成符合 RFC 4122 标准的 UUID v4
   * @returns UUID 字符串
   * @example
   * ```typescript
   * uuid() // 返回类似 "550e8400-e29b-41d4-a716-446655440000" 的字符串
   * ```
   */
  uuid(): string {
    const s: (string | number)[] = [];
    const hexDigits = '0123456789abcdef';

    for (let i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }

    s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr(((s[19] as number) & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = '-';

    return s.join('');
  },

  /**
   * 获取属性访问的完整字符串路径
   * @description 用于 Proxy 中获取属性的完整访问路径
   * @param target - Proxy 中 set 的 target 参数
   * @param key - Proxy 中 set 的 key 参数
   * @returns 完整的属性访问路径字符串
   * @example
   * ```typescript
   * // 假设有对象 obj.a.b.c
   * getPropertyVisitPathStr(target, 'c') // 返回 "a.b.c"
   * ```
   */
  getPropertyVisitPathStr(target: Record<string, unknown>, key: string): string {
    // 最终的访问路径 - 先将最后一个key放入
    const visitPath: string[] = this.isArray(target) ? [] : [key];

    if (target[PATH_SYMBOLS[0]]) {
      visitPath.push(target[PATH_SYMBOLS[0]] as string);
    }

    let parent = target[PATH_SYMBOLS[1]] as Record<string, unknown> | undefined;
    while (parent) {
      if (parent[PATH_SYMBOLS[0]]) {
        visitPath.push(parent[PATH_SYMBOLS[0]] as string);
      }
      parent = parent[PATH_SYMBOLS[1]] as Record<string, unknown> | undefined;
    }

    visitPath.reverse();

    const result: string[] = [];

    for (let i = 0; i < visitPath.length; i++) {
      const item = visitPath[i];
      if (item.startsWith('[') && item.endsWith(']')) {
        result[result.length - 1] = `${result[result.length - 1]}${item}`;
      } else {
        result.push(item);
      }
    }

    return result.join('.');
  },

  /**
   * 将 Base64 URL 转换为 Blob 对象
   * @param data - Base64 URL 字符串
   * @returns Blob 对象，如果转换失败返回 null
   * @example
   * ```typescript
   * const blob = convertBase64UrlToBlob('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==');
   * ```
   */
  convertBase64UrlToBlob(data: string): Blob | null {
    if (typeof window === 'undefined') return null;

    try {
      const bytes = window.atob(data.split(',')[1]); // 去掉url的头，并转换为byte

      // 处理异常,将ascii码小于0的转换为大于0
      const ab = new ArrayBuffer(bytes.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
      }

      return new Blob([ab], { type: 'image/png' });
    } catch (error) {
      console.error('Failed to convert base64 to blob:', error);
      return null;
    }
  },

  /**
   * 对象排除空值
   * @description 移除对象中的 null、undefined、空字符串等空值
   * @param obj - 要处理的对象
   * @returns 排除空值后的新对象
   * @example
   * ```typescript
   * omitObject({ a: 1, b: '', c: null, d: 'hello' })
   * // 返回: { a: 1, d: 'hello' }
   * ```
   */
  omitObject<T extends Record<string, unknown>>(obj: T): Partial<T> {
    const res: Partial<T> = {};
    const keys = Object.keys(obj ?? {});

    keys.forEach((key) => {
      let value = obj[key];
      if (![null, undefined, '', 'undefined'].includes(value as any)) {
        if (typeof value === 'string') {
          value = value.trim();
        }

        if (value !== '') {
          (res as Record<string, unknown>)[key] = value;
        }
      }
    });

    return res;
  },

  /**
   * 首字母大写
   * @param str - 要处理的字符串
   * @returns 首字母大写的字符串
   * @example
   * ```typescript
   * capitalized('hello') // 'Hello'
   * capitalized('world') // 'World'
   * ```
   */
  capitalized(str: string): string {
    if (!this.isString(str) || this.isEmpty(str)) {
      return str;
    }
    return `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
  },

  /**
   * 首字母小写
   * @param str - 要处理的字符串
   * @returns 首字母小写的字符串
   * @example
   * ```typescript
   * lowercaseInitial('Hello') // 'hello'
   * lowercaseInitial('World') // 'world'
   * ```
   */
  lowercaseInitial(str: string): string {
    if (!this.isString(str) || this.isEmpty(str)) {
      return str;
    }
    return `${str.charAt(0).toLowerCase()}${str.substring(1)}`;
  },
  /**----------------------------基本end---------------------------**/
};
