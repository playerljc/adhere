import React from 'react';
import APlayGround from './APlayGround';
/**
 * PlayGround
 * @class PlayGround
 * @classdesc PlayGround
 */
declare class PlayGround extends APlayGround {
    static displayName: string;
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
export default PlayGround;
