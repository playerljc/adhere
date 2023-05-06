import React from 'react';
/**
 * React的边界错误捕获
 * @param Component
 */
declare const ReactErrorBoundariesHOC: {
    (Component: any): React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
    /**
     * setDefaultErrorUI - 设置缺省的错误UI
     * @param defaultErrorUI
     */
    setDefaultErrorUI(defaultErrorUI: React.ReactElement): void;
};
export default ReactErrorBoundariesHOC;
