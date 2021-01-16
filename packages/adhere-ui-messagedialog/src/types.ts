/**
 * IAlertArgv
 * @interface IAlertArgv
 */
export interface IAlertArgv {
  title?: string | null | React.ReactElement;
  text?: string | null | React.ReactElement;
  width?: number;
  local?: string;
  icon:?: React.ReactElement | null,
}

/**
 * IConfirmArgv
 * @interface IConfirmArgv
 */
export interface IConfirmArgv extends IAlertArgv {
  zIndex?: number;
  onSuccess?: Function;
}

/**
 * IModalDialogProps
 * @interface IModalDialogProps
 */
export interface IModalDialogProps {
  cloneBtn: boolean;
  parent: HTMLElement | null;
  config: Object;
}
