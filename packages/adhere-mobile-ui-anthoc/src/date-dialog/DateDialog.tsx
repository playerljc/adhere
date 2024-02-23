import type { DateDialogProps } from '../types';
import { createFactory } from '../util';
import InternalDateDialog from './InternalDateDialog';

const DateDialogHOC: typeof InternalDateDialog & {
  defaultProps?: Partial<DateDialogProps>;
} = createFactory<DateDialogProps>(InternalDateDialog, {});

DateDialogHOC.displayName = 'DateDialog';

export default DateDialogHOC;
