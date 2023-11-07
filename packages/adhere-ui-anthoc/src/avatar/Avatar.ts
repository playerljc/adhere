import { Avatar } from 'antd';
import type { AvatarProps } from 'antd';

import { createFactory } from '../util';

const AvatarHOC: typeof Avatar & {
  defaultProps?: Partial<AvatarProps>;
} = createFactory<AvatarProps>(Avatar, {});

export default AvatarHOC;
