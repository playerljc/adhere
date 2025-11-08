import { Requireable } from 'prop-types';
import React from 'react';
import { PlayGroundProps, PlayGroundState } from './types';
export declare const selectPrefix = "adhere-ui-playground";
/**
 * APlayGround
 * @class APlayGround
 * @classdesc APlayGround
 */
declare abstract class APlayGround<P extends PlayGroundProps = PlayGroundProps, S extends PlayGroundState = PlayGroundState> extends React.PureComponent<P, S> {
    protected isFirst: boolean;
    protected clipboardRef: React.RefObject<HTMLDivElement | null>;
    protected actionConfig: (() => React.JSX.Element)[];
    static defaultProps: PlayGroundProps;
    static propTypes: {
        id: any;
        cardProps: any;
        expand: Requireable<boolean>;
        isActive: Requireable<boolean>;
    };
    /**
     * renderExpandAction
     * @description - 渲染代码视图
     * @return React.ReactElement
     */
    protected abstract renderCodeView(): React.ReactElement;
    /**
     * getClipboardText
     * @description - 获取复制的数据
     * @return Promise<string>
     */
    protected abstract getClipboardText(e: React.MouseEvent): Promise<string>;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    componentWillUpdate(nextProps: Readonly<PlayGroundProps>, nextState: Readonly<PlayGroundState>, nextContext: any): void;
    /**
     * renderAction
     */
    protected renderAction(): React.JSX.Element[];
    /**
     * renderClipboardAction
     */
    protected renderClipboardAction(): React.JSX.Element;
    /**
     * renderExpandAction
     * @return {*}
     */
    protected renderExpandAction(): React.JSX.Element;
    /**
     * render
     * @return {*}
     */
    render(): React.JSX.Element;
}
export declare const APlayGroundDefaultProps: PlayGroundProps;
export declare const APlayGroundPropTypes: {
    id: any;
    cardProps: any;
    isActive: any;
    expand: any;
};
export default APlayGround;
