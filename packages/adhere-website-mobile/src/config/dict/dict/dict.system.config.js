import arEGMobile from 'antd-mobile/es/locales/ar-SA';
import enUSMobile from 'antd-mobile/es/locales/en-US';
import ptPTMobile from 'antd-mobile/es/locales/pt-BR';
import zhCNMobile from 'antd-mobile/es/locales/zh-CN';
import dayjs from 'dayjs';
import 'dayjs/locale/ar';
import 'dayjs/locale/en';
import 'dayjs/locale/pt';
import 'dayjs/locale/zh-cn';

import { Dict } from '@baifendian/adhere';
import arEGAdhere from '@baifendian/adhere-util-intl/es/locales/ar_EG';
import enUSAdhere from '@baifendian/adhere-util-intl/es/locales/en_US';
import ptPTAdhere from '@baifendian/adhere-util-intl/es/locales/pt_PT';
import zhCNAdhere from '@baifendian/adhere-util-intl/es/locales/zh_CN';

import ar_EG from '@/locales/ar_EG';
import en_US from '@/locales/en_US';
import pt_PT from '@/locales/pt_PT';
import zh_CN from '@/locales/zh_CN';

export default {
  initStatic() {
    // 系统的字体
    Dict.handlers.SystemFontFamily = () => '"Microsoft YaHei",Arial,Helvetica,sans-serif,"宋体"';

    Dict.handlers.SystemDefaultLang = () => 'zh_CN';
    Dict.handlers.SystemLang = () => ({
      zh_CN: {
        name: 'ZH',
        code: 'zh_CN',
        direction: 'ltr',
        icon: '',
        antdMobile: zhCNMobile,
        dayjs: () => {
          dayjs.locale('zh-cn');
        },
        adhere: zhCNAdhere,
        module: zh_CN,
      },
      en_US: {
        name: 'EN',
        code: 'en_US',
        direction: 'ltr',
        icon: '',
        antdMobile: enUSMobile,
        dayjs: () => {
          dayjs.locale('en');
        },
        adhere: enUSAdhere,
        module: en_US,
      },
      pt_PT: {
        name: 'PT',
        code: 'pt_PT',
        direction: 'ltr',
        icon: '',
        antdMobile: ptPTMobile,
        dayjs: () => {
          dayjs.locale('pt');
        },
        adhere: ptPTAdhere,
        module: pt_PT,
      },
      ar_EG: {
        name: 'AR',
        code: 'ar_EG',
        direction: 'rtl',
        dayjsCode: 'ar',
        icon: '',
        antdMobile: arEGMobile,
        dayjs: () => {
          dayjs.locale('ar');
        },
        adhere: arEGAdhere,
        module: ar_EG,
      },
    });
  },
  initRemote() {
    Dict.handlers.SystemAuthorized = () => Promise.resolve([]);
  },
};
