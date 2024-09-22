/**
 * useLoadedLocks
 */
declare function useLoadedLocks(): {
    lock: (key: any) => void;
    unLock: (key: any) => void;
    isLock: (key: any) => boolean;
};
export default useLoadedLocks;
