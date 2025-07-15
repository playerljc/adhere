import { HistoryFunction, HistoryObject } from './types';

/**
 * Default fallback route path when no history is available
 */
const DEFAULT_ROUTE_PATH = '/';

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
const History: HistoryFunction = (history: HistoryObject, routePath: string = DEFAULT_ROUTE_PATH): void => {
  // Validate input parameters
  if (!history || typeof history.replace !== 'function') {
    throw new Error('History object with replace method is required');
  }

  if (typeof routePath !== 'string') {
    throw new Error('Route path must be a string');
  }

  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    console.warn('HistoryBack: Running in non-browser environment, using fallback route');
    history.replace(routePath);
    return;
  }

  // Check if browser history has more than one entry (current page + at least one previous page)
  if (window.history.length > 1) {
    try {
      window.history.back();
    } catch (error) {
      console.warn('HistoryBack: Failed to go back, using fallback route', error);
      history.replace(routePath);
    }
  } else {
    // No history available, redirect to fallback route
    history.replace(routePath);
  }
};

export default History;
