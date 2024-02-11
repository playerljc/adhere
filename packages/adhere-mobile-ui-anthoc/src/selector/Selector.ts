import { Selector } from 'antd-mobile';
import type { SelectorProps } from 'antd-mobile';

import { createFactory } from '../util';

const SelectorHOC: typeof Selector & {
  defaultProps?: Partial<SelectorProps<any>>;
} = createFactory<SelectorProps<any>>(Selector, {});

// @ts-ignore
SelectorHOC.displayName = 'Selector';

export default SelectorHOC;
