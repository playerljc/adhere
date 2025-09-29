import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
declare const DescriptionsHOC: typeof Descriptions & {
    defaultProps?: Partial<DescriptionsProps>;
    override?: (props: Partial<DescriptionsProps>) => Partial<DescriptionsProps>;
};
export default DescriptionsHOC;
