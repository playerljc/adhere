import { Image } from 'antd-mobile';
import type { ImageProps } from 'antd-mobile';
declare const ImageHOC: typeof Image & {
    defaultProps?: Partial<ImageProps>;
    override?: (props: Partial<ImageProps>) => Partial<ImageProps>;
};
export default ImageHOC;
