import NotificationFactory from './Notification';
import type { Config, ShowConfig, ShowStandardConfig, NotificationInstance, NotificationFactory as INotificationFactory } from './types';

// Export the default notification factory
export default NotificationFactory;

// Export types for external use
export type {
  Config,
  ShowConfig,
  ShowStandardConfig,
  NotificationInstance,
  INotificationFactory as NotificationFactory,
};
