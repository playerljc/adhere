import React from 'react';
import type { I18nValue } from '../../types';
export interface CollapsePanelSettingItem {
    id: string;
    /** 对应 antd Collapse item 的 key */
    key: string;
    /** 面板标题，支持国际化 */
    label?: I18nValue;
    forceRender?: boolean;
    destroyOnHidden?: boolean;
    showArrow?: boolean;
    /** 覆盖根级 collapsible */
    collapsible?: 'header' | 'icon' | 'disabled';
}
export interface CollapsePanelSettingFormItemProps {
    value?: CollapsePanelSettingItem[];
    onChange?: (value: CollapsePanelSettingItem[]) => void;
    onAdd?: () => void;
    onDelete?: (id: string) => void;
    onSortChange?: (originId: string, targetId: string) => void;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: React.NamedExoticComponent<CollapsePanelSettingFormItemProps>;
export default _default;
