import React from 'react';

export interface IIndexConfig {
  index: string;
  renderIndex: Function;
  renderTitle: Function;
  renderContent: Function;
}

export interface IRecord {
  index: string;
  data: Array<object>;
}

export interface IPosition {
  name: string;
  top: number;
  bottom: number;
  left: number;
  right: number;
  offsetTop: number;
  offsetLeft: number;
  width: number;
  height: number;
}

/**
 * ISurnamesProps
 * @interface ISurnamesProps
 */
export interface ISurnamesProps {
  className?: string;
  style?: React.CSSProperties;
  position: 'top' | 'right' | 'bottom' | 'left';
  indexes: Array<IIndexConfig>;
  dataSource: Array<IRecord>;
  onBeforeScroll: Function;
  onScroll: Function;
}
