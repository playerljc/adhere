import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import type { DesignValue } from '../../../../types';
/**
 * Mobile fallback: use Input (antd-mobile has no InputNumber), inputMode="decimal"
 */
export declare function renderDesignToMobile({ value }: {
    value: DesignValue;
}): DataItemRow;
