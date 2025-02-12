import { Card } from 'antd';
import type { CardProps } from 'antd';

import { createFactory } from '../util';

const CardHOC: typeof Card & {
  defaultProps?: Partial<CardProps>;
} = createFactory<CardProps>(Card, {});

CardHOC.displayName = 'Card';

export default CardHOC;
