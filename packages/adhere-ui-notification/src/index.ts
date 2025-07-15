import NotificationFactory from './Notification';
import type {
  Config,
  INotificationFactory,
  NotificationInstance,
  ShowConfig,
  ShowStandardConfig,
} from './types';

// Export the default notification factory
export default NotificationFactory;

// Export types for external use
export type { Config, ShowConfig, ShowStandardConfig, NotificationInstance, INotificationFactory };
