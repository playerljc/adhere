import { Pagination } from 'antd';
import type { PaginationProps } from 'antd';
declare const PaginationHOC: typeof Pagination & {
    defaultProps?: Partial<PaginationProps>;
    override?: (props: Partial<PaginationProps>) => Partial<PaginationProps>;
};
export default PaginationHOC;
