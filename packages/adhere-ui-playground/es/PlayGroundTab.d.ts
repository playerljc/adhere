import React from 'react';
import APlayGround from './APlayGround';
import { PlayGroundTabProps, PlayGroundTabState } from './types';
/**
 * PlayGroundTab
 * @class PlayGroundTab
 * @classdesc PlayGroundTab
 */
declare class PlayGroundTab extends APlayGround<PlayGroundTabProps, PlayGroundTabState> {
    static displayName: string;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    /**
     * renderCodeView - 代码展示视图
     * @return {*}
     */
    protected renderCodeView(): React.JSX.Element;
    /**
     * getClipboardText
     */
    protected getClipboardText(): Promise<string>;
}
export declare const PlayGroundTabDefaultProps: PlayGroundTabProps;
export declare const PlayGroundTabPropTypes: {
    active: any;
    config: any;
    onChange: any;
    id: any;
    cardProps: any;
    isActive: any;
    expand: any;
};
export default PlayGroundTab;
