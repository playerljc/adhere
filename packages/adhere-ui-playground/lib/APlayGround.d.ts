import React from 'react';
import PropTypes from 'prop-types';
import { IPlayGroundProps, IPlayGroundState } from './types';
/**
 * APlayGround
 * @class APlayGround
 * @classdesc APlayGround
 */
declare abstract class APlayGround extends React.Component<IPlayGroundProps, IPlayGroundState> {
    static propTypes: {
        cardProps: any;
        expand: any;
        id: any;
        isActive: any;
        config: any;
    };
    static defaultProps: IPlayGroundProps;
    protected isFirst: boolean;
    protected clipboardRef: React.RefObject<HTMLElement>;
    protected state: {
        expand: boolean | undefined;
    };
    protected actionConfig: (() => JSX.Element)[];
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
    protected componentWillReceiveProps(nextProps: any): void;
    componentWillUpdate(nextProps: Readonly<IPlayGroundProps>, nextState: Readonly<IPlayGroundState>, nextContext: any): void;
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
    protected render(): JSX.Element;
}
export declare const APlayGroundDefaultProps: IPlayGroundProps;
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
        title: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        extra: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        actions: PropTypes.Requireable<PropTypes.ReactNodeLike[]>;
        description: PropTypes.Requireable<PropTypes.InferProps<{
            title: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            info: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        }>>;
    }>>;
    isActive: PropTypes.Requireable<boolean>;
    expand: PropTypes.Requireable<boolean>;
};
export default APlayGround;
