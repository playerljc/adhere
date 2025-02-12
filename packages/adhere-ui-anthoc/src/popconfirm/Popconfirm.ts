import { Popconfirm } from 'antd';
import type { PopconfirmProps } from 'antd';

import { createFactory } from '../util';

const PopconfirmHOC: typeof Popconfirm & {
  defaultProps?: Partial<PopconfirmProps>;
} = createFactory<PopconfirmProps>(Popconfirm, {});

PopconfirmHOC.displayName = 'Popconfirm';

export default PopconfirmHOC;
