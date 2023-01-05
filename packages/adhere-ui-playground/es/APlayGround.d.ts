import PropTypes from 'prop-types';
import React, { Requireable } from 'react';
import { PlayGroundProps, PlayGroundState } from './types';
/**
 * APlayGround
 * @class APlayGround
 * @classdesc APlayGround
 */
declare abstract class APlayGround<P extends PlayGroundProps = PlayGroundProps, S extends PlayGroundState = PlayGroundState> extends React.PureComponent<P, S> {
    protected isFirst: boolean;
    protected clipboardRef: React.RefObject<HTMLDivElement>;
    protected actionConfig: (() => JSX.Element)[];
    static defaultProps: PlayGroundProps;
    static propTypes: {
        cardProps: any;
        expand: Requireable<boolean>;
        id: any;
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
    protected renderAction(): JSX.Element[];
    /**
     * renderClipboardAction
     */
    protected renderClipboardAction(): JSX.Element;
    /**
     * renderExpandAction
     * @return {*}
     */
    protected renderExpandAction(): JSX.Element;
    /**
     * render
     * @return {*}
     */
    render(): JSX.Element;
}
export declare const APlayGroundDefaultProps: PlayGroundProps;
export declare const APlayGroundPropTypes: {
    id: PropTypes.Requireable<string>;
    cardProps: PropTypes.Requireable<PropTypes.InferProps<{
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        headerClassName: PropTypes.Requireable<string>;
        headerStyle: PropTypes.Requireable<object>;
        bodyClassName: PropTypes.Requireable<string>;
        bodyStyle: PropTypes.Requireable<object>;
        actionClassName: PropTypes.Requireable<string>;
        actionStyle: PropTypes.Requireable<object>;
        title: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
        extra: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        actions: PropTypes.Requireable<PropTypes.ReactNodeLike[]>;
        description: PropTypes.Requireable<PropTypes.InferProps<{
            title: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
            info: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
        }>>;
    }>>;
    isActive: PropTypes.Requireable<boolean>;
    expand: PropTypes.Requireable<boolean>;
};
export default APlayGround;
