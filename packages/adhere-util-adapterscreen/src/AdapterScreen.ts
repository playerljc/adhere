import Util from '@baifendian/adhere-util';

import { IAdapterScreen, IInitOptions, IIgnoreElement, IMinSize } from './type';

// 全局状态变量
let currRenderDom = '';
let currentRectification = '';
let currentRectificationLevel: number = -1;
let resizeListener: (e?: Event) => void = () => {};
let timer: number | undefined;
let currScale = 1;
let isAutoFitRunning = false;
let isElRectification = false;

/**
 * 扩展HTMLElement接口，添加原始尺寸属性
 */
interface ExtendedHTMLElement extends HTMLElement {
  originalWidth?: number;
  originalHeight?: number;
}

/**
 * 元素修正函数
 * 对指定元素进行缩放修正
 * @param el - 元素选择器
 * @param level - 修正级别，默认为 1
 */
function elRectification(el: string, level = 1): void {
  if (!isAutoFitRunning) {
    console.error('adapterScreen.js：adapterScreen has not been initialized yet');
    return;
  }
  
  if (!el) {
    console.error(`adapterScreen.js：bad selector: ${el}`);
    return;
  }
  
  currentRectification = el;
  currentRectificationLevel = level;

  const currEl = document.querySelectorAll<ExtendedHTMLElement>(el);

  if (currEl.length === 0) {
    console.error('adapterScreen.js：elRectification found no element');
    return;
  }

  for (const item of Array.from(currEl)) {
    if (!isElRectification) {
      item.originalWidth = item.clientWidth;
      item.originalHeight = item.clientHeight;
    }
    
    const rectification = currScale === 1 ? 1 : currScale * level;
    item.style.width = `${(item.originalWidth || 0) * rectification}px`;
    item.style.height = `${(item.originalHeight || 0) * rectification}px`;
    item.style.transform = `scale(${1 / currScale})`;
    item.style.transformOrigin = '0 0';
  }
  
  isElRectification = true;
}

/**
 * 保持适配的核心函数
 * 根据设计稿尺寸和当前视口尺寸计算缩放比例并应用
 * @param dw - 设计稿宽度
 * @param dh - 设计稿高度
 * @param dom - 目标DOM元素
 * @param ignore - 忽略缩放的元素列表
 */
