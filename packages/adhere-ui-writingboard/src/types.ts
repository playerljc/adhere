import type { ModalProps } from 'antd/lib/modal/interface';
import { PropsWithoutRef } from 'react';
import type { CSSProperties, NamedExoticComponent, RefAttributes } from 'react';

import type {
  CenterProps,
  TBLRCLayoutProps,
  TBLRProps,
} from '@baifendian/adhere-ui-flexlayout/es/types';

import Signature from './signature';
import MobileSignatureCore from './signature/MobileSignatureCore';
import SignatureCore from './signature/SignatureCore';
import MobileSignature from './signature/mobile';

/**
 * 2D坐标点接口
 */
export interface Point {
  /** X坐标 */
  x: number;
  /** Y坐标 */
  y: number;
}

/**
 * 绘制模式枚举
 * @description 定义画板支持的各种绘制模式
 */
export enum Mode {
  /** 直线绘制模式 */
  LINE = 'line',
  /** 矩形绘制模式 */
  RECTANGLE = 'rectangle',
  /** 圆形绘制模式 */
  CIRCLE = 'circle',
  /** 三角形绘制模式 */
  TRIANGLE = 'triangle',
  /** 自由绘制模式 */
  FREE = 'free',
  /** 橡皮擦模式 */
  RUBBER = 'rubber',
}

/**
 * 画板操作句柄接口
 * @description 提供画板的核心操作方法
 */
export interface WritingBoardHandle {
  /** 设置绘制模式 */
  setMode: (mode: Mode) => void;
  /** 设置线条颜色 */
  setStrokeStyle: (style: string) => void;
  /** 设置线条宽度 */
  setLineWidth: (width: number) => void;
  /** 清除画布内容 */
  clear: () => void;
  /** 检查画布是否为空 */
  isEmpty: () => boolean;
  /** 导出画布为DataURL */
  toDataURL: (backgroundColor?: string, type?: string, quality?: number) => string | undefined;
}

/**
 * 画板组件属性接口
 */
export interface WritingBoardProps {
  /** 自定义CSS类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 默认绘制模式 */
  defaultMode?: Mode;
  /** 默认线条颜色 */
  defaultStrokeStyle?: string;
  /** 默认线条宽度 */
  defaultLineWidth?: number;
  /** 窗口大小变化防抖时间(毫秒) */
  resizeTime?: number;
}

/**
 * 签名核心组件操作句柄接口
 */
export interface SignatureCoreHandle {
  /** 保存签名并返回base64字符串 */
  save: (backgroundColor?: string, type?: string, quality?: number) => string | undefined;
  /** 检查签名是否为空 */
  isEmpty: () => boolean;
}

/**
 * 签名核心组件属性接口
 */
export interface SignatureCoreProps {
  /** 默认线条宽度 */
  defaultWidth?: number;
  /** 默认线条颜色 */
  defaultColor?: string;
  /** 容器布局属性 */
  wrapProps?: SignatureCoreWrapProps;
  /** 工具栏属性 */
  toolProps?: SignatureCoreToolProps;
  /** 绘制区域属性 */
  areaProps?: SignatureCoreAreaProps;
}

/**
 * 签名组件操作句柄接口
 */
export interface SignatureHandle {
  /** 检查签名是否为空 */
  isEmpty: () => boolean;
}

/**
 * 签名组件属性接口
 */
export interface SignatureProps {
  /** 自定义CSS类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 模态框属性 */
  modalProps?: ModalProps;
  /** 核心组件属性 */
  coreProps?: SignatureCoreProps;
  /** 签名值(base64字符串) */
  value?: string;
  /** 签名值变化回调 */
  onChange?: (base64?: string) => void;
}

/**
 * 签名核心组件包装属性类型
 */
export type SignatureCoreWrapProps = Pick<
  TBLRCLayoutProps,
  Exclude<'lProps' | 'cProps', keyof TBLRCLayoutProps>
>;

/**
 * 签名核心组件工具栏属性类型
 */
export type SignatureCoreToolProps = Partial<TBLRProps>;

/**
 * 签名核心组件绘制区域属性类型
 */
export type SignatureCoreAreaProps = Partial<CenterProps>;

/**
 * 画板组件类型定义
 * @description 包含组件本身及其静态属性
 */
export type WritingBoardComponent = NamedExoticComponent<
  PropsWithoutRef<WritingBoardProps> & RefAttributes<WritingBoardHandle>
> &
  RefAttributes<WritingBoardHandle> & {
    /** 桌面端签名组件 */
    Signature: typeof Signature;
    /** 移动端签名组件 */
    MobileSignature: typeof MobileSignature;
  };

/**
 * 签名组件类型定义
 * @description 包含组件本身及其静态属性
 */
export type SignatureComponent = NamedExoticComponent<
  PropsWithoutRef<SignatureProps> & RefAttributes<SignatureHandle>
> & {
  /** 桌面端签名核心组件 */
  SignatureCore: typeof SignatureCore;
  /** 移动端签名核心组件 */
  MobileSignatureCore: typeof MobileSignatureCore;
};
