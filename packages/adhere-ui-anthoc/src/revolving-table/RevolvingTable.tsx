import type { RevolvingTableProps } from '../types';
import { createFactory } from '../util';
import InternalRevolvingTable from './InternalRevolvingTable';

const RevolvingTable: typeof InternalRevolvingTable & {
  defaultProps?: Partial<RevolvingTableProps<any, any>>;
  override?: (
    props: Partial<RevolvingTableProps<any, any>>,
  ) => Partial<RevolvingTableProps<any, any>>;
} = createFactory<RevolvingTableProps<any, any>>(InternalRevolvingTable, {});

RevolvingTable.displayName = 'RevolvingTable';

export default RevolvingTable;
