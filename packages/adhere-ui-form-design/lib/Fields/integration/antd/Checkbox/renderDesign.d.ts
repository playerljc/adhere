import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import type { DesignContextType, DesignValue } from '../../../../types';
/**
 * renderDesign - single Checkbox (no Group), Form uses valuePropName="checked"
 * @see https://ant.design/components/checkbox-cn#api
 */
export declare function renderDesign({ parentId, value, context, }: {
    parentId: string;
    value: DesignValue;
    context: DesignContextType;
}): DataItemRow;
