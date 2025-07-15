/**
 * @adhere/ui-historyback
 * 
 * A utility module for handling browser history navigation with fallback support.
 * Provides a clean API for going back in browser history or redirecting to a fallback route.
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
 */

import HistoryBack from './HistoryBack';

// Export the main function
export default HistoryBack;

// Export types for advanced usage
export type { HistoryFunction, HistoryObject } from './types';
