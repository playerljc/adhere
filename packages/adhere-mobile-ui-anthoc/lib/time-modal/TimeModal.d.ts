import type { TimeModalProps } from '../types';
import InternalTimeModal from './InternalTimeModal';
declare const TimeModalHOC: typeof InternalTimeModal & {
    defaultProps?: Partial<TimeModalProps>;
};
export default TimeModalHOC;
