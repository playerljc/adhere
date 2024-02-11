import type { CheckListProps } from '../types';
import { createFactory } from '../util';
import InternalCheckList from './InternalCheckList';

const CheckListHOC: typeof InternalCheckList & {
  defaultProps?: Partial<CheckListProps>;
} = createFactory<CheckListProps>(InternalCheckList, {});

CheckListHOC.displayName = 'CheckList';

export default CheckListHOC;
