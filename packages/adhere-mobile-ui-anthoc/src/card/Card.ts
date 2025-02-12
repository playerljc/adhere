import { Card } from 'antd-mobile';
import type { CardProps } from 'antd-mobile';

import { createFactory } from '../util';

const CardHOC: typeof Card & {
  defaultProps?: Partial<CardProps>;
} = createFactory<CardProps>(Card, {});

CardHOC.displayName = 'Card';

export default CardHOC;
