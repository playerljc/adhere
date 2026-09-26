/**
 * Location object interface
 */
export interface LocationObject {
  pathname: string;
  search?: string;
  hash?: string;
  state?: any;
}

/**
 * History object interface for navigation
 */
export interface HistoryObject {
  replace: (path: string) => void;
  push?: (path: string) => void;
  go?: (n: number) => void;
  back?: () => void;
  forward?: () => void;
  length?: number;
  location?: LocationObject;
  /**
   * Subscribe to navigation events.
   * Supports both callback shapes:
   * - React Router v5 / `history@4`: `(location, action) => void`
   * - React Router v6 / `history@5`: `(update: { action, location }) => void`
   */
  listen?: (listener: (location: any, action?: any) => void) => () => void;
}

/**
 * Function type for handling history back navigation
 * @param history - History object for navigation control
 * @param initialPathname - Initial pathname for sibling path comparison
 * @param routePath - Fallback route path when no history available (optional)
 */
export type HistoryFunction = (
  history: HistoryObject,
  initialPathname: string,
  routePath?: string,
) => void;
