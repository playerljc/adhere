declare const DomUtil: {
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
     * getTopDom - 已source为开始向上查找元素
     * @param {HtmlElement} source
     * @param {string | string[]} selector
     * @return {HtmlElement}
     */
    getTopDom(source: HTMLElement, selector: string | string[]): HTMLElement | null;
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
    off(el: HTMLElement, tag: string, type: string, handler: Function): void;
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
     * @param el
     * @param children
     */
    prepend(el: any, children: any): void;
    /**
     * remove
     * @param el
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
     * @param obj
     * @param dom
     */
    objectToDataSet(obj: object, dom: HTMLElement): void;
    /**
     * dataSetToObj
     * @returns {Object}
     * @param dom
     */
    dataSetToObject(dom: HTMLElement): object;
    /**
     * getPageLeft - 获取指定元素距离视口的left
     * @return {SelectOptions}
     * @param el
     */
    getPageLeft(el: HTMLElement): number;
    /**
     * getPageTop - 获取指定元素距离视口的top
     * @return {SelectOptions}
     * @param el
     */
    getPageTop(el: HTMLElement): number;
    /**
     * getPageRect - 获取元素距离视口的Rect
     * @return {{top: number, left: number}}
     * @param el
     */
    getPageRect(el: HTMLElement): {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    /**
     * getLeftUntil
     * @description - 获取left直到untilEl
     * @param el
     * @param untilEl
     */
    getLeftUntil({ el, untilEl }: {
        el: HTMLElement;
        untilEl: HTMLElement;
    }): number;
    /**
     * getTopUntil
     * @description - 获取top直到untilEl
     * @param el
     * @param untilEl
     */
    getTopUntil({ el, untilEl }: {
        el: HTMLElement;
        untilEl: HTMLElement;
    }): number;
    /**
     * getRectUntil
     * @description - 获取Rect直到untilEl
     * @param el
     * @param untilEl
     */
    getRectUntil({ el, untilEl }: {
        el: HTMLElement;
        untilEl: HTMLElement;
    }): {
        top: number;
        left: number;
        right: number;
        bottom: number;
    };
    /**
     * isIframeEmbed - 是否是iframe嵌入
     * @return {boolean}
     */
    isIframeEmbed(): boolean | null;
    /**
     * addClickListener - 支持PC和移动端的点击事件
     * @param el
     * @param handler
     * @param capture
     */
    addClickListener: (el: HTMLElement, handler: (e: any) => {}, capture?: boolean) => Function;
    /**
     * clickInRange
     * @description 再点击区域内执行点击操作，超出的区域执行bodyClickHandler的操作
     * @param params
     * @return Function
     */
    clickInRange(params: {
        el: HTMLElement;
        rootEl: HTMLElement;
        bodyClickHandler?: Function;
    }): Function;
    /**
     * includeHTML
     * @description 使用ajax方式引入html
     * @param {string} attr 属性
     * @param {string} onLoadError
     */
    includeHTML(attr: string | undefined, onLoadError: () => string): Promise<string>;
    /**
     * setCursorToEnd
     * @description 将光标设置到内容末尾
     * @param {HTMLElement} element
     */
    setCursorToEnd(element: HTMLElement): void;
    /**
     * setCursorPositionToNode
     * @description 设置Node的光标位置
     * @param {Node} node
     * @param {number} offset
     */
    setCursorPositionToNode(node: Node, offset: number): void;
    /**
     * setCursorPosition
     * @description 设置光标的位置
     * @param {HTMLElement} element
     * @param {number} offset
     */
    setCursorPosition(element: HTMLElement, offset: number): void;
    /**
     * getCurrentElementWithCursor
     * @description 获取光标输入的的element
     * @return {Node | null}
     */
    getCurrentElementWithCursor(): Node | null;
    /**
     * getCurrentParentElementWithCursor
     * @description 获取光标输入的parentElement
     * @return {Node | null}
     */
    getCurrentParentElementWithCursor(): Node | null;
    /**
     * getCursorIndex
     * @description 获取光标的索引
     * @return {number}
     */
    getCursorIndex(): number;
    /**
     * getCursorRectByDocument
     * @description 获取光标在文档中的位置
     * @return {DOMRect | null}
     */
    getCursorRectByDocument(): DOMRect | null;
};
export default DomUtil;
