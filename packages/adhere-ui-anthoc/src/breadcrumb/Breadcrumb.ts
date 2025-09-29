import { Breadcrumb } from 'antd';
import type { BreadcrumbProps } from 'antd';

import { createFactory } from '../util';

const BreadcrumbHOC: typeof Breadcrumb & {
  defaultProps?: Partial<BreadcrumbProps>;
  override?: (props: Partial<BreadcrumbProps>) => Partial<BreadcrumbProps>;
} = createFactory<BreadcrumbProps>(Breadcrumb, {});

BreadcrumbHOC.displayName = 'Breadcrumb';

export default BreadcrumbHOC;
