import type { DateModalProps } from '../types';
import { createFactory } from '../util';
import InternalDateModal from './InternalDateModal';

const DateModalHOC: typeof InternalDateModal & {
  defaultProps?: Partial<DateModalProps>;
} = createFactory<DateModalProps>(InternalDateModal, {});

DateModalHOC.displayName = 'DateModal';

export default DateModalHOC;
