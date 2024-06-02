import type { PopoverProps } from 'antd-mobile';
import type { CSSProperties, NamedExoticComponent, PropsWithoutRef, ReactNode } from 'react';
export interface PopoverMenuItemProps {
    className?: string;
    style?: CSSProperties;
    key: string;
    isLeaf: boolean;
    text?: ReactNode;
    icon?: ReactNode;
    disabled?: boolean;
    onClick?: () => Promise<any>;
    popoverProps?: Omit<PopoverProps, 'content' | 'children'>;
    items?: PopoverMenuItemProps[];
}
export interface PopoverMenuProps {
    className?: string;
    style?: CSSProperties;
    menuClassName?: string;
    menuStyle?: CSSProperties;
    direction?: 'vertical' | 'horizontal';
    maxCount?: number;
    items: PopoverMenuItemProps[];
    popoverProps?: Omit<PopoverProps, 'content' | 'children'>;
    children?: any;
}
export interface MenuProps {
    className?: string;
    style?: CSSProperties;
    direction?: 'vertical' | 'horizontal';
    items: PopoverMenuItemProps[];
    maxCount?: number;
}
export type SubMenuProps = Omit<PopoverMenuItemProps, 'onClick'> & {
    maxCount?: number;
    direction?: 'vertical' | 'horizontal';
};
export type MenuItemProps = Omit<PopoverMenuItemProps, 'children' | 'popoverProps'>;
export type PopoverMenuComponent = NamedExoticComponent<PropsWithoutRef<PopoverMenuItemProps>> & {};
