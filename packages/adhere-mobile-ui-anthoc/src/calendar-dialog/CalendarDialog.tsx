import type { CalendarDialogHOCComponent, CalendarDialogProps } from '../types';
import { createFactory } from '../util';
import InternalCalendarDialog from './InternalCalendarDialog';

const CalendarDialogHOC: CalendarDialogHOCComponent = createFactory<CalendarDialogProps>(
  InternalCalendarDialog,
  {},
);

CalendarDialogHOC.displayName = 'CalendarDialog';

export default CalendarDialogHOC;
