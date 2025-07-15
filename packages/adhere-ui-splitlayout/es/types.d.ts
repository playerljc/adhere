import type { CSSProperties, NamedExoticComponent } from 'react';
import type { TBLRCLayoutProps } from '@baifendian/adhere-ui-flexlayout/es/types';
import CBSplitLayout from './TRBLC/CBLayout';
import CBRSplitLayout from './TRBLC/CBRLayout';
import CRBSplitLayout from './TRBLC/CRBLayout';
import CRSplitLayout from './TRBLC/CRLayout';
import LBCSplitLayout from './TRBLC/LBCLayout';
import LCBSplitLayout from './TRBLC/LCBLayout';
import LCSplitLayout from './TRBLC/LCLayout';
import LCRBSplitLayout from './TRBLC/LCRBLayout';
import LCRSplitLayout from './TRBLC/LCRLayout';
import LRTCBSplitLayout from './TRBLC/LRTCBLayout';
import LTCBSplitLayout from './TRBLC/LTCBLayout';
import LTCSplitLayout from './TRBLC/LTCLayout';
import TBLCRSplitLayout from './TRBLC/TBLCRLayout';
import TCBSplitLayout from './TRBLC/TCBLayout';
import TCBRSplitLayout from './TRBLC/TCBRLayout';
import TCSplitLayout from './TRBLC/TCLayout';
import TCRSplitLayout from './TRBLC/TCRLayout';
import TLCSplitLayout from './TRBLC/TLCLayout';
import TLRCSplitLayout from './TRBLC/TLRCLayout';
import TRCSplitLayout from './TRBLC/TRCLayout';
/**
 * 拖拽事件参数接口
 */
export interface DragEventParams {
    /** 事件对象 */
    event: MouseEvent;
    /** 当前拖拽位置 */
    currentPosition: number;
    /** 起始位置 */
    startPosition: number;
    /** 变化量 */
    delta: number;
    /** 目标尺寸 */
    targetSize: number;
}
/**
 * 分割布局组件属性接口
 * 定义分割线的配置选项
 */
export interface SplitLayoutProps {
    /** 自定义CSS类名 */
    className?: string;
    /** 自定义样式 */
    style?: CSSProperties;
    /** 最大尺寸，支持像素值或百分比字符串 */
    maxSize?: string | number;
    /** 最小尺寸，支持像素值或百分比字符串 */
    minSize?: string | number;
    /** 是否可以拖拽的回调函数 */
    onCanDrag?: (params?: DragEventParams) => void;
    /** 拖拽开始时的回调函数 */
    onDragStarted?: (params?: DragEventParams) => void;
    /** 拖拽结束时的回调函数 */
    onDragFinished?: (params?: DragEventParams) => void;
    /** 拖拽过程中的回调函数 */
    onChange?: (params?: DragEventParams) => void;
    /** 鼠标离开分割线时的回调函数 */
    onOut?: (params?: DragEventParams) => void;
}
/**
 * 分割布局组件类型
 * 包含主组件和所有TRBLC布局变体
 */
export type SplitLayoutComponent = NamedExoticComponent<SplitLayoutProps> & {
    /** TRBLC布局组件集合 */
    TRBLC: {
        /** 中心-底部布局 */
        CBSplitLayout: typeof CBSplitLayout;
        /** 中心-底部-右侧布局 */
        CBRSplitLayout: typeof CBRSplitLayout;
        /** 中心-右侧-底部布局 */
        CRBSplitLayout: typeof CRBSplitLayout;
        /** 中心-右侧布局 */
        CRSplitLayout: typeof CRSplitLayout;
        /** 左侧-底部-中心布局 */
        LBCSplitLayout: typeof LBCSplitLayout;
        /** 左侧-中心-底部布局 */
        LCBSplitLayout: typeof LCBSplitLayout;
        /** 左侧-中心布局 */
        LCSplitLayout: typeof LCSplitLayout;
        /** 左侧-中心-右侧-底部布局 */
        LCRBSplitLayout: typeof LCRBSplitLayout;
        /** 左侧-右侧-顶部-中心-底部布局 */
        LRTCBSplitLayout: typeof LRTCBSplitLayout;
        /** 左侧-顶部-中心-底部布局 */
        LTCBSplitLayout: typeof LTCBSplitLayout;
        /** 左侧-顶部-中心布局 */
        LTCSplitLayout: typeof LTCSplitLayout;
        /** 左侧-中心-右侧布局 */
        LCRSplitLayout: typeof LCRSplitLayout;
        /** 顶部-底部-左侧-中心-右侧布局 */
        TBLCRSplitLayout: typeof TBLCRSplitLayout;
        /** 顶部-中心-底部-右侧布局 */
        TCBRSplitLayout: typeof TCBRSplitLayout;
        /** 顶部-中心布局 */
        TCSplitLayout: typeof TCSplitLayout;
        /** 顶部-中心-右侧布局 */
        TCRSplitLayout: typeof TCRSplitLayout;
        /** 顶部-左侧-中心布局 */
        TLCSplitLayout: typeof TLCSplitLayout;
        /** 顶部-左侧-右侧-中心布局 */
        TLRCSplitLayout: typeof TLRCSplitLayout;
        /** 顶部-右侧-中心布局 */
        TRCSplitLayout: typeof TRCSplitLayout;
        /** 顶部-中心-底部布局 */
        TCBSplitLayout: typeof TCBSplitLayout;
    };
};
/**
 * TBLRC分割布局属性接口
 * 扩展自TBLRCLayoutProps，添加分割线配置
 */
export interface TBLRCSplitLayoutProps extends TBLRCLayoutProps {
    /** 顶部分割线属性 */
    tSplitProps?: SplitLayoutProps;
    /** 底部分割线属性 */
    bSplitProps?: SplitLayoutProps;
    /** 左侧分割线属性 */
    lSplitProps?: SplitLayoutProps;
    /** 右侧分割线属性 */
    rSplitProps?: SplitLayoutProps;
}
/**
 * 方向属性配置接口
 */
export interface DirectionProps {
    /** 页面坐标属性名 */
    page: 'pageX' | 'pageY';
    /** 尺寸属性名 */
    dimension: 'width' | 'height';
    /** 偏移量属性名 */
    offset: 'offsetWidth' | 'offsetHeight';
}
/**
 * 方向配置映射
 */
export declare const directionProp: Record<'horizontal' | 'vertical', DirectionProps>;
/**
 * 分割线状态枚举
 */
export type SplitState = 'enter' | 'out' | 'down' | 'move';
/**
 * 固定元素位置枚举
 */
export type FixedElementPosition = 'prev' | 'next';
/**
 * 调整大小光标类型
 */
export type ResizeCursor = 'row-resize' | 'col-resize';
