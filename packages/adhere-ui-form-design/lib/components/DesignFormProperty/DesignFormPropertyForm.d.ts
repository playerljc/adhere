import { Form } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import React from 'react';
import type { DesignValueProps, FormItemProps } from '../../types';
type FormInstance = ReturnType<typeof Form.useForm>[0];
export type DesignFormPropertyFormProps = {
    formName: string;
    designValue: DesignValueProps;
    rows: DataItemRow[];
    renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
    /** 默认将 formItemProps 同步到表单；Slider 等需特殊处理时可传入 */
    applyFormItemPropsToForm?: (form: FormInstance, formItemProps: FormItemProps) => void;
};
export declare function DesignFormPropertyForm({ formName, designValue, rows, renderFormItems, applyFormItemPropsToForm, }: DesignFormPropertyFormProps): React.JSX.Element;
export {};
