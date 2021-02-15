import Resource from '@baifendian/adhere-util-resource';

const selectorPrefix: string = 'adhere-ui-globalindicator';

const MAX_ZINDEX = Resource.Dict.value.ResourceNormalMaxZIndex.value;

export default {
  /**
   * show
   * @return {HTMLElement}
   * @param parent
   * @param text
   * @param zIndex
   */
  show(parent: HTMLElement = document.body, text: string = '', zIndex: number = MAX_ZINDEX) {
    const el: HTMLElement = document.createElement('div');

    el.innerHTML = `
      <div class="${selectorPrefix}" style="z-index: ${zIndex || MAX_ZINDEX}">
       <span class="${selectorPrefix}-dot"><i></i><i></i><i></i><i></i></span>
       <div class="${selectorPrefix}-text">${text}</div>
      </div>`;

    const indicatorDom: Element | null = el.firstElementChild;

    if (parent === document.body) {
      (indicatorDom as HTMLElement).style.position = 'fixed';
    }

    // @ts-ignore
    parent.appendChild(indicatorDom);

    return indicatorDom;
  },
  /**
   * hide
   * @param indicatorDom
   */
  hide(indicatorDom: HTMLElement) {
    if (indicatorDom) {
      // @ts-ignore
      indicatorDom.parentElement.removeChild(indicatorDom);
    }
  },
};
