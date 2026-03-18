import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import type { DesignContextType, DesignValue } from '../../../../types';
export type DatePickerFieldProps = {
    isBirthday?: boolean;
    dateBoundMode?: 'none' | 'before' | 'after';
    dateBoundBaseValue?: string;
    dateBoundIncludeBase?: boolean;
};
/**
 * renderDesign - DatePicker design mode (desktop)
 */
export declare function renderDesign({ parentId, value, context, }: {
    parentId?: string;
    value: DesignValue;
    context: DesignContextType;
}): DataItemRow;
