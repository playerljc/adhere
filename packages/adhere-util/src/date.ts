/**
 * 日期工具类
 * @description 提供日期和时间相关的工具函数
 */
const DateUtil = {
  /**
   * 根据格式字符串和时区获取时间戳
   * @description 将格式化的时间字符串转换为指定时区的时间戳
   * @param str - 格式化的时间字符串，格式为 YYYY-MM-DD HH:mm:ss
   * @param timezone - UTC 时区字符串，范围 11 ~ 0 ~ -12
   * @returns 时间戳（秒）
   * @example
   * ```typescript
   * toTimestampByFormatStrAndTimeZone('2023-12-25 10:30:00', '8') // 返回时间戳
   * ```
   */
  toTimestampByFormatStrAndTimeZone(str: string, timezone: string): number {
    if (!str || !timezone) {
      return 0;
    }

    const datetime = Date.parse(str);
    if (isNaN(datetime)) {
      return 0;
    }

    return Math.ceil(datetime / 1000) - (parseInt(timezone, 10) - DateUtil.getTimezone()) * 3600;
  },

  /**
   * 通过时间戳和时区获取格式化的时间字符串
   * @description 将时间戳转换为指定时区的格式化时间字符串
   * @param timestamp - 时间戳字符串（秒）
   * @param timezone - UTC 时区字符串，范围 11 ~ 0 ~ -12
   * @returns 格式化的时间字符串，格式为 YYYY-MM-DD HH:mm:ss
   * @example
   * ```typescript
   * toStrByTimestampAndTimeZone('1703482200', '8') // 返回 "2023-12-25 10:30:00"
   * ```
   */
  toStrByTimestampAndTimeZone(timestamp: string, timezone: string): string {
    if (!timestamp || !timezone) {
      return '';
    }

    const timestampNum = parseInt(timestamp, 10);
    if (isNaN(timestampNum)) {
      return '';
    }

    const adjustedTimestamp = (timestampNum + (parseInt(timezone, 10) - DateUtil.getTimezone()) * 3600) * 1000;
    const dt = new Date(adjustedTimestamp);
    dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset()); // 修正时区偏移
    return dt.toISOString().slice(0, -5).replace(/[T]/g, ' ');
  },

  /**
   * 获取当前时间戳
   * @description 获取当前时间的时间戳（秒）
   * @returns 当前时间戳
   * @example
   * ```typescript
   * getCurrentTimestamp() // 返回当前时间戳，如 1703482200
   * ```
   */
  getCurrentTimestamp(): number {
    return Math.ceil(new Date().getTime() / 1000);
  },

  /**
   * 获取当前时区
   * @description 获取当前系统的时区偏移量
   * @returns 时区偏移量，范围 11 ~ 0 ~ -12
   * @example
   * ```typescript
   * getTimezone() // 在东八区返回 8，在 UTC 返回 0
   * ```
   */
  getTimezone(): number {
    return -Math.floor(
      //获取本地计算机上的时间与世界协调时间（UTC）之间的分钟差
      new Date().getTimezoneOffset() / 60,
    );
  },

  /**
   * 格式化毫秒数
   * @description 将毫秒数转换为天、小时、分钟、秒的格式
   * @param milliseconds - 毫秒数
   * @returns 包含天、小时、分钟、剩余秒数的对象
   * @example
   * ```typescript
   * formatMilliseconds(90061000) // 返回 { days: 1, hours: 1, minutes: 1, remainingSeconds: 1 }
   * ```
   */
  formatMilliseconds(milliseconds: number): {
    days: number;
    hours: number;
    minutes: number;
    remainingSeconds: number;
  } {
    if (milliseconds < 0) {
      milliseconds = 0;
    }

    const seconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor(((seconds % 86400) % 3600) / 60);
    const remainingSeconds = ((seconds % 86400) % 3600) % 60;

    return {
      days,
      hours,
      minutes,
      remainingSeconds,
    };
  },
};

export default DateUtil;
