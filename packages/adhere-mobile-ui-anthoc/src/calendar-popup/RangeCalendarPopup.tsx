import React from 'react';
import type { FC } from 'react';

import type { RangeCalendarPopupProps } from '../types';
import CalendarPopup from './CalendarPopup';

const RangeCalendarPopup: FC<RangeCalendarPopupProps> = (props) => (
  <CalendarPopup {...props} selectionMode="range" />
);

export default RangeCalendarPopup;
