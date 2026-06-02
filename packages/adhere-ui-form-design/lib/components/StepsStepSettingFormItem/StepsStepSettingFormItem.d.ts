import React from 'react';
import type { I18nValue } from '../../types';
export interface StepsStepSettingItem {
    id: string;
    /** 步骤标题，支持国际化，对应 antd Steps item.title */
    title?: I18nValue;
    /** 步骤描述，支持国际化，对应 antd Steps item.description */
    description?: I18nValue;
    disabled?: boolean;
}
export interface StepsStepSettingFormItemProps {
    value?: StepsStepSettingItem[];
    onChange?: (value: StepsStepSettingItem[]) => void;
    onAdd?: () => void;
    onDelete?: (id: string) => void;
    onSortChange?: (originId: string, targetId: string) => void;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: React.NamedExoticComponent<StepsStepSettingFormItemProps>;
export default _default;
