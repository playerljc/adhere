import { ImageViewer } from 'antd-mobile';
import type { ImageViewerProps } from 'antd-mobile';

import { createFactory } from '../util';

const ImageViewerHOC: typeof ImageViewer & {
  defaultProps?: Partial<ImageViewerProps>;
  override?: (props: Partial<ImageViewerProps>) => Partial<ImageViewerProps>;
} = createFactory<ImageViewerProps>(ImageViewer, {});

ImageViewerHOC.displayName = 'ImageViewer';

export default ImageViewerHOC;
