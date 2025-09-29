import type { TimeModalProps } from '../types';
import InternalTimeModal from './InternalTimeModal';
declare const TimeModalHOC: typeof InternalTimeModal & {
    defaultProps?: Partial<TimeModalProps>;
    override?: (props: Partial<TimeModalProps>) => Partial<TimeModalProps>;
};
export default TimeModalHOC;
