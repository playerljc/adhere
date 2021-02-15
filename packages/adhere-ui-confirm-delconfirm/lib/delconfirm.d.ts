import React from 'react';
import { IDelConfirmProps } from './types';
/**
 * DelConform
 * @class DelConform
 * @classdesc DelConform
 */
declare class DelConform extends React.Component<IDelConfirmProps, any> {
    static defaultProps: any;
    static propTypes: any;
    constructor(props: any);
    onClick(): void;
    render(): JSX.Element;
    /**
     * open
     * @param success - 成功的回调
     * @param zIndex - 层级
     */
    static open(success: any, zIndex: any): void;
}
export default DelConform;
