import { useRef } from 'react';

/**
 * 加载锁管理 Hook
 * @returns 包含锁管理函数的对象
 */
function useLoadedLocks() {
  const lockMap = useRef(new Map<string, boolean>());

  /**
   * 锁定指定键
   * @param key - 要锁定的键
   */
  function lock(key: string): void {
    lockMap.current.set(key, true);
  }

  /**
   * 解锁指定键
   * @param key - 要解锁的键
   */
  function unLock(key: string): void {
    lockMap.current.set(key, false);
  }

  /**
   * 检查指定键是否被锁定
   * @param key - 要检查的键
   * @returns 是否被锁定
   */
  function isLock(key: string): boolean {
    return !!lockMap.current.get(key);
  }

  return {
    lock,
    unLock,
    isLock,
  };
}

export default useLoadedLocks;
