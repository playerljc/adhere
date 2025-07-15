import React from 'react';
import APlayGround from './APlayGround';
import type { PlayGroundTabMobileProps, PlayGroundTabMobileState } from './types';
/**
 * PlayGroundTabMobile组件
 * @class PlayGroundTabMobile
 * @description 移动端标签页代码展示组件，支持二维码扫描和全屏预览
 * @extends APlayGround
 * @example
 * ```tsx
 * <PlayGroundTabMobile
 *   url="http://localhost:3000"
 *   config={[
 *     { key: 'js', title: 'JavaScript', codeText: 'console.log("JS")' }
 *   ]}
 *   active="js"
 * >
 *   <div>代码演示内容</div>
 * </PlayGroundTabMobile>
 * ```
 */
declare class PlayGroundTabMobile extends APlayGround<PlayGroundTabMobileProps, PlayGroundTabMobileState> {
    static displayName: string;
    /**
     * 构造函数
     * @param props - 组件属性
     */
    constructor(props: PlayGroundTabMobileProps);
    /**
     * 组件即将接收新属性时的处理
     * @param nextProps - 新的属性
     */
    componentWillReceiveProps(nextProps: Readonly<PlayGroundTabMobileProps>): void;
    /**
     * 渲染操作按钮
     * @protected renderAction
     * @description 渲染操作按钮，只显示第一个操作按钮
     * @returns ReactNode[] 操作按钮数组
     */
    protected renderAction(): React.ReactNode[];
    /**
     * 渲染代码展示视图
     * @protected renderCodeView
     * @description 渲染移动端标签页代码展示视图
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
    /**
     * 渲染组件
     * @returns JSX.Element 组件的渲染结果
     */
    render(): JSX.Element;
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
