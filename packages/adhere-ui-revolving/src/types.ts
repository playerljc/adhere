import type { PropsWithoutRef, ReactNode, RefAttributes } from 'react';
import type { CSSProperties, NamedExoticComponent } from 'react';
import type { SwiperOptions } from 'swiper/types';

/**
 * Revolving 组件类型
 * 继承自 NamedExoticComponent，提供完整的类型支持
 */
export type RevolvingComponent = NamedExoticComponent<
  PropsWithoutRef<RevolvingProps> & RefAttributes<RevolvingRefHandle>
> & {
  // Item: typeof RevolvingItem;
};

/**
 * Revolving 组件引用句柄接口
 * 提供对轮播图控制的方法
 */
export interface RevolvingRefHandle {
  /** 开始自动播放 */
  start: () => void;
  /** 停止自动播放 */
  stop: () => void;
  /** 检查是否正在运行 */
  isRunning: () => boolean;
}

/**
 * 轮播图项目类型
 * 包含必要的 key 属性和其他配置
 */
export type RevolvingItem = RevolvingItemProps & {
  /** 唯一标识符 */
  key: string;
};

/**
 * 轮播方向类型
 */
export type RevolvingDirection = 'top' | 'right' | 'bottom' | 'left';

/**
 * Revolving 组件属性接口
 * @interface RevolvingProps
 */
export interface RevolvingProps {
  /** 外层容器类名 */
  className?: string;
  /** 外层容器样式 */
  style?: CSSProperties;
  /** Swiper 容器类名 */
  classNameWrapper?: string;
  /** Swiper 容器样式 */
  styleWrapper?: CSSProperties;
  /** 切换速度（毫秒） */
  speed?: number;
  /** 自动播放延迟时间（毫秒） */
  delay?: number;
  /** 轮播方向 */
  direction?: RevolvingDirection;
  /** 是否循环播放 */
  loop?: boolean;
  /** 是否在最后一页停止 */
  stopOnLastSlide?: boolean;
  /** 事件监听器 */
  listeners?: Record<string, (...args: any[]) => void>;
  /** 轮播项目列表 */
  items?: RevolvingItem[];
  /** Swiper 配置选项 */
  swiperConfig?: SwiperOptions;
}

/**
 * 轮播图项目属性接口
 */
export interface RevolvingItemProps {
  /** 项目类名 */
  className?: string;
  /** 项目样式 */
  style?: CSSProperties;
  /** 项目内容 */
  children?: ReactNode;
}
