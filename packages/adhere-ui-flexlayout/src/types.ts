import React from 'react';

export interface IFlexLayoutProps {
  direction: 'vertical' | 'horizontal';
  className: '';
  style: React.CSSProperties;
}

export interface IFixedProps {
  className: '';
  style: React.CSSProperties;
}

export interface IAutoProps {
  autoFixed: boolean;
  fit: boolean;
  className: '';
  style: React.CSSProperties;
}
