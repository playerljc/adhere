export default {
  /**----------------------------客户端检测---------------------------**/
  /**
   * isTouch - 是否移动端支持touch事件
   * @return boolean
   */
  isTouch(): boolean {
    return 'ontouchend' in document;
  },
  /**----------------------------客户端检测end---------------------------**/
};
