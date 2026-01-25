import { HistoryFunction, HistoryObject } from './types';

/**
 * Route history stack to record visited paths
 */
const historyStack: string[] = [];

/**
 * Store the unlisten function for cleanup
 */
let unlistenHistory: (() => void) | null = null;

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
 * Detect if using hash routing mode
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
  // Try to get from history.location first
  if (history.location && history.location.pathname) {
    // For hash mode, extract path from hash
    if (history.location.hash) {
      const hashPath = extractPathFromHash(history.location.hash);
      if (hashPath !== '/') {
        return hashPath;
      }
    }
    return history.location.pathname;
  }
  
  // Fallback to window.location
  if (typeof window !== 'undefined' && window.location) {
    // Check for hash mode
    if (isHashMode()) {
      return extractPathFromHash(window.location.hash);
    }
    return window.location.pathname;
  }
  
  return '/';
};

/**
 * Add path to history stack (push operation)
 * 
 * @param path - Path to add
 */
const addToStack = (path: string): void => {
  // Only add if different from top of stack
  if (historyStack.length === 0 || historyStack[historyStack.length - 1] !== path) {
    historyStack.push(path);
    console.log('HistoryStack [PUSH]:', [...historyStack]);
  }
};

/**
 * Replace top of history stack (replace operation)
 * 
 * @param path - Path to replace with
 */
const replaceInStack = (path: string): void => {
  if (historyStack.length > 0) {
    // Replace top element
    historyStack[historyStack.length - 1] = path;
    console.log('HistoryStack [REPLACE]:', [...historyStack]);
  } else {
    // If stack is empty, add instead
    historyStack.push(path);
    console.log('HistoryStack [REPLACE->PUSH]:', [...historyStack]);
  }
};

/**
 * Remove current path from history stack (back/pop operation)
 */
const popFromStack = (): void => {
  if (historyStack.length > 0) {
    historyStack.pop();
    console.log('HistoryStack [POP]:', [...historyStack]);
  }
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
 * - POP: Back/forward operations (remove from stack)
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
 * // push and replace are correctly identified and handled
 * history.push('/new-page');    // Stack: [..., '/new-page']
 * history.replace('/updated');  // Stack: [..., '/updated'] (replaced /new-page)
 * history.back();               // Stack: [...] (removed /updated)
 * ```
 */
export const initHistoryListener = (history: HistoryObject): (() => void) => {
  // Cancel existing listener if any
  if (unlistenHistory) {
    unlistenHistory();
  }

  // Record initial path
  const initialPath = getCurrentPath(history);
  addToStack(initialPath);

  // Listen to history changes (React Router v5/v6)
  if (typeof history.listen === 'function') {
    unlistenHistory = history.listen((location: any, action?: string) => {
      let newPath: string;
      
      if (typeof location === 'string') {
        newPath = location;
      } else if (location.hash) {
        // Hash mode: extract path from hash
        newPath = extractPathFromHash(location.hash);
      } else {
        // History mode: use pathname
        newPath = location.pathname || '/';
      }
      
      // Execute different stack operations based on action type
      // React Router v5: second parameter is action ('PUSH', 'REPLACE', 'POP')
      // React Router v6: location.action or second parameter
      const historyAction = action || (location && location.action);
      
      if (historyAction === 'REPLACE') {
        // Replace operation: replace top element
        replaceInStack(newPath);
      } else if (historyAction === 'POP') {
        // Pop operation (browser back/forward): remove top element
        popFromStack();
      } else {
        // Push operation (default): add to top
        addToStack(newPath);
      }
    });
  } else if (typeof window !== 'undefined') {
    const hashMode = isHashMode();
    
    if (hashMode) {
      // Hash mode: listen to hashchange event
      const handleHashChange = () => {
        const currentPath = extractPathFromHash(window.location.hash);
        
        // Determine if back/forward or new navigation
        const currentIndex = historyStack.indexOf(currentPath);
        
        if (currentIndex !== -1 && currentIndex < historyStack.length - 1) {
          // Path in stack and not at top, means back operation
          popFromStack();
        } else {
          // New path or forward, treat as push
          addToStack(currentPath);
        }
      };

      window.addEventListener('hashchange', handleHashChange);
      
      unlistenHistory = () => {
        window.removeEventListener('hashchange', handleHashChange);
      };
    } else {
      // History mode: listen to popstate event
      const handlePopState = () => {
        const currentPath = window.location.pathname;
        
        // Determine if back/forward or new navigation
        const currentIndex = historyStack.indexOf(currentPath);
        
        if (currentIndex !== -1 && currentIndex < historyStack.length - 1) {
          // Path in stack and not at top, means back operation
          popFromStack();
        } else {
          // New path or forward, treat as push
          addToStack(currentPath);
        }
      };

      window.addEventListener('popstate', handlePopState);
      
      unlistenHistory = () => {
        window.removeEventListener('popstate', handlePopState);
      };
    }
  }

  // Return unlisten function
  return () => {
    if (unlistenHistory) {
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
 * @param routePath - Target route path for fallback (no need for # prefix, auto-adapted)
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
 *   
 *   const handleBack = () => {
 *     // History mode will navigate to: /dashboard
 *     // Hash mode will navigate to: #/dashboard
 *     historyBack(history, '/dashboard');
 *   };
 *   
 *   return <button onClick={handleBack}>Back</button>;
 * };
 * ```
 * 
 * @throws {Error} When history object is invalid
 */
const History: HistoryFunction = (history: HistoryObject, routePath: string): void => {
  // Validate input parameters
  if (!history) {
    throw new Error('History object cannot be null');
  }

  if (!routePath || typeof routePath !== 'string') {
    throw new Error('routePath must be a valid string');
  }

  // Check if in browser environment
  if (typeof window === 'undefined') {
    console.warn('HistoryBack: Non-browser environment, using replace navigation');
    history.replace(routePath);
    return;
  }

  // Get current path
  const currentPath = getCurrentPath(history);
  
  // If stack is empty, warn and initialize
  if (historyStack.length === 0) {
    console.warn('HistoryBack: History stack is empty, recommend calling initHistoryListener first');
    addToStack(currentPath);
  }
  
  // Determine if can go back
  let canGoBack = false;
  
  // Condition 1: Has previous path (stack has at least 2 elements)
  if (historyStack.length >= 2) {
    // Get previous path (second from top)
    const previousPath = historyStack[historyStack.length - 2];
    
    // Condition 2: Current path must be sibling of previous path
    if (isSiblingPath(currentPath, previousPath)) {
      canGoBack = true;
    }
  }
  
  // Execute based on determination
  if (canGoBack) {
    try {
      // Execute back operation
      // Note: Stack update is handled automatically by listener (POP action)
      if (typeof history.back === 'function') {
        history.back();
      } else {
        // Fallback: use native back, manually update stack
        popFromStack();
        window.history.back();
      }
    } catch (error) {
      console.warn('HistoryBack: Back operation failed, using replace navigation', error);
      history.replace(routePath);
      // Stack update for replace is handled by listener (REPLACE action)
    }
  } else {
    // Cannot go back, execute replace to routePath
    history.replace(routePath);
    
    // Note: Stack update is handled automatically by listener (REPLACE action)
  }
};

/**
 * Get a copy of current history stack (for debugging)
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
  return [...historyStack];
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
  historyStack.length = 0;
  console.log('HistoryStack [CLEAR]:', []);
};

export default History;
