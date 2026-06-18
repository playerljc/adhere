import { type FC } from 'react';
import type { TableSelectColumnSettingItem } from './TableSelectColumnSettingFormItem';
export interface ColumnSettingModalProps {
    open: boolean;
    item: TableSelectColumnSettingItem | null;
    onCancel: () => void;
    onOk: () => void;
    onChange: (patch: Partial<TableSelectColumnSettingItem>) => void;
}
declare const ColumnSettingModal: FC<ColumnSettingModalProps>;
export default ColumnSettingModal;
