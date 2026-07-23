import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { initHistoryListener } from '../src/index';

/**
 * 简易 History mock，兼容 initHistoryListener / HistoryBack
 */
export function useMockHistory(initialPath = '/') {
  const [pathname, setPathname] = useState(initialPath);
  const [logs, setLogs] = useState([]);
  const pathnameRef = useRef(initialPath);
  const listenersRef = useRef([]);
  const stackRef = useRef([initialPath]);

  const pushLog = useCallback((message) => {
    setLogs((prev) => [`${new Date().toLocaleTimeString()} ${message}`, ...prev].slice(0, 12));
  }, []);

  const notify = useCallback((path, action) => {
    listenersRef.current.forEach((listener) => {
      listener({ pathname: path }, action);
    });
  }, []);

  const history = useMemo(
    () => ({
      get location() {
        return { pathname: pathnameRef.current };
      },
      push(path) {
        stackRef.current.push(path);
        pathnameRef.current = path;
        setPathname(path);
        pushLog(`history.push(${path})`);
        notify(path, 'PUSH');
      },
      replace(path) {
        if (stackRef.current.length) {
          stackRef.current[stackRef.current.length - 1] = path;
        } else {
          stackRef.current.push(path);
        }
        pathnameRef.current = path;
        setPathname(path);
        pushLog(`history.replace(${path})`);
        notify(path, 'REPLACE');
      },
      back() {
        if (stackRef.current.length <= 1) {
          pushLog('history.back() ignored (stack empty)');
          return;
        }
        stackRef.current.pop();
        const path = stackRef.current[stackRef.current.length - 1];
        pathnameRef.current = path;
        setPathname(path);
        pushLog(`history.back() -> ${path}`);
        notify(path, 'POP');
      },
      listen(listener) {
        listenersRef.current.push(listener);
        return () => {
          listenersRef.current = listenersRef.current.filter((item) => item !== listener);
        };
      },
    }),
    [notify, pushLog],
  );

  return {
    history,
    pathname,
    logs,
    pushLog,
    getBrowserStack: () => [...stackRef.current],
  };
}

export function useHistoryStackListener(history) {
  useEffect(() => initHistoryListener(history), [history]);
}
