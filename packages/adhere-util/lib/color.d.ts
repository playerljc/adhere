declare const _default: {
    /**--------------------------color-start----------------------**/
    /**
     * rgbRandom
     * @description rgb颜色随机
     * @return rgb string
     */
    rgbRandom(): string;
    /**
     * color16Random
     * @description 十六进制颜色随机
     * @return color string
     */
    color16Random(): string;
    /**
     * colorToRgb
     * @description color转换成rgb颜色
     * @param color
     */
    colorToRgb(color: string): number[];
    /**
     * rgbToColor
     * @description rgb转换成color
     * @param r
     * @param g
     * @param b
     * @return color string
     */
    rgbToColor(r: number | string, g: number | string, b: number | string): string;
};
export default _default;
