import { Affix } from 'antd';
import type { AffixProps } from 'antd';

import { createFactory } from '../util';

const AffixHOC: typeof Affix & {
  defaultProps?: Partial<AffixProps>;
  override?: (props: Partial<AffixProps>) => Partial<AffixProps>;
} = createFactory<AffixProps>(Affix, {});

AffixHOC.displayName = 'Affix';

export default AffixHOC;
