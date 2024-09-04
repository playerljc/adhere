export interface AreaStyle {
    color: string;
    origin: 'auto' | 'start' | 'end' | number;
    shadowBlur: number;
    shadowColor: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
    opacity: number;
}
export type Radius = number | string | Array<number | string>;
