/**
 * 加载锁管理 Hook
 * @returns 包含锁管理函数的对象
 */
declare function useLoadedLocks(): {
    lock: (key: string) => void;
    unLock: (key: string) => void;
    isLock: (key: string) => boolean;
};
export default useLoadedLocks;
