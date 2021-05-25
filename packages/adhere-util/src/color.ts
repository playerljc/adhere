export default {
  /**--------------------------color-start----------------------**/
  /**
   * rgb - rgb颜色随机
   */
  rgb() {
    // rgb颜色随机
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `(${r},${g},${b})`;
  },
  /**
   * color16 - 十六进制颜色随机
   */
  color16() {
    // 十六进制颜色随机
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  },
  /**--------------------------color-end----------------------**/
};
