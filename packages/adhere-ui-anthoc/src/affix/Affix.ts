import { Affix } from 'antd';
import type { AffixProps } from 'antd';
import type { FC } from 'react';

import { createFactory } from '../util';

const AffixHOC: FC<AffixProps> & {
  defaultProps?: Partial<AffixProps>;
} = createFactory<AffixProps>(Affix, {});

export default AffixHOC;
