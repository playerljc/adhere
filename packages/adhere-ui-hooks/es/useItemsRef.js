import { useRef } from 'react';
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
function useItemsRef() {
    var itemsRef = useRef(null);
    /**
     * 获取 Map 实例
     * @returns {Map<string | symbol, T>} Map 实例
     */
    function getMap() {
        if (!itemsRef.current) {
            itemsRef.current = new Map();
        }
        return itemsRef.current;
    }
    return {
        /**
         * 获取指定 key 的引用
         * @param {string | symbol} key - 引用键
         * @returns {T | undefined} 引用值
         */
        get: function (key) {
            var map = getMap();
            return map.get(key);
        },
        /**
         * 设置指定 key 的引用
         * @param {string | symbol} key - 引用键
         * @param {T | null | undefined} value - 引用值，如果为 null 或 undefined 则删除该引用
         * @returns {Map<string | symbol, T> | undefined} Map 实例
         */
        set: function (key, value) {
            var map = getMap();
            if (value != null) {
                return map.set(key, value);
            }
            else {
                map.delete(key);
                return map;
            }
        },
        /**
         * 获取所有 keys
         * @returns {IterableIterator<string | symbol> | undefined} keys 迭代器
         */
        getKeys: function () {
            var _a;
            return (_a = itemsRef.current) === null || _a === void 0 ? void 0 : _a.keys();
        },
        /**
         * 获取所有引用值
         * @returns {IterableIterator<T> | undefined} 引用值迭代器
         */
        getRefs: function () {
            var _a;
            return (_a = itemsRef.current) === null || _a === void 0 ? void 0 : _a.values();
        },
    };
}
export default useItemsRef;
