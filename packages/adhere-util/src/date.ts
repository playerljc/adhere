const DateUtil = {
  /**
   * toTimestampByTimeZone
   * @description 根据format字符串和时区获取时间错
   * @param str format的str YYYY-MM-DD HH:mm:ss
   * @param timezone utc的字符串 11 ~ 0 ~ -12
   * @return number timestamp 时间错
   */
  toTimestampByFormatStrAndTimeZone(str: string, timezone: string) {
    const datetime = Date.parse(str);
    return Math.ceil(datetime / 1000) - (parseInt(timezone, 10) - DateUtil.getTimezone()) * 3600;
  },
  /**
   * toStrByTimestampAndTimeZone
   * @description 通过时间错和时区获取format时间字符串
   * @param _timestamp 时间错的字符串
   * @param timezone utc的字符串 11 ~ 0 ~ -12
   * @return YYYY-MM-DD HH:mm:ss
   */
  toStrByTimestampAndTimeZone(_timestamp: string, timezone: string) {
    const timestamp =
        (parseInt(_timestamp, 10) + (parseInt(timezone, 10) - DateUtil.getTimezone()) * 3600) *
        1000,
      dt = new Date(timestamp);
    dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset()); // 修正时区偏移
    return dt.toISOString().slice(0, -5).replace(/[T]/g, ' ');
  },
  /**
   * getCurrentTimestamp
   * @description 获取当前的时间错
   * @return number
   */
  getCurrentTimestamp() {
    return Math.ceil(new Date().getTime() / 1000);
  },
  /**
   * getTimezone
   * @description 获取当前Timezone(时区) 11 ~ 0 ~ -12
   * @return number
   */
  getTimezone() {
    return -Math.floor(
      //获取本地计算机上的时间与世界协调时间（UTC）之间的分钟差
      new Date().getTimezoneOffset() / 60,
    );
  },
};

export default DateUtil;
