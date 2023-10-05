import type { DialogConfirmProps } from 'antd-mobile';
import type { CSSProperties, ReactNode } from 'react';

export interface ImportantConfirmProps extends DialogConfirmProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}
