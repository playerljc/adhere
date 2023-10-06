import type { SwiperProps } from 'antd-mobile/es/components/swiper/swiper';
import type { TabBarItemProps } from 'antd-mobile/es/components/tab-bar/tab-bar';
import type { TabProps, TabsProps } from 'antd-mobile/es/components/tabs/tabs';
import type { CSSProperties, ReactElement, ReactNode, RefObject } from 'react';
export interface SystemCapsuleTabsProps {
    className?: string;
    style?: CSSProperties;
    innerClassName?: string;
    innerStyle?: CSSProperties;
    children?: ReactElement[];
}
export interface SystemJumboTabsProps {
    className?: string;
    style?: CSSProperties;
    innerClassName?: string;
    innerStyle?: CSSProperties;
    children?: ReactElement[];
}
export interface SystemSideTabsProps {
    className?: string;
    style?: CSSProperties;
    activeKey?: string;
    defaultActiveKey?: string;
    onChange?: (params?: any) => void;
    children?: ReactElement[];
}
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
