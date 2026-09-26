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
declare const History: HistoryFunction;
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
