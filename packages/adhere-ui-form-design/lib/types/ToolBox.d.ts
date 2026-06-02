import type { ReactNode } from 'react';
import type { IntlLanguage } from '@baifendian/adhere-ui-configprovider/es/types';
import type { FieldType } from './Field';
import type { Styles } from './types';
export type ToolBoxItem = {
    type: FieldType;
    icon?: ReactNode;
    label?: string | ReactNode;
    searchLabel?: string;
    tooltip?: string;
    disabled?: boolean;
    render?: (lang: IntlLanguage) => ReactNode;
};
export type ToolBoxGroup = {
    id: string;
    label: string | ReactNode | ((lang: IntlLanguage) => ReactNode);
    tooltip?: string | ((lang: IntlLanguage) => string);
    disabled?: boolean;
    columns?: number;
    items: ToolBoxItem[];
};
export type ToolboxProps = {
    toolBox: ToolBoxOption;
};
export type DraggableToolItemProps = {
    id: FieldType;
    disabled?: boolean;
    children: ReactNode;
    data?: ToolBoxItem;
};
export type ToolboxItemDragOverlayProps = {};
export type ToolboxItemProps = Styles & ToolBoxItem;
export type ToolBoxOption = ToolBoxGroup[];
