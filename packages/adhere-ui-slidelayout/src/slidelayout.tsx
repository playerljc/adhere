import React from 'react';
import Overlay from './overlay';
import Push from './push';
import Revolving from './reveal';

export const selectorPrefix = 'adhere-ui-slidelayout';

/**
 * slider
 * @param el
 * @param x
 * @param y
 * @param z
 * @param time
 * @param callback
 */
export function slider(
  el: HTMLElement | null | undefined,
  x: string,
  y: string,
  z: string,
  time = '0',
  callback: Function,
) {
  if (callback) {
    callback(el);
  }

  // @ts-ignore
  el.style.transform = el.style.webkitTransform = `translate3d(${x},${y},${z})`;
  // @ts-ignore
  el.style.transition = el.style.webkitTransition = `all ${time} ease`;
}

/**
 * createMask
 * @param zIndex
 * @param closeCallback
 */
export function createMask(zIndex: number | string, closeCallback: Function): HTMLElement {
  const el = document.createElement('div');

  el.innerHTML = `<div class='${selectorPrefix}-mask'></div>`;

  const maskEl = el.firstElementChild;

  // @ts-ignore
  maskEl.style.zIndex = zIndex - 1;

  // @ts-ignore
  maskEl.addEventListener('click', () => {
    closeCallback();
  });

  return maskEl as HTMLElement;
}

export default {
  Overlay,
  Push,
  Revolving,
};
