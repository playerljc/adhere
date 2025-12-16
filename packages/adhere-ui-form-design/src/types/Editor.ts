import type { ReactNode } from 'react';

import type { DesignValue } from './Design';

export interface DesignEditorProps {
  value?: DesignValue;
}

export interface DroppableContainerProps {
  id: string;
  value: DesignValue;
  children: ReactNode;
}

export interface ModeChangeProps {}
