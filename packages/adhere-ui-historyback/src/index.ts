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
 * import historyBack, { initHistoryListener } from '@baifendian/adhere-ui-historyback';
 *
 * const history = useHistory();
 * const location = useLocation();
 *
 * useEffect(() => initHistoryListener(history), [history]);
 *
 * historyBack(history, location.pathname, '/dashboard');
 * ```
 */

import HistoryBack, {
  clearHistoryStack,
  getHistoryStack,
  initHistoryListener,
} from './HistoryBack';

export default HistoryBack;

export { initHistoryListener, getHistoryStack, clearHistoryStack };

export type { HistoryFunction, HistoryObject, LocationObject } from './types';
