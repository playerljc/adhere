import { Table, TableProps } from 'antd';

import { TableHOCComponent } from '../types';
import { createFactory } from '../util';

const TableHOC: TableHOCComponent = createFactory<TableProps<any>>(Table, {});

TableHOC.displayName = 'Table';

export default TableHOC;
