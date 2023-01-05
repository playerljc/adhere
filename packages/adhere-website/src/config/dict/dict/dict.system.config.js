// import dayjs from 'dayjs';
// import zhCN from 'antd/es/locale/zh_CN';
// import enUS from 'antd/es/locale/en_US';
// import ptPT from 'antd/lib/locale/pt_PT';
import 'dayjs/locale/en-ca';
import 'dayjs/locale/pt';
import 'dayjs/locale/zh-cn';

import { Dict } from '@baifendian/adhere';

export default {
  initStatic() {
    // 系统的字体
    Dict.handlers.SystemFontFamily = () => '"Microsoft YaHei",Arial,Helvetica,sans-serif,"宋体"';

    // // 国际化
    // Dict.handlers.SystemLocals = () => ({
    //   zh_CN: 'zh_CN',
    //   pt_PT: 'pt_PT',
    //   en_US: 'en_US',
    // });
    //
    // // antd的国际化资源
    // Dict.handlers.SystemAntdLocals = () => ({
    //   zh_CN: zhCN,
    //   pt_PT: ptPT,
    //   en_US: enUS,
    // });
    //
    // // dayjs国际化
    // Dict.handlers.SystemMomentLocals = () => ({
    //   zh_CN: () => {
    //     dayjs.locale('zh-cn');
    //   },
    //   en_US: () => {
    //     dayjs.locale('en-ca');
    //   },
    //   pt_PT: () => {
    //     dayjs.locale('pt');
    //   },
    // });
  },
  initRemote() {
    Dict.handlers.SystemAuthorized = () => Promise.resolve([]);
  },
};
