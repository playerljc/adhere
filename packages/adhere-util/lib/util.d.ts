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
     * toPoint - 百分数转化为小数
     * @param percent
     */
    toPoint(percent: string): number;
    /**
     * point - 小数转化为百分数
     * @param point
     */
    toPercent(point: any): string;
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
     * rgb - rgb颜色随机
     */
    rgb(): string;
    /**
     * color16 - 十六进制颜色随机
     */
    color16(): string;
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
    /**----------------------------基本end---------------------------**/
    /**--------------------------dom-start-------------------------**/
    /**
     * isTextNode - 是否是文本节点
     * @param el - Node
     * @return {boolean}
     */
    isTextNode(el: Node): boolean;
    /**
     * isCommentNode - 是否是注释节点
     * @param el
     * @return {boolean}
     */
    isCommentNode(el: Node): boolean;
    /**
     * isElementNode - 是否是元素节点
     * @param el - Element
     * @return {boolean}
     */
    isElementNode(el: Node): boolean;
    /**
     * createElement - 根据html字符串创建dom
     * @param htmlStr - string
     * @return {Element}
     */
    createElement(htmlStr: string): HTMLElement;
    /**
     * getTopDom - 已target为开始向上查找元素
     * @param {HtmlElement} target
     * @param {string} selector
     * @return {HtmlElement}
     */
    getTopDom(target: any, selector: string): null | HTMLElement;
    /**
     * on - 注册事件
     * @param el
     * @param tag
     * @param type
     * @param handler
     * @param capture
     */
    on(el: any, tag: string, type: string, handler: Function, capture?: boolean): void;
    /**
     * off
     * @param el
     * @param tag
     * @param type
     * @param handler
     */
    off(el: Element, tag: string, type: string, handler: Function): void;
    /**
     * addClass
     * @param {HTMLElement} el
     * @param {String} classes
     */
    addClass(el: any, classes?: string): void;
    /**
     * removeClass
     * @param {HTMLElement} el
     * @param {String} classes
     */
    removeClass(el: any, classes?: string): void;
    /**
     * hasClass
     * @param {HTMLElement} el
     * @param {String} className
     * @return {Boolean}
     */
    hasClass(el: any, className: string): boolean;
    /**
     * DOM没有提供insertAfter()方法
     * @param {HtmlElement} newElement
     * @param {HtmlElement} targetElement
     */
    insertAfter(newElement: any, targetElement: any): void;
    /**
     * prepend
     * @param {HTMLElement} - el
     * @param {HTMLElement | String} - children
     */
    prepend(el: any, children: any): void;
    /**
     * remove
     * @param {HTMLElement} - el
     */
    remove(el: any): void;
    /**
     * getParentElementByTag
     * @param {HtmlElement} el
     * @param {string} tag
     * @return {HtmlElement}
     */
    getParentElementByTag(el: any, tag: string): HTMLElement | null;
    /**
     * children
     * @param {HTMLElement} el
     * @param {string} selector
     */
    children(el: any, selector: string): any[];
    /**
     * isTouch
     * @return {boolean}
     */
    isTouch(): boolean;
    /**
     * objectToDataSet
     * @param {Object} - obj
     * @param {HTMLElement} - dom
     */
    objectToDataSet(obj: object, dom: HTMLElement): void;
    /**
     * dataSetToObj
     * @param {HTMLElement} - dom
     * @returns {Object}
     */
    dataSetToObject(dom: HTMLElement): {};
    /**
     * getPageLeft - 获取指定元素距离视口的left
     * @param {HTMLElement} - el
     * @return {SelectOptions}
     */
    getPageLeft(el: any): any;
    /**
     * getPageTop - 获取指定元素距离视口的top
     * @param {HTMLElement} - el
     * @return {SelectOptions}
     */
    getPageTop(el: any): any;
    /**
     * getPageRect - 获取元素距离视口的Rect
     * @param {HTMLElement} - el
     * @return {{top: number, left: number}}
     */
    getPageRect(el: any): {
        top: any;
        bottom: any;
        left: any;
        right: any;
    };
    /**
     * isIframeEmbed - 是否是iframe嵌入
     * @return {boolean}
     */
    isIframeEmbed(): boolean;
    /**--------------------------dom-end-------------------------**/
    /**
     * 函数节流
     */
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
};
export default _default;
