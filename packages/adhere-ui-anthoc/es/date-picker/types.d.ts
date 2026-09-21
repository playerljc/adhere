import type { DatePickerProps as AntDatePickerProps } from 'antd';
import type { FormInstance } from 'antd/es/form';
import type { Dayjs } from 'dayjs';
import type { ReactNode } from 'react';
/** 单日期字段值，不包含 RangePicker 的数组形式 */
export type DateFieldValue = Dayjs | null | undefined;
export type DateFieldDisabledDate = AntDatePickerProps['disabledDate'];
export interface DatePickerProps extends Omit<AntDatePickerProps, 'value' | 'defaultValue'> {
    /** 当前 DatePicker 的唯一标识，用于 dependencies 相互制约；多实例场景需保证唯一 */
    fieldKey?: string;
    /** 依赖的其他 DatePicker 的 fieldKey 列表，通常指向同组的开始/结束字段 */
    dependencies?: string[];
    value?: DateFieldValue;
    defaultValue?: DateFieldValue;
}
/** DateFieldDependencyProvider 向下提供的 Context 能力 */
export interface DateFieldDependencyContextValue {
    /** 注册/更新某个 fieldKey 的当前值（非 Form 场景或 form 尚未同步时使用） */
    register: (fieldKey: string, value: DateFieldValue) => void;
    /** 组件卸载时移除 fieldKey */
    unregister: (fieldKey: string) => void;
    /** 按优先级读取依赖字段值：externalGetFieldValue > form > registry */
    getFieldValue: (fieldKey: string) => DateFieldValue;
    /** registry 变更版本号，用于触发 disabledDate 重算 */
    version: number;
}
export interface DateFieldDependencyProviderProps {
    children: ReactNode;
    /** 传入 form 后，优先从 form.getFieldValue 读取依赖字段值，并通过 useWatch 监听变化 */
    form?: FormInstance;
    /** 可选：外部取值函数，优先级高于 form 与 registry */
    getFieldValue?: (fieldKey: string) => DateFieldValue;
}
export interface UseDateFieldDependencyDatePickerOptions {
    fieldKey?: string;
    dependencies?: string[];
    value?: DateFieldValue;
    onChange?: AntDatePickerProps['onChange'];
    disabledDate?: DateFieldDisabledDate;
}
