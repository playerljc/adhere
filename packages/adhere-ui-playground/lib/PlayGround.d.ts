import React from 'react';
import PropTypes, { Requireable } from 'prop-types';
import { IPlayGroundProps, IPlayGroundState } from './types';
/**
 * PlayGround
 * @class PlayGround
 * @classdesc PlayGround
 */
declare class PlayGround extends React.Component<IPlayGroundProps, IPlayGroundState> {
    static defaultProps: IPlayGroundProps;
    static propTypes: {
        expand: Requireable<boolean>;
        codeText: Requireable<string>;
    };
    state: {
        expand: boolean | undefined;
    };
    actionConfig: (() => JSX.Element)[];
    protected componentWillReceiveProps(nextProps: any): void;
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
     * renderCodeView - 代码展示视图
     * @return {*}
     */
    protected renderCodeView(): JSX.Element;
    /**
     * render
     * @return {*}
     */
    protected render(): JSX.Element;
}
export declare const PlayGroundDefaultProps: IPlayGroundProps;
export declare const PlayGroundPropTypes: {
    id: PropTypes.Requireable<string>;
    codeText: PropTypes.Requireable<string>;
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
export default PlayGround;
