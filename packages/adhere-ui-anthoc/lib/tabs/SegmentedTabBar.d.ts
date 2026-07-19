import React from 'react';
import type { CSSProperties, KeyboardEvent, MouseEvent, ReactNode } from 'react';
import type { SegmentedTabsProps } from '../types';
export type SegmentedTabBarProps = {
    id?: string;
    activeKey: string;
    tabPosition: 'top' | 'right' | 'bottom' | 'left';
    rtl?: boolean;
    extra?: SegmentedTabsProps['tabBarExtraContent'];
    editable?: {
        onEdit: (type: 'add' | 'remove', info: {
            key?: string;
            event: MouseEvent | KeyboardEvent;
        }) => void;
        showAdd?: boolean;
        removeIcon?: ReactNode;
        addIcon?: ReactNode;
    };
    locale?: {
        removeAriaLabel?: string;
        addAriaLabel?: string;
    };
    tabBarGutter?: number;
    onTabClick: (key: string, e: MouseEvent | KeyboardEvent) => void;
    onTabScroll?: (info: {
        direction: 'left' | 'right' | 'top' | 'bottom';
    }) => void;
    style?: CSSProperties;
    items?: SegmentedTabsProps['items'];
    size?: SegmentedTabsProps['size'];
    centered?: boolean;
    type?: SegmentedTabsProps['type'];
    swiperProps?: SegmentedTabsProps['tabBarSwiperProps'];
    className?: string;
};
/**
 * SegmentedTabBar
 * @description Segmented 外观的 TabBar，溢出时用 Swiper 横/纵滑动
 */
declare const SegmentedTabBar: React.NamedExoticComponent<SegmentedTabBarProps>;
export default SegmentedTabBar;
