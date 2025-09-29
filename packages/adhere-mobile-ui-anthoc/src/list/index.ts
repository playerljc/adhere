import type { DataSourceListProps } from '../types';
import { createFactory } from '../util';
import DataSourceList from './DataSourceList';
import List from './List';

List.DataSourceList = createFactory<DataSourceListProps>(DataSourceList, {});

export default List;
