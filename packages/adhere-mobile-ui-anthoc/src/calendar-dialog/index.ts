import type { RangeCalendarDialogProps } from '../types';
import { createFactory } from '../util';
import CalendarDialog from './CalendarDialog';
import RangeCalendarDialog from './RangeCalendarDialog';

CalendarDialog.RangeCalendarDialog = createFactory<RangeCalendarDialogProps>(
  RangeCalendarDialog,
  {},
);

CalendarDialog.RangeCalendarDialog.displayName = 'RangeCalendarDialog';

export default CalendarDialog;
