import type { ToastHandler } from 'antd-mobile/es/components/toast/methods';

export type GlobalIndicator = {
  show: (parent: HTMLElement, text: string) => ToastHandler;
  hide: (handler: ToastHandler) => void;
  hideAll: () => void;
};
