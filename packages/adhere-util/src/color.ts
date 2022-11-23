export default {
  /**--------------------------color-start----------------------**/
  /**
   * rgbRandom
   * @description rgb颜色随机
   * @return rgb string
   */
  rgbRandom() {
    // rgb颜色随机
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `(${r},${g},${b})`;
  },
  /**
   * color16Random
   * @description 十六进制颜色随机
   * @return color string
   */
  color16Random() {
    // 十六进制颜色随机
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  },
  /**
   * colorToRgb
   * @description color转换成rgb颜色
   * @param color
   */
  colorToRgb(color: string): number[] {
    let numberColor = color.replace(/^#*/, '');

    if (numberColor.length === 3) {
      numberColor = Array.from(numberColor)
        .reduce<string[]>((result, number) => {
          result.push(`${number}`, `${number}`);
          return result;
        }, [])
        .join();
    }

    // 都变成6位了
    const rgb: number[] = [];

    for (let i = 0; i < numberColor.length; i += 2) {
      rgb.push(parseInt(`${numberColor[i]}${numberColor[i + 1]}`, 16));
    }

    return rgb;
  },
  /**
   * rgbToColor
   * @description rgb转换成color
   * @param r
   * @param g
   * @param b
   * @return color string
   */
  rgbToColor(r: number | string, g: number | string, b: number | string) {
    return `${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  },
  /**--------------------------color-end----------------------**/
};
