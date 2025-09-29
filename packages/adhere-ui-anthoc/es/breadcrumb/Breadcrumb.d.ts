import { Breadcrumb } from 'antd';
import type { BreadcrumbProps } from 'antd';
declare const BreadcrumbHOC: typeof Breadcrumb & {
    defaultProps?: Partial<BreadcrumbProps>;
    override?: (props: Partial<BreadcrumbProps>) => Partial<BreadcrumbProps>;
};
export default BreadcrumbHOC;
