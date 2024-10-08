import Util from '@baifendian/adhere-util';

import { IAdapterScreen } from './type';

let currRenderDom = '';
let currentRectification = '';
let currentRectificationLevel: number = -1;
let resizeListener: (e?: any) => void = () => {};
let timer: number | undefined;
let currScale = 1;
let isAutoFitRunning = false;
let isElRectification = false;

/**
 * elRectification
 * @param {string} el
 * @param {number} level
 */
function elRectification(el: string, level = 1) {
  if (!isAutoFitRunning) {
    console.error('adapterScreen.js：adapterScreen has not been initialized yet');
  }
  !el && console.error(`adapterScreen.js：bad selector: ${el}`);
  currentRectification = el;

  currentRectificationLevel = level;

  const currEl = document.querySelectorAll<HTMLElement>(el);

  if (currEl.length == 0) {
    console.error('adapterScreen.js：elRectification found no element');
    return;
  }

  for (let item of Array.from<HTMLElement>(currEl)) {
    if (!isElRectification) {
      // @ts-ignore
      item.originalWidth = item.clientWidth;
      // @ts-ignore
      item.originalHeight = item.clientHeight;
    }
    let rectification = currScale == 1 ? 1 : currScale * level;
    // @ts-ignore
    item.style.width = `${item.originalWidth * rectification}px`;
    // @ts-ignore
    item.style.height = `${item.originalHeight * rectification}px`;
    item.style.transform = `scale(${1 / currScale})`;
    item.style.transformOrigin = `0 0`;
  }
  isElRectification = true;
}

/**
 * keepFit
 * @param {number} dw
 * @param {number} dh
 * @param {HTMLElement} dom
 * @param {any[]} ignore
 */
function keepFit(dw: number, dh: number, dom: HTMLElement, ignore: any[]) {
  let clientHeight = document.documentElement.clientHeight;
  let clientWidth = document.documentElement.clientWidth;
  currScale = clientWidth / clientHeight < dw / dh ? clientWidth / dw : clientHeight / dh;
  dom.style.height = `${clientHeight / currScale}px`;
  dom.style.width = `${clientWidth / currScale}px`;
  dom.style.transform = `scale(${currScale})`;
  for (let item of ignore) {
    const ignoreStyle = document.querySelector<HTMLElement>('#ignoreStyle');

    let itemEl = item.el || item.dom;
    if (!itemEl) {
      console.error(`adapterScreen: bad selector: ${itemEl}`);
      continue;
    }
    let realScale = item.scale ? item.scale : 1 / currScale;
    let realFontSize = realScale != currScale ? item.fontSize : 'autofit';
    let realWidth = realScale != currScale ? item.width : 'autofit';
    let realHeight = realScale != currScale ? item.height : 'autofit';
    let regex = new RegExp(`${itemEl}(\x20|{)`, 'gm');
    let isIgnored = regex.test(ignoreStyle?.innerHTML || '');
    if (isIgnored) {
      continue;
    }

    if (ignoreStyle) {
      ignoreStyle.innerHTML += `\n${itemEl} { 
        transform: scale(${realScale})!important;
        transform-origin: 0 0;
        width: ${realWidth}px!important;
        height: ${realHeight}px!important;
      }`;

      ignoreStyle.innerHTML += `\n${itemEl} div ,${itemEl} span,${itemEl} a,${itemEl} * {
        font-size: ${realFontSize}px;
        }`;
    }
  }
}

/**
 * adapterScreen
 */
