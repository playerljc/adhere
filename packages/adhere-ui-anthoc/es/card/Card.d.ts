import { Card } from 'antd';
import type { CardProps } from 'antd';
declare const CardHOC: typeof Card & {
    defaultProps?: Partial<CardProps>;
};
export default CardHOC;
