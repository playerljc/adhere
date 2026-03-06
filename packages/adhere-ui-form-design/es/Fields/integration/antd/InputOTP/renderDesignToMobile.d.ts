import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import type { DesignValue } from '../../../../types';
/**
 * Mobile has no OTP component, fallback to Input
 */
export declare function renderDesignToMobile({ value }: {
    value: DesignValue;
}): DataItemRow;