const adapterScreen: IAdapterScreen = {
  /**
   * init
   * @param defaultDefaultOptions
   * @param {boolean} isShowInitTip
   */
  init(defaultDefaultOptions = {}, isShowInitTip: boolean = true) {
    if (isShowInitTip) {
      console.log(
        `%c` + `adapterScreen.js` + ` is running`,
        `font-weight: bold; color: #ffb712; background:linear-gradient(-45deg, #bd34fe 50%, #47caff 50% );background: -webkit-linear-gradient( 120deg, #bd34fe 30%, #41d1ff );background-clip: text;-webkit-background-clip: text; -webkit-text-fill-color:linear-gradient( -45deg, #bd34fe 50%, #47caff 50% ); padding: 8px 12px; border-radius: 4px;`,
      );
    }

    const options = {
      designWidth: 1920,
      dw: 1920,
      designHeight: 929,
      dh: 929,
      renderDom: typeof defaultDefaultOptions === 'string' ? defaultDefaultOptions : '#app',
      el: typeof defaultDefaultOptions === 'string' ? defaultDefaultOptions : '#app',
      resize: true,
      ignore: [],
      transition: 'none',
      delay: 0,
    };

    const { designWidth, dw, designHeight, dh, renderDom, el, resize, ignore, transition, delay } =
      options;

    currRenderDom = el || renderDom;

    let dom = document.querySelector<HTMLElement>(el as string);

    if (!dom) {
      console.error(`adapterScreen: '${el}' is not exist`);
      return;
    }

    const style = document.createElement('style');
    const ignoreStyle = document.createElement('style');

    style.lang = 'text/css';
    ignoreStyle.lang = 'text/css';
    style.id = 'autofit-style';
    ignoreStyle.id = 'ignoreStyle';
    style.innerHTML = `
      body {
        overflow: hidden;
      }
    `;

    dom.appendChild(style);
    dom.appendChild(ignoreStyle);
    dom.style.height = `${dh || designHeight}px`;
    dom.style.width = `${dw || designWidth}px`;
    dom.style.transformOrigin = `0 0`;

    keepFit(dw || designWidth, dh || designHeight, dom, ignore);

    resizeListener = () => {
      window.clearTimeout(timer);
      if (delay != 0)
        timer = window.setTimeout(() => {
          keepFit(dw || designWidth, dh || designHeight, dom, ignore);
          isElRectification && elRectification(currentRectification, currentRectificationLevel);
        }, delay);
      else {
        keepFit(dw || designWidth, dh || designHeight, dom, ignore);
        isElRectification && elRectification(currentRectification, currentRectificationLevel);
      }
    };

    resize && window.addEventListener('resize', resizeListener);

    isAutoFitRunning = true;

    setTimeout(() => {
      if (dom) {
        dom.style.transition = `${transition}s`;
      }
    });
  },
  /**
   * off
   * @param {string} el
   */
  off(el: string = '#app') {
    try {
      isElRectification = false;

      window.removeEventListener('resize', resizeListener);

      document?.querySelector?.('#autofit-style')?.remove?.();

      const _dom = document.querySelector<HTMLElement>(currRenderDom ? currRenderDom : el);
      if (_dom) {
        // @ts-ignore
        _dom.style = '';
      }

      const currentRectificationEls = document.querySelectorAll<HTMLElement>(currentRectification);

      for (let item of Array.from(currentRectificationEls)) {
        item.style.width = ``;
        item.style.height = ``;
        item.style.transform = ``;
      }
    } catch (error) {
      console.error(`adapterScreen: Failed to remove normally`, error);
      isAutoFitRunning = false;
    }
    isAutoFitRunning &&
      console.log(
        `%c` + `adapterScreen.js` + ` is off`,
        `font-weight: bold;color: #707070; background: #c9c9c9; padding: 8px 12px; border-radius: 4px;`,
      );
  },
  /**
   * detectZoom
   * @description 适配zoom
   */
  detectZoom() {
    let ratio = 0;

    if (window.devicePixelRatio !== undefined) {
      ratio = window.devicePixelRatio;
    } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
      ratio = window.outerWidth / window.innerWidth;
    }

    if (ratio) {
      ratio = Math.round(ratio * 100);
    }

    if (ratio !== 1) {
      // @ts-ignore
      document.body.style.zoom = 100 / Number(ratio);
    }
  },
  /**
   * flexible
   * @param {{minWidth: number; minHeight:number;}} minSize
   * @return {void}
   */
  flexible(minSize?: { minWidth: number; minHeight: number }): void {
    /**
     * setBodyFontSize
     * @description adjust body font size
     */
    function setBodyFontSize() {
      if (document.body) {
        const rem = window.screen.availWidth / 10;
        document.body.style.fontSize = (baseFontSize * dpr) / rem + 'rem';
      } else {
        document.addEventListener('DOMContentLoaded', setBodyFontSize);
      }
    }

    /**
     * setRemUnit
     * set 1rem = viewWidth / 10
     */
    function setRemUnit() {
      // 使用window.screen.availWidth的目的是只有改变操作系统的分辨率才重新设置rem，如果是浏览器窗口的resize不重新计算rem
      const rem = window.screen.availWidth / 10;
      docEl.style.fontSize = rem + 'px';
    }

    /**
     * checkSize
     * @description
     * @return {boolean}
     */
    function checkSize(): boolean {
      if (!minSize) return true;

      const clientWidth = docEl.clientWidth;
      const clientHeight = docEl.clientHeight;

      return minSize.minWidth <= clientWidth && minSize.minHeight <= clientHeight;
    }

    const baseFontSize = 12;
    const docEl = document.documentElement;
    const dpr = window.devicePixelRatio || 1;

    setBodyFontSize();

    setRemUnit();

    // reset rem unit on page resize
    window.addEventListener('resize', () => {
      if (checkSize()) {
        setRemUnit();
      }
    });
    window.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        if (checkSize()) {
          setRemUnit();
        }
      }
    });

    // detect 0.5px supports
    if (dpr >= 2) {
      const fakeBody = document.createElement('body');
      const testElement = document.createElement('div');
      testElement.style.border = '.5px solid transparent';
      fakeBody.appendChild(testElement);
      docEl.appendChild(fakeBody);
      if (testElement.offsetHeight === 1) {
        docEl.classList.add('hairlines');
      }
      docEl.removeChild(fakeBody);
    }
  },
  /**
   * setPageMinSizeToCSS
   * @description 设置页面的minWidth和minHeight的css样式
   * @param {HTMLElement} el
   */
  setPageMinSizeToCSS(el?: HTMLElement) {
    function setMinSize() {
      const { width, height } = Util.getMaximizedViewportSize();

      const minWidth = width - Util.getScrollbarWidth();
      const minHeight = height;

      (el ?? document.body).style.minWidth = `${minWidth}px`;
      (el ?? document.body).style.minHeight = `${minHeight}px`;
    }

    window.addEventListener('resize', () => {
      setMinSize();
    });
    window.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        setMinSize();
      }
    });
  },
  elRectification,
};

export default adapterScreen;
