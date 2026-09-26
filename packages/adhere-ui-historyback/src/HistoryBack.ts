import { HistoryFunction, HistoryObject } from './types';

/**
 * Route history entries, in the order they were visited.
 * `currentIndex` points at the entry that represents the current location.
 *
 * This "entries + pointer" model (instead of a plain push/pop stack) is what
 * lets us correctly resync on browser back, forward, and multi-step
 * `history.go(n)` navigations, which all surface as a single `POP` action.
 */
let entries: string[] = [];
let currentIndex = -1;

/**
 * Store the unlisten function for cleanup, plus a token to guard against a
 * stale cleanup (from an earlier `initHistoryListener` call) tearing down a
 * listener registered by a later call.
 */
let unlistenHistory: (() => void) | null = null;
let listenerToken = 0;

/**
 * Check if two paths are siblings
 * Sibling paths are defined as having the same parent path
 *
 * @param path1 - First path
 * @param path2 - Second path
 * @returns Whether the paths are siblings
 *
 * @example
 * isSiblingPath('/user/profile', '/user/settings') // true
 * isSiblingPath('/user/profile', '/admin/dashboard') // false
 * isSiblingPath('/home', '/about') // true (both under root)
 */
const isSiblingPath = (path1: string, path2: string): boolean => {
  // Remove trailing slash
  const normalizePath = (path: string) => path.replace(/\/$/, '') || '/';

  const normalizedPath1 = normalizePath(path1);
  const normalizedPath2 = normalizePath(path2);

  // Split paths into segments
  const segments1 = normalizedPath1.split('/').filter(Boolean);
  const segments2 = normalizedPath2.split('/').filter(Boolean);

  // If path depths are different, they are not siblings
  if (segments1.length !== segments2.length) {
    return false;
  }

  // Special handling for root path
  if (segments1.length === 0 && segments2.length === 0) {
    return true;
  }

  // If only one level deep, both are direct children of root
  if (segments1.length === 1) {
    return true;
  }

  // Compare all segments except the last one (parent path)
  for (let i = 0; i < segments1.length - 1; i++) {
    if (segments1[i] !== segments2[i]) {
      return false;
    }
  }

  return true;
};

/**
 * Detect if using hash routing mode.
 *
 * This is only a best-effort heuristic for the fallback path where no
 * `history` object with `.listen`/`.location` is available (raw
 * `window.location` access). It cannot reliably distinguish a hash-mode
 * route from an in-page anchor (e.g. `/user/profile#section`) - prefer
 * passing a real `history` object whenever possible.
 *
 * @returns Whether hash mode is enabled
 */
const isHashMode = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }

  // Check if URL contains # with content
  const hash = window.location.hash;
  return hash.length > 0 && (hash.startsWith('#/') || hash === '#');
};

/**
 * Extract path from hash
 * Example: #/user/profile -> /user/profile
 *
 * @param hash - location.hash value
 * @returns Extracted path
 */
