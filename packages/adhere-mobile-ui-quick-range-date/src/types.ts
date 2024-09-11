import type { CSSProperties } from 'react';
import { ReactNode } from 'react';

import type {
  CalendarModalProps,
  CheckboxCheckListProps,
  ModalTriggerPromptProps,
} from '@baifendian/adhere-mobile-ui-anthoc/es/types';
import type {
  QuickRangeDateComponent as AdhereQuickRangeDateComponent,
  QuickRangeDateProps as AdhereQuickRangeDateProps,
} from '@baifendian/adhere-ui-quick-range-date/es/types';
import { DateValue, QuickRangeDateChange } from '@baifendian/adhere-ui-quick-range-date/src/types';

export type QuickRangeDateProps = Omit<
  AdhereQuickRangeDateProps,
  'rangePickerProps' | 'radioGroupProps' | 'className' | 'style' | 'children'
> & {
  className?: string;
  style?: CSSProperties;
  innerClassName?: string;
  innerStyle?: CSSProperties;
  calendarModalProps: CalendarModalProps;
  checkboxCheckListProps: CheckboxCheckListProps;
  modalTriggerPromptProps: ModalTriggerPromptProps<string>;
  children?: (params: {
    originDefaultElement: ReactNode;
    defaultElement: ReactNode;
    value?: DateValue;
    onChange?: QuickRangeDateChange;
  }) => ReactNode;
};

/**
 * QuickRangeDateComponent
 */
export type QuickRangeDateComponent = AdhereQuickRangeDateComponent;
