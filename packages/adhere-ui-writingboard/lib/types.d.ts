import type { ModalProps } from 'antd/lib/modal/Modal';
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
    isEmpty: () => boolean;
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
export type SignatureCoreWrapProps = Pick<TBLRCLayoutProps, Exclude<'lProps' | 'cProps', keyof TBLRCLayoutProps>>;
export type SignatureCoreToolProps = Partial<TBLRProps>;
export type SignatureCoreAreaProps = Partial<CenterProps>;
/**
 * SignatureCoreHandle
 */
export interface SignatureCoreHandle {
    save: (backgroundColor?: string, type?: string, quality?: any) => string | undefined;
    isEmpty: () => boolean;
}
/**
 * SignatureCoreProps
 */
export interface SignatureCoreProps {
    defaultWidth?: number;
    defaultColor?: string;
    wrapProps?: SignatureCoreWrapProps;
    toolProps?: SignatureCoreToolProps;
    areaProps?: SignatureCoreAreaProps;
}
/**
 * SignatureHandle
 */
export interface SignatureHandle {
    isEmpty: () => boolean;
}
/**
 * SignatureProps
 */
export interface SignatureProps {
    className?: string;
    style?: CSSProperties;
    modalProps?: ModalProps;
    coreProps?: SignatureCoreProps;
    value?: string;
    onChange: (base64?: string) => void;
}
