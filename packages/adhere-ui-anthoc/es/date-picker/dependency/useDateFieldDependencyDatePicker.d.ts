import type { UseDateFieldDependencyDatePickerOptions } from '../types';
/**
 * useDateFieldDependencyDatePicker
 * @description 封装 DatePicker 的 dependencies 注册、disabledDate 合并与 onChange 同步
 */
export declare function useDateFieldDependencyDatePicker({ fieldKey, dependencies, value, onChange, disabledDate: userDisabledDate, }: UseDateFieldDependencyDatePickerOptions): {
    mergedDisabledDate: import("@rc-component/picker/es/interface").DisabledDate<import("dayjs").Dayjs> | undefined;
    handleChange: (date: import("dayjs").Dayjs | import("dayjs").Dayjs[] | null, dateString: string | string[] | null) => void;
};
