/**
 * 基础工具类
 * @description 提供常用的基础工具函数
 */
declare const _default: {
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
    isEmpty(value: unknown): value is null | undefined | "";
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
    isNumber(val: unknown): val is number;
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
    isBoolean(val: unknown): val is boolean;
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
    isString(val: unknown): val is string;
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
    isSymbol(val: unknown): val is symbol;
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
    isPrimitive(val: unknown): val is boolean | number | string | symbol;
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
    isArray(obj: unknown): obj is unknown[];
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
    isFunction(obj: unknown): obj is Function;
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
    isObject(obj: unknown): obj is Record<string, unknown>;
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
    isRef(obj: unknown): obj is unknown[] | Record<string, unknown>;
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
    isPromise(obj: unknown): obj is Promise<unknown>;
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
    chainCallAssignment({ obj, chainStr, value }: {
        obj: Record<string, unknown>;
        chainStr: string;
        value: unknown;
    }): boolean;
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
    getObjectByChainStr({ obj, chainStr }: {
        obj: Record<string, unknown>;
        chainStr: string;
    }): unknown;
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
    toCamelCase(str: string, split?: string, toUpperCase?: boolean): string;
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
    isKebabCase(name: string): boolean;
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
    isPascalCase(name: string): boolean;
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
    pascalCaseToKebabCase(str: string, symbol?: string): string;
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
    pascalCaseToKebabCase2(name: string, symbol?: string): string;
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
    execExpression(context: Record<string, unknown>, expressionStr: string, data: unknown): unknown;
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
    getCookie(name?: string): string;
    /**
     * 返回一个空实现的函数
     * @returns 空函数
     * @example
     * ```typescript
     * const noop = noop();
     * noop(); // 什么都不做
     * ```
     */
    noop(): () => void;
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
    generatorRandom(lowerValue: number, upperValue: number): number;
    /**
     * 生成 UUID
     * @description 生成符合 RFC 4122 标准的 UUID v4
     * @returns UUID 字符串
     * @example
     * ```typescript
     * uuid() // 返回类似 "550e8400-e29b-41d4-a716-446655440000" 的字符串
     * ```
     */
    uuid(): string;
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
    getPropertyVisitPathStr(target: Record<string, unknown>, key: string): string;
    /**
     * 将 Base64 URL 转换为 Blob 对象
     * @param data - Base64 URL 字符串
     * @returns Blob 对象，如果转换失败返回 null
     * @example
     * ```typescript
     * const blob = convertBase64UrlToBlob('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==');
     * ```
     */
    convertBase64UrlToBlob(data: string): Blob | null;
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
    omitObject<T extends Record<string, unknown>>(obj: T): Partial<T>;
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
    capitalized(str: string): string;
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
    lowercaseInitial(str: string): string;
};
export default _default;
