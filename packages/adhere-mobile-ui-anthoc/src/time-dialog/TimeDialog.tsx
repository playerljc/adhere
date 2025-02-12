import type { TimeDialogProps } from '../types';
import { createFactory } from '../util';
import InternalTimeDialog from './InternalTimeDialog';

const TimeDialogHOC: typeof InternalTimeDialog & {
  defaultProps?: Partial<TimeDialogProps>;
} = createFactory<TimeDialogProps>(InternalTimeDialog, {});

TimeDialogHOC.displayName = 'TimeDialog';

export default TimeDialogHOC;
