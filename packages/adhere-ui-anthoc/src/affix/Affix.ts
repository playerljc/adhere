import { Affix } from 'antd';
import type { AffixProps } from 'antd';

import { createFactory } from '../util';

const AffixHOC: typeof Affix & {
  defaultProps?: Partial<AffixProps>;
} = createFactory<AffixProps>(Affix, {});

export default AffixHOC;
