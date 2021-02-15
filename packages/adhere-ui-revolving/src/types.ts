import React from 'react';

/**
 * IRevolvingProps
 * @interface IRevolvingProps
 */
export interface IRevolvingProps {
  className?: string;
  style?: React.CSSProperties;
  classNameWrapper?: string;
  styleWrapper?: React.CSSProperties;
  speed: number;
  delay: number;
  direction: 'top' | 'right' | 'bottom' | 'left';
  loop: boolean;
  stopOnLastSlide: boolean;
  listeners: object;
}

export interface IRevolvingitemProps {
  className?: string;
  style?: React.CSSProperties;
}
