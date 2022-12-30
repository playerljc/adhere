import APlayGround from './APlayGround';
/**
 * PlayGround
 * @class PlayGround
 * @classdesc PlayGround
 */
declare class PlayGround extends APlayGround {
    /**
     * renderCodeView - 代码展示视图
     * @return {*}
     */
    protected renderCodeView(): JSX.Element;
    /**
     * getClipboardText
     */
    protected getClipboardText(): Promise<string>;
}
export default PlayGround;
