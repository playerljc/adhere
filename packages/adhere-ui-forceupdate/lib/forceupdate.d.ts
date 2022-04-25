import React from 'react';
import { IForceUpdateStates, IForceUpdateProps } from './types';
/**
 * ForceUpdate
 * @class ForceUpdate
 * @classdesc ForceUpdate
 */
declare class ForceUpdate extends React.Component<Readonly<IForceUpdateProps<object>>, IForceUpdateStates> {
    state: {
        count: number;
        renderDOM: React.ReactNode;
    };
    shouldComponentUpdate(nextProps: Readonly<IForceUpdateProps<object>>, _nextState: any): boolean;
    componentWillUpdate(): void;
    render(): JSX.Element;
}
export default ForceUpdate;
