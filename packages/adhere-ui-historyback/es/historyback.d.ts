import { HistoryFunction, HistoryObject } from './types';
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
export declare const initHistoryListener: (history: HistoryObject) => (() => void);
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
declare const History: HistoryFunction;
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
export declare const getHistoryStack: () => string[];
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
export declare const clearHistoryStack: () => void;
export default History;
