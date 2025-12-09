import type { CSSProperties } from 'react';

// 平台类型
export type Terminal = 'desktop' | 'mobile';

export type Styles = {
  className?: string;
  style?: CSSProperties;
};

// 表单属性
export interface FormProps {}

// 预览属性
export interface ViewProps {}
