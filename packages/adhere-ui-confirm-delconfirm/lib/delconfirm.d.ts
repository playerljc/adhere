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
    onClick(e: any): void;
    render(): JSX.Element;
    /**
     * open
     */
    static open({ success, ...params }: {
        [x: string]: any;
        success: any;
    }): void;
}
export default DelConform;
