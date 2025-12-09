import Dict from '@baifendian/adhere-util-dict';

import { Direction } from './Direction';
import { Whether } from './Whether';

const { genModuleDict } = Dict;

const dictImpls = {
  Direction,
  Whether,
};

const { names, values } = genModuleDict(dictImpls);

export { names, values };
