import React from 'react';
import { IImportantConfirmProps } from './types';
/**
 * ImportantConfirm
 * @class ImportantConfirm
 * @classdesc ImportantConfirm
 */
declare class ImportantConfirm extends React.Component<IImportantConfirmProps, any> {
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
export default ImportantConfirm;
