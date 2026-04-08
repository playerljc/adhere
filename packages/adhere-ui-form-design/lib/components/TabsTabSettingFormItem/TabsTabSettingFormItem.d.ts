import React from 'react';
import type { I18nValue } from '../../types';
export interface TabsTabSettingItem {
    id: string;
    /** 对应 antd Tabs item 的 key */
    key: string;
    /** 标签文案，支持国际化 */
    label?: I18nValue;
    disabled?: boolean;
    forceRender?: boolean;
    destroyOnHidden?: boolean;
    closable?: boolean;
}
export interface TabsTabSettingFormItemProps {
    value?: TabsTabSettingItem[];
    onChange?: (value: TabsTabSettingItem[]) => void;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: React.NamedExoticComponent<TabsTabSettingFormItemProps>;
export default _default;
