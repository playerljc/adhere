import { Footer } from 'antd-mobile';
import type { FooterProps } from 'antd-mobile';

import { createFactory } from '../util';

const FooterHOC: typeof Footer & {
  defaultProps?: Partial<FooterProps>;
} = createFactory<FooterProps>(Footer, {});

FooterHOC.displayName = 'Footer';

export default FooterHOC;
