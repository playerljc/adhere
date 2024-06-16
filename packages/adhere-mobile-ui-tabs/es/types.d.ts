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
export interface SystemCapsuleTabsProps {
    className?: string;
    style?: CSSProperties;
    innerClassName?: string;
    innerStyle?: CSSProperties;
    items?: (CapsuleTabProps & {
        key?: string | number;
    })[];
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
    items?: (JumboTabProps & {
        key?: string | number;
    })[];
    children?: ReactElement[];
}
export type SystemJumboTabsComponent = NamedExoticComponent<SystemJumboTabsProps> & {
    Tab: typeof JumboTabs.Tab;
};
export interface SystemSideTabsProps extends SideBarProps {
    className?: string;
    style?: CSSProperties;
    items?: (SideBarItemProps & {
        key?: string;
        children?: ReactElement<SystemSideTabProps>;
    })[];
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
    items?: (TabBarItemProps & {
        key?: string;
    })[];
    children?: ReactNode;
}
export interface SystemTabBarNavProps {
    activeKey?: string;
    onChange?: (params?: any) => void;
    items?: (TabBarItemProps & {
        key?: string;
    })[];
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
    arrowZIndex?: number;
}
export type SystemTabsComponent = NamedExoticComponent<SystemTabsProps> & {
    Tab: FC<SystemTabProps>;
};
export type SystemTabProps = TabProps;
export interface SystemTabArrowMoreProps {
    zIndex?: number;
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
