import { ConfigProvider } from 'antd';
import { ConfigProviderProps } from 'antd/es/config-provider';
import ar from 'dayjs/locale/ar';
import pt from 'dayjs/locale/pt';
import zhCN from 'dayjs/locale/zh-cn';
import { produce } from 'immer';

import { createFactory } from '../util';

// 英文的dayjs没有formats
const en = {
  name: 'en',
  formats: {
    LT: 'h:mm A',
    LTS: 'h:mm:ss A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A',
    l: 'M/D/YYYY',
    ll: 'MMM D, YYYY',
    lll: 'MMM D, YYYY h:mm A',
    llll: 'ddd, MMM D, YYYY h:mm A',
  },
};
const dayjsLocalesMap = [ar, en, pt, zhCN].reduce((result, locale) => {
  result.set(locale.name, locale);

  return result;
}, new Map());

const ConfigProviderHOC: typeof ConfigProvider & {
  defaultProps?: Partial<ConfigProviderProps>;
} = createFactory<ConfigProviderProps>(ConfigProvider, {}, (props) => {
  const localeKey = props?.locale?.locale ?? 'zh-cn';

  const locale = dayjsLocalesMap.get(localeKey);

  console.log('localeKey', localeKey);
  console.log('locale', locale);

  return produce(props, (draft) => {
    if (draft?.locale?.DatePicker?.lang) {
      // @ts-ignore
      draft.locale.DatePicker.lang.fieldDateTimeFormat = `${locale.formats.L} ${locale.formats.LTS}`;
      // @ts-ignore
      draft.locale.DatePicker.lang.fieldDateFormat = locale.formats.L;
    }
  });
});

ConfigProviderHOC.displayName = 'ConfigProvider';

export default ConfigProviderHOC;
