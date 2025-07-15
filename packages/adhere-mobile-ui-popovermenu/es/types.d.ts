import type { PopoverProps } from 'antd-mobile';
import type { CSSProperties, NamedExoticComponent, PropsWithoutRef, ReactNode, ReactElement } from 'react';
/**
 * 弹出菜单项配置接口
 */
export interface PopoverMenuItemProps {
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: CSSProperties;
    /** 菜单项唯一标识 */
    key: string;
    /** 是否为叶子节点（没有子菜单） */
    isLeaf: boolean;
    /** 菜单项文本内容 */
    text?: ReactNode;
    /** 菜单项图标 */
    icon?: ReactNode;
    /** 是否禁用 */
    disabled?: boolean;
    /** 点击回调函数，返回 Promise */
    onClick?: () => Promise<any>;
    /** Popover 组件的额外属性 */
    popoverProps?: Omit<PopoverProps, 'content' | 'children'>;
    /** 子菜单项配置 */
    items?: PopoverMenuItemProps[];
}
/**
 * 弹出菜单组件属性接口
 */
export interface PopoverMenuProps {
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: CSSProperties;
    /** 菜单容器的自定义类名 */
    menuClassName?: string;
    /** 菜单容器的自定义样式 */
    menuStyle?: CSSProperties;
    /** 菜单展开方向 */
    direction?: 'vertical' | 'horizontal';
    /** 最大显示菜单项数量，超出后显示滚动条 */
    maxCount?: number;
    /** 菜单项配置数组 */
    items: PopoverMenuItemProps[];
    /** Popover 组件的额外属性 */
    popoverProps?: Omit<PopoverProps, 'content' | 'children'>;
    /** 触发弹出菜单的子元素 */
    children: ReactElement;
}
/**
 * 菜单容器组件属性接口
 */
export interface MenuProps {
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: CSSProperties;
    /** 菜单展开方向 */
    direction?: 'vertical' | 'horizontal';
    /** 菜单项配置数组 */
    items: PopoverMenuItemProps[];
    /** 最大显示菜单项数量 */
    maxCount?: number;
}
/**
 * 子菜单组件属性接口
 */
export type SubMenuProps = Omit<PopoverMenuItemProps, 'onClick'> & {
    /** 最大显示菜单项数量 */
    maxCount?: number;
    /** 菜单展开方向 */
    direction?: 'vertical' | 'horizontal';
};
/**
 * 菜单项组件属性接口
 */
export type MenuItemProps = Omit<PopoverMenuItemProps, 'children' | 'popoverProps'>;
/**
 * 弹出菜单组件类型
 */
export type PopoverMenuComponent = NamedExoticComponent<PropsWithoutRef<PopoverMenuProps>> & {
    /** 组件显示名称 */
    displayName: string;
};
