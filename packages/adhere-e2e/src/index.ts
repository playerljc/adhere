import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import updateLocale from 'dayjs/plugin/updateLocale';
import utc from 'dayjs/plugin/utc';

import AdapterScreen from '@baifendian/adhere-util-adapterscreen';

import './compatible';
import Mobile from './mobile';
import PC from './pc';
import { isUseMedia } from './util';

if (isUseMedia()) {
  AdapterScreen.flexible();
}

/**
 * dayjsSetting
 * @description dayjs的设置
 */
function dayjsSetting() {
  // 设置LTS
  dayjs.extend(updateLocale);

  // 设置dayjs的时区
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault(Intl.DateTimeFormat().resolvedOptions().timeZone);
}

dayjsSetting();

export default {
  PC,
  Mobile,
};
