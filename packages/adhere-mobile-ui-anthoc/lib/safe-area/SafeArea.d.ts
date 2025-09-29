import { SafeArea } from 'antd-mobile';
import type { SafeAreaProps } from 'antd-mobile';
declare const SafeAreaHOC: typeof SafeArea & {
    defaultProps?: Partial<SafeAreaProps>;
    override?: (props: Partial<SafeAreaProps>) => Partial<SafeAreaProps>;
};
export default SafeAreaHOC;
