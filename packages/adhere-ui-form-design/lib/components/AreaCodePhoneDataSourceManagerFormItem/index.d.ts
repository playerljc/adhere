import { type FC } from 'react';
export type AreaCodePhoneDataSourceManagerFormItemValue = {
    type: 'static' | 'dynamic';
    /** 静态数据 JSON 字符串（数组） */
    areaCodeJson?: string;
    /** 动态数据源配置 id（来自设计器 dataSourceConfig） */
    dynamicConfigId?: string;
};
export interface AreaCodePhoneDataSourceManagerFormItemProps {
    value?: AreaCodePhoneDataSourceManagerFormItemValue;
    onChange?: (value: AreaCodePhoneDataSourceManagerFormItemValue) => void;
}
declare const AreaCodePhoneDataSourceManagerFormItem: FC<AreaCodePhoneDataSourceManagerFormItemProps>;
export default AreaCodePhoneDataSourceManagerFormItem;
