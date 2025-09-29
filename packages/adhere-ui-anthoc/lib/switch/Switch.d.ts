import { Switch } from 'antd';
import type { SwitchProps } from 'antd';
declare const SwitchHOC: typeof Switch & {
    defaultProps?: Partial<SwitchProps>;
    override?: (props: Partial<SwitchProps>) => Partial<SwitchProps>;
};
export default SwitchHOC;
