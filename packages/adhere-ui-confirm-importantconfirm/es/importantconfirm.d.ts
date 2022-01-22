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
    onClick(): void;
    render(): JSX.Element;
    /**
     * open
     * @param success - 成功的回调
     * @param zIndex - 层级
     */
    static open(success: any, zIndex: any): void;
}
export default ImportantConfirm;
