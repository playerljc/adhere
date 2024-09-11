import React from 'react';
import type { ValueHOCHandle, ValueHOCProps } from './types';
/**
 * createFactory
 * @description - 创建一个组件的包装
 * @param Component
 * @param defaultProps
 * @param override
 * @return {function(*)}
 */
export declare function createFactory<P>(Component: any, defaultProps: Partial<P>, override?: (props: Partial<P>) => Partial<P>): typeof Component & {
    defaultProps?: Partial<P>;
};
export declare const ValueHOC: React.ForwardRefExoticComponent<Omit<ValueHOCProps, "ref"> & React.RefAttributes<ValueHOCHandle>>;
