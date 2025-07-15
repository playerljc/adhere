import PropTypes from 'prop-types';
import React, { Requireable } from 'react';
import type { PlayGroundProps, PlayGroundState } from './types';
export declare const selectPrefix = "adhere-ui-playground";
/**
 * PlayGround抽象基类
 * @abstract APlayGround
 * @description PlayGround组件的抽象基类，提供通用的功能实现，包括代码展示、复制、展开/收起等功能
 * @template P - 属性类型，继承自PlayGroundProps
 * @template S - 状态类型，继承自PlayGroundState
 * @example
 * ```tsx
 * class MyPlayGround extends APlayGround<MyProps, MyState> {
 *   protected renderCodeView(): React.ReactElement {
 *     return <div>代码视图</div>;
 *   }
 *
 *   protected getClipboardText(): Promise<string> {
 *     return Promise.resolve('代码内容');
 *   }
 * }
 * ```
 */
declare abstract class APlayGround<P extends PlayGroundProps = PlayGroundProps, S extends PlayGroundState = PlayGroundState> extends React.PureComponent<P, S> {
    /** 是否首次渲染标识 */
    protected isFirst: boolean;
    /** 剪贴板引用 */
    protected clipboardRef: React.RefObject<HTMLDivElement>;
    /** 操作配置列表 */
    protected actionConfig: (() => React.ReactNode)[];
    /** 默认属性 */
    static defaultProps: PlayGroundProps;
    /** 属性类型定义 */
    static propTypes: {
        id: Requireable<string>;
        cardProps: Requireable<object>;
        expand: Requireable<boolean>;
        isActive: Requireable<boolean>;
    };
    /**
     * 构造函数
     * @param props - 组件属性
     */
    constructor(props: P);
    /**
     * 组件即将接收新属性时的处理
     * @param nextProps - 新的属性
     */
    componentWillReceiveProps(nextProps: Readonly<P>): void;
    /**
     * 组件即将更新时的处理
     * @param nextProps - 新的属性
     * @param nextState - 新的状态
     * @param nextContext - 新的上下文
     */
    componentWillUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
    /**
     * 渲染代码视图
     * @abstract renderCodeView
     * @description 子类必须实现的抽象方法，用于渲染代码视图
     * @returns React.ReactElement 代码视图的React元素
     */
    protected abstract renderCodeView(): React.ReactElement;
    /**
     * 获取剪贴板文本
     * @abstract getClipboardText
     * @description 子类必须实现的抽象方法，用于获取要复制的文本内容
     * @param e - 点击事件对象
     * @returns Promise<string> 要复制的文本内容
     */
    protected abstract getClipboardText(e: React.MouseEvent): Promise<string>;
    /**
     * 渲染操作按钮
     * @protected renderAction
     * @description 渲染所有操作按钮，包括复制和展开/收起按钮
     * @returns ReactNode[] 操作按钮数组
     */
    protected renderAction(): React.ReactNode[];
    /**
     * 渲染复制按钮
     * @protected renderClipboardAction
     * @description 渲染复制到剪贴板的操作按钮
     * @returns React.ReactNode 复制按钮元素
     */
    protected renderClipboardAction(): React.ReactNode;
    /**
     * 渲染展开/收起按钮
     * @protected renderExpandAction
     * @description 渲染展开或收起代码视图的操作按钮
     * @returns React.ReactNode 展开/收起按钮元素
     */
    protected renderExpandAction(): React.ReactNode;
    /**
     * 处理复制按钮点击事件
     * @protected handleClipboardClick
     * @description 处理复制按钮的点击事件，将代码内容复制到剪贴板
     * @param e - 点击事件对象
     */
    protected handleClipboardClick: (e: React.MouseEvent) => Promise<void>;
    /**
     * 处理展开/收起按钮点击事件
     * @protected handleExpandClick
     * @description 处理展开/收起按钮的点击事件，切换代码视图的显示状态
     * @param e - 点击事件对象
     */
    protected handleExpandClick: (e: React.MouseEvent) => void;
    /**
     * 渲染组件
     * @returns JSX.Element 组件的渲染结果
     */
    render(): JSX.Element;
}
/**
 * 默认属性
 * @constant APlayGroundDefaultProps
 * @description APlayGround组件的默认属性配置
 */
export declare const APlayGroundDefaultProps: PlayGroundProps;
/**
 * 属性类型定义
 * @constant APlayGroundPropTypes
 * @description APlayGround组件的PropTypes定义
 */
export declare const APlayGroundPropTypes: {
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
};
export default APlayGround;
