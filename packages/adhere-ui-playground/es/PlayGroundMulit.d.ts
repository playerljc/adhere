import React from 'react';
import PropTypes from 'prop-types';
import APlayGround from './APlayGround';
import { IPlayGroundMulitProps } from './types';
/**
 * PlayGroundMulit
 * @class PlayGroundMulit
 * @classdesc PlayGroundMulit
 */
declare class PlayGroundMulit extends APlayGround {
    renderMap: Map<string, Function>;
    /**
     * renderCodeView - 代码展示视图
     * @param config
     * @param index
     *
     * <CodePanel {...config} />
     */
    protected renderCodePanelView(config: any, index: any): JSX.Element;
    protected renderCodeView(): React.ReactElement;
}
export declare const PlayGroundMulitDefaultProps: IPlayGroundMulitProps;
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
    config: PropTypes.Requireable<any[]>;
};
export default PlayGroundMulit;
