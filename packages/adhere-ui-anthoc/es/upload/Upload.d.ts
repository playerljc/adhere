import { Upload } from 'antd';
import type { UploadProps } from 'antd';
declare const UploadHOC: typeof Upload & {
    defaultProps?: Partial<UploadProps>;
    override?: (props: Partial<UploadProps>) => Partial<UploadProps>;
};
export default UploadHOC;