function keepFit(dw: number, dh: number, dom: HTMLElement, ignore: IIgnoreElement[]): void {
  const clientHeight = document.documentElement.clientHeight;
  const clientWidth = document.documentElement.clientWidth;
  
  // 计算缩放比例
  currScale = clientWidth / clientHeight < dw / dh ? clientWidth / dw : clientHeight / dh;
  
  // 应用缩放
  dom.style.height = `${clientHeight / currScale}px`;
  dom.style.width = `${clientWidth / currScale}px`;
  dom.style.transform = `scale(${currScale})`;
  
  // 处理忽略缩放的元素
  for (const item of ignore) {
    const ignoreStyle = document.querySelector<HTMLElement>('#ignoreStyle');
    if (!ignoreStyle) continue;

    const itemEl = item.el || item.dom;
    if (!itemEl) {
      console.error(`adapterScreen: bad selector: ${itemEl}`);
      continue;
    }
    
    const realScale = item.scale ?? 1 / currScale;
    const realFontSize = realScale !== currScale ? item.fontSize : 'autofit';
    const realWidth = realScale !== currScale ? item.width : 'autofit';
    const realHeight = realScale !== currScale ? item.height : 'autofit';
    
    const regex = new RegExp(`${itemEl}(\\x20|{)`, 'gm');
    const isIgnored = regex.test(ignoreStyle.innerHTML);
    
    if (isIgnored) {
      continue;
    }

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

/**
 * 屏幕适配器主对象
 */
const adapterScreen: IAdapterScreen = {
  /**
   * 初始化屏幕适配
   * @param defaultOptions - 配置选项或元素选择器字符串
   * @param isShowInitTip - 是否显示初始化提示，默认为 true
   */
  init(defaultOptions: IInitOptions | string = {}, isShowInitTip = true): void {
    if (isShowInitTip) {
      console.log(
        `%c` + `adapterScreen.js` + ` is running`,
        `font-weight: bold; color: #ffb712; background:linear-gradient(-45deg, #bd34fe 50%, #47caff 50% );background: -webkit-linear-gradient( 120deg, #bd34fe 30%, #41d1ff );background-clip: text;-webkit-background-clip: text; -webkit-text-fill-color:linear-gradient( -45deg, #bd34fe 50%, #47caff 50% ); padding: 8px 12px; border-radius: 4px;`,
      );
    }

    // 处理配置选项
    const options: IInitOptions = {
      dw: 1920,
      dh: 929,
      el: '#app',
      resize: true,
      ignore: [],
      transition: 0,
      delay: 0,
      ...(typeof defaultOptions === 'string' ? { el: defaultOptions } : defaultOptions),
    };

    const { dw, dh, el, resize, ignore, transition, delay } = options;

    currRenderDom = el || '#app';

    const dom = document.querySelector<HTMLElement>(el || '#app');
    if (!dom) {
      console.error(`adapterScreen: '${el || '#app'}' is not exist`);
      return;
    }

    // 创建样式元素
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
    dom.style.height = `${dh || 929}px`;
    dom.style.width = `${dw || 1920}px`;
    dom.style.transformOrigin = '0 0';

    keepFit(dw || 1920, dh || 929, dom, ignore || []);

    // 设置resize监听器
    resizeListener = () => {
      window.clearTimeout(timer);
      if (delay !== 0) {
        timer = window.setTimeout(() => {
          keepFit(dw || 1920, dh || 929, dom, ignore || []);
          if (isElRectification) {
            elRectification(currentRectification, currentRectificationLevel);
          }
        }, delay || 0);
      } else {
        keepFit(dw || 1920, dh || 929, dom, ignore || []);
        if (isElRectification) {
          elRectification(currentRectification, currentRectificationLevel);
        }
      }
    };

    if (resize) {
      window.addEventListener('resize', resizeListener);
    }

    isAutoFitRunning = true;

    // 设置过渡动画
    setTimeout(() => {
      if (dom) {
        dom.style.transition = `${transition}s`;
      }
    });
  },

  /**
   * 关闭autofit.js造成的影响
   * @param el - 元素选择器，默认为 '#app'
   */
  off(el = '#app'): void {
    try {
      isElRectification = false;
      window.removeEventListener('resize', resizeListener);
      document?.querySelector?.('#autofit-style')?.remove?.();

      const _dom = document.querySelector<HTMLElement>(currRenderDom || el);
      if (_dom) {
        _dom.style.cssText = '';
      }

      const currentRectificationEls = document.querySelectorAll<HTMLElement>(currentRectification);
      for (const item of Array.from(currentRectificationEls)) {
        item.style.width = '';
        item.style.height = '';
        item.style.transform = '';
      }
    } catch (error) {
      console.error(`adapterScreen: Failed to remove normally`, error);
      isAutoFitRunning = false;
    }
    
    if (isAutoFitRunning) {
      console.log(
        `%c` + `adapterScreen.js` + ` is off`,
        `font-weight: bold;color: #707070; background: #c9c9c9; padding: 8px 12px; border-radius: 4px;`,
      );
    }
  },

  /**
   * 检测浏览器缩放并调整
   */
  detectZoom(): void {
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
      document.body.style.zoom = `${100 / Number(ratio)}`;
    }
  },

  /**
   * 弹性布局适配
   * @param minSize - 最小尺寸配置
   * @param isUseMediaQuery - 是否使用媒体查询，默认为 false
   */
  flexible(minSize?: IMinSize, isUseMediaQuery = false): void {
    const baseFontSize = 12;
    const docEl = document.documentElement;
    const dpr = window.devicePixelRatio || 1;

    /**
     * 调整body字体大小
     */
    function setBodyFontSize(): void {
      if (document.body) {
        const rem = (minSize?.availWidth ?? window.screen.availWidth) / 10;
        document.body.style.fontSize = `${(baseFontSize * dpr) / rem}rem`;
      } else {
        document.addEventListener('DOMContentLoaded', setBodyFontSize);
      }
    }

    /**
     * 设置rem单位
     * 设置 1rem = viewWidth / 10
     */
    function setRemUnit(): void {
      let rootValue = 0;

      if (isUseMediaQuery) {
        const width = window.innerWidth;

        // 移动端适配（设计稿750px）
        if (adapterScreen.isPhoneSize()) {
          rootValue = width / 7.5; // 750px设计稿 → 1rem=100px基准
        }
        // 平板适配（768-992px）
        else if (adapterScreen.isPadSize()) {
          rootValue = width / 10.24; // 1024px基准
        }
        // PC端适配（设计稿1920px）
        else {
          rootValue = width / 19.2; // 1920px设计稿 → 1rem=100px基准
        }
      } else {
        const width = window.screen.availWidth;
        // 使用window.screen.availWidth的目的是只有改变操作系统的分辨率才重新设置rem，如果是浏览器窗口的resize不重新计算rem
        rootValue = (minSize?.availWidth ?? width) / 10;

        if (dpr > 1) {
          rootValue *= 1.13;
        }
      }

      docEl.style.fontSize = `${rootValue}px`;
    }

    /**
     * 检查尺寸是否满足最小要求
     * @returns 是否满足最小尺寸要求
     */
    function checkSize(): boolean {
      if (!minSize) return true;

      const clientWidth = docEl.clientWidth;
      const clientHeight = docEl.clientHeight;

      return minSize.minWidth <= clientWidth && minSize.minHeight <= clientHeight;
    }

    setBodyFontSize();
    setRemUnit();

    // 页面resize时重置rem单位
    window.addEventListener('resize', () => {
      if (checkSize()) {
        setRemUnit();
      }
    });
    
    window.addEventListener('pageshow', function (e) {
      if (e.persisted && checkSize()) {
        setRemUnit();
      }
    });

    // 检测0.5px支持
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
   * 设置页面最小尺寸到CSS
   * @param el - 目标元素，默认为 document.body
   */
  setPageMinSizeToCSS(el?: HTMLElement): void {
    function setMinSize(): void {
      const { width, height } = Util.getMaximizedViewportSize();

      const minWidth = width - Util.getScrollbarWidth();
      const minHeight = height;

      const targetEl = el ?? document.body;
      if (targetEl) {
        targetEl.style.minWidth = `${minWidth}px`;
        targetEl.style.minHeight = `${minHeight}px`;
      }
    }

    window.addEventListener('resize', setMinSize);
    window.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        setMinSize();
      }
    });
  },

  /**
   * 判断是否为手机尺寸
   * @returns 是否为手机尺寸（宽度 <= 768px）
   */
  isPhoneSize(): boolean {
    return window.innerWidth <= 768;
  },

  /**
   * 判断是否为平板尺寸
   * @returns 是否为平板尺寸（768px < 宽度 <= 992px）
   */
  isPadSize(): boolean {
    const width = window.innerWidth;
    return width > 768 && width <= 992;
  },

  /**
   * 判断是否为PC尺寸
   * @returns 是否为PC尺寸（宽度 > 992px）
   */
  isPCSize(): boolean {
    return window.innerWidth > 992;
  },

  elRectification,
};

export default adapterScreen;
