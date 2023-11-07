/**
 * createFactory
 * @description - 创建一个组件的包装
 * @param Component
 * @param defaultProps
 * @return {function(*)}
 */
export declare function createFactory<P>(Component: any, defaultProps: Partial<P>): typeof Component & {
    defaultProps?: Partial<P>;
};
