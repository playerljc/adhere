import React, { MutableRefObject, RefObject } from 'react';
import type { OverlayProps, PositionConfig } from './types';
/**
 * 滑动布局Hook返回值接口
 */
interface UseSlideReturn {
    /** 获取动画持续时间 */
    getDuration: (time?: number | string | null | undefined) => number;
    /** 遮罩层元素引用 */
    maskEl: React.MutableRefObject<HTMLDivElement | undefined>;
}
/**
 * 滑动布局自定义Hook
 * 管理滑动面板的状态、动画和遮罩层
 *
 * @param props - 滑动布局属性
 * @param el - 滑动面板DOM元素引用
 * @param positionConfig - 位置配置对象
 * @returns 包含工具函数和遮罩层引用的对象
 *
 * @example
 * ```typescript
 * const { getDuration, maskEl } = useSlide(props, elRef, positionConfig);
 * ```
 */
export default function useSlide(props: OverlayProps, el: RefObject<HTMLDivElement | null>, positionConfig: MutableRefObject<PositionConfig>): UseSlideReturn;
export {};
