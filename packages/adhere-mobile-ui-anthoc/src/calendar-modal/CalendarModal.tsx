import type { CalendarModalHOCComponent, CalendarModalProps } from '../types';
import { createFactory } from '../util';
import InternalCalendarModal from './InternalCalendarModal';

const CalendarModalHOC: CalendarModalHOCComponent = createFactory<CalendarModalProps>(
  InternalCalendarModal,
  {},
);

CalendarModalHOC.displayName = 'CalendarModal';

export default CalendarModalHOC;
