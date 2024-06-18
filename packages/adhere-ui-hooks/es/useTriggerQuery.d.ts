/**
 * useTriggerQuery
 * @param defaultValue
 */
declare function useTriggerQuery<T extends Record<string, any>>(defaultValue: T): {
    setFieldsValue: import("use-immer").Updater<T>;
    fieldsValue: T;
    searchParams: T;
    search: () => void;
    reset: () => void;
};
export default useTriggerQuery;
