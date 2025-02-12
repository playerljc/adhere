import React from 'react';
import type { FC } from 'react';

import type { RangeCalendarDialogProps } from '../types';
import CalendarDialog from './CalendarDialog';

const RangeCalendarDialog: FC<RangeCalendarDialogProps> = (props) => (
  <CalendarDialog {...props} selectionMode="range" />
);

export default RangeCalendarDialog;
