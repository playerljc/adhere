import { Calendar } from 'antd-mobile';
import type { CalendarProps } from 'antd-mobile';

import { createFactory } from '../util';

const CalendarHOC: typeof Calendar & {
  defaultProps?: Partial<CalendarProps>;
} = createFactory<CalendarProps>(Calendar, {});

CalendarHOC.displayName = 'Calendar';

export default CalendarHOC;
