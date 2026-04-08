import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import type { DesignContextType, DesignValue } from '../../../../types';
/**
 * renderDesign �?Checkbox.Group，选项来自数据源；布局参�?antd 文档中的 Group + Row/Col 与换行排�? */
export declare function renderDesign({ parentId, value, context, }: {
    parentId?: string;
    value: DesignValue;
    context: DesignContextType;
}): DataItemRow;
