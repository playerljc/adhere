import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import ptPT from 'antd/lib/locale/pt_PT';
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
    });

    // antd的国际化资源
    Dict.handlers.LocalsAntd = () => ({
      zh_CN: zhCN,
      pt_PT: ptPT,
      en_US: enUS,
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
    });
  },
  initRemote() {},
};
