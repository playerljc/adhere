import { CSSProperties, ReactElement, ReactNode } from 'react';
import { Swiper } from 'swiper';

/**
 * SwipeOut 组件的属性接口
 * @interface SwipeOutProps
 */
export interface SwipeOutProps {
  /** 容器的 CSS 类名 */
  className?: string;
  /** 容器的内联样式 */
  style?: CSSProperties;
  /** 前置内容区域的 CSS 类名 */
  beforeClassName?: string;
  /** 前置内容区域的内联样式 */
  beforeStyle?: CSSProperties;
  /** 后置内容区域的 CSS 类名 */
  afterClassName?: string;
  /** 后置内容区域的内联样式 */
  afterStyle?: CSSProperties;
  /** 主内容区域的 CSS 类名 */
  contentClassName?: string;
  /** 主内容区域的内联样式 */
  contentStyle?: CSSProperties;
  /** 是否显示前置内容 */
  beforeShow?: boolean;
  /** 是否显示后置内容 */
  afterShow?: boolean;
  /** 滑动方向 */
  direction?: 'horizontal' | 'vertical';
  /** 前置内容渲染函数 */
  before?: () => ReactElement | null;
  /** 后置内容渲染函数 */
  after?: () => ReactElement | null;
  /** 滑动动画持续时间（毫秒） */
  duration?: number;
  /** Swiper 初始化完成回调 */
  onInit?: () => void;
  /** 滑动开始过渡回调 */
  slideChangeTransitionStart?: (activeIndex?: number) => void;
  /** 滑动结束过渡回调 */
  slideChangeTransitionEnd?: (activeIndex?: number) => void;
  /** 主内容 */
  children?: ReactNode;
}

/**
 * Swiper 实例的引用类型
 */
export type SwiperRef = Swiper | undefined;

/**
 * 滑动状态映射类型
 */
export type SlideStateMap = Map<string, number>;
