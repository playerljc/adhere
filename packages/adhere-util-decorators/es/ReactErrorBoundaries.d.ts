import React from 'react';
import type { ReactElement } from 'react';
import type { ReactComponent } from './types';
/**
 * React的边界错误捕获
 * @param Component
 */
declare function ReactErrorBoundariesHOC<ComponentProps>(Component: ReactComponent<ComponentProps>): React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
declare namespace ReactErrorBoundariesHOC {
    var setDefaultErrorUI: (defaultErrorUI: ReactElement) => void;
}
export default ReactErrorBoundariesHOC;
