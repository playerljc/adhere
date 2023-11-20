import { Pagination } from 'antd';
import type { PaginationProps } from 'antd';

import { createFactory } from '../util';

const PaginationHOC: typeof Pagination & {
  defaultProps?: Partial<PaginationProps>;
} = createFactory<PaginationProps>(Pagination, {
  showQuickJumper: true,
});

export default PaginationHOC;
