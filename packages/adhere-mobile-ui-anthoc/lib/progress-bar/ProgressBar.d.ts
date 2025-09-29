import { ProgressBar } from 'antd-mobile';
import type { ProgressBarProps } from 'antd-mobile';
declare const ProgressBarHOC: typeof ProgressBar & {
    defaultProps?: Partial<ProgressBarProps>;
    override?: (props: Partial<ProgressBarProps>) => Partial<ProgressBarProps>;
};
export default ProgressBarHOC;
