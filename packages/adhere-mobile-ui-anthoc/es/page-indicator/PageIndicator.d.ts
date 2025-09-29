import { PageIndicator } from 'antd-mobile';
import type { PageIndicatorProps } from 'antd-mobile';
declare const PageIndicatorHOC: typeof PageIndicator & {
    defaultProps?: Partial<PageIndicatorProps>;
    override?: (props: Partial<PageIndicatorProps>) => Partial<PageIndicatorProps>;
};
export default PageIndicatorHOC;
