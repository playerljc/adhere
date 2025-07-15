import { PropsWithoutRef, RefAttributes } from 'react';
import type { CSSProperties, NamedExoticComponent, ReactElement, ReactNode } from 'react';

import JdCategoryTabItem from './Item';

/**
 * JdCategoryTab组件的引用句柄接口
 * @interface JdCategoryTabRefHandle
 */
export interface JdCategoryTabRefHandle {
  /**
   * 滚动到指定key对应的菜单项
   * @param key - 目标菜单项的key
   * @param time - 滚动动画时长（毫秒），默认250ms
   * @param easing - 缓动函数，默认使用circular缓动
   */
  scrollTo: (key: string, time?: number, easing?: any) => void;
}

/**
 * JdCategoryTab组件类型定义
 * 包含组件本身和Item子组件
 */
export type JdCategoryTabComponent = NamedExoticComponent<
  PropsWithoutRef<JdCategoryTabProps> & RefAttributes<JdCategoryTabRefHandle>
> & {
  /** JdCategoryTab的Item子组件 */
  Item: typeof JdCategoryTabItem;
};

/**
 * JdCategoryTab组件属性接口
 * @interface JdCategoryTabProps
 */
export interface JdCategoryTabProps {
  /** 根容器的CSS类名 */
  className?: string;
  /** 根容器的内联样式 */
  style?: CSSProperties;
  /** 菜单容器的CSS类名 */
  menuClassName?: string;
  /** 菜单容器的内联样式 */
  menuStyle?: CSSProperties;
  /** 菜单内部容器的CSS类名 */
  menuInnerClassName?: string;
  /** 菜单内部容器的内联样式 */
  menuInnerStyle?: CSSProperties;
  /** 标签容器的CSS类名 */
  tabClassName?: string;
  /** 标签容器的内联样式 */
  tabStyle?: CSSProperties;
  /** 菜单项的CSS类名 */
  menuItemClassName?: string;
  /** 菜单项的内联样式 */
  menuItemStyle?: CSSProperties;
  /** 子组件，通常是JdCategoryTab.Item组件 */
  children?: ReactNode;
  /** 菜单数据数组 */
  menuData?: MenuDataItem[];
  /** 当前激活的菜单项key */
  activeKey: string;
  /** 自定义菜单项渲染函数 */
  renderMenuItem?: (item: MenuDataItem) => ReactNode;
  /** 菜单项切换回调函数 */
  onChange?: (currentKey: string) => void;
  /** 菜单项切换前的回调函数，返回false可阻止切换 */
  onBeforeChange?: (activeKey: string, currentKey: string) => boolean;
}

/**
 * JdCategoryTab.Item组件属性接口
 * @interface JdCategoryTabItemProps
 */
export interface JdCategoryTabItemProps {
  /** 标签项的CSS类名 */
  className?: string;
  /** 标签项的内联样式 */
  style?: CSSProperties;
  /** 标签项内容 */
  children?: ReactNode;
}

/**
 * 菜单数据项接口
 * @interface MenuDataItem
 */
export interface MenuDataItem {
  /** 菜单项的唯一标识 */
  key: string;
  /** 菜单项显示名称 */
  name: string;
  /** 菜单项的额外属性 */
  properties?: Record<string, any>;
}
