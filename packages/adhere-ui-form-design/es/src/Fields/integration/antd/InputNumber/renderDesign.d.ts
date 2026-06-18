import type { InputNumberProps } from 'antd';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import type { DesignContextType, DesignValue } from '../../../../types';
export type InputNumberDesignProps = InputNumberProps & {
    thousands: 'French' | 'German' | 'US' | 'International';
};
/**
 * renderDesign
 * @param props
 */
export declare function renderDesign({ parentId, value, context, }: {
    parentId?: string;
    value: DesignValue;
    context: DesignContextType;
}): DataItemRow;
