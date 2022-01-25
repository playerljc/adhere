import React from 'react';

/**
 * IConditionalRenderProps
 * @interface IConditionalRenderProps
 */
export interface IConditionalRenderProps {
  conditional: boolean;
  noMatch?: () => React.ReactElement | null ;
  children?: any;
}

/**
 * IConditionalRenderShowProps
 * @interface IConditionalRenderShowProps
 */
export interface IConditionalRenderShowProps {
  conditional: boolean;
  noMatch?: React.ReactElement | null;
  children?: any;
}

/**
 * IDeal
 * @interface IDeal
 */
export interface IDeal {
  element: React.ReactElement | React.ReactElement[] | null;
  conditional: boolean;
  prop: string;
  value: string;
}
