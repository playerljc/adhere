// import dayjs from 'dayjs';
// import zhCN from 'antd/es/locale/zh_CN';
// import enUS from 'antd/es/locale/en_US';
// import ptPT from 'antd/lib/locale/pt_PT';
import 'dayjs/locale/en-ca';
import 'dayjs/locale/pt';
import 'dayjs/locale/zh-cn';

import { Dict } from '@baifendian/adhere';

import ar_EG from '../../../locales/ar_EG';
import en_US from '../../../locales/en_US';
import pt_PT from '../../../locales/pt_PT';
import zh_CN from '../../../locales/zh_CN';

export default {
  initStatic() {
    // 系统的字体
    Dict.handlers.SystemFontFamily = () => '"Microsoft YaHei",Arial,Helvetica,sans-serif,"宋体"';

    Dict.handlers.SystemDefaultLang = () => 'zh_CN';
    Dict.handlers.SystemLang = () => ({
      zh_CN: {
        name: 'ZH',
        code: 'zh_CN',
        icon: '',
        module: zh_CN,
        direction: 'ltr',
        dayjsCode: 'zh',
      },
      en_US: {
        name: 'EN',
        code: 'en_US',
        icon: '',
        module: en_US,
        direction: 'ltr',
        dayjsCode: 'en',
      },
      pt_PT: {
        name: 'PT',
        code: 'pt_PT',
        icon: '',
        module: pt_PT,
        direction: 'ltr',
        dayjsCode: 'pt',
      },
      ar_EG: {
        name: 'AR',
        code: 'ar_EG',
        icon: '',
        module: ar_EG,
        direction: 'rtl',
        dayjsCode: 'ar',
      },
    });
  },
  initRemote() {
    Dict.handlers.SystemAuthorized = () => Promise.resolve([]);
  },
};
