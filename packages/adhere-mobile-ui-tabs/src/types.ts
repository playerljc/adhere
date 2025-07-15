import { CapsuleTabs, JumboTabs } from 'antd-mobile';
import type { CapsuleTabProps, JumboTabProps, SideBarItemProps, SideBarProps } from 'antd-mobile';
import type { SwiperProps } from 'antd-mobile/es/components/swiper/swiper';
import type { TabBarItemProps } from 'antd-mobile/es/components/tab-bar/tab-bar';
import type { TabProps, TabsProps } from 'antd-mobile/es/components/tabs/tabs';
import type { FC, NamedExoticComponent } from 'react';
import type { CSSProperties, ReactElement, ReactNode, RefObject } from 'react';

import MobileCapsuleTabs from './CapsuleTabs';
import MobileJumboTabs from './JumboTabs';
import MobileSideTabs from './SideTabs';
import MobileTabBar from './TabBar';
import MobileTabs from './Tabs';

/**
 * 胶囊标签页组件属性接口
 */
export interface SystemCapsuleTabsProps {
  /** 外层容器类名 */
  className?: string;
  /** 外层容器样式 */
  style?: CSSProperties;
  /** 内层容器类名 */
  innerClassName?: string;
  /** 内层容器样式 */
  innerStyle?: CSSProperties;
  /** 标签页配置项 */
  items?: (CapsuleTabProps & {
    /** 唯一标识 */
    key?: string | number;
  })[];
  /** 子元素 */
  children?: ReactElement[];
}

/**
 * 胶囊标签页组件类型
 */
export type SystemCapsuleTabsComponent = NamedExoticComponent<SystemCapsuleTabsProps> & {
  /** 标签页子组件 */
  Tab: typeof CapsuleTabs.Tab;
};

/**
 * 巨型标签页组件属性接口
 */
export interface SystemJumboTabsProps {
  /** 外层容器类名 */
  className?: string;
  /** 外层容器样式 */
  style?: CSSProperties;
  /** 内层容器类名 */
  innerClassName?: string;
  /** 内层容器样式 */
  innerStyle?: CSSProperties;
  /** 标签页配置项 */
  items?: (JumboTabProps & {
    /** 唯一标识 */
    key?: string | number;
  })[];
  /** 子元素 */
  children?: ReactElement[];
}

/**
 * 巨型标签页组件类型
 */
export type SystemJumboTabsComponent = NamedExoticComponent<SystemJumboTabsProps> & {
  /** 标签页子组件 */
  Tab: typeof JumboTabs.Tab;
};

/**
 * 侧边栏标签页组件属性接口
 */
export interface SystemSideTabsProps extends SideBarProps {
  /** 外层容器类名 */
  className?: string;
  /** 外层容器样式 */
  style?: CSSProperties;
  /** 侧边栏配置项 */
  items?: (SideBarItemProps & {
    /** 唯一标识 */
    key?: string;
    /** 子元素 */
    children?: ReactElement<SystemSideTabProps>;
  })[];
}

/**
 * 侧边栏标签页组件类型
 */
export type SystemSideTabsComponent = NamedExoticComponent<SystemSideTabsProps> & {
  /** 标签页子组件 */
  Tab: FC<SystemSideTabProps>;
};

/**
 * 侧边栏标签页子组件属性接口
 */
export interface SystemSideTabProps {
  /** 容器类名 */
  className?: string;
  /** 容器样式 */
  style?: CSSProperties;
  /** 子元素 */
  children?: ReactNode;
}

/**
 * 底部标签栏组件属性接口
 */
export interface SystemTabBarProps {
  /** 外层容器类名 */
  className?: string;
  /** 外层容器样式 */
  style?: CSSProperties;
  /** 包装器类名 */
  wrapperClassName?: string;
  /** 包装器样式 */
  wrapperStyle?: CSSProperties;
  /** 主内容区类名 */
  mainClassName?: string;
  /** 主内容区样式 */
  mainStyle?: CSSProperties;
  /** 底部区域类名 */
  bottomClassName?: string;
  /** 底部区域样式 */
  bottomStyle?: CSSProperties;
  /** 当前激活的标签页key */
  activeKey?: string;
  /** 标签页切换回调 */
  onChange?: (params?: any) => void;
  /** 标签页配置项 */
  items?: (TabBarItemProps & {
    /** 唯一标识 */
    key?: string;
  })[];
  /** 子元素 */
  children?: ReactNode;
}

/**
 * 底部标签栏导航组件属性接口
 */
export interface SystemTabBarNavProps {
  /** 当前激活的标签页key */
  activeKey?: string;
  /** 标签页切换回调 */
  onChange?: (params?: any) => void;
  /** 标签页配置项 */
  items?: (TabBarItemProps & {
    /** 唯一标识 */
    key?: string;
  })[];
}

/**
 * 标签页组件属性接口
 */
export interface SystemTabsProps extends TabsProps {
  /** 外层容器类名 */
  className?: string;
  /** 外层容器样式 */
  style?: CSSProperties;
  /** 内层容器类名 */
  innerClassName?: string;
  /** 内层容器样式 */
  innerStyle?: CSSProperties;
  /** 是否显示更多箭头 */
  showArrowMore?: boolean;
  /** 是否启用轮播模式 */
  swiper?: boolean;
  /** 轮播组件属性 */
  swiperProps?: SwiperProps;
  /** 子元素 */
  children?: ReactElement[];
  /** 箭头层级 */
  arrowZIndex?: number;
}

/**
 * 标签页组件类型
 */
export type SystemTabsComponent = NamedExoticComponent<SystemTabsProps> & {
  /** 标签页子组件 */
  Tab: FC<SystemTabProps>;
};

/**
 * 标签页子组件属性类型
 */
export type SystemTabProps = TabProps;

/**
 * 标签页更多箭头组件属性接口
 */
export interface SystemTabArrowMoreProps {
  /** 箭头层级 */
  zIndex?: number;
  /** 标签页数据 */
  data?: {
    /** 唯一标识 */
    key?: any;
    /** 标题 */
    title?: ReactNode;
  }[];
  /** 默认是否收起 */
  defaultCollapsed?: boolean;
  /** 当前激活的标签页key */
  activeKey?: string;
  /** 是否启用轮播模式 */
  swiper?: boolean;
  /** 根据key获取激活索引的方法 */
  getActiveIndexByKey?: (activeKey?: string) => any;
  /** 切换回调 */
  onChange?: (key?: any) => void;
  /** 包装器引用 */
  wrapRef?: RefObject<HTMLElement>;
}

/**
 * 标签页组件集合类型
 */
export type TabsComponent = {
  /** 胶囊标签页 */
  CapsuleTabs: typeof MobileCapsuleTabs;
  /** 巨型标签页 */
  JumboTabs: typeof MobileJumboTabs;
  /** 侧边栏标签页 */
  SideTabs: typeof MobileSideTabs;
  /** 底部标签栏 */
  TabBar: typeof MobileTabBar;
  /** 普通标签页 */
  Tabs: typeof MobileTabs;
};
