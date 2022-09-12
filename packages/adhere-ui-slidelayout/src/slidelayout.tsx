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
  el: HTMLElement,
  x: string,
  y: string,
  z: string,
  time = '0',
  callback?: Function,
) {
  if (callback) {
    callback(el);
  }

  el.style.transform = el.style.webkitTransform = `translate3d(${x},${y},${z})`;
  el.style.transition = el.style.webkitTransition = `all ${time} ease`;
}

/**
 * createMask
 * @param zIndex
 * @param closeCallback
 */
export function createMask(zIndex: number | string, closeCallback: () => void): HTMLDivElement {
  const el = document.createElement('div');

  el.innerHTML = `<div class='${selectorPrefix}-mask'></div>`;

  const maskEl = el.firstElementChild as HTMLDivElement;

  maskEl.style.zIndex = typeof zIndex === 'number' ? `${zIndex - 1}` : zIndex;

  maskEl.addEventListener('click', () => closeCallback());

  return maskEl;
}

export default {
  Overlay,
  Push,
  Revolving,
};
