declare const _default: {
    /**----------------------------基本---------------------------**/
    /**
     * isEmpty - 对象是否为空
     * @param value
     */
    isEmpty(value: any): boolean;
    /**
     * isNumber - 判断是否是number
     * @param val
     * @return {boolean}
     */
    isNumber(val: any): boolean;
    /**
     * isBoolean - 判断是否是boolean
     * @param val
     * @return {boolean}
     */
    isBoolean(val: any): boolean;
    /**
     * isString - 判断是否是string
     * @param val
     * @return {boolean}
     */
    isString(val: any): boolean;
    /**
     * isSymbol - 是否是符号类型
     * @param val
     * @return boolean
     */
    isSymbol(val: any): boolean;
    /**
     * isPrimitive - 是否是基本类型
     * @param val
     */
    isPrimitive(val: any): boolean;
    /**
     * isArray - 判断数组
     * @param obj
     * @return {boolean}
     */
    isArray(obj: any): boolean;
    /**
     * isFunction - 判断函数
     * @param obj
     * @return {boolean}
     */
    isFunction(obj: any): boolean;
    /**
     * isObject - 是否是对象
     * @param obj
     * @return {boolean}
     */
    isObject(obj: any): boolean;
    /**
     * isRef - 是否是引用类型
     * @param obj
     */
    isRef(obj: any): boolean;
    /**
     * chainCallAssignment - 对象的链式赋值
     * obj.a.b.c.d.x.x.x = value
     * @param obj Object - 赋值的对象
     * @param chainStr string - 属性链式表达式 a.b.c
     * @param value any - 要复值的值
     */
    chainCallAssignment({ obj, chainStr, value }: {
        obj: any;
        chainStr: any;
        value: any;
    }): false | undefined;
    /**
     * getObjectByChainStr - 通过chainStr获取对象
     * obj.a.b.c.d.x.x.x = value
     * @param obj Object - 赋值的对象
     * @param chainStr string - 属性链式表达式 a.b.c
     * @return Object
     */
    getObjectByChainStr({ obj, chainStr }: {
        obj: any;
        chainStr: any;
    }): any;
    /**
     * toCamelCase - 用连接符链接的字符串转换成驼峰写法
     * 例：abc-def AbcDef
     * @param str - string 用连接符节点的字符串
     * @param toUpperCase - boolean 是否转换成大写
     * @return {String}
     */
    toCamelCase(str: any, toUpperCase?: boolean): any;
    /**
     * isKebabCase - 是否是烤肉串形式的名字
     * @param name - string 名称
     * @return boolean
     */
    isKebabCase(name: any): boolean;
    /**
     * isPascalCase - 是否是驼峰形式的名字
     * @param name - string 名称
     * @return boolean
     */
    isPascalCase(name: any): boolean;
    /**
     * pascalCaseToKebabCase 驼峰转xxx-xxx-xxx
     * @param name - string pascalCase的字符串
     * @return {string}
     */
    pascalCaseToKebabCase(name: any): any;
    /**
     * execExpression - 执行表达式
     * @param context - {Object} 执行的上下文
     * @param expressionStr - {String} 表达式
     * @param data
     * @return {any}
     */
    execExpression(context: any, expressionStr: any, data: any): any;
    /**
     * getCookie
     * @return {string}
     * @param name
     */
    getCookie(name?: string): string;
    /**
     * noop - 返回一个空实现的函数
     * @return Function
     */
    noop(): Function;
    /**
     * generatorRandom - 生成随机数
     * @param lowerValue - 最小值
     * @param upperValue - 最大值
     */
    generatorRandom(lowerValue: any, upperValue: any): number;
    /**
     * uuid - 获取uuid
     * @return string
     */
    uuid(): string;
    /**
     * getPropertyVisitPathStr - 获取属性访问的完整字符串路径 a.b.c.d.e.f
     * @param target Proxy中set的target参数
     * @param key Proxy中set的key参数
     * @return {string}
     */
    getPropertyVisitPathStr(target: any, key: any): string;
    /**
     * convertBase64UrlToBlob - 转换base64位blob对象
     * @return Blob
     * @param data
     */
    convertBase64UrlToBlob(data: string): Blob;
    /**
     * omitObject
     * @description - 对象排除空值
     * @param obj
     * @return object
     */
    omitObject(obj: object): object;
};
export default _default;
