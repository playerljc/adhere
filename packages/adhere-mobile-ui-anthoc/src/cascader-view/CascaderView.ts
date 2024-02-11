import { CascaderView } from 'antd-mobile';
import type { CascaderViewProps } from 'antd-mobile';

import { createFactory } from '../util';

const CascaderViewHOC: typeof CascaderView & {
  defaultProps?: Partial<CascaderViewProps>;
} = createFactory<CascaderViewProps>(CascaderView, {});

CascaderViewHOC.displayName = 'CascaderView';

export default CascaderViewHOC;
