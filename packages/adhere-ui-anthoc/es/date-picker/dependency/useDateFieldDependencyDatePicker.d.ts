import type { UseDateFieldDependencyDatePickerOptions } from '../types';
/**
 * useDateFieldDependencyDatePicker
 * @description 封装 DatePicker 的 dependencies 注册、disabledDate 合并与 onChange 同步
 *
 * 工作流程：
 * 1. 挂载时将 fieldKey + value 注册到 Provider registry
 * 2. onChange 时同步更新 registry，便于非 Form 或 form 延迟同步场景
 * 3. 基于 dependencies 与 getFieldValue 合并出 mergedDisabledDate
 * 4. 卸载时 unregister，避免残留 fieldKey
 *
 * 未包裹 DateFieldDependencyProvider 时，dependencies 不生效，退化为普通 DatePicker。
 */
export declare function useDateFieldDependencyDatePicker({ fieldKey, dependencies, value, onChange, disabledDate: userDisabledDate, }: UseDateFieldDependencyDatePickerOptions): {
    mergedDisabledDate: import("@rc-component/picker/es/interface").DisabledDate<import("dayjs").Dayjs> | undefined;
    handleChange: (date: import("dayjs").Dayjs | import("dayjs").Dayjs[] | null, dateString: string | string[] | null) => void;
};
