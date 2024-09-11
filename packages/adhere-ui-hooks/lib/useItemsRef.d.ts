/**
 * useItemsRef
 * @description 存储列表ref的hooks
 */
declare function useItemsRef<T>(): {
    get(key: string | symbol): T | undefined;
    set(key: string | symbol, value: T): Map<string | symbol, T>;
};
export default useItemsRef;
