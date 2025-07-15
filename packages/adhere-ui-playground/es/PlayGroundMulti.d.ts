import PropTypes from 'prop-types';
import React from 'react';
import APlayGround from './APlayGround';
import type { PlayGroundMultiProps, PlayGroundMultiState } from './types';
/**
 * 配置映射项接口
 * @interface ConfigMapItem
 * @description 定义配置映射项的结构
 */
interface ConfigMapItem {
    /** 渲染函数 */
    render: (config: any, index: number) => React.ReactElement;
    /** 获取代码文本函数 */
    getCodeText: (config: any) => string;
}
/**
 * PlayGroundMulti组件
 * @class PlayGroundMulti
 * @description 多配置代码展示组件，支持多种类型的代码展示配置
 * @extends APlayGround
 * @example
 * ```tsx
 * <PlayGroundMulti
 *   config={[
 *     { type: 'CodePanel', title: '代码1', codeText: 'console.log("1")' },
 *     { type: 'CodeTabPanel', title: '代码2', config: [...] }
 *   ]}
 * >
 *   <div>代码演示内容</div>
 * </PlayGroundMulti>
 * ```
 */
declare class PlayGroundMulti extends APlayGround<PlayGroundMultiProps, PlayGroundMultiState> {
    static displayName: string;
    /** 配置映射表 */
    configMap: Map<string, ConfigMapItem>;
    /**
     * 构造函数
     * @param props - 组件属性
     */
    constructor(props: PlayGroundMultiProps);
    /**
     * 组件即将接收新属性时的处理
     * @param nextProps - 新的属性
     */
    componentWillReceiveProps(nextProps: Readonly<PlayGroundMultiProps>): void;
    /**
     * 获取剪贴板文本内容
     * @protected getClipboardText
     * @description 通过右键菜单选择要复制的代码文本内容
     * @param e - 点击事件对象
     * @returns Promise<string> 选中的代码文本内容
     */
    protected getClipboardText(e: React.MouseEvent): Promise<string>;
    /**
     * 渲染代码面板视图
     * @protected renderCodePanelView
     * @description 渲染单个代码面板配置项
     * @param config - 配置项
     * @param index - 配置项索引
     * @returns React.ReactElement 代码面板视图
     */
    protected renderCodePanelView(config: any, index: number): React.ReactElement;
    /**
     * 渲染代码展示视图
     * @protected renderCodeView
     * @description 渲染多配置的代码展示视图
     * @returns React.ReactElement 代码展示视图
     */
    protected renderCodeView(): React.ReactElement;
}
export declare const PlayGroundMultiDefaultProps: PlayGroundMultiProps;
export declare const PlayGroundMultiPropTypes: {
    id: PropTypes.Requireable<string>;
    cardProps: PropTypes.Requireable<PropTypes.InferProps<{
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        headerClassName: PropTypes.Requireable<string>;
        headerStyle: PropTypes.Requireable<object>;
        bodyClassName: PropTypes.Requireable<string>;
        bodyStyle: PropTypes.Requireable<object>;
        actionClassName: PropTypes.Requireable<string>;
        actionStyle: PropTypes.Requireable<object>;
        title: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
        extra: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        actions: PropTypes.Requireable<PropTypes.ReactNodeLike[]>;
        description: PropTypes.Requireable<PropTypes.InferProps<{
            title: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
            info: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
        }>>;
    }>>;
    isActive: PropTypes.Requireable<boolean>;
    expand: PropTypes.Requireable<boolean>;
    config: PropTypes.Requireable<(NonNullable<PropTypes.InferProps<{
        codeText: PropTypes.Requireable<string>;
        theme: PropTypes.Requireable<string>;
    }> | PropTypes.InferProps<{
        active: PropTypes.Requireable<string>;
        config: PropTypes.Requireable<(PropTypes.InferProps<{
            className: PropTypes.Requireable<string>;
            style: PropTypes.Requireable<object>;
            key: PropTypes.Requireable<string>;
            title: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
            codeText: PropTypes.Requireable<string>;
            theme: PropTypes.Requireable<string>;
        }> | null | undefined)[]>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
    }> | null | undefined> | null | undefined)[]>;
};
export default PlayGroundMulti;
