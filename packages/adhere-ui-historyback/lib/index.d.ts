/**
 * @adhere/ui-historyback
 *
 * Route history tracking and smart back navigation module.
 *
 * Main features:
 * 1. Automatically listen and record route changes
 * 2. Intelligently determine if back operation can be executed (based on sibling path relationship)
 * 3. Provide fallback (replace to specified path)
 * 4. Support both history and hash modes
 *
 * Routing mode support:
 * - History mode: http://example.com/user/profile
 * - Hash mode: http://example.com/#/user/profile
 *
 * @example
 * ```typescript
 * import historyBack, { initHistoryListener } from '@adhere/ui-historyback';
 *
 * // 1. Initialize listener at app entry (auto-detects history/hash mode)
 * const App = () => {
 *   const history = useHistory();
 *
 *   useEffect(() => {
 *     const unlisten = initHistoryListener(history);
 *     return unlisten; // Cleanup function
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
 *     // If previous path is sibling, go back; otherwise replace to /dashboard
 *     // History mode navigates to: /dashboard
 *     // Hash mode navigates to: #/dashboard
 *     historyBack(history, '/dashboard');
 *   };
 *
 *   return <button onClick={handleBack}>Back</button>;
 * };
 * ```
 */
import HistoryBack, { initHistoryListener } from './HistoryBack';
export default HistoryBack;
export { initHistoryListener };
export type { HistoryFunction, HistoryObject, LocationObject } from './types';
