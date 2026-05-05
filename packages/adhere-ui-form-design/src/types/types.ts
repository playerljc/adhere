import type { CSSProperties } from 'react';

// 平台类型
export type Terminal = 'desktop' | 'mobile';

/** 设计器移动预览宽度预设 id */
export type MobileViewportPresetId = 'w360' | 'w375' | 'w390' | 'w393' | 'w414' | 'w428';

export type Styles = {
  className?: string;
  style?: CSSProperties;
};

// 预览属性
export interface ViewProps {}
