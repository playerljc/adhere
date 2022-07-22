import React from 'react';
import { IForceUpdateStates } from './types';
/**
 * ForceUpdate
 * @class ForceUpdate
 * @classdesc ForceUpdate
 */
declare class ForceUpdate extends React.Component<void, IForceUpdateStates> {
    state: {
        renderDOM: React.ReactNode;
    };
    /**
     * reMount
     * @description 重新渲染
     */
    reMount(): void;
    render(): React.ReactNode;
}
export default ForceUpdate;
