import React from 'react';
import APlayGround from './APlayGround';
import { PlayGroundTabMobileProps, PlayGroundTabMobileState } from './types';
/**
 * PlayGroundTabMobile
 * @class PlayGroundTabMobile
 * @classdesc PlayGroundTabMobile
 */
declare class PlayGroundTabMobile extends APlayGround<PlayGroundTabMobileProps, PlayGroundTabMobileState> {
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
    active: import("prop-types").Requireable<string>;
    config: import("prop-types").Requireable<(import("prop-types").InferProps<{
        className: import("prop-types").Requireable<string>;
        style: import("prop-types").Requireable<object>;
        key: import("prop-types").Requireable<string>;
        title: import("prop-types").Requireable<NonNullable<import("prop-types").ReactNodeLike>>;
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
        title: import("prop-types").Requireable<NonNullable<import("prop-types").ReactNodeLike>>;
        extra: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
        actions: import("prop-types").Requireable<import("prop-types").ReactNodeLike[]>;
        description: import("prop-types").Requireable<import("prop-types").InferProps<{
            title: import("prop-types").Requireable<NonNullable<import("prop-types").ReactNodeLike>>;
            info: import("prop-types").Requireable<NonNullable<import("prop-types").ReactNodeLike>>;
        }>>;
    }>>;
    isActive: import("prop-types").Requireable<boolean>;
    expand: import("prop-types").Requireable<boolean>;
};
export default PlayGroundTabMobile;
