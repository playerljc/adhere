import { Empty } from 'antd-mobile';
import type { EmptyProps } from 'antd-mobile';
declare const EmptyHOC: typeof Empty & {
    defaultProps?: Partial<EmptyProps>;
    override?: (props: Partial<EmptyProps>) => Partial<EmptyProps>;
};
export default EmptyHOC;
