import { Splitter } from 'antd';
import type { SplitterProps } from 'antd';

import { createFactory } from '../util';

const SplitterHOC: typeof Splitter & {
  defaultProps?: Partial<SplitterProps>;
} = createFactory<SplitterProps>(Splitter, {});

SplitterHOC.displayName = 'Splitter';

export default SplitterHOC;
