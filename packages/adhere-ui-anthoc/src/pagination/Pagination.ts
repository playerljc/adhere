import { Pagination } from 'antd';
import type { PaginationProps } from 'antd';

import { createFactory } from '../util';

const PaginationHOC: typeof Pagination & {
  defaultProps?: Partial<PaginationProps>;
  override?: (props: Partial<PaginationProps>) => Partial<PaginationProps>;
} = createFactory<PaginationProps>(Pagination, {
  showQuickJumper: true,
});

PaginationHOC.displayName = 'Pagination';

export default PaginationHOC;
