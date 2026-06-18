import { type FC } from 'react';
export type TreeDataSourceManagerFormItemValue = {
    type: 'static' | 'dynamic';
    treeDataJson?: string;
    dynamicConfigId?: string;
};
export interface TreeDataSourceManagerFormItemProps {
    value?: TreeDataSourceManagerFormItemValue;
    onChange?: (value: TreeDataSourceManagerFormItemValue) => void;
}
declare const TreeDataSourceManagerFormItem: FC<TreeDataSourceManagerFormItemProps>;
export default TreeDataSourceManagerFormItem;
