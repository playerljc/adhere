import type { CSSProperties } from 'react';
/**
 * WritingBoardProps
 * @interface WritingBoardProps
 */
export interface WritingBoardProps {
    className?: string;
    style?: CSSProperties;
    defaultMode: Mode;
    defaultStrokeStyle: string;
    defaultLineWidth: number;
    resizeTime: number;
}
/**
 * IPoint
 */
export interface Point {
    x: number;
    y: number;
}
/**
 * Mode
 * @description 绘制的模式
 */
export declare enum Mode {
    LINE = "line",
    RECTANGLE = "rectangle",
    CIRCLE = "circle",
    TRIANGLE = "triangle",
    FREE = "free",
    RUBBER = "rubber"
}
