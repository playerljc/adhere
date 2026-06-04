import type { FormTabsErrorField, FormTabsNamePath, SegmentedFormTab, UseFormTabs } from './types';
/**
 * 判断 tabs 配置的 fieldName 是否与校验错误 name 匹配。
 *
 * 支持：
 * - 普通字段 / 嵌套对象：完全相等，或 error 以 field 为前缀（如 user → user.name）
 * - Form.List：error 路径中的纯数字段视为 list 下标，可与 field 中省略的下标对齐
 *   例：field ['users', 'name'] 匹配 error ['users', 0, 'name']
 * - 显式通配：field 中的 '*' 匹配 error 中的任意单段（含 list 下标）
 *   例：field ['users', '*', 'name'] 同上
 */
export declare function namePathMatchesError(fieldName: FormTabsNamePath, errorName: FormTabsNamePath): boolean;
/**
 * 按 tabs 配置顺序，找到第一个包含校验失败字段的分段 key
 */
export declare function findFirstTabKeyWithErrors(errorFields: FormTabsErrorField[] | undefined, tabs: SegmentedFormTab[]): string | null;
/**
 * Segmented 多页签与单 Form 联动：校验失败时按 tabs 顺序切换到首个有错误的页签。
 *
 * 支持 Form.List：fieldNames 可写 list 根路径 `['users']`，或省略下标的子字段 `['users', 'name']`、
 * `['users', '*', 'name']`（与 antd 报错路径 `['users', 0, 'name']` 对齐）。
 *
 * @example
 * ```tsx
 * const tabs = useMemo(
 *   () => [
 *     { key: 'a', fieldNames: ['checkList'] },
 *     { key: 'b', fieldNames: [['users', 'name']] },
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
