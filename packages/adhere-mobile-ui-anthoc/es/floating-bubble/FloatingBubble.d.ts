import { FloatingBubble } from 'antd-mobile';
import type { FloatingBubbleProps } from 'antd-mobile';
declare const FloatingBubbleHOC: typeof FloatingBubble & {
    defaultProps?: Partial<FloatingBubbleProps>;
    override?: (props: Partial<FloatingBubbleProps>) => Partial<FloatingBubbleProps>;
};
export default FloatingBubbleHOC;
