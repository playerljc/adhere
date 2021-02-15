import React from 'react';
import { IModalDialogProps } from './types';
export declare const selectorPrefix = "adhere-ui-messagedialog";
/**
 * ModalDialog
 * @class Modal
 * @classdesc Modal
 */
declare class ModalDialog extends React.Component<IModalDialogProps, any> {
    static defaultProps: any;
    static propTypes: any;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    /**
     * onClose
     * @param el
     */
    onClose(el: any): void;
    /**
     * renderCloseBtn
     * @return {ReactNode}
     */
    renderCloseBtn(): JSX.Element;
    render(): JSX.Element;
}
export default ModalDialog;
