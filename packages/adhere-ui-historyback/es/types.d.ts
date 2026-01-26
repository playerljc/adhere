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
    listen?: (listener: (location: any) => void) => () => void;
}
/**
 * Function type for handling history back navigation
 * @param history - History object for navigation control
 * @param initialPathname - Initial pathname for sibling path comparison
 * @param routePath - Fallback route path when no history available (optional)
 */
export type HistoryFunction = (history: HistoryObject, initialPathname: string, routePath?: string) => void;
