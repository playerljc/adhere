/**
 * useItemsRef hook
 * @description 用于存储和管理列表项引用的 React Hook
 * @template T - 引用值的类型
 * @returns {UseItemsRef<T>} 返回引用管理对象
 *
 * @example
 * ```tsx
 * const itemsRef = useItemsRef<HTMLDivElement>();
 *
 * // 设置引用
 * itemsRef.set('item-1', divRef.current);
 *
 * // 获取引用
 * const element = itemsRef.get('item-1');
 *
 * // 获取所有 keys
 * const keys = Array.from(itemsRef.getKeys() || []);
 *
 * // 获取所有引用
 * const refs = Array.from(itemsRef.getRefs() || []);
 * ```
 */
declare function useItemsRef<T>(): {
    get: (key: string | symbol) => T | undefined;
    set: (key: string | symbol, value: T | null | undefined) => Map<string | symbol, T> | undefined;
    getKeys: () => IterableIterator<string | symbol> | undefined;
    getRefs: () => IterableIterator<T> | undefined;
};
export default useItemsRef;
