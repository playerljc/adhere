/// <reference types="react" />
import APlayGround from './APlayGround';
import { PlayGroundTabProps, PlayGroundTabState } from './types';
/**
 * PlayGroundTab
 * @class PlayGroundTab
 * @classdesc PlayGroundTab
 */
declare class PlayGroundTab extends APlayGround<PlayGroundTabProps, PlayGroundTabState> {
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
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
export declare const PlayGroundTabDefaultProps: PlayGroundTabProps;
export declare const PlayGroundTabPropTypes: {
    active: import("prop-types").Requireable<string>;
    config: import("prop-types").Requireable<(import("prop-types").InferProps<{
        key: import("prop-types").Requireable<string>;
        title: import("prop-types").Requireable<string | number | boolean | {} | import("prop-types").ReactElementLike | import("prop-types").ReactNodeArray>;
        codeText: import("prop-types").Requireable<string>;
        theme: import("prop-types").Requireable<string>;
    }> | null | undefined)[]>;
    onChange: import("prop-types").Requireable<(...args: any[]) => any>;
    id: import("prop-types").Requireable<string>;
    cardProps: import("prop-types").Requireable<import("prop-types").InferProps<{
        className: import("prop-types").Requireable<string>;
        style: import("prop-types").Requireable<object>;
        headerClassName: import("prop-types").Requireable<string>;
        headerStyle: import("prop-types").Requireable<object>;
        bodyClassName: import("prop-types").Requireable<string>;
        bodyStyle: import("prop-types").Requireable<object>;
        actionClassName: import("prop-types").Requireable<string>;
        actionStyle: import("prop-types").Requireable<object>;
        title: import("prop-types").Requireable<string | number | boolean | {} | import("prop-types").ReactElementLike | import("prop-types").ReactNodeArray>;
        extra: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
        actions: import("prop-types").Requireable<import("prop-types").ReactNodeLike[]>;
        description: import("prop-types").Requireable<import("prop-types").InferProps<{
            title: import("prop-types").Requireable<string | number | boolean | {} | import("prop-types").ReactElementLike | import("prop-types").ReactNodeArray>;
            info: import("prop-types").Requireable<string | number | boolean | {} | import("prop-types").ReactElementLike | import("prop-types").ReactNodeArray>;
        }>>;
    }>>;
    isActive: import("prop-types").Requireable<boolean>;
    expand: import("prop-types").Requireable<boolean>;
};
export default PlayGroundTab;
