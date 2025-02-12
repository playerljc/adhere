import { Card } from 'antd-mobile';
import type { CardProps } from 'antd-mobile';
declare const CardHOC: typeof Card & {
    defaultProps?: Partial<CardProps>;
};
export default CardHOC;
