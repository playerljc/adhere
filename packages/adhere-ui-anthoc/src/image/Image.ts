import { Image } from 'antd';
import type { ImageProps } from 'antd';

import { createFactory } from '../util';

const ImageHOC: typeof Image & {
  defaultProps?: Partial<ImageProps>;
} = createFactory<ImageProps>(Image, {});

export default ImageHOC;
