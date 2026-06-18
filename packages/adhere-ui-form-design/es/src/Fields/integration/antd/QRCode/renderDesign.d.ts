import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import type { DesignContextType, DesignValue } from '../../../../types';
/**
 * renderDesign - QRCode design mode (desktop)
 * value 来源使用 formItemProps.initialValue
 */
export declare function renderDesign({ parentId, value, context, }: {
    parentId?: string;
    value: DesignValue;
    context: DesignContextType;
}): DataItemRow;
