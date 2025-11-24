import { Masonry } from 'antd';
import type { MasonryProps } from 'antd';

import { createFactory } from '../util';

const MasonryHOC: typeof Masonry & {
  defaultProps?: Partial<MasonryProps>;
  override?: (props: Partial<MasonryProps>) => Partial<MasonryProps>;
} = createFactory<MasonryProps>(Masonry, {});

MasonryHOC.displayName = 'Masonry';

export default MasonryHOC;
