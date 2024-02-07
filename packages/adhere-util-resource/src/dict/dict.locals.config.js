import arEG from 'antd/locale/ar_EG';
import enUS from 'antd/locale/en_US';
import ptPT from 'antd/locale/pt_PT';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/ar';
import 'dayjs/locale/en';
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
      ar_EG: 'ar_EG',
    });

    // antd的国际化资源
    Dict.handlers.LocalsAntd = () => ({
      zh_CN: zhCN,
      pt_PT: ptPT,
      en_US: enUS,
      ar_EG: arEG,
    });

    // dayjs国际化
    Dict.handlers.LocalsMoment = () => ({
      zh_CN: () => {
        dayjs.locale('zh-cn');
      },
      en_US: () => {
        dayjs.locale('en');
      },
      pt_PT: () => {
        dayjs.locale('pt');
      },
      ar_EG: () => {
        dayjs.locale('ar');
      },
    });
  },
  initRemote() {},
};
