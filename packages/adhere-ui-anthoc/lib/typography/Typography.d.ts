import { Typography } from 'antd';
import type { TypographyProps } from 'antd';
declare const TypographyHOC: typeof Typography & {
    defaultProps?: Partial<TypographyProps>;
    override?: (props: Partial<TypographyProps>) => Partial<TypographyProps>;
};
export default TypographyHOC;
