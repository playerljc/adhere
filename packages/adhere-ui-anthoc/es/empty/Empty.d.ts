import { Empty } from 'antd';
import type { EmptyProps } from 'antd';
declare const EmptyHOC: typeof Empty & {
    defaultProps?: Partial<EmptyProps>;
    override?: (props: Partial<EmptyProps>) => Partial<EmptyProps>;
};
export default EmptyHOC;
