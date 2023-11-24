import { List, ListProps } from 'antd';

import type { ListHOCComponent } from '../types';
import { createFactory } from '../util';

const ListHOC: ListHOCComponent = createFactory<ListProps<any>>(List, {});

ListHOC.displayName = 'List';

export default ListHOC;
