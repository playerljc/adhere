import { Image } from 'antd-mobile';
import type { ImageProps } from 'antd-mobile';

import { createFactory } from '../util';

const ImageHOC: typeof Image & {
  defaultProps?: Partial<ImageProps>;
} = createFactory<ImageProps>(Image, {});

ImageHOC.displayName = 'Image';

export default ImageHOC;
