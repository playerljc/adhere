import { ImageViewer } from 'antd-mobile';
import type { ImageViewerProps } from 'antd-mobile';
declare const ImageViewerHOC: typeof ImageViewer & {
    defaultProps?: Partial<ImageViewerProps>;
    override?: (props: Partial<ImageViewerProps>) => Partial<ImageViewerProps>;
};
export default ImageViewerHOC;
