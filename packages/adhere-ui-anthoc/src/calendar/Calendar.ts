import { Calendar } from 'antd';
import type { CalendarProps } from 'antd';

import { createFactory } from '../util';

const CalendarHOC: typeof Calendar & {
  defaultProps?: Partial<CalendarProps<any>>;
} = createFactory<CalendarProps<any>>(Calendar, {});

CalendarHOC.displayName = 'Calendar';

export default CalendarHOC;