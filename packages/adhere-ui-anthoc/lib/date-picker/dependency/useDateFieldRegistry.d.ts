import type { DateFieldValue } from '../types';
/**
 * useDateFieldRegistry
 * @description 维护 DatePicker 字段值注册表，供 dependencies 读取
 */
export declare function useDateFieldRegistry(): {
    register: (fieldKey: string, value: DateFieldValue) => void;
    unregister: (fieldKey: string) => void;
    registryRef: import("react").RefObject<Record<string, DateFieldValue>>;
    version: number;
};
