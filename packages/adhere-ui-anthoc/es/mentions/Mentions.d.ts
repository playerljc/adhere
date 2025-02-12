import { Mentions } from 'antd';
import type { MentionProps } from 'antd';
declare const MentionsHOC: typeof Mentions & {
    defaultProps?: Partial<MentionProps>;
};
export default MentionsHOC;
