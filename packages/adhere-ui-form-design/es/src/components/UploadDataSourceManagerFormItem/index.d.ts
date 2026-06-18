import { type FC } from 'react';
export type UploadDataSourceManagerFormItemValue = {
    type: 'dynamic';
    dynamicConfigId?: string;
};
export interface UploadDataSourceManagerFormItemProps {
    value?: UploadDataSourceManagerFormItemValue;
    onChange?: (value: UploadDataSourceManagerFormItemValue) => void;
}
/**
 * UploadDataSourceManagerFormItem
 * @description 上传组件的数据源选择：左侧回显摘要，右侧选择/管理
 */
declare const UploadDataSourceManagerFormItem: FC<UploadDataSourceManagerFormItemProps>;
export default UploadDataSourceManagerFormItem;
