import type { SelectorProps } from 'antd-mobile';
import { Selector } from 'antd-mobile';

import type { SelectorHOCComponent } from '../types';
import { createFactory } from '../util';

const SelectorHOC: SelectorHOCComponent = createFactory<SelectorProps<any>>(Selector, {});

SelectorHOC.displayName = 'Selector';

export default SelectorHOC;
