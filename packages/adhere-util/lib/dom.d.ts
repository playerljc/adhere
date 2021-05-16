declare const _default: {
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
};
export default _default;
