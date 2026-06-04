import type { UseFormTabs } from './types';
/**
 * Segmented 多页签与单 Form 联动：校验失败时按 tabs 顺序切换到首个有错误的页签。
 *
 * @example
 * ```tsx
 * const tabs = useMemo(
 *   () => [
 *     { key: 'a', fieldNames: ['checkList'] },
 *     { key: 'b', fieldNames: ['judge'] },
 *   ],
 *   [],
 * );
 *
 * const { activeTab, setActiveTab, validateFields } = useFormTabs({
 *   form: formInstance,
 *   tabs,
 *   defaultTab: 'a',
 * });
 * ```
 */
declare const useFormTabs: UseFormTabs;
export default useFormTabs;
