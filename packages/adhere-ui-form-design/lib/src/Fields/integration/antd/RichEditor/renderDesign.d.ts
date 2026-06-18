import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import type { DesignContextType, DesignValue } from '../../../../types';
import './index.less';
/**
 * renderDesign
 */
export declare function renderDesign({ parentId, value, context, }: {
    parentId?: string;
    value: DesignValue;
    context: DesignContextType;
}): DataItemRow;
