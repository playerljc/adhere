import { ImageViewer } from 'antd-mobile';
import type { MultiImageViewerProps } from 'antd-mobile';
declare const ImageViewerMultiHOC: typeof ImageViewer.Multi & {
    defaultProps?: Partial<MultiImageViewerProps>;
    override?: (props: Partial<MultiImageViewerProps>) => Partial<MultiImageViewerProps>;
};
export default ImageViewerMultiHOC;
