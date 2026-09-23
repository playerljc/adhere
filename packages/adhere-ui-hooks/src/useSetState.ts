import { useEffect, useEffectEvent, useRef, useState } from 'react';

import type { SetStateCallback, SetStateWithCallback, UseSetStateReturn } from './types';

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
function useSetState<S>(initialState: S | (() => S)): UseSetStateReturn<S> {
  const [state, setState] = useState<S>(initialState);

  // Always points at the latest committed/rendered state.
  const stateRef = useRef(state);
  stateRef.current = state;

  // One queue entry per setState callback. This prevents callbacks
  // from being overwritten when several updates are batched together.
  const callbackQueueRef = useRef<SetStateCallback<S>[]>([]);

  const flushCallbacks = useEffectEvent(() => {
    const callbacks = callbackQueueRef.current;

    if (callbacks.length === 0) {
      return;
    }

    // Clear before invoking callbacks so callbacks that call setState
    // create a new queue for the next commit.
    callbackQueueRef.current = [];

    const latestState = stateRef.current;

    callbacks.forEach((callback) => {
      callback(latestState);
    });
  });

  // useEffect runs after the state update has committed.
  useEffect(() => {
    flushCallbacks();
  }, [state, flushCallbacks]);

  const dispatch = useEffectEvent<SetStateWithCallback<S>>((action, callback) => {
    if (callback) {
      callbackQueueRef.current.push(callback);
    }

    setState(action);
  });

  return [state, dispatch];
}

export default useSetState;
