import type { TimeModalProps } from '../types';
import { createFactory } from '../util';
import InternalTimeModal from './InternalTimeModal';

const TimeModalHOC: typeof InternalTimeModal & {
  defaultProps?: Partial<TimeModalProps>;
} = createFactory<TimeModalProps>(InternalTimeModal, {});

TimeModalHOC.displayName = 'TimeModal';

export default TimeModalHOC;
