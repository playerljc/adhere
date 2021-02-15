declare const _default: {
    /**
     * isEmpty - 对象是否为空
     * @param value
     */
    isEmpty(value: any): boolean;
    /**
     * isArray - 判断数组
     * @param obj
     * @return {boolean}
     */
    isArray(obj: any): boolean;
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
     * isTextNode - 是否是文本节点
     * @param el - Node
     * @return {boolean}
     */
    isTextNode(el: any): boolean;
    /**
     * isCommentNode - 是否是注释节点
     * @param el
     * @return {boolean}
     */
    isCommentNode(el: any): boolean;
    /**
     * isElementNode - 是否是元素节点
     * @param el - Element
     * @return {boolean}
     */
    isElementNode(el: any): boolean;
    /**
     * createElement - 根据html字符串创建dom
     * @param htmlStr - string
     * @return {Element}
     */
    createElement(htmlStr: any): Element | null;
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
     * noop - 返回一个空实现的函数
     * @return Function
     */
    noop(): Function;
    /**
     * 函数节流
     */
    /**
     * getCookie
     * @return {string}
     * @param name
     */
    getCookie(name?: string): string;
    /**
     * getLang
     * @return {String}
     */
    getLang(): string;
    /**
     * setLang
     * @param lang
     */
    setLang(lang?: string): void;
    /**
     * getDatePickerFormat
     * @return {string}
     */
    getDatePickerFormat(): string;
    /**
     * 401 casUrl
     * @param baseUrl
     * @param enterUrl
     * @return {string}
     */
    casUrl({ baseUrl, enterUrl }: {
        baseUrl: any;
        enterUrl: any;
    }): string;
    /**
     * casLogoutUrl
     * @param {String} - baseUrl
     * @param {String} - enterUrl
     * @param {String} - params
     * @return {string}
     */
    casLogoutUrl({ baseUrl, enterUrl, params }: {
        baseUrl: any;
        enterUrl: any;
        params?: string | undefined;
    }): string;
    /**
     * isIframeEmbed - 是否是iframe嵌入
     * @return {boolean}
     */
    isIframeEmbed(): boolean;
    /**
     * toPoint - 百分数转化为小数
     * @param percent
     */
    toPoint(percent: string): number;
    /**
     * point - 小数转化为百分数
     * @param point
     */
    toPercent(point: any): string;
};
export default _default;
