import React from 'react';
import APlayGround from './APlayGround';
import type { PlayGroundTabMobileProps, PlayGroundTabMobileState } from './types';
/**
 * PlayGroundTabMobile
 * @class PlayGroundTabMobile
 * @classdesc PlayGroundTabMobile
 */
declare class PlayGroundTabMobile extends APlayGround<PlayGroundTabMobileProps, PlayGroundTabMobileState> {
    static displayName: string;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    /**
     * renderAction
     */
    protected renderAction(): React.JSX.Element[];
    /**
     * renderCodeView - 代码展示视图
     * @return {*}
     */
    protected renderCodeView(): React.JSX.Element;
    /**
     * getClipboardText
     */
    protected getClipboardText(): Promise<string>;
    /**
     * render
     * @return {*}
     */
    render(): React.JSX.Element;
}
export declare const PlayGroundTabDefaultProps: PlayGroundTabMobileProps;
export declare const PlayGroundTabPropTypes: {
    active: any;
    config: any;
    onChange: any;
    id: any;
    cardProps: any;
    isActive: any;
    expand: any;
};
export default PlayGroundTabMobile;
