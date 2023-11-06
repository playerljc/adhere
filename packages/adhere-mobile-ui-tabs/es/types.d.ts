import { CapsuleTabs, JumboTabs } from 'antd-mobile';
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
export interface SystemCapsuleTabsProps {
    className?: string;
    style?: CSSProperties;
    innerClassName?: string;
    innerStyle?: CSSProperties;
    children?: ReactElement[];
}
export type SystemCapsuleTabsComponent = NamedExoticComponent<SystemCapsuleTabsProps> & {
    Tab: typeof CapsuleTabs.Tab;
};
export interface SystemJumboTabsProps {
    className?: string;
    style?: CSSProperties;
    innerClassName?: string;
    innerStyle?: CSSProperties;
    children?: ReactElement[];
}
export type SystemJumboTabsComponent = NamedExoticComponent<SystemJumboTabsProps> & {
    Tab: typeof JumboTabs.Tab;
};
export interface SystemSideTabsProps {
    className?: string;
    style?: CSSProperties;
    activeKey?: string;
    defaultActiveKey?: string;
    onChange?: (params?: any) => void;
    children?: ReactElement[];
}
export type SystemSideTabsComponent = NamedExoticComponent<SystemSideTabsProps> & {
    Tab: FC<SystemSideTabProps>;
};
export interface SystemSideTabProps {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}
export interface SystemTabBarProps {
    className?: string;
    style?: CSSProperties;
    mainClassName?: string;
    mainStyle?: CSSProperties;
    bottomClassName?: string;
    bottomStyle?: CSSProperties;
    activeKey?: string;
    onChange?: (params?: any) => void;
    data?: TabBarItemProps[];
    children?: ReactNode;
}
export interface SystemTabBarNavProps {
    activeKey?: string;
    onChange?: (params?: any) => void;
    data?: TabBarItemProps[];
}
export interface SystemTabsProps extends TabsProps {
    className?: string;
    style?: CSSProperties;
    innerClassName?: string;
    innerStyle?: CSSProperties;
    showArrowMore?: boolean;
    swiper?: boolean;
    swiperProps?: SwiperProps;
    children?: ReactElement[];
}
export type SystemTabsComponent = NamedExoticComponent<SystemTabsProps> & {
    Tab: FC<SystemTabProps>;
};
export type SystemTabProps = TabProps;
export interface SystemTabArrowMoreProps {
    data?: {
        key?: any;
        title?: ReactNode;
    }[];
    defaultCollapsed?: boolean;
    activeKey?: string;
    swiper?: boolean;
    getActiveIndexByKey?: (activeKey?: string) => any;
    onChange?: (key?: any) => void;
    wrapRef?: RefObject<HTMLElement>;
}
export type TabsComponent = {
    CapsuleTabs: typeof MobileCapsuleTabs;
    JumboTabs: typeof MobileJumboTabs;
    SideTabs: typeof MobileSideTabs;
    TabBar: typeof MobileTabBar;
    Tabs: typeof MobileTabs;
};
