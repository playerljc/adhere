import { Image } from 'antd';
import type { ImageProps } from 'antd';
declare const ImageHOC: typeof Image & {
    defaultProps?: Partial<ImageProps>;
    override?: (props: Partial<ImageProps>) => Partial<ImageProps>;
};
export default ImageHOC;
