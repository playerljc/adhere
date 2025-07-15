import { NamedExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { CSSProperties, ReactElement, ReactNode } from 'react';

import Item from './Item';

/**
 * StickupLayout 组件类型
 * 包含组件本身和 Item 子组件
 */
export type StickupLayoutComponent = NamedExoticComponent<
  PropsWithoutRef<StickupLayoutProps> & RefAttributes<StickupLayoutHandle>
> & {
  Item: typeof Item;
};

/**
 * StickupLayout 组件属性接口
 */
export interface StickupLayoutProps {
  /** 外层容器类名 */
  className?: string;
  /** 外层容器样式 */
  style?: CSSProperties;
  /** 固定头部容器类名 */
  fixedClassName?: string;
  /** 固定头部容器样式 */
  fixedStyle?: CSSProperties;
  /** 内容区域容器类名 */
  innerClassName?: string;
  /** 内容区域容器样式 */
  innerStyle?: CSSProperties;
  /** 当前激活项变化回调函数 */
  onChange?: (index: number) => void;
  /** 子元素，必须是 StickupLayoutItem 组件数组 */
  children: ReactElement<StickupLayoutItemProps>[] | null;
}

/**
 * StickupLayout 组件实例方法接口
 */
export interface StickupLayoutHandle {
  /** 刷新组件状态，重新计算索引 */
  refresh: () => void;
  /** 根据索引滚动到指定项 */
  scrollToByIndex: (index: number, duration?: number) => void;
  /** 根据头部元素滚动到指定项 */
  scrollToByHeaderEl: (headerEl: HTMLElement, duration?: number) => void;
}

/**
 * StickupLayoutItem 组件属性接口
 */
export interface StickupLayoutItemProps {
  /** 项容器类名 */
  className?: string;
  /** 项容器样式 */
  style?: CSSProperties;
  /** 头部标题内容 */
  title?: ReactNode;
  /** 内容区域 */
  content?: ReactNode;
}

/**
 * 索引项接口，用于记录每个粘性布局项的位置信息
 */
export interface IndexItem {
  /** 开始位置（像素） */
  start: number;
  /** 结束位置（像素） */
  end: number;
  /** 对应的 DOM 元素 */
  dom: HTMLElement;
  /** 索引值 */
  index: number;
}

/**
 * 滚动动画配置接口
 */
export interface ScrollAnimationConfig {
  /** 目标滚动位置 */
  targetTop: number;
  /** 动画持续时间（毫秒） */
  duration: number;
  /** 当前滚动位置 */
  currentTop: number;
  /** 滚动步长 */
  step: number;
}
