import type { Rule } from '../../../../../components/RulesSettingFormItem';
import type { DesignItem, DesignValue, DesignValueProps, FieldType, I18nValue } from '../../../../../types';
export type GetItemByType = (type: FieldType) => DesignItem | undefined;
export type TemplateFieldOverrides = {
    formItemProps?: Partial<Omit<NonNullable<DesignValueProps['formItemProps']>, 'label' | 'rules'>> & {
        label?: I18nValue;
        rules?: Rule[];
        require?: boolean;
    };
    fieldProps?: Partial<DesignValueProps['fieldProps']> & {
        placeholder?: I18nValue;
        selectOptions?: {
            type: 'static' | 'dynamic';
            dataSource?: Array<{
                label: I18nValue;
                value: string | number;
                [key: string]: unknown;
            }>;
        };
    };
    styleProps?: DesignValueProps['styleProps'];
};
/**
 * 基于 DesignItem.defaultValue 合并 overrides，生成模板字段节点
 */
export declare function createTemplateField(getItemByType: GetItemByType, type: FieldType, overrides?: TemplateFieldOverrides): DesignValue;
