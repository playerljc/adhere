const eventListenerHandlers = new Map();

export default {
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
    return <HTMLElement>el.firstElementChild;
  },
  /**
   * getTopDom - 已target为开始向上查找元素
   * @param {HtmlElement} target
   * @param {string} selector
   * @return {HtmlElement}
   */
  getTopDom(target, selector: string): null | HTMLElement {
    if (!target || !selector) return null;

    if (target.className.indexOf(selector) !== -1) {
      return target;
    }

    let parentDom = target;
    while ((parentDom = parentDom.parentNode)) {
      if (parentDom.className.indexOf(selector) !== -1) {
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
  off(el: Element, tag: string, type: string, handler: Function) {
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
   * @param {HTMLElement} - el
   * @param {HTMLElement | String} - children
   */
  prepend(el, children) {
    let childrenEl;
    if (children instanceof String) {
      // @ts-ignore
      childrenEl = this.createElement(children);
    } else {
      childrenEl = children;
    }

    const firstEl = el.firstChild;
    el.insertBefore(childrenEl, firstEl);
  },
  /**
   * remove
   * @param {HTMLElement} - el
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
   * @param {Object} - obj
   * @param {HTMLElement} - dom
   */
  objectToDataSet(obj: object, dom: HTMLElement) {
    for (const p in obj) {
      dom.dataset[p] = obj[p];
    }
  },
  /**
   * dataSetToObj
   * @param {HTMLElement} - dom
   * @returns {Object}
   */
  dataSetToObject(dom: HTMLElement) {
    const obj = {};
    for (const p in dom.dataset) {
      obj[p] = dom.dataset[p];
    }
    return obj;
  },
  /**
   * getPageLeft - 获取指定元素距离视口的left
   * @param {HTMLElement} - el
   * @return {SelectOptions}
   */
  getPageLeft(el) {
    let left = el.offsetLeft;
    let offsetParent = el.offsetParent;

    do {
      // @ts-ignore
      left += offsetParent.offsetLeft;
    } while ((offsetParent = offsetParent.offsetParent));

    return left;
  },
  /**
   * getPageTop - 获取指定元素距离视口的top
   * @param {HTMLElement} - el
   * @return {SelectOptions}
   */
  getPageTop(el) {
    let top = el.offsetTop;
    let offsetParent = el.offsetParent;

    do {
      // @ts-ignore
      top += offsetParent.offsetTop;
    } while ((offsetParent = offsetParent.offsetParent));

    return top;
  },
  /**
   * getPageRect - 获取元素距离视口的Rect
   * @param {HTMLElement} - el
   * @return {{top: number, left: number}}
   */
  getPageRect(el) {
    let top = el.offsetTop;
    let left = el.offsetLeft;

    let offsetParent = el.offsetParent;

    do {
      // @ts-ignore
      top += offsetParent.offsetTop;
      // @ts-ignore
      left += offsetParent.offsetLeft;
    } while ((offsetParent = offsetParent.offsetParent));

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
    return window.top && window.top !== window;
  },
  /**--------------------------dom-end-------------------------**/
};
