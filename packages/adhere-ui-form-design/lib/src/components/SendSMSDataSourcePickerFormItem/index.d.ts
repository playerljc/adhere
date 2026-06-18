import { type FC } from 'react';
import type { DataSourceManagerFormItemValue } from '../DataSourceManagerFormItem';
export interface SendSMSDataSourcePickerFormItemProps {
    value?: DataSourceManagerFormItemValue;
    onChange?: (value: DataSourceManagerFormItemValue) => void;
}
/**
 * SendSMSDataSourcePickerFormItem
 * @description 发送验证码数据源选择：左侧回显摘要，右侧选择/管理
 */
declare const SendSMSDataSourcePickerFormItem: FC<SendSMSDataSourcePickerFormItemProps>;
export default SendSMSDataSourcePickerFormItem;
