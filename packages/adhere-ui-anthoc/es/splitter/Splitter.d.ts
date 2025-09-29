import { Splitter } from 'antd';
import type { SplitterProps } from 'antd';
declare const SplitterHOC: typeof Splitter & {
    defaultProps?: Partial<SplitterProps>;
    override?: (props: Partial<SplitterProps>) => Partial<SplitterProps>;
};
export default SplitterHOC;
