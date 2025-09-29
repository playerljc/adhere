import { ImageUploader } from 'antd-mobile';
import type { ImageUploaderProps } from 'antd-mobile';
declare const ImageUploaderHOC: typeof ImageUploader & {
    defaultProps?: Partial<ImageUploaderProps>;
    override?: (props: Partial<ImageUploaderProps>) => Partial<ImageUploaderProps>;
};
export default ImageUploaderHOC;
