import type { UseSetStateReturn } from './types';
/**
 * useSetState
 *
 * A useState-compatible hook with an optional post-commit callback.
 *
 * Supported forms:
 *   setState(value)
 *   setState(updater)
 *   setState(value, callback)
 *   setState(updater, callback)
 *
 * The callback receives the latest committed state, so it does not
 * need to rely on a stale render closure.
 *
 * Multiple updates can be batched by React; callbacks are queued and
 * are flushed after the commit.
 */
declare function useSetState<S>(initialState: S | (() => S)): UseSetStateReturn<S>;
export default useSetState;