const extractPathFromHash = (hash: string): string => {
  if (!hash || hash === '#') {
    return '/';
  }

  // Remove leading #
  let path = hash.replace(/^#/, '');

  // Remove query params and hash
  const questionMarkIndex = path.indexOf('?');
  if (questionMarkIndex !== -1) {
    path = path.substring(0, questionMarkIndex);
  }

  // Ensure path starts with /
  if (!path.startsWith('/')) {
    path = '/' + path;
  }

  return path;
};

/**
 * Get current path
 * Supports both history and hash modes
 *
 * @param history - History object
 * @returns Current path
 */
const getCurrentPath = (history: HistoryObject): string => {
  // A history object's `location.pathname` is already normalized by the
  // underlying router (both browser and hash history report the real
  // route here) - trust it directly instead of re-parsing `location.hash`,
  // which may just be an in-page anchor.
  if (history.location && typeof history.location.pathname === 'string') {
    return history.location.pathname || '/';
  }

  // Fallback to window.location when no history object/location is available.
  if (typeof window !== 'undefined' && window.location) {
    if (isHashMode()) {
      return extractPathFromHash(window.location.hash);
    }
    return window.location.pathname;
  }

  return '/';
};

/**
 * Extract a path string from a `history.listen` location payload.
 *
 * @param location - Location value (string or location-like object)
 * @returns Extracted path
 */
const extractPathFromLocation = (location: any): string => {
  if (typeof location === 'string') {
    return location;
  }

  if (location && typeof location.pathname === 'string') {
    return location.pathname || '/';
  }

  return '/';
};

/**
 * Normalize the arguments passed to a `history.listen` callback.
 *
 * - React Router v5 / `history@4`: callback receives `(location, action)`.
 * - React Router v6 / `history@5`: callback receives a single
 *   `{ action, location }` update object.
 *
 * @param update - First callback argument
 * @param legacyAction - Second callback argument (v5 style)
 * @returns Normalized `{ location, action }`
 */
const normalizeHistoryUpdate = (
  update: any,
  legacyAction?: string,
): { location: any; action?: string } => {
  if (update && typeof update === 'object' && update.location && typeof update.location === 'object') {
    // v6 style: single argument shaped like { action, location }
    return { location: update.location, action: update.action };
  }

  // v5 style: (location, action)
  return { location: update, action: legacyAction };
};

/**
 * Push a new entry onto the history timeline (truncates any "forward"
 * entries beyond the current pointer, matching real browser behavior).
 *
 * @param path - Path to add
 */
const pushEntry = (path: string): void => {
  entries = entries.slice(0, currentIndex + 1);
  entries.push(path);
  currentIndex = entries.length - 1;
};

/**
 * Replace the entry at the current pointer.
 *
 * @param path - Path to replace with
 */
const replaceEntry = (path: string): void => {
  if (currentIndex === -1) {
    pushEntry(path);
    return;
  }
  entries[currentIndex] = path;
};

/**
 * Resync the current pointer to match a path reached via a `POP`
 * navigation (browser back, forward, or a multi-step `history.go(n)`).
 *
 * Checks the immediate neighbors first (the common single-step case), then
 * searches the rest of the timeline. If the path can't be found at all
 * (e.g. we started tracking after the browser already navigated away from
 * it), it's treated as a new entry so the pointer never goes stale.
 *
 * @param path - Path the browser navigated to
 */
const resyncToPath = (path: string): void => {
  if (currentIndex > 0 && entries[currentIndex - 1] === path) {
    currentIndex -= 1;
    return;
  }

  if (currentIndex >= 0 && currentIndex < entries.length - 1 && entries[currentIndex + 1] === path) {
    currentIndex += 1;
    return;
  }

  for (let i = currentIndex - 1; i >= 0; i--) {
    if (entries[i] === path) {
      currentIndex = i;
      return;
    }
  }

  for (let i = currentIndex + 1; i < entries.length; i++) {
    if (entries[i] === path) {
      currentIndex = i;
      return;
    }
  }

  pushEntry(path);
};

/**
 * Initialize history listener
 *
 * Sets up a listener to automatically track route changes in the history stack.
 * Should be called once at application startup.
 * Supports both history and hash modes.
 *
 * Full support for browser history mechanism:
 * - PUSH: Add new record to history stack
 * - REPLACE: Replace current record (doesn't increase stack length)
 * - POP: Back/forward/`go(n)` operations (resync stack pointer)
 *
 * Safe to call from multiple places (e.g. more than one component effect):
 * each call replaces the active listener, and each returned cleanup only
 * tears down the listener it actually registered - it won't accidentally
 * kill a listener registered by a later call.
 *
 * @param history - History object from React Router
 * @returns Unlisten function for cleanup
 *
 * @example
 * ```typescript
 * import { initHistoryListener } from '@adhere/ui-historyback';
 *
 * // Initialize at app entry point (automatically recognizes push/replace)
 * const App = () => {
 *   const history = useHistory();
 *
 *   useEffect(() => {
 *     const unlisten = initHistoryListener(history);
 *     return unlisten; // Cleanup on unmount
 *   }, [history]);
 *
 *   return <div>App Content</div>;
 * };
 *
 * // push, replace, and back/forward are all correctly tracked
 * history.push('/new-page');    // Stack: [..., '/new-page']
 * history.replace('/updated');  // Stack: [..., '/updated'] (replaced /new-page)
 * history.back();               // Stack: [...] (pointer moved back one step)
 * ```
 */
export const initHistoryListener = (history: HistoryObject): (() => void) => {
  // Cancel existing listener if any
  if (unlistenHistory) {
    unlistenHistory();
    unlistenHistory = null;
  }

  const token = ++listenerToken;

  // Record initial path (only if we haven't tracked anything yet, so a
  // remount doesn't wipe out an already-in-progress timeline)
  if (currentIndex === -1) {
    pushEntry(getCurrentPath(history));
  }

  // Listen to history changes (React Router v5/v6)
  if (typeof history.listen === 'function') {
    unlistenHistory = history.listen((update: any, legacyAction?: string) => {
      const { location, action } = normalizeHistoryUpdate(update, legacyAction);
      const newPath = extractPathFromLocation(location);

      if (action === 'REPLACE') {
        replaceEntry(newPath);
      } else if (action === 'POP') {
        resyncToPath(newPath);
      } else {
        // Push operation (default)
        pushEntry(newPath);
      }
    });
  } else if (typeof window !== 'undefined') {
    const hashMode = isHashMode();

    if (hashMode) {
      // Hash mode: listen to hashchange event
      const handleHashChange = () => {
        resyncToPath(extractPathFromHash(window.location.hash));
      };

      window.addEventListener('hashchange', handleHashChange);

      unlistenHistory = () => {
        window.removeEventListener('hashchange', handleHashChange);
      };
    } else {
      // History mode: listen to popstate event
      const handlePopState = () => {
        resyncToPath(window.location.pathname);
      };

      window.addEventListener('popstate', handlePopState);

      unlistenHistory = () => {
        window.removeEventListener('popstate', handlePopState);
      };
    }
  }

  // Return unlisten function. Guarded by `token` so a stale cleanup from an
  // earlier call can't tear down a listener registered by a later call.
  return () => {
    if (listenerToken === token && unlistenHistory) {
      unlistenHistory();
      unlistenHistory = null;
    }
  };
};

/**
 * Smart history back navigation function
 *
 * This function implements intelligent back navigation:
 * 1. Maintains route history stack via listener (requires initHistoryListener)
 * 2. Checks if current path and previous path are siblings
 * 3. If there's a previous path and they're siblings, executes back
 * 4. Otherwise, executes replace to specified routePath
 *
 * Supports both history and hash modes:
 * - History mode: http://example.com/user/profile
 * - Hash mode: http://example.com/#/user/profile
 *
 * @param history - History object from React Router
 * @param initialPathname - Initial pathname at function entry for sibling path comparison
 * @param routePath - (Optional) Target route path for fallback (no need for # prefix, auto-adapted)
 *
 * @example
 * ```typescript
 * import historyBack, { initHistoryListener } from '@adhere/ui-historyback';
 *
 * // 1. Initialize listener at app entry (auto-adapts to history/hash mode)
 * const App = () => {
 *   const history = useHistory();
 *
 *   useEffect(() => {
 *     const unlisten = initHistoryListener(history);
 *     return unlisten;
 *   }, [history]);
 *
 *   return <Routes />;
 * };
 *
 * // 2. Use back navigation in components (same usage for both modes)
 * const MyComponent = () => {
 *   const history = useHistory();
 *   const location = useLocation();
 *
 *   const handleBackWithFallback = () => {
 *     // Pass current pathname, history object, and fallback route
 *     // History mode will navigate to: /dashboard
 *     // Hash mode will navigate to: #/dashboard
 *     historyBack(history, location.pathname, '/dashboard');
 *   };
 *
 *   const handleBackOnly = () => {
 *     // routePath is optional, will only execute back operation
 *     historyBack(history, location.pathname);
 *   };
 *
 *   return (
 *     <>
 *       <button onClick={handleBackWithFallback}>Back with Fallback</button>
 *       <button onClick={handleBackOnly}>Back Only</button>
 *     </>
 *   );
 * };
 * ```
 *
 * @throws {Error} When history object is invalid
 */
const History: HistoryFunction = (
  history: HistoryObject,
  initialPathname: string,
  routePath?: string,
): void => {
  // Validate input parameters
  if (!history) {
    throw new Error('History object cannot be null');
  }

  // Check if in browser environment
  if (typeof window === 'undefined') {
    console.warn('HistoryBack: Non-browser environment');
    if (routePath) {
      history.replace(routePath);
    }
    return;
  }

  // If stack is empty, warn and initialize
  if (currentIndex === -1) {
    console.warn(
      'HistoryBack: History stack is empty, recommend calling initHistoryListener first',
    );
    pushEntry(getCurrentPath(history));
  }

  // Determine if can go back
  let canGoBack = false;

  // Condition 1: Has previous path (pointer is past the first entry)
  if (currentIndex >= 1) {
    // Get previous path (entry right before the current one)
    const previousPath = entries[currentIndex - 1];

    // Condition 2: Initial pathname must be sibling of previous path
    if (isSiblingPath(initialPathname, previousPath)) {
      canGoBack = true;
    }
  }

  // Execute based on determination
  if (canGoBack) {
    try {
      // Execute back operation
      // Note: the stack pointer resyncs automatically via the active
      // listener (history.listen POP action, or the popstate/hashchange
      // fallback) once the browser actually navigates back.
      if (typeof history.back === 'function') {
        history.back();
      } else if (typeof window.history.back === 'function') {
        window.history.back();
      } else {
        throw new Error('No back navigation method available on history or window');
      }
    } catch (error) {
      console.warn('HistoryBack: Back operation failed', error);
      if (routePath) {
        console.warn('HistoryBack: Using replace navigation to', routePath);
        history.replace(routePath);
        // Stack update for replace is handled by listener (REPLACE action)
      }
    }
  } else {
    // Cannot go back
    if (routePath) {
      // Execute replace to routePath
      history.replace(routePath);
      // Note: Stack update is handled automatically by listener (REPLACE action)
    } else {
      console.warn('HistoryBack: Cannot go back and no routePath provided');
    }
  }
};

/**
 * Get a copy of current history stack (for debugging)
 *
 * The returned array only includes the "back" timeline up to the current
 * position (i.e. entries reachable by going back), matching the previous
 * stack-based contract: the last element is always the current path.
 *
 * @returns Copy of history stack array
 *
 * @example
 * ```typescript
 * import { getHistoryStack } from '@adhere/ui-historyback';
 *
 * const stack = getHistoryStack();
 * console.log('Current history stack:', stack);
 * ```
 */
export const getHistoryStack = (): string[] => {
  return entries.slice(0, currentIndex + 1);
};

/**
 * Clear history stack (for testing or reset)
 *
 * @example
 * ```typescript
 * import { clearHistoryStack } from '@adhere/ui-historyback';
 *
 * // Clear history records
 * clearHistoryStack();
 * ```
 */
export const clearHistoryStack = (): void => {
  entries = [];
  currentIndex = -1;
};

export default History;
