import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localeData from 'dayjs/plugin/localeData';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import weekYear from 'dayjs/plugin/weekYear';

let initialized = false;

/**
 * setupDayjs
 * @description Ant Design DatePicker 依赖的 dayjs 插件初始化（全局单例）
 */
export function setupDayjs() {
  if (initialized) return;

  dayjs.extend(weekday);
  dayjs.extend(localeData);
  dayjs.extend(weekOfYear);
  dayjs.extend(weekYear);
  dayjs.extend(advancedFormat);
  dayjs.extend(customParseFormat);
  dayjs.extend(quarterOfYear);

  initialized = true;
}

setupDayjs();
