/**
 * 代理目标类型
 * 可以是普通对象或数组
 */
export type ProxyTarget = Record<string | number | symbol, any> | any[];

/**
 * 代理处理器类型
 * 定义Proxy的get和set方法
 */
export type ProxyHandler = {
  get(target: ProxyTarget, property: string | number | symbol, receiver: any): any;
  set(target: ProxyTarget, property: string | number | symbol, value: any, receiver: any): boolean;
};

/**
 * NotNull函数类型
 * 泛型函数，保持输入类型的完整性
 */
export type NotNullFunction = <T extends ProxyTarget>(target: T) => T; 