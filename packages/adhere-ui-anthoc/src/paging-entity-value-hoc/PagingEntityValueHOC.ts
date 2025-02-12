import type { PagingEntityValueHOCProps } from '../types';
import { createFactory } from '../util';
import InternalPagingEntityValueHOC from './InternalPagingEntityValueHOC';

const PagingEntityValueHOC: typeof InternalPagingEntityValueHOC & {
  defaultProps?: Partial<PagingEntityValueHOCProps>;
} = createFactory<PagingEntityValueHOCProps>(InternalPagingEntityValueHOC, {});

PagingEntityValueHOC.displayName = 'PagingEntityValueHOC';

export default PagingEntityValueHOC;
