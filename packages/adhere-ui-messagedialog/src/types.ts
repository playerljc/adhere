import type { ModalProps } from 'antd/lib/modal/Modal';
import type { ReactElement } from 'react';

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
  config: ModalProps;
  closeBtn: boolean;
  close?: () => void;
  children?: any;
}
