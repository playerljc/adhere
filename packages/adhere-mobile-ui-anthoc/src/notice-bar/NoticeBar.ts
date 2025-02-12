import { NoticeBar } from 'antd-mobile';
import type { NoticeBarProps } from 'antd-mobile';

import { createFactory } from '../util';

const NoticeBarHOC: typeof NoticeBar & {
  defaultProps?: Partial<NoticeBarProps>;
} = createFactory<NoticeBarProps>(NoticeBar, {});

NoticeBarHOC.displayName = 'NoticeBar';

export default NoticeBarHOC;
