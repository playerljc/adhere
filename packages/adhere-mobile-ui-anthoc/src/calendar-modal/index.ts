import type { RangeCalendarModalProps } from '../types';
import { createFactory } from '../util';
import CalendarModal from './CalendarModal';
import RangeCalendarModal from './RangeCalendarModal';

CalendarModal.RangeCalendarModal = createFactory<RangeCalendarModalProps>(RangeCalendarModal, {});

CalendarModal.RangeCalendarModal.displayName = 'RangeCalendarModal';

export default CalendarModal;
