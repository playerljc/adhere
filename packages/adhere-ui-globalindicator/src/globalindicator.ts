import Resource from '@baifendian/adhere-util-resource';

const selectorPrefix: string = 'adhere-ui-globalindicator';

const MAX_ZINDEX = Resource.Dict.value.ResourceNormalMaxZIndex.value;

const handlers = new Set<HTMLElement>();

export default {
  /**
   * show - 显示一个遮罩
   * @param {HTMLElement} parent
   * @param {string} text
   * @param {number} zIndex
   * @return {HTMLElement}
   */
  show(parent: HTMLElement = document.body, text: string = '', zIndex: number = MAX_ZINDEX) {
    const el: HTMLElement = document.createElement('div');

    el.innerHTML = `
      <div class="${selectorPrefix}" style="z-index: ${zIndex || MAX_ZINDEX}">
       <span class="${selectorPrefix}-dot"><i></i><i></i><i></i><i></i></span>
       <div class="${selectorPrefix}-text">${text}</div>
      </div>`;

    const indicatorDom: HTMLElement = el.firstElementChild as HTMLElement;

    if (parent === document.body) {
      (indicatorDom as HTMLElement).style.position = 'fixed';
    }

    parent.appendChild(indicatorDom);

    handlers.add(indicatorDom);

    return indicatorDom;
  },
  /**
   * hide - 取消一个遮罩
   * @param {HTMLElement} indicatorDom
   */
  hide(indicatorDom: HTMLElement) {
    if (indicatorDom) {
      try {
        indicatorDom?.parentElement?.removeChild?.(indicatorDom);
        handlers.delete(indicatorDom);
      } catch (e) {}
    }
  },
  /**
   * hideAll - 隐藏所有遮罩
   */
  hideAll() {
    const values = Array.from(handlers.values());

    values.forEach((el) => {
      try {
        el?.parentElement?.removeChild?.(el);
      } catch (e) {}
    });

    handlers.clear();
  },
};
