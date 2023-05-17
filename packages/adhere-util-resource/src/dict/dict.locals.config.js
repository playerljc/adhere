import arGE from 'antd/es/locale/ar_EG';
import enUS from 'antd/es/locale/en_US';
import ptPT from 'antd/es/locale/pt_PT';
import zhCN from 'antd/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/en-ca';
import 'dayjs/locale/pt';
import 'dayjs/locale/zh-cn';

import Dict from '@baifendian/adhere-util-dict';

export default {
  initStatic() {
    // 国际化
    Dict.handlers.Locals = () => ({
      zh_CN: 'zh_CN',
      pt_PT: 'pt_PT',
      en_US: 'en_US',
      ar_GE: 'ar_GE',
    });

    // antd的国际化资源
    Dict.handlers.LocalsAntd = () => ({
      zh_CN: zhCN,
      pt_PT: ptPT,
      en_US: enUS,
      ar_GE: arGE,
    });

    // dayjs国际化
    Dict.handlers.LocalsMoment = () => ({
      zh_CN: () => {
        dayjs.locale('zh-cn');
      },
      en_US: () => {
        dayjs.locale('en-ca');
      },
      pt_PT: () => {
        dayjs.locale('pt');
      },
      ar_GE: () => {
        dayjs.locale('ar');
      },
    });
  },
  initRemote() {},
};
