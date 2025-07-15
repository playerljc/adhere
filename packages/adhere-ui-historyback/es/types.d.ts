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
}
/**
 * Function type for handling history back navigation
 * @param history - History object for navigation control
 * @param routePath - Fallback route path when no history available
 */
export type HistoryFunction = (history: HistoryObject, routePath?: string) => void;
