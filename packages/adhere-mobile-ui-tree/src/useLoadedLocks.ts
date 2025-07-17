import { useRef } from 'react';

/**
 * useLoadedLocks
 */
function useLoadedLocks() {
  const lockMap = useRef(new Map<string, boolean>());

  function lock(key) {
    lockMap.current.set(key, true);
  }

  function unLock(key) {
    lockMap.current.set(key, false);
  }

  function isLock(key) {
    return !!lockMap.current.get(key);
  }

  return {
    lock,
    unLock,
    isLock,
  };
}

export default useLoadedLocks;
