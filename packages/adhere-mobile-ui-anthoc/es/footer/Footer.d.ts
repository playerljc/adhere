import { Footer } from 'antd-mobile';
import type { FooterProps } from 'antd-mobile';
declare const FooterHOC: typeof Footer & {
    defaultProps?: Partial<FooterProps>;
    override?: (props: Partial<FooterProps>) => Partial<FooterProps>;
};
export default FooterHOC;
