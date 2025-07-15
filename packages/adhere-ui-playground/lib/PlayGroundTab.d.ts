import React from 'react';
import APlayGround from './APlayGround';
import type { PlayGroundTabProps, PlayGroundTabState } from './types';
/**
 * PlayGroundTab组件
 * @class PlayGroundTab
 * @description 带标签页的代码展示组件，支持多个代码标签页的切换展示
 * @extends APlayGround
 * @example
 * ```tsx
 * <PlayGroundTab
 *   config={[
 *     { key: 'js', title: 'JavaScript', codeText: 'console.log("JS")' },
 *     { key: 'ts', title: 'TypeScript', codeText: 'console.log("TS")' }
 *   ]}
 *   active="js"
 * >
 *   <div>代码演示内容</div>
 * </PlayGroundTab>
 * ```
 */
declare class PlayGroundTab extends APlayGround<PlayGroundTabProps, PlayGroundTabState> {
    static displayName: string;
    /**
     * 构造函数
     * @param props - 组件属性
     */
    constructor(props: PlayGroundTabProps);
    /**
     * 组件即将接收新属性时的处理
     * @param nextProps - 新的属性
     */
    componentWillReceiveProps(nextProps: Readonly<PlayGroundTabProps>): void;
    /**
     * 渲染代码展示视图
     * @protected renderCodeView
     * @description 渲染带标签页的代码面板，支持标签页切换
     * @returns React.ReactElement 代码展示视图
     */
    protected renderCodeView(): React.ReactElement;
    /**
     * 获取剪贴板文本内容
     * @protected getClipboardText
     * @description 获取当前激活标签页的代码文本内容
     * @returns Promise<string> 当前激活标签页的代码文本
     */
    protected getClipboardText(): Promise<string>;
}
export declare const PlayGroundTabDefaultProps: PlayGroundTabProps;
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
export default PlayGroundTab;
