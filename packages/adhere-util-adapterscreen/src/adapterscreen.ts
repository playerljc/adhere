import debounce from 'lodash.debounce';

import BrowserSniff from '@baifendian/adhere-util-browsersniff';

/**
 * detectZoom - 获取浏览器缩放的级别(1为基本单位)
 * @return number
 */
function detectZoom() {
  if (typeof window === 'undefined') return;

  let ratio = 0;

  const screen = window.screen;

  // 返回当前显示设备的物理像素分辨率与CSS 像素分辨率之比
  if ('devicePixelRatio' in window) {
    // Safari浏览器
    if (BrowserSniff.isBrowserSafari()) {
      ratio = window.outerWidth / window.innerWidth;
    } else {
      ratio = window.devicePixelRatio;
    }
  }
  // IE浏览器
  else if (BrowserSniff.isBrowserIE()) {
    if (screen['deviceXDPI'] && screen['logicalXDPI']) {
      ratio = screen['deviceXDPI'] / screen['logicalXDPI'];
    }
  }
  // 没有像素比且不是IE
  else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
    ratio = window.outerWidth / window.innerWidth;
  }

  return ratio;
}

/**
 * AdapterScreen
 * @param el
 */
export default (el: HTMLElement = window.document.body) => {
  const onResize = debounce(resize, 1000);

  function resize() {
    // 1.1 | 0.9
    // 2 | 0.5
    const ratio = detectZoom() as number;
    el.style.transformOrigin = 'left top';
    el.style.transform = `scale(${1 / ratio})`;

    if (ratio !== 1) {
      el.style.width = `${ratio * 100}%`;
      el.style.height = `${ratio * 100}%`;
    } else if (ratio === 1) {
      el.style.width = `100%`;
      el.style.height = `100%`;
    }
  }

  resize();

  window.addEventListener('resize', onResize);

  return () => {
    window.removeEventListener('reset', onResize);
  };
};
