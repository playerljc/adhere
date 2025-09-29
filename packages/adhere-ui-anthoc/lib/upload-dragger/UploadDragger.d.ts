import { Upload } from 'antd';
import type { UploadProps } from 'antd';
declare const UploadDraggerHOC: typeof Upload.Dragger & {
    defaultProps?: Partial<UploadProps>;
    override?: (props: Partial<UploadProps>) => Partial<UploadProps>;
};
export default UploadDraggerHOC;
