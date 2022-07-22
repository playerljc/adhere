// import moment from 'moment';
// import zhCN from 'antd/es/locale/zh_CN';
// import enUS from 'antd/es/locale/en_US';
// import ptPT from 'antd/lib/locale/pt_PT';

import 'moment/locale/zh-cn';
import 'moment/locale/en-ca';
import 'moment/locale/pt';

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
    // // moment国际化
    // Dict.handlers.SystemMomentLocals = () => ({
    //   zh_CN: () => {
    //     moment.locale('zh-cn');
    //   },
    //   en_US: () => {
    //     moment.locale('en-ca');
    //   },
    //   pt_PT: () => {
    //     moment.locale('pt');
    //   },
    // });
  },
  initRemote() {
    Dict.handlers.SystemAuthorized = () => Promise.resolve([]);
  },
};
