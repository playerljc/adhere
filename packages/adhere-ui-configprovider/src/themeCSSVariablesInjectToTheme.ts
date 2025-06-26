import Util from '@baifendian/adhere-util';

export function themeCSSVariablesInjectToTheme({
  componentTheme,
  els,
}: {
  componentTheme: Record<string, string>;
  els: HTMLElement[];
}) {
  // 将componentTheme中的属性映射到contextEL中, 对这个对象进行一个forEach添加到el上
  Object.keys(componentTheme).forEach((key) => {
    const kebabCaseKey = Util.pascalCaseToKebabCase2(key);

    const pascalCaseValue = componentTheme[key];

    els.forEach((el) => {
      el.style.setProperty(`--${kebabCaseKey}`, pascalCaseValue);
    });
  });
}
