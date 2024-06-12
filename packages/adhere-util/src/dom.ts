import ClientDetectionUtil from './clientDetection';

const eventListenerHandlers = new Map();

const DomUtil = {
  /**--------------------------dom-start-------------------------**/
  /**
   * isTextNode - 是否是文本节点
   * @param el - Node
   * @return {boolean}
   */
  isTextNode(el: Node): boolean {
    return el.nodeType === Node.TEXT_NODE;
  },
  /**
   * isCommentNode - 是否是注释节点
   * @param el
   * @return {boolean}
   */
  isCommentNode(el: Node): boolean {
    return el.nodeType === Node.COMMENT_NODE;
  },
  /**
   * isElementNode - 是否是元素节点
   * @param el - Element
   * @return {boolean}
   */
  isElementNode(el: Node): boolean {
    return el.nodeType === Node.ELEMENT_NODE;
  },
  /**
   * createElement - 根据html字符串创建dom
   * @param htmlStr - string
   * @return {Element}
   */
  createElement(htmlStr: string): HTMLElement {
    const el = document.createElement('div');
    el.innerHTML = htmlStr;
    return el.firstElementChild as HTMLElement;
  },
  /**
   * getTopDom - 已source为开始向上查找元素
   * @param {HtmlElement} source
   * @param {string | string[]} selector
   * @return {HtmlElement}
   */
  getTopDom(source: HTMLElement, selector: string | string[]): HTMLElement | null {
    if (!source || !selector || (Array.isArray(selector) && !selector.length)) return null;

    const classNames = typeof selector === 'string' ? [selector] : selector;

    if (classNames.every((name) => source.classList.contains(name))) {
      return source;
    }

    let parentDom: HTMLElement | null = source;
    while ((parentDom = parentDom?.parentElement)) {
      if (classNames.every((name) => parentDom?.classList?.contains?.(name))) {
        break;
      } else if (parentDom === document.body) break;
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
   * on - 注册事件
   * @param el
   * @param tag
   * @param type
   * @param handler
   * @param capture
   */
  on(el, tag: string, type: string, handler: Function, capture: boolean = false) {
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
   * off
   * @param el
   * @param tag
   * @param type
   * @param handler
   */
  off(el: HTMLElement, tag: string, type: string, handler: Function) {
    if (tag && type && handler) {
      const value = eventListenerHandlers.get(el);
      if (value && value[tag] && value[tag][type]) {
        const index = value[tag][type].indexOf(handler);
        if (index !== -1) {
          value[tag][type].splice(index, 1);
        }
        // @ts-ignore
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
   * addClass
   * @param {HTMLElement} el
   * @param {String} classes
   */
  addClass(el, classes: string = '') {
    const classNames = classes.split(' ');
    for (let i = 0; i < classNames.length; i++) {
      el.classList.add(classNames[i]);
    }
  },
  /**
   * removeClass
   * @param {HTMLElement} el
   * @param {String} classes
   */
  removeClass(el, classes: string = '') {
    const classNames = classes.split(' ');
    for (let i = 0; i < classNames.length; i++) {
      el.classList.remove(classNames[i]);
    }
  },
  /**
   * hasClass
   * @param {HTMLElement} el
   * @param {String} className
   * @return {Boolean}
   */
  hasClass(el, className: string): boolean {
    return el.classList.contains(className);
  },
  /**
   * DOM没有提供insertAfter()方法
   * @param {HtmlElement} newElement
   * @param {HtmlElement} targetElement
   */
  insertAfter(newElement, targetElement) {
    const parent = targetElement.parentNode;
    if (parent.lastChild === targetElement) {
      // 如果最后的节点是目标元素，则直接添加。因为默认是最后
      parent.appendChild(newElement);
    } else {
      parent.insertBefore(newElement, targetElement.nextSibling);
      // 如果不是，则插入在目标元素的下一个兄弟节点 的前面。也就是目标元素的后面
    }
  },
  /**
   * prepend
   * @param el
   * @param children
   */
  prepend(el, children) {
    let childrenEl;
    if (children instanceof String) {
      childrenEl = DomUtil.createElement(children as string);
    } else {
      childrenEl = children;
    }

    const firstEl = el.firstChild;
    el.insertBefore(childrenEl, firstEl);
  },
  /**
   * remove
   * @param el
   */
  remove(el) {
    el.parentNode.removeChild(el);
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
    if (selection && selection?.rangeCount > 0) {
      const range = selection?.getRangeAt?.(0);
      const preSelectionRange = range?.cloneRange?.();
      preSelectionRange?.selectNodeContents(range?.startContainer);
      preSelectionRange?.setEnd(range?.startContainer, range?.startOffset);
      return preSelectionRange?.toString?.()?.length;
    }
    return -1;
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
  /**--------------------------dom-end-------------------------**/
};

export default DomUtil;
