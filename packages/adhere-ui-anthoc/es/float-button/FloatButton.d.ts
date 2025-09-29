import { FloatButton } from 'antd';
import type { FloatButtonProps } from 'antd';
declare const FloatButtonHOC: typeof FloatButton & {
    defaultProps?: Partial<FloatButtonProps>;
    override?: (props: Partial<FloatButtonProps>) => Partial<FloatButtonProps>;
};
export default FloatButtonHOC;
