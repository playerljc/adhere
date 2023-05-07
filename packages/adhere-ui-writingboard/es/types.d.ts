import type { CSSProperties } from 'react';
import type { CenterProps, TBLRCLayoutProps, TBLRProps } from '@baifendian/adhere-ui-flexlayout/es/types';
/**
 * WritingBoardHandle
 */
export interface WritingBoardHandle {
    setMode: (mode: Mode) => void;
    setStrokeStyle: (style: string) => void;
    setLineWidth: (width: number) => void;
    clear: () => void;
    toDataURL: (backgroundColor?: string, type?: string, quality?: any) => string | undefined;
}
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
    resizeTime?: number;
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
export type SignatureWrapProps = Pick<TBLRCLayoutProps, Exclude<'lProps' | 'cProps', keyof TBLRCLayoutProps>>;
export type SignatureToolProps = Partial<TBLRProps>;
export type SignatureAreaProps = Partial<CenterProps>;
/**
 * SignatureHandle
 */
export interface SignatureHandle {
    save: (backgroundColor?: string, type?: string, quality?: any) => string | undefined;
}
/**
 * SignatureProps
 */
export interface SignatureProps {
    defaultWidth?: number;
    defaultColor?: string;
    wrapProps?: SignatureWrapProps;
    toolProps?: SignatureToolProps;
    areaProps?: SignatureAreaProps;
}
