import type { CSSProperties } from 'react';

import type {
  CenterProps,
  TBLRCLayoutProps,
  TBLRProps,
} from '@baifendian/adhere-ui-flexlayout/es/types';

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
  // 绘制模式
  defaultMode: Mode;
  // 线条颜色
  defaultStrokeStyle: string;
  // 线条宽度
  defaultLineWidth: number;
  // 防抖的事件
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
export enum Mode {
  // 直线
  LINE = 'line',
  // 矩形
  RECTANGLE = 'rectangle',
  // 圆形
  CIRCLE = 'circle',
  // 三角形
  TRIANGLE = 'triangle',
  // 自由绘制
  FREE = 'free',
  // 橡皮
  RUBBER = 'rubber',
}

export type SignatureWrapProps = Pick<
  TBLRCLayoutProps,
  Exclude<'lProps' | 'cProps', keyof TBLRCLayoutProps>
>;
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
