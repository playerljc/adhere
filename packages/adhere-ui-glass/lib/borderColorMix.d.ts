/**
 * 基于根节点上的 `--glass-border-color`（任意合法 CSS 颜色）与透明度生成可用于渐变中的颜色。
 * 使用 color-mix，支持 #fff、rgb()、hsl()、颜色关键字、lab()、var() 等。
 */
export declare function glassBorderTint(alpha: number): string;
