import { FloatingPanel } from 'antd-mobile';
import type { FloatingPanelProps } from 'antd-mobile';
declare const FloatingPanelHOC: typeof FloatingPanel & {
    defaultProps?: Partial<FloatingPanelProps>;
    override?: (props: Partial<FloatingPanelProps>) => Partial<FloatingPanelProps>;
};
export default FloatingPanelHOC;
