// Actions的props
export type Action = {
  type: string;
  value: string;
};

export type ActionsProps = {
  actions?: Action[];
  /** PhoneWithAreaCode：左侧区号选择控件事件 */
  areaCodeActions?: Action[];
  /** PhoneWithAreaCode：右侧号码输入框事件 */
  phoneInputActions?: Action[];
};
