import React from 'react';
import type { TimePickerViewProps } from './types';
/**
 * TimePickerView 时间选择器组件
 *
 * 基于 antd-mobile 的 PickerView 组件封装的时间选择器，
 * 支持多种时间格式的选择，包括时:分:秒、时:分、时、分:秒、秒等格式。
 *
 * @example
 * ```tsx
 * import TimePickerView from '@baifendian/adhere-mobile-ui-time-picker-view';
 *
 * function App() {
 *   const [time, setTime] = useState(new Date());
 *
 *   return (
 *     <TimePickerView
 *       value={time}
 *       onChange={setTime}
 *       format="HH:mm:ss"
 *     />
 *   );
 * }
 * ```
 */
declare const TimePickerView: React.NamedExoticComponent<TimePickerViewProps>;
export default TimePickerView;
