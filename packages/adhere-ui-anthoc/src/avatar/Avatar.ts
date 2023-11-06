import { Avatar } from 'antd';
import type { AvatarProps } from 'antd';
import type { FC } from 'react';

import { createFactory } from '../util';

const AvatarHOC: FC<AvatarProps> & {
  defaultProps?: Partial<AvatarProps>;
} = createFactory<AvatarProps>(Avatar, {});

export default AvatarHOC;
