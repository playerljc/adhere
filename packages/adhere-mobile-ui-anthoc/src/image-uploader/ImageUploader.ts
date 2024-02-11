import { ImageUploader } from 'antd-mobile';
import type { ImageUploaderProps } from 'antd-mobile';

import { createFactory } from '../util';

const ImageUploaderHOC: typeof ImageUploader & {
  defaultProps?: Partial<ImageUploaderProps>;
} = createFactory<ImageUploaderProps>(ImageUploader, {});

ImageUploaderHOC.displayName = 'ImageUploader';

export default ImageUploaderHOC;
