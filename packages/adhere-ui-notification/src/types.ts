import type { ReactElement, ReactNode } from 'react';

/**
 * Notification style configuration
 * @interface Config
 */
export interface Config {
  /** Notification style - 'ios' for iOS style, 'material' for Material Design style */
  style: 'ios' | 'material';
  /** Notification position - 'top' for top position, 'bottom' for bottom position */
  type: 'top' | 'bottom';
  /** Callback function triggered when notification is created */
  onCreate?: (element?: HTMLElement) => void;
  /** Callback function triggered when notification is shown */
  onShow?: (element?: HTMLElement) => void;
  /** Callback function triggered before notification is closed */
  onCloseBefore?: (element?: HTMLElement) => void;
  /** Callback function triggered after notification is closed */
  onCloseAfter?: (element?: HTMLElement) => void;
}

/**
 * Configuration for custom notification content
 * @interface ShowConfig
 */
export interface ShowConfig {
  /** Whether to show close button */
  closed: boolean;
  /** Custom React element content */
  children: ReactElement;
}

/**
 * Configuration for standard notification format
 * @interface ShowStandardConfig
 */
export interface ShowStandardConfig {
  /** Whether to show close button */
  closed: boolean;
  /** Header label text or React element */
  headerLabel: string | ReactElement;
  /** Header icon URL */
  headerIcon: string;
  /** Notification title text or React element */
  title: string | ReactElement;
  /** Notification content text or React element */
  text: string | ReactElement;
  /** Main icon URL */
  icon: string;
  /** Date/time text or React element */
  datetime: string | ReactElement;
}

/**
 * Notification instance interface
 * @interface NotificationInstance
 */
export interface NotificationInstance {
  /** Show custom notification */
  show(config: ShowConfig): string;
  /** Show standard notification */
  showStandard(config: ShowStandardConfig): string;
  /** Close notification by ID */
  close(id: string): void;
}

/**
 * Notification factory interface
 * @interface INotificationFactory
 */
export interface INotificationFactory {
  /** Set render wrapper function */
  setRenderToWrapper(renderToWrapper: (children: () => ReactNode) => ReactNode): void;
  /** Build notification instance */
  build(container: HTMLElement, config: Config): NotificationInstance;
}
