import { HistoryFunction } from './types';
/**
 * History back navigation function
 *
 * This function handles browser history navigation with fallback support.
 * It first attempts to go back in browser history, and if no history is available,
 * it redirects to the specified fallback route.
 *
 * @param history - History object for navigation control (e.g., React Router history)
 * @param routePath - Fallback route path when no browser history is available (defaults to '/')
 *
 * @example
 * ```typescript
 * import historyBack from '@adhere/ui-historyback';
 *
 * // Basic usage
 * historyBack(history);
 *
 * // With custom fallback route
 * historyBack(history, '/dashboard');
 * ```
 *
 * @throws {Error} When history object is not provided or invalid
 */
declare const History: HistoryFunction;
export default History;
