import React from 'react';
import type { FC } from 'react';

import type { RangeCalendarModalProps } from '../types';
import CalendarModal from './CalendarModal';

const RangeCalendarModal: FC<RangeCalendarModalProps> = (props) => (
  <CalendarModal {...props} selectionMode="range" />
);

export default RangeCalendarModal;
