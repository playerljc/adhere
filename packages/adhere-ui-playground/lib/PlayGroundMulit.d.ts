import React from 'react';
import { IPlayGroundMulitProps, IPlayGroundState } from './types';
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
export default PlayGroundMulit;
