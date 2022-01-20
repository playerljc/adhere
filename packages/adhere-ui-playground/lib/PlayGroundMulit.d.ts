import React, { Requireable } from 'react';
import PropTypes from 'prop-types';
import { IPlayGroundMulitProps, IPlayGroundState } from './types';
declare class InferPropsInner<T> {
}
declare class InferType<T> {
}
/**
 * PlayGroundMulit
 * @class PlayGroundMulit
 * @classdesc PlayGroundMulit
 */
declare class PlayGroundMulit extends React.Component<IPlayGroundMulitProps, IPlayGroundState> {
    state: {
        expand: boolean;
    };
    actionConfig: (() => JSX.Element)[];
    static defaultProps: IPlayGroundMulitProps;
    static propTypes: {
        expand: Requireable<boolean>;
        config: Requireable<((InferPropsInner<Pick<{
            codeText: Requireable<string>;
            title: Requireable<NonNullable<InferType<Requireable<object> | Requireable<string>>>>;
        }, never>> & Partial<InferPropsInner<Pick<{
            codeText: Requireable<string>;
            title: Requireable<NonNullable<InferType<Requireable<object> | Requireable<string>>>>;
        }, 'codeText' | 'title'>>>) | undefined | null)[]>;
    };
    protected componentWillReceiveProps(nextProps: any): void;
    protected renderAction(): JSX.Element[];
    /**
     * renderClipboardAction
     */
    protected renderClipboardAction(): JSX.Element;
    /**
     * renderExpandAction
     */
    protected renderExpandAction(): JSX.Element;
    /**
     * renderCodeView - 代码展示视图
     * @param config
     * @param index
     */
    protected renderCodeView(config: any, index: any): JSX.Element;
    /**
     * render
     * @return {*}
     */
    protected render(): JSX.Element;
}
export declare const PlayGroundMulitDefaultProps: IPlayGroundMulitProps;
export declare const PlayGroundMulitPropTypes: {
    id: PropTypes.Requireable<string>;
    config: PropTypes.Requireable<(PropTypes.InferProps<{
        codeText: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<string | object>;
    }> | null | undefined)[]>;
    expand: PropTypes.Requireable<boolean>;
    cardProps: PropTypes.Requireable<PropTypes.InferProps<{
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
};
export default PlayGroundMulit;
