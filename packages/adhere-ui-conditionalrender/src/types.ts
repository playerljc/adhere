import type { FC, FunctionComponent } from 'react';

/**
 * ConditionalRenderProps
 * @interface ConditionalRenderProps
 */
export interface ConditionalRenderProps {
  conditional: boolean;
  noMatch?: any;
  children?: any;
}

export interface ConditionalRenderFunction<P> extends FunctionComponent<P> {
  Show: FC<ConditionalRenderShowProps>;
  Visibility: FC<ConditionalRenderShowProps>;
  conditionalRender: ConditionalRenderFunctionStatic;
  conditionalArr: ConditionalRenderArrayFunctionStatic;
  conditionalNotEmptyArr: ConditionalNotEmptyArrFunctionStatic;
}

export interface ConditionalRenderFunctionStatic {
  (params: { conditional: boolean; match: any; noMatch: any }): any;
}

export interface ConditionalRenderArrayFunctionStatic {
  (arr: any[]): any[];
}

export interface ConditionalNotEmptyArrFunctionStatic {
  (arr: any[]): any[];
}

/**
 * ConditionalRenderShowProps
 * @interface ConditionalRenderShowProps
 */
export interface ConditionalRenderShowProps {
  conditional: boolean;
  noMatch?: any;
  children?: any;
}

/**
 * Deal
 * @interface Deal
 */
export interface Deal {
  element: any;
  conditional: boolean;
  prop: string;
  value: string;
}
