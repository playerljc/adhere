import { CSSProperties, ReactNode } from 'react';

export interface ComponentProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}
