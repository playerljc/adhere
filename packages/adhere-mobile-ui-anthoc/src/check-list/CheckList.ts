import type { CheckListHOCComponent, CheckListProps } from '../types';
import { createFactory } from '../util';
import InternalCheckList from './InternalCheckList';

const CheckListHOC: CheckListHOCComponent = createFactory<CheckListProps>(InternalCheckList, {});

CheckListHOC.displayName = 'CheckList';

export default CheckListHOC;
