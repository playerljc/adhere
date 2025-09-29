import { Mentions } from 'antd';
import type { MentionProps } from 'antd';
declare const MentionsHOC: typeof Mentions & {
    defaultProps?: Partial<MentionProps>;
    override?: (props: Partial<MentionProps>) => Partial<MentionProps>;
};
export default MentionsHOC;
