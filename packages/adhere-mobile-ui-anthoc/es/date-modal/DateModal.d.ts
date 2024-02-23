import type { DateModalProps } from '../types';
import InternalDateModal from './InternalDateModal';
declare const DateModalHOC: typeof InternalDateModal & {
    defaultProps?: Partial<DateModalProps>;
};
export default DateModalHOC;
