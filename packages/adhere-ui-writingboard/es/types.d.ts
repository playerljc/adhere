import React from 'react';
/**
 * IWritingBoardProps
 * @interface IWritingBoardProps
 */
export interface IWritingBoardProps {
    className?: string;
    style?: React.CSSProperties;
    mode: Mode;
    strokeStyle: string;
    lineWidth: number;
}
/**
 * IPoint
 */
export interface IPoint {
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
