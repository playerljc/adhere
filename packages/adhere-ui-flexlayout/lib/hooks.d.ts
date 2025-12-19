import React, { RefObject } from 'react';
import type { FixedProps, GutterType } from './types';
/**
 * 判断是否使用了栅格系统
 * @param {FixedProps} props - Fixed 组件属性
 * @returns {boolean} 是否使用栅格
 */
export declare const useGrid: (props: FixedProps) => boolean;
/**
 * 判断是否使用了间隙
 * @param {GutterType} gutter - 栅格间隙
 * @returns {boolean} 是否使用间隙
 */
export declare const useGap: (gutter: GutterType) => boolean;
/**
 * 触发器 Hook 参数
 */
interface UseTriggerParams extends Pick<FixedProps, 'trigger' | 'collapseDirection' | 'collapsedSize' | 'defaultCollapsible' | 'onCollapse'> {
    /** 元素引用 */
    elRef: RefObject<HTMLDivElement | null>;
    /** 选择器前缀 */
    selectorPrefix: string;
}
/**
 * 触发器 Hook 返回值
 */
interface UseTriggerReturn {
    /** 渲染触发器 */
    renderTrigger: () => React.ReactNode;
    /** 折叠样式 */
    collapseStyle: React.CSSProperties;
}
/**
 * 使用触发器 Hook
 * @param {UseTriggerParams} params - 触发器参数
 * @returns {UseTriggerReturn} 触发器相关状态和方法
 */
export declare const useTrigger: ({ trigger, collapseDirection, collapsedSize, defaultCollapsible, onCollapse, selectorPrefix, }: UseTriggerParams) => UseTriggerReturn;
export {};
