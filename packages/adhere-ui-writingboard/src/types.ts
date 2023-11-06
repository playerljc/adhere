import type { ModalProps } from 'antd/lib/modal/interface';
import type { CSSProperties, NamedExoticComponent, RefAttributes } from 'react';

import type {
  CenterProps,
  TBLRCLayoutProps,
  TBLRProps,
} from '@baifendian/adhere-ui-flexlayout/es/types';

import Signature from './signature';
import SignatureCore from './signature/SignatureCore';

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

export type SignatureCoreWrapProps = Pick<
  TBLRCLayoutProps,
  Exclude<'lProps' | 'cProps', keyof TBLRCLayoutProps>
>;
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

export type WritingBoardComponent = NamedExoticComponent<WritingBoardProps> &
  RefAttributes<WritingBoardHandle> & {
    Signature: typeof Signature;
  };

export type SignatureComponent = NamedExoticComponent<SignatureProps> & {
  SignatureCore: typeof SignatureCore;
};
