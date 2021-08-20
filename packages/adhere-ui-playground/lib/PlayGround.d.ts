import React from 'react';
import { IPlayGroundProps, IPlayGroundState } from './types';
/**
 * PlayGround
 * @class PlayGround
 * @classdesc PlayGround
 */
declare class PlayGround extends React.Component<IPlayGroundProps, IPlayGroundState> {
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
export default PlayGround;
