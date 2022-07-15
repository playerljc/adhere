/**
 * detectZoom - 获取浏览器缩放的级别(1为基本单位)
 * @return number
 */
function detectZoom() {
  if (typeof window === 'undefined') return;

  let ratio = 0;

  const screen = window.screen;

  const ua = navigator.userAgent.toLowerCase();

  if (window.devicePixelRatio !== undefined) {
    ratio = window.devicePixelRatio;
  } else if (~ua.indexOf('msie')) {
    if (screen.deviceXDPI && screen.logicalXDPI) {
      ratio = screen.deviceXDPI / screen.logicalXDPI;
    }
  } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
    ratio = window.outerWidth / window.innerWidth;
  }

  return ratio;
}

/**
 * AdapterScreen
 * @param el
 */
export default (el: HTMLElement = window.document.body) => {
  function onResize() {
    // 1.1 | 0.9
    // 2 | 0.5
    const ratio = detectZoom();
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

  onResize();

  window.addEventListener('resize', onResize);

  return () => {
    window.removeEventListener('reset', onResize);
  };
};
