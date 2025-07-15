import type { SuccessDialogComponent } from './types';
/**
 * 成功提示组件
 *
 * @description 提供两种成功提示方式：
 * 1. openSuccessMessage: 轻量级Toast提示
 * 2. openSuccessDialog: 模态对话框提示
 *
 * @example
 * ```tsx
 * import SuccessDialog from '@baifendian/adhere-mobile-ui-prompt-successprompt';
 *
 * // Toast提示
 * SuccessDialog.openSuccessMessage();
 *
 * // 对话框提示
 * SuccessDialog.openSuccessDialog({
 *   content: '操作成功！',
 *   duration: 3000
 * });
 * ```
 */
declare const SuccessDialog: SuccessDialogComponent;
export default SuccessDialog;
export type { SuccessDialogComponent, SuccessDialogProps, Duration } from './types';
