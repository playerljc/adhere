import PropTypes from 'prop-types';
import React from 'react';
import APlayGround from './APlayGround';
import { PlayGroundMultiProps, PlayGroundMultiState } from './types';
/**
 * PlayGroundMulti
 * @class PlayGroundMulti
 * @classdesc PlayGroundMulti
 */
declare class PlayGroundMulti extends APlayGround<PlayGroundMultiProps, PlayGroundMultiState> {
    configMap: Map<string, {
        render: (config: any, index: number) => React.ReactElement;
        getCodeText: (config: any) => string;
    }>;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    /**
     * getClipboardText
     * @return Promise<string>
     */
    protected getClipboardText(e: React.MouseEvent): Promise<string>;
    /**
     * renderCodeView - 代码展示视图
     * @param config
     * @param index
     * <CodePanel {...config} />
     */
    protected renderCodePanelView(config: any, index: any): React.JSX.Element;
    /**
     * renderCodeView
     */
    protected renderCodeView(): React.JSX.Element;
}
export declare const PlayGroundMultiDefaultProps: PlayGroundMultiProps;
export declare const PlayGroundMultiPropTypes: {
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
    config: PropTypes.Requireable<(NonNullable<PropTypes.InferProps<{
        codeText: PropTypes.Requireable<string>;
        theme: PropTypes.Requireable<string>;
    }> | PropTypes.InferProps<{
        active: PropTypes.Requireable<string>;
        config: PropTypes.Requireable<(PropTypes.InferProps<{
            className: PropTypes.Requireable<string>;
            style: PropTypes.Requireable<object>;
            key: PropTypes.Requireable<string>;
            title: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
            codeText: PropTypes.Requireable<string>;
            theme: PropTypes.Requireable<string>;
        }> | null | undefined)[]>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
    }> | null | undefined> | null | undefined)[]>;
};
export default PlayGroundMulti;
