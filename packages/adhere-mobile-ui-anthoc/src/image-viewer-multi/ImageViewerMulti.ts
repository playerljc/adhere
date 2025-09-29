import { ImageViewer } from 'antd-mobile';
import type { MultiImageViewerProps } from 'antd-mobile';

import { createFactory } from '../util';

const ImageViewerMultiHOC: typeof ImageViewer.Multi & {
  defaultProps?: Partial<MultiImageViewerProps>;
  override?: (props: Partial<MultiImageViewerProps>) => Partial<MultiImageViewerProps>;
} = createFactory<MultiImageViewerProps>(ImageViewer.Multi, {});

ImageViewerMultiHOC.displayName = 'ImageViewerMulti';

export default ImageViewerMultiHOC;
