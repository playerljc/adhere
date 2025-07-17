import enUSMobile from 'antd-mobile/es/locales/en-US';
import ptPTMobile from 'antd-mobile/es/locales/pt-BR';
import zhCNMobile from 'antd-mobile/es/locales/zh-CN';
import enUS from 'antd/locale/en_US';
import ptPT from 'antd/locale/pt_PT';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/ar';
import 'dayjs/locale/en';
import 'dayjs/locale/pt';
import 'dayjs/locale/zh-cn';

import enUSAdhere from '@baifendian/adhere-util-intl/es/locales/en_US';
import ptPTAdhere from '@baifendian/adhere-util-intl/es/locales/pt_PT';
import zhCNAdhere from '@baifendian/adhere-util-intl/es/locales/zh_CN';

export default {
  zh_CN: {
    antd: zhCN,
    adhere: zhCNAdhere,
    adhereMobile: zhCNMobile,
    dayjs: () => {
      dayjs.locale('zh-cn');
    },
  },
  en_US: {
    antd: enUS,
    adhere: enUSAdhere,
    adhereMobile: enUSMobile,
    dayjs: () => {
      dayjs.locale('en');
    },
  },
  pt_PT: {
    antd: ptPT,
    adhere: ptPTAdhere,
    adhereMobile: ptPTMobile,
    dayjs: () => {
      dayjs.locale('pt');
    },
  },
};
