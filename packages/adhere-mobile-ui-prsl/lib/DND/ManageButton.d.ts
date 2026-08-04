import type { FC, ReactNode } from 'react';
export type DNDManageButtonProps = {
    dndLabel?: ReactNode;
    dndFinishLabel?: ReactNode;
    dndCancelLabel?: ReactNode;
    isUseDNDMode: boolean;
    isUseNormalMode: boolean;
    onChange: (isUseDNDMode: boolean) => void;
    onFinish: () => void;
    onCancel: () => void;
};
/**
 * DNDManageButton
 * @param dndLabel
 * @param dndFinishLabel
 * @param dndCancelLabel
 * @param isUseDNDMode
 * @param isUseNormalMode
 * @param onChange
 * @param onFinish
 * @param onCancel
 * @constructor
 */
declare const DNDManageButton: FC<DNDManageButtonProps>;
export default DNDManageButton;
