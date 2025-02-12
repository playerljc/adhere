import type { TimeDialogProps } from '../types';
import InternalTimeDialog from './InternalTimeDialog';
declare const TimeDialogHOC: typeof InternalTimeDialog & {
    defaultProps?: Partial<TimeDialogProps>;
};
export default TimeDialogHOC;
