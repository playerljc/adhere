/// <reference types="react" />
/**
 * useTriggerQuery
 * @param defaultValue
 */
declare function useTriggerQuery<T extends Record<string, any>>(defaultValue: T): {
    setFieldsValue: import("use-immer").Updater<T>;
    fieldsValue: import("react").MutableRefObject<T>;
    searchParams: import("react").MutableRefObject<T>;
    search: (cb: any) => void;
    reset: (cb: any, defaultValue?: Record<string, string>) => void;
};
export default useTriggerQuery;
