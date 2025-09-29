import { Badge } from 'antd';
import type { BadgeProps } from 'antd';
declare const BadgeHoc: typeof Badge & {
    defaultProps?: Partial<BadgeProps>;
    override?: (props: Partial<BadgeProps>) => Partial<BadgeProps>;
};
export default BadgeHoc;
