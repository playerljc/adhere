/**
 * 移动端快速日期范围选择器组件
 * 基于基础快速日期范围选择器，提供移动端优化的用户体验
 *
 * @example
 * ```tsx
 * import QuickRangeDate from '@baifendian/adhere-mobile-ui-quick-range-date';
 *
 * const App = () => {
 *   const [value, setValue] = useState();
 *
 *   return (
 *     <QuickRangeDate
 *       value={value}
 *       onChange={setValue}
 *       calendarModalProps={{}}
 *       checkboxCheckListProps={{}}
 *       modalTriggerPromptProps={{}}
 *     />
 *   );
 * };
 * ```
 */
import QuickRangeDate from './QuickRangeDate';
export type { QuickRangeDateProps, QuickRangeDateComponent } from './types';
export default QuickRangeDate;
