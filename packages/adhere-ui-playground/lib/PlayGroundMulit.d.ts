import React from 'react';
import PropTypes from 'prop-types';
import APlayGround from './APlayGround';
import { PlayGroundMulitProps, PlayGroundMulitState } from './types';
/**
 * PlayGroundMulit
 * @class PlayGroundMulit
 * @classdesc PlayGroundMulit
 */
declare class PlayGroundMulit extends APlayGround<PlayGroundMulitProps, PlayGroundMulitState> {
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
    protected renderCodePanelView(config: any, index: any): JSX.Element;
    /**
     * renderCodeView
     */
    protected renderCodeView(): JSX.Element;
}
export declare const PlayGroundMulitDefaultProps: PlayGroundMulitProps;
export declare const PlayGroundMulitPropTypes: {
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
    config: PropTypes.Requireable<(PropTypes.InferProps<{
        codeText: PropTypes.Requireable<string>;
        theme: PropTypes.Requireable<string>;
    }> | PropTypes.InferProps<{
        active: PropTypes.Requireable<string>;
        config: PropTypes.Requireable<(PropTypes.InferProps<{
            key: PropTypes.Requireable<string>;
            title: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            codeText: PropTypes.Requireable<string>;
            theme: PropTypes.Requireable<string>;
        }> | null | undefined)[]>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
    }> | null | undefined)[]>;
};
export default PlayGroundMulit;
