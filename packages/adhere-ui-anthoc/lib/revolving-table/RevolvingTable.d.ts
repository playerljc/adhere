import type { RevolvingTableProps } from '../types';
import InternalRevolvingTable from './InternalRevolvingTable';
declare const RevolvingTable: typeof InternalRevolvingTable & {
    defaultProps?: Partial<RevolvingTableProps<any, any>>;
    override?: (props: Partial<RevolvingTableProps<any, any>>) => Partial<RevolvingTableProps<any, any>>;
};
export default RevolvingTable;
