import type { DateModalProps } from '../types';
import InternalDateModal from './InternalDateModal';
declare const DateModalHOC: typeof InternalDateModal & {
    defaultProps?: Partial<DateModalProps>;
    override?: (props: Partial<DateModalProps>) => Partial<DateModalProps>;
};
export default DateModalHOC;
