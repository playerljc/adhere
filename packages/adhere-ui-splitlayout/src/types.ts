import React from 'react';

export interface ISplitLayoutProps {
  onCanDrag: Function;
  onDragStarted: Function;
  onDragFinished: Function;
  onOut: Function;
  onChange: Function;
  maxSize: string;
  minSize: number;
  className: '';
  style: React.CSSProperties;
}
