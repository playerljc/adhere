declare const DateUtil: {
    /**
     * toTimestampByTimeZone
     * @description 根据format字符串和时区获取时间错
     * @param str format的str YYYY-MM-DD HH:mm:ss
     * @param timezone utc的字符串 11 ~ 0 ~ -12
     * @return number timestamp 时间错
     */
    toTimestampByFormatStrAndTimeZone(str: string, timezone: string): number;
    /**
     * toStrByTimestampAndTimeZone
     * @description 通过时间错和时区获取format时间字符串
     * @param _timestamp 时间错的字符串
     * @param timezone utc的字符串 11 ~ 0 ~ -12
     * @return YYYY-MM-DD HH:mm:ss
     */
    toStrByTimestampAndTimeZone(_timestamp: string, timezone: string): string;
    /**
     * getCurrentTimestamp
     * @description 获取当前的时间错
     * @return number
     */
    getCurrentTimestamp(): number;
    /**
     * getTimezone
     * @description 获取当前Timezone(时区) 11 ~ 0 ~ -12
     * @return number
     */
    getTimezone(): number;
    /**
     * formatMilliseconds
     * @description format毫秒数
     * @param {number} milliseconds 毫秒数
     * @return {
     *   days: number;
     *   hours: number;
     *   minutes: number;
     *   remainingSeconds: number;
     * }
     */
    formatMilliseconds(milliseconds: number): {
        days: number;
        hours: number;
        minutes: number;
        remainingSeconds: number;
    };
};
export default DateUtil;
