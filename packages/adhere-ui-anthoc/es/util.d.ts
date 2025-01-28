import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';
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
/**
 * @typedef {ConfigProviderProps['media]} Media
 */
/**
 * getValue
 * @param {Media} media
 * @param {number} size
 * @return {string}
 */
export declare function getValue(media: ConfigProviderProps['media'], size: number | string): number | string;
