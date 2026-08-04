import type { FC, ReactNode } from 'react';
export type SelectionManageButtonProps = {
    selectionLabel?: ReactNode;
    selectionFinishLabel?: ReactNode;
    selectionCancelLabel?: ReactNode;
    isUseSelectionMode: boolean;
    isUseNormalMode: boolean;
    onChange: (isUseSelectionMode: boolean) => void;
    onFinish: () => void;
    onCancel: () => void;
};
/**
 * SelectionManageButton
 * @param selectionLabel
 * @param selectionFinishLabel
 * @param selectionCancelLabel
 * @param isUseSelectionMode
 * @param isUseNormalMode
 * @param onChange
 * @param onFinish
 * @param onCancel
 * @constructor
 */
declare const SelectionManageButton: FC<SelectionManageButtonProps>;
export default SelectionManageButton;
