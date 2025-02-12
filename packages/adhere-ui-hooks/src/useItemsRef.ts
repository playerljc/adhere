import { useRef } from 'react';

/**
 * useItemsRef
 * @description 存储列表ref的hooks
 */
function useItemsRef<T>() {
  const itemsRef = useRef<Map<string | symbol, T> | null>(null);

  function getMap() {
    if (!itemsRef.current) {
      itemsRef.current = new Map<string | symbol, T>();
    }

    return itemsRef.current;
  }

  return {
    get(key: string | symbol) {
      const map = getMap();

      return map?.get(key);
    },
    set(key: string | symbol, value: T) {
      if (value) {
        return getMap()?.set(key, value);
      } else {
        getMap()?.delete(key);
        return getMap();
      }
    },
    getKeys() {
      return itemsRef.current?.keys();
    },
    getRefs() {
      return itemsRef.current?.values();
    },
  };
}

export default useItemsRef;
