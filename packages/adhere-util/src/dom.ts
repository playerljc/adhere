import ClientDetectionUtil from './clientDetection';

const eventListenerHandlers = new Map<
  HTMLElement,
  Record<string, Record<string, EventListener[]>>
>();

/**
 * DOM 工具类
 * @description 提供 DOM 操作相关的工具函数
 */
const DomUtil = {
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
  isTextNode(el: Node): boolean {
    return el.nodeType === Node.TEXT_NODE;
  },

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
  isCommentNode(el: Node): boolean {
    return el.nodeType === Node.COMMENT_NODE;
  },

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
  isElementNode(el: Node): boolean {
    return el.nodeType === Node.ELEMENT_NODE;
  },

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
  createElement(htmlStr: string): HTMLElement {
    if (!htmlStr) {
      return document.createElement('div');
    }

    const el = document.createElement('div');
    el.innerHTML = htmlStr;
    return el.firstElementChild as HTMLElement;
  },

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
  getTopDom(source: HTMLElement, selector: string | string[]): HTMLElement | null {
    if (!source || !selector || (Array.isArray(selector) && !selector.length)) {
      return null;
    }

    const classNames = typeof selector === 'string' ? [selector] : selector;

    if (classNames.every((name) => source.classList.contains(name))) {
      return source;
    }

    let parentDom: HTMLElement | null = source;
    while ((parentDom = parentDom?.parentElement)) {
      if (classNames.every((name) => parentDom?.classList?.contains?.(name))) {
        break;
      } else if (parentDom === document.body) {
        break;
      }
    }

    if (parentDom) {
      if (parentDom === document.body) {
        return null;
      } else {
        return parentDom;
      }
    } else {
      return null;
    }
  },

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
  on(
    el: HTMLElement,
    tag: string,
    type: string,
    handler: EventListener,
    capture: boolean = false,
  ): void {
    let value = eventListenerHandlers.get(el);
    if (!value) {
      value = {
        [tag]: {
          [type]: [],
        },
      };
      eventListenerHandlers.set(el, value);
    }

    let evtObj = value[tag];
    if (!evtObj) {
      evtObj = {
        [type]: [],
      };
      value[tag] = evtObj;
    }

    let handlers = evtObj[type];
    if (!handlers) {
      handlers = [];
      evtObj[type] = handlers;
    }

    handlers.push(handler);
    el.addEventListener(type, handler, capture);
  },

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
  off(el: HTMLElement, tag: string, type: string, handler?: EventListener): void {
    if (tag && type && handler) {
      const value = eventListenerHandlers.get(el);
      if (value && value[tag] && value[tag][type]) {
        const index = value[tag][type].indexOf(handler);
        if (index !== -1) {
          value[tag][type].splice(index, 1);
        }
        el.removeEventListener(type, handler);
      }
    } else if (tag && type && !handler) {
      const value = eventListenerHandlers.get(el);
      if (value && value[tag] && value[tag][type]) {
        value[tag][type].forEach((h) => {
          el.removeEventListener(type, h);
        });
        value[tag][type] = [];
      }
    } else if (tag && !type && !handler) {
      const value = eventListenerHandlers.get(el);
      if (value && value[tag]) {
        for (const t in value[tag]) {
          const h = value[tag][t];
          h.forEach((ih) => {
            el.removeEventListener(t, ih);
          });
          value[tag][t] = [];
        }
      }
    }
  },

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
  addClass(el: HTMLElement, classes: string = ''): void {
    if (!classes) return;

    const classNames = classes.split(' ');
    for (let i = 0; i < classNames.length; i++) {
      if (classNames[i]) {
        el.classList.add(classNames[i]);
      }
    }
  },

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
  removeClass(el: HTMLElement, classes: string = ''): void {
    if (!classes) return;

    const classNames = classes.split(' ');
    for (let i = 0; i < classNames.length; i++) {
      if (classNames[i]) {
        el.classList.remove(classNames[i]);
      }
    }
  },

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
  hasClass(el: HTMLElement, className: string): boolean {
    return el.classList.contains(className);
  },

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
  insertAfter(newElement: HTMLElement, targetElement: HTMLElement): void {
    const parent = targetElement.parentNode;
    if (!parent) return;

    if (parent.lastChild === targetElement) {
      // 如果最后的节点是目标元素，则直接添加。因为默认是最后
      parent.appendChild(newElement);
    } else {
      parent.insertBefore(newElement, targetElement.nextSibling);
      // 如果不是，则插入在目标元素的下一个兄弟节点 的前面。也就是目标元素的后面
    }
  },

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
  prepend(el: HTMLElement, children: string | HTMLElement): void {
    let childrenEl: HTMLElement;
    if (typeof children === 'string') {
      childrenEl = DomUtil.createElement(children);
    } else {
      childrenEl = children;
    }

    const firstEl = el.firstChild;
    el.insertBefore(childrenEl, firstEl);
  },

  /**
   * 移除元素
   * @param el - 要移除的元素
   * @example
   * ```typescript
   * remove(element) // 从 DOM 中移除元素
   * ```
   */
  remove(el: HTMLElement): void {
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  },
  /**
   * getParentElementByTag
   * @param {HtmlElement} el
   * @param {string} tag
   * @return {HtmlElement}
   */
  getParentElementByTag(el, tag: string): HTMLElement | null {
    if (!tag) return null;
    let element;
    let parent = el;
    const popup = () => {
      parent = parent.parentElement;
      if (!parent) return null;
      const tagParent = parent.tagName.toLocaleLowerCase();
      if (tagParent === tag) {
        element = parent;
      } else if (tagParent === 'body') {
        element = null;
      } else {
        popup();
      }
    };

    popup();
    return element;
  },
  /**
   * children
   * @param {HTMLElement} el
   * @param {string} selector
   */
  children(el, selector: string) {
    const elements = Array.prototype.filter.call(el.children, (t) => {
      return t.nodeType === 1;
    });

    return elements.filter((t) => {
      return t.classList.contains(selector);
    });
  },
  /**
   * isTouch
   * @return {boolean}
   */
  isTouch(): boolean {
    return 'ontouchend' in document;
  },
  /**
   * objectToDataSet
   * @param obj
   * @param dom
   */
  objectToDataSet(obj: object, dom: HTMLElement): void {
    for (const p in obj) {
      dom.dataset[p] = obj[p];
    }
  },
  /**
   * dataSetToObj
   * @returns {Object}
   * @param dom
   */
  dataSetToObject(dom: HTMLElement): object {
    const obj = {};
    for (const p in dom.dataset) {
      obj[p] = dom.dataset[p];
    }
    return obj;
  },
  /**
   * getPageLeft - 获取指定元素距离视口的left
   * @return {SelectOptions}
   * @param el
   */
  getPageLeft(el: HTMLElement): number {
    let left = el.offsetLeft;

    let offsetParent: HTMLElement = el.offsetParent as HTMLElement;

    do {
      left += offsetParent.offsetLeft;
    } while (!!(offsetParent = offsetParent.offsetParent as HTMLElement));

    return left;
  },
  /**
   * getPageTop - 获取指定元素距离视口的top
   * @return {SelectOptions}
   * @param el
   */
  getPageTop(el: HTMLElement): number {
    let top = el.offsetTop;

    let offsetParent: HTMLElement = el.offsetParent as HTMLElement;

    do {
      top += offsetParent.offsetTop;
    } while (!!(offsetParent = offsetParent.offsetParent as HTMLElement));

    return top;
  },
  /**
   * getPageRect - 获取元素距离视口的Rect
   * @return {{top: number, left: number}}
   * @param el
   */
  getPageRect(el: HTMLElement): { top: number; bottom: number; left: number; right: number } {
    let top = el.offsetTop;
    let left = el.offsetLeft;

    let offsetParent: HTMLElement = el.offsetParent as HTMLElement;

    do {
      top += offsetParent.offsetTop;
      left += offsetParent.offsetLeft;
    } while (!!(offsetParent = offsetParent.offsetParent as HTMLElement));

    return {
      top,
      bottom: top + el.offsetHeight,
      left,
      right: left + el.offsetWidth,
    };
  },
  /**
   * getLeftUntil
   * @description - 获取left直到untilEl
   * @param el
   * @param untilEl
   */
  getLeftUntil({ el, untilEl }: { el: HTMLElement; untilEl: HTMLElement }): number {
    let left = el.offsetLeft;
    let offsetParent: HTMLElement = el.offsetParent as HTMLElement;

    while (untilEl !== offsetParent) {
      left += offsetParent.offsetLeft;
      offsetParent = offsetParent.offsetParent as HTMLElement;
    }

    return left;
  },
  /**
   * getTopUntil
   * @description - 获取top直到untilEl
   * @param el
   * @param untilEl
   */
  getTopUntil({ el, untilEl }: { el: HTMLElement; untilEl: HTMLElement }): number {
    let top = el.offsetTop;
    let offsetParent: HTMLElement = el.offsetParent as HTMLElement;

    while (untilEl !== offsetParent) {
      top += offsetParent.offsetTop;
      offsetParent = offsetParent.offsetParent as HTMLElement;
    }

    return top;
  },
  /**
   * getRectUntil
   * @description - 获取Rect直到untilEl
   * @param el
   * @param untilEl
   */
  getRectUntil({ el, untilEl }: { el: HTMLElement; untilEl: HTMLElement }): {
    top: number;
    left: number;
    right: number;
    bottom: number;
  } {
    let top = el.offsetTop;
    let left = el.offsetLeft;

    let offsetParent: HTMLElement = el.offsetParent as HTMLElement;

    while (untilEl !== offsetParent) {
      top += offsetParent.offsetTop;
      left += offsetParent.offsetLeft;
      offsetParent = offsetParent.offsetParent as HTMLElement;
    }

    return {
      top,
      bottom: top + el.offsetHeight,
      left,
      right: left + el.offsetWidth,
    };
  },
  /**
   * isIframeEmbed - 是否是iframe嵌入
   * @return {boolean}
   */
  isIframeEmbed() {
    return typeof window === 'undefined' ? false : window.top && window.top !== window;
  },
  /**
   * addClickListener - 支持PC和移动端的点击事件
   * @param el
   * @param handler
   * @param capture
   */
  addClickListener: (() => {
    return function (el: HTMLElement, handler: (e) => {}, capture?: boolean): Function {
      let isStart = false;
      let isMove = false;
      let startTime = 0;
      let endTime = 0;

      const handlers = Array<{ type: string; handler: Function }>();

      // 如果是移动端浏览器
      if (ClientDetectionUtil.isTouch()) {
        const touchStartHandler = () => {
          isStart = true;
          startTime = new Date().getTime();
        };

        const touchMoveHandler = () => {
          isMove = true;
        };

        const touchEndHandler = (e) => {
          endTime = new Date().getTime();

          const step = endTime - startTime;

          if ((isStart && !isMove) || (isStart && isMove && step <= 200) /*事件少于200ms*/) {
            // 命中
            handler(e);
          }
        };

        handlers.push({
          type: 'touchstart',
          handler: touchStartHandler,
        });
        handlers.push({
          type: 'touchmove',
          handler: touchMoveHandler,
        });
        handlers.push({
          type: 'touchend',
          handler: touchEndHandler,
        });

        el.addEventListener('touchstart', touchStartHandler, capture || false);

        el.addEventListener('touchmove', touchMoveHandler, capture || false);

        el.addEventListener('touchend', touchEndHandler, capture || false);
      }
      // 是PC端浏览器
      else {
        const clickHandler = (e) => {
          handler(e);
        };

        handlers.push({
          type: 'click',
          handler: clickHandler,
        });

        el.addEventListener('click', clickHandler, capture || false);
      }

      return () => {
        handlers.forEach(({ type, handler }) => {
          // @ts-ignore
          el.removeEventListener(type, handler);
        });
      };
    };
  })(),
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
  }): Function {
    function onRootClick(e) {
      e.stopPropagation();
    }

    function onBodyClickHandler() {
      if (params.bodyClickHandler) {
        params.bodyClickHandler();
      }
    }

    params.rootEl.addEventListener('click', onRootClick);

    document.body.addEventListener('click', onBodyClickHandler);

    return () => {
      params.rootEl.removeEventListener('click', onRootClick);
      document.body.removeEventListener('click', onBodyClickHandler);
    };
  },
  /**
   * includeHTML
   * @description 使用ajax方式引入html
   * @param {string} attr 属性
   * @param {string} onLoadError
   */
  includeHTML(attr: string = 'w3-include-html', onLoadError: () => string) {
    return new Promise<string>((contextResolve) => {
      const defaultAttr = 'w3-include-html';

      function load(el, file) {
        return new Promise<string>((_resolve, _reject) => {
          const xhr = new XMLHttpRequest();

          xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
              if (this.status == 200) {
                el.innerHTML = this.responseText;
                _resolve('');
              }
              if (this.status == 404) {
                el.innerHTML = onLoadError?.() ?? 'Page not found.';
                _reject('');
              }
              el.removeAttribute(attr ?? defaultAttr);
            }
          };
          xhr.open('GET', file, true);
          xhr.send();
        });
      }

      const loop = (_attr, _onLoadError) => {
        const allEls = document.querySelectorAll(`[${attr ?? defaultAttr}]`);

        if (!allEls.length) {
          contextResolve('');
          return;
        }

        const tasks: Promise<string>[] = [];

        for (let i = 0; i < allEls.length; i++) {
          const el = allEls[i];

          const file = el.getAttribute(attr ?? defaultAttr);

          tasks.push(load(el, file));
        }

        if (tasks.length) {
          Promise.all(tasks).then(() => {
            loop(_attr, _onLoadError);
          });
        }
      };

      loop(attr, onLoadError);
    });
  },
  /**
   * setCursorToEnd
   * @description 将光标设置到内容末尾
   * @param {HTMLElement} element
   */
  setCursorToEnd(element: HTMLElement) {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(element);
    range.collapse(false); // 将光标设置到末尾
    selection?.removeAllRanges?.();
    selection?.addRange?.(range);
  },
  /**
   * setCursorPositionToNode
   * @description 设置Node的光标位置
   * @param {Node} node
   * @param {number} offset
   */
  setCursorPositionToNode(node: Node, offset: number) {
    const range = document.createRange();
    range?.setStart?.(node, offset);
    range?.collapse?.(true);

    const sel = window.getSelection();
    sel?.removeAllRanges?.();
    sel?.addRange?.(range);
  },
  /**
   * setCursorPosition
   * @description 设置光标的位置
   * @param {HTMLElement} element
   * @param {number} offset
   */
  setCursorPosition(element: HTMLElement, offset: number) {
    const range = document.createRange();
    range.setStart(element.childNodes[0], offset);
    range.collapse(true);

    const sel = window.getSelection();
    sel?.removeAllRanges?.();
    sel?.addRange?.(range);
  },
  /**
   * getCurrentElementWithCursor
   * @description 获取光标输入的的element
   * @return {Node | null}
   */
  getCurrentElementWithCursor(): Node | null {
    const selection = window.getSelection();
    if (selection && selection?.rangeCount > 0) {
      const range = selection?.getRangeAt?.(0);
      return range?.startContainer /*.parentElement*/;
    }
    return null;
  },
  /**
   * getCurrentParentElementWithCursor
   * @description 获取光标输入的parentElement
   * @return {Node | null}
   */
  getCurrentParentElementWithCursor(): Node | null {
    const currentElement = DomUtil.getCurrentElementWithCursor();
    if (currentElement) {
      return currentElement.parentElement;
    }

    return null;
  },
  /**
   * getCursorIndex
   * @description 获取光标的索引
   * @return {number}
   */
  getCursorIndex(): number {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      return -1;
    }

    const range = selection.getRangeAt(0);
    const { startContainer, startOffset } = range;

    // 如果 startContainer 是文本节点，直接计算偏移量
    if (startContainer.nodeType === Node.TEXT_NODE) {
      return startOffset;
    }

    // 如果是元素节点，计算前面所有兄弟节点的文本总长度
    let cursorIndex = 0;
    const nodeIterator = document.createNodeIterator(startContainer, NodeFilter.SHOW_TEXT);

    let currentNode: Node | null;
    while ((currentNode = nodeIterator.nextNode())) {
      if (currentNode === startContainer) {
        cursorIndex += startOffset;
        break;
      }
      cursorIndex += currentNode.textContent?.length || 0;
    }

    return cursorIndex;
  },
  /**
   * getCursorRectByDocument
   * @description 获取光标在文档中的位置
   * @return {DOMRect | null}
   */
  getCursorRectByDocument(): DOMRect | null {
    if (window.getSelection) {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        return range?.getBoundingClientRect?.();
      }
    }

    return null;
  },
  /**
   * getTransformValues
   * @description
   * @param {HTMLElement} element
   * @return {
   *
   * }
   */
  getTransformValues(element: HTMLElement) {
    const style = window.getComputedStyle(element);
    const transform = style.transform;

    // 矩阵解析
    const mat = transform.match(/^matrix\((.+)\)$/);
    if (mat) {
      const values = mat[1].split(', ').map(parseFloat);
      return {
        translateX: values[4],
        translateY: values[5],
        scaleX: Math.sqrt(values[0] * values[0] + values[1] * values[1]),
        scaleY: Math.sqrt(values[2] * values[2] + values[3] * values[3]),
        rotate: Math.atan2(values[1], values[0]) * (180 / Math.PI),
        // 这里的旋转角度是以度数返回的
      };
    }
    // 如果没有应用 transform 或格式不是 matrix，可以返回一个默认或空对象
    return {
      translateX: 0,
      translateY: 0,
      scaleX: 1,
      scaleY: 1,
      rotate: 0,
    };
  },
  getZoom() {
    let ratio = window.devicePixelRatio;

    if (ratio) {
      ratio = Math.round(ratio * 100);
    }

    return 100 / Number(ratio);
  },
  /**
   * getScrollbarWidth
   * @description 获取滚动条的宽度
   * @return {number}
   */
  getScrollbarWidth(): number {
    // Create a temporary div container and append it into the body
    const container = document.createElement('div');
    // Force scrollbars
    container.style.overflow = 'scroll';
    container.style.visibility = 'hidden';
    container.style.position = 'absolute';
    container.style.top = '-9999px';
    document.body.appendChild(container);

    // Create a temporary inner element and append it into the container
    const inner = document.createElement('div');
    container.appendChild(inner);

    // Calculate the scrollbar width
    const scrollbarWidth = container.offsetWidth - inner.offsetWidth;

    // Remove the temporary elements from the DOM
    document.body.removeChild(container);

    return scrollbarWidth;
  },
  /**
   * getMaximizedViewportSize
   * @return {{width: number; height: number}}
   */
  getMaximizedViewportSize(): { width: number; height: number } {
    // 获取当前窗口的视口宽度和高度
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;

    // 获取当前窗口的外部宽度和高度
    const outerWidth = window.outerWidth;
    const outerHeight = window.outerHeight;

    // 获取可用屏幕宽度和高度
    const availWidth = screen.availWidth;
    const availHeight = screen.availHeight;

    // 计算窗口边框、标题栏等非视口部分的宽度和高度
    const borderWidth = outerWidth - currentWidth;
    const borderHeight = outerHeight - currentHeight;

    // 计算最大化窗口的视口宽度和高度
    const maximizedWidth = availWidth - borderWidth;
    const maximizedHeight = availHeight - borderHeight;

    return {
      width: maximizedWidth,
      height: maximizedHeight,
    };
  },
  /**
   * getProportionalSize
   * @param {number} origin 原始大小
   * @param {number} designWidth 设计稿大小
   * @param isUseDevicePixelRatio
   * @return {number}
   */
  getProportionalSize({
    origin,
    designWidth = 1920,
    isUseDevicePixelRatio = true,
  }: {
    origin: number;
    designWidth: number;
    isUseDevicePixelRatio: boolean;
  }): number {
    let currentWidth = document.documentElement.clientWidth;
    if (isUseDevicePixelRatio) {
      currentWidth = currentWidth * window.devicePixelRatio;
    }
    return (currentWidth * origin) / designWidth;
  },
  /**--------------------------dom-end-------------------------**/
};

export default DomUtil;
