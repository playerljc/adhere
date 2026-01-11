import type { CSSProperties, ReactNode } from 'react';

import type { DesignValue } from './Design';

export interface DesignEditorProps {
  value?: DesignValue;
}

export interface DroppableContainerProps {
  className?: string;
  style?: CSSProperties;
  id: string;
  value: DesignValue;
  children: ReactNode;
}

export interface ModeChangeProps {}
