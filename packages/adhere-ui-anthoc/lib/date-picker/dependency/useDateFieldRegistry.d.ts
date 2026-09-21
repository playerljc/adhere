import type { DateFieldValue } from '../types';
/**
 * useDateFieldRegistry
 * @description 维护 DatePicker 字段值注册表，供 dependencies 在非 Form 或 form 未同步时读取
 *
 * registry 使用 ref 存储，避免频繁渲染；version 在值变化时递增，
 * 驱动 Provider 与 DatePicker 重新计算 mergedDisabledDate。
 */
export declare function useDateFieldRegistry(): {
    register: (fieldKey: string, value: DateFieldValue) => void;
    unregister: (fieldKey: string) => void;
    registryRef: import("react").RefObject<Record<string, DateFieldValue>>;
    version: number;
};
