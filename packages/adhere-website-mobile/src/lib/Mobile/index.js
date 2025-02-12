/**
 * 否是通过mobile变量来判断
 * fastclick是否需要载入
 * amfe-flexible是否需要载入
 * postcss中的pxtorem插件是否需要载入
 */
import { Browsersniff } from '@baifendian/adhere';

import SelfUtil from '@/util';

let timerRef = null;

if (SelfUtil.getEvnVars().mobile === 'true') {
  // mobile.css
  import('./index.less').then(() => {
    // app载入移动端样式
    document.getElementById('app').classList.add('mobile');
  });
  // fastclick
  import('react-fastclick').then((initReactFastclick) => initReactFastclick.default());

  // ios端input失去焦点界面不返回
  if (Browsersniff.iSOSiOS()) {
    document.addEventListener('focusin', (e) => {
      if (
        e &&
        e.target &&
        e.target.tagName &&
        ['input', 'textarea'].includes(e.target.tagName.toLowerCase())
      ) {
        clearTimeout(timerRef);
      }
    });

    document.addEventListener('focusout', (e) => {
      if (
        e &&
        e.target &&
        e.target.tagName &&
        ['input', 'textarea'].includes(e.target.tagName.toLowerCase())
      ) {
        timerRef = setTimeout(() => {
          window.scrollTo(0, 0);
        }, 0);
      }
    });
  }
}
