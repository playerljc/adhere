import { Affix } from 'antd';
import type { AffixProps } from 'antd';

import { createFactory } from '../util';

const AffixHOC = createFactory<AffixProps>(Affix, {});

export default AffixHOC;
