import { Avatar } from 'antd-mobile';
import type { AvatarProps } from 'antd-mobile';

import { createFactory } from '../util';

const AvatarHOC: typeof Avatar & {
  defaultProps?: Partial<AvatarProps>;
} = createFactory<AvatarProps>(Avatar, {});

AvatarHOC.displayName = 'Avatar';

export default AvatarHOC;
