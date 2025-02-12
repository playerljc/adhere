import { List } from 'antd-mobile';
import type { ListProps } from 'antd-mobile';

import type { ListHOCComponent } from '../types';
import { createFactory } from '../util';

const ListHOC: ListHOCComponent = createFactory<ListProps>(List, {});

ListHOC.displayName = 'List';

export default ListHOC;
