/**
 * DOM 工具类
 * @description 提供 DOM 操作相关的工具函数
 */
declare const DomUtil: {
    /**--------------------------dom-start-------------------------**/
    /**
     * 检查节点是否为文本节点
     * @param el - 要检查的节点
     * @returns 如果是文本节点返回 true，否则返回 false
     * @example
     * ```typescript
     * isTextNode(document.createTextNode('hello')) // true
     * isTextNode(document.createElement('div')) // false
     * ```
     */
    isTextNode(el: Node): boolean;
    /**
     * 检查节点是否为注释节点
     * @param el - 要检查的节点
     * @returns 如果是注释节点返回 true，否则返回 false
     * @example
     * ```typescript
     * isCommentNode(document.createComment('comment')) // true
     * isCommentNode(document.createElement('div')) // false
     * ```
     */
    isCommentNode(el: Node): boolean;
    /**
     * 检查节点是否为元素节点
     * @param el - 要检查的节点
     * @returns 如果是元素节点返回 true，否则返回 false
     * @example
     * ```typescript
     * isElementNode(document.createElement('div')) // true
     * isElementNode(document.createTextNode('hello')) // false
     * ```
     */
    isElementNode(el: Node): boolean;
    /**
     * 根据 HTML 字符串创建 DOM 元素
     * @description 将 HTML 字符串转换为 DOM 元素
     * @param htmlStr - HTML 字符串
     * @returns 创建的 DOM 元素
     * @example
     * ```typescript
     * createElement('<div class="test">Hello</div>') // 返回 div 元素
     * ```
     */
    createElement(htmlStr: string): HTMLElement;
    /**
     * 向上查找包含指定选择器的父元素
     * @description 从指定元素开始向上查找包含指定类名的父元素
     * @param source - 开始查找的元素
     * @param selector - 选择器，可以是字符串或字符串数组
     * @returns 找到的父元素，如果没找到返回 null
     * @example
     * ```typescript
     * getTopDom(element, 'container') // 查找包含 container 类的父元素
     * getTopDom(element, ['container', 'wrapper']) // 查找同时包含两个类的父元素
     * ```
     */
    getTopDom(source: HTMLElement, selector: string | string[]): HTMLElement | null;
    /**
     * 注册事件监听器
     * @description 为元素注册事件监听器，支持事件管理
     * @param el - 要注册事件的元素
     * @param tag - 事件标签，用于分组管理
     * @param type - 事件类型
     * @param handler - 事件处理函数
     * @param capture - 是否在捕获阶段触发，默认为 false
     * @example
     * ```typescript
     * on(element, 'click', 'click', () => console.log('clicked'), false)
     * ```
     */
    on(el: HTMLElement, tag: string, type: string, handler: EventListener, capture?: boolean): void;
    /**
     * 移除事件监听器
     * @description 移除元素的事件监听器
     * @param el - 要移除事件的元素
     * @param tag - 事件标签
     * @param type - 事件类型
     * @param handler - 事件处理函数，可选
     * @example
     * ```typescript
     * off(element, 'click', 'click', handler) // 移除特定处理函数
     * off(element, 'click', 'click') // 移除所有 click 事件
     * off(element, 'click') // 移除所有 click 标签的事件
     * ```
     */
    off(el: HTMLElement, tag: string, type: string, handler?: EventListener): void;
    /**
     * 为元素添加 CSS 类
     * @param el - 要添加类的元素
     * @param classes - CSS 类名，多个类名用空格分隔
     * @example
     * ```typescript
     * addClass(element, 'active') // 添加单个类
     * addClass(element, 'active highlight') // 添加多个类
     * ```
     */
    addClass(el: HTMLElement, classes?: string): void;
    /**
     * 从元素移除 CSS 类
     * @param el - 要移除类的元素
     * @param classes - CSS 类名，多个类名用空格分隔
     * @example
     * ```typescript
     * removeClass(element, 'active') // 移除单个类
     * removeClass(element, 'active highlight') // 移除多个类
     * ```
     */
    removeClass(el: HTMLElement, classes?: string): void;
    /**
     * 检查元素是否包含指定的 CSS 类
     * @param el - 要检查的元素
     * @param className - CSS 类名
     * @returns 如果包含该类返回 true，否则返回 false
     * @example
     * ```typescript
     * hasClass(element, 'active') // 检查是否包含 active 类
     * ```
     */
    hasClass(el: HTMLElement, className: string): boolean;
    /**
     * 在目标元素后插入新元素
     * @description DOM 没有提供 insertAfter() 方法，这是自定义实现
     * @param newElement - 要插入的新元素
     * @param targetElement - 目标元素
     * @example
     * ```typescript
     * insertAfter(newDiv, targetDiv) // 在 targetDiv 后插入 newDiv
     * ```
     */
    insertAfter(newElement: HTMLElement, targetElement: HTMLElement): void;
    /**
     * 在元素开头插入子元素
     * @param el - 父元素
     * @param children - 子元素，可以是字符串或 DOM 元素
     * @example
     * ```typescript
     * prepend(container, '<div>First</div>') // 插入 HTML 字符串
     * prepend(container, newElement) // 插入 DOM 元素
     * ```
     */
    prepend(el: HTMLElement, children: string | HTMLElement): void;
    /**
     * 移除元素
     * @param el - 要移除的元素
     * @example
     * ```typescript
     * remove(element) // 从 DOM 中移除元素
     * ```
     */
    remove(el: HTMLElement): void;
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
    /**
     * getTransformValues
     * @description
     * @param {HTMLElement} element
     * @return {
     *
     * }
     */
    getTransformValues(element: HTMLElement): {
        translateX: number;
        translateY: number;
        scaleX: number;
        scaleY: number;
        rotate: number;
    };
    getZoom(): number;
    /**
     * getScrollbarWidth
     * @description 获取滚动条的宽度
     * @return {number}
     */
    getScrollbarWidth(): number;
    /**
     * getMaximizedViewportSize
     * @return {{width: number; height: number}}
     */
    getMaximizedViewportSize(): {
        width: number;
        height: number;
    };
    /**
     * getProportionalSize
     * @param {number} origin 原始大小
     * @param {number} designWidth 设计稿大小
     * @param isUseDevicePixelRatio
     * @return {number}
     */
    getProportionalSize({ origin, designWidth, isUseDevicePixelRatio, }: {
        origin: number;
        designWidth: number;
        isUseDevicePixelRatio: boolean;
    }): number;
};
export default DomUtil;
