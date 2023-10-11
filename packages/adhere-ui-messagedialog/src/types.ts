import { ButtonProps } from 'antd';
import type { ModalProps } from 'antd/lib/modal/interface';
import type { CSSProperties, ReactElement, ReactNode } from 'react';

import type {
  ColumnItemProps,
  FormItemLayoutProps,
} from '@baifendian/adhere-ui-formitemcreator/lib/types';

/**
 * AlertArgv
 */
export interface AlertArgv {
  title?: string | null | ReactElement;
  text?: string | null | ReactElement;
  width?: number;
  zIndex?: number;
  local?: string;
  icon?: ReactElement | null;
}

/**
 * ConfirmArgv
 */
export interface ConfirmArgv extends AlertArgv {
  onSuccess?: (params?: any) => Promise<void>;
}

/**
 * PromptArgv
 */
export interface PromptArgv {
  title?: string | null | ReactElement;
  config?: ColumnItemProps;
  layout?: FormItemLayoutProps;
  width?: number;
  zIndex?: number;
  local?: string;
  onSuccess?: (params?: any) => Promise<void>;
}

/**
 * ModalArgv
 */
export interface ModalArgv {
  children?: any;
  defaultCloseBtn?: boolean;
  local?: string;
  config?: ModalProps;
}

/**
 * ModalDialogProps
 */
export interface ModalDialogProps {
  open: boolean;
  config: ModalProps;
  closeBtn: boolean;
  close?: () => void;
  children?: any;
}

/**
 * TriggerPromptProps
 */
export type TriggerPromptProps = Omit<TriggerProps, 'footer' | 'modalConfig'> & {
  onSubmit?: () => Promise<any>;
  modalConfig?: Omit<ModalArgv, 'children' | 'defaultCloseBtn'>;
  okText?: string;
};

/**
 * TriggerProps
 */
export interface TriggerProps {
  className?: string;
  style?: CSSProperties;
  children?: any;
  value?: any;
  onChange?: (params?: any) => void;
  renderTrigger?: () => ReactNode;
  actions?: Omit<ButtonProps, 'onClick'> &
    {
      key: any;
      onClick?: () => Promise<any>;
    }[];
  modalConfig?: Omit<
    Omit<ModalArgv, 'config'> & {
      config?: Omit<ModalProps, 'footer'>;
    },
    'children' | 'defaultCloseBtn'
  >;
}

/**
 * SubmitButtonProps
 */
export type SubmitButtonProps = Omit<ButtonProps, 'onClick'> & {
  onClick: (e?: any) => Promise<void>;
};
