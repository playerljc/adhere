import type { DatePickerProps as AntDatePickerProps } from 'antd';
import type { FormInstance } from 'antd/es/form';
import type { Dayjs } from 'dayjs';
import type { ReactNode } from 'react';
export type DateFieldValue = Dayjs | null | undefined;
export type DateFieldDisabledDate = AntDatePickerProps['disabledDate'];
export interface DatePickerProps extends Omit<AntDatePickerProps, 'value' | 'defaultValue'> {
    /** 当前 DatePicker 的唯一标识，用于 dependencies 相互制约 */
    fieldKey?: string;
    /** 依赖的其他 DatePicker 的 fieldKey 列表 */
    dependencies?: string[];
    value?: DateFieldValue;
    defaultValue?: DateFieldValue;
}
export interface DateFieldDependencyContextValue {
    register: (fieldKey: string, value: DateFieldValue) => void;
    unregister: (fieldKey: string) => void;
    getFieldValue: (fieldKey: string) => DateFieldValue;
    version: number;
}
export interface DateFieldDependencyProviderProps {
    children: ReactNode;
    /** 传入 form 后，从 form.getFieldValue 读取依赖字段值并监听变化 */
    form?: FormInstance;
    /** 可选：外部取值函数，优先级高于 Context 注册表 */
    getFieldValue?: (fieldKey: string) => DateFieldValue;
}
export interface UseDateFieldDependencyDatePickerOptions {
    fieldKey?: string;
    dependencies?: string[];
    value?: DateFieldValue;
    onChange?: AntDatePickerProps['onChange'];
    disabledDate?: DateFieldDisabledDate;
}
