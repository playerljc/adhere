import { List } from 'antd-mobile';
import type { ListProps } from 'antd-mobile';

import { createFactory } from '../util';

const ListHOC: typeof List & {
  defaultProps?: Partial<ListProps>;
} = createFactory<ListProps>(List, {});

ListHOC.displayName = 'List';

export default ListHOC;
