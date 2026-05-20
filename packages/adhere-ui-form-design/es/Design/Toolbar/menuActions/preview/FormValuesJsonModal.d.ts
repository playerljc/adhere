import React from 'react';
export interface FormValuesJsonModalProps {
    open: boolean;
    onClose: () => void;
    values: any;
}
/**
 * FormValuesJsonModal
 * @description 以只读 JSON 形式查看当前表单值
 */
export default function FormValuesJsonModal({ open, onClose, values }: FormValuesJsonModalProps): React.JSX.Element;
