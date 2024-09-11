import { Spinner } from 'spin.js';

import Resource from '@baifendian/adhere-util-resource';

import type { GlobalIndicator, Size } from './types';

const selectorPrefix: string = 'adhere-ui-global-indicator';

const MAX_ZINDEX = Resource.Dict.value.ResourceNormalMaxZIndex.value;

const handlers = new Set<HTMLElement>();

const GlobalIndicatorComponent: GlobalIndicator = {
  /**
   * show - 显示一个遮罩
   * @param {HTMLElement} parent
   * @param {string} text
   * @param {number} zIndex
   * @param size
   * @return {HTMLElement}
   */
  show(
    parent: HTMLElement = document.body,
    text: string = '',
    zIndex: number = MAX_ZINDEX,
    size: Size = 'default',
  ) {
    const el: HTMLElement = document.createElement('div');

    el.innerHTML = `
      <div class="${selectorPrefix}" style="z-index: ${zIndex || MAX_ZINDEX}">
       <span class="${selectorPrefix}-dot"></span>
       ${text && `<div class="${selectorPrefix}-text">${text}</div>`}
      </div>`;

    const indicatorDom: HTMLElement = el.firstElementChild as HTMLElement;

    const dotDom = indicatorDom.querySelector(`.${selectorPrefix}-dot`);

    const scaleMap = new Map([
      ['small', 0.1],
      ['default', 0.2],
      ['large', 0.3],
    ]);

    const scale = scaleMap.get(size);

    const color = document.documentElement.style.getPropertyValue(`--adhere-color-primary`);

    new Spinner({
      lines: 4, // The number of lines to draw
      length: 0, // The length of each line
      width: 52, // The line thickness
      radius: 29, // The radius of the inner circle
      scale, // Scales overall size of the spinner
      corners: 1, // Corner roundness (0..1)
      speed: 2.1, // Rounds per second
      rotate: 19, // The rotation offset
      animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
      direction: 1, // 1: clockwise, -1: counterclockwise
      color, // CSS color or array of colors
      fadeColor: 'transparent', // CSS color or array of colors
      top: '46%', // Top position relative to parent
      left: '50%', // Left position relative to parent
      shadow: '0 0 1px transparent', // Box-shadow for the lines
      zIndex, // The z-index (defaults to 2e9)
      className: `${selectorPrefix}-spinner`, // The CSS class to assign to the spinner
      position: 'absolute', // Element positioning
    }).spin(dotDom as HTMLElement);

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

export default GlobalIndicatorComponent;
