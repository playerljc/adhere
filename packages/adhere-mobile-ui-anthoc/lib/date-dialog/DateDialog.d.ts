import type { DateDialogProps } from '../types';
import InternalDateDialog from './InternalDateDialog';
declare const DateDialogHOC: typeof InternalDateDialog & {
    defaultProps?: Partial<DateDialogProps>;
    override?: (props: Partial<DateDialogProps>) => Partial<DateDialogProps>;
};
export default DateDialogHOC;
