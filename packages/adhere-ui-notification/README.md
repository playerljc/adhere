# Adhere UI Notification

A flexible and customizable notification component for React applications with support for both iOS and Material Design styles.

## Features

- 🎨 **Multiple Styles**: Support for iOS and Material Design styles
- 📍 **Flexible Positioning**: Top or bottom positioning
- 🎯 **Two Types**: Custom content and standard format notifications
- ⚡ **Smooth Animations**: CSS transitions for show/hide animations
- 🎛️ **Customizable**: Extensive configuration options
- 📱 **Responsive**: Media query support for responsive design
- 🔧 **TypeScript**: Full TypeScript support with comprehensive type definitions

## Installation

```bash
npm install @baifendian/adhere-ui-notification
```

## Basic Usage

### 1. Import the component

```typescript
import NotificationFactory from '@baifendian/adhere-ui-notification';
import type { Config, ShowConfig, ShowStandardConfig } from '@baifendian/adhere-ui-notification';
```

### 2. Create a notification instance

```typescript
// Get container element
const container = document.getElementById('notification-container');

// Configuration
const config: Config = {
  style: 'material', // 'material' | 'ios'
  type: 'top',       // 'top' | 'bottom'
  onCreate: (element) => console.log('Notification created', element),
  onShow: (element) => console.log('Notification shown', element),
  onCloseBefore: (element) => console.log('Notification closing', element),
  onCloseAfter: (element) => console.log('Notification closed', element),
};

// Create notification instance
const notification = NotificationFactory.build(container, config);
```

### 3. Show notifications

#### Custom Notification

```typescript
const customConfig: ShowConfig = {
  closed: true,
  children: (
    <div>
      <h3>Custom Notification</h3>
      <p>This is a custom notification with React elements.</p>
    </div>
  ),
};

const notificationId = notification.show(customConfig);
```

#### Standard Notification

```typescript
const standardConfig: ShowStandardConfig = {
  closed: true,
  headerLabel: 'App Name',
  headerIcon: '/path/to/header-icon.png',
  title: 'Notification Title',
  text: 'This is the notification content with detailed information.',
  icon: '/path/to/icon.png',
  datetime: '2024-01-15 10:30',
};

const notificationId = notification.showStandard(standardConfig);
```

### 4. Close notifications

```typescript
// Close by ID
notification.close(notificationId);

// Or close all notifications (if you have multiple IDs)
const notificationIds = ['id1', 'id2', 'id3'];
notificationIds.forEach(id => notification.close(id));
```

## Advanced Usage

### Custom Render Wrapper

You can set a custom render wrapper for advanced rendering scenarios:

```typescript
import { ConfigProvider } from '@baifendian/adhere-ui-configprovider';

// Set custom render wrapper
NotificationFactory.setRenderToWrapper((children) => (
  <ConfigProvider media={{ isUseMedia: true, designWidth: 375 }}>
    {children()}
  </ConfigProvider>
));
```

### Responsive Design

The component supports responsive design through media queries:

```typescript
const config: Config = {
  style: 'ios',
  type: 'top',
};

// The component will automatically handle responsive behavior
// when used with ConfigProvider
```

### Multiple Instances

You can create multiple notification instances for different containers:

```typescript
const topContainer = document.getElementById('top-notifications');
const bottomContainer = document.getElementById('bottom-notifications');

const topNotification = NotificationFactory.build(topContainer, {
  style: 'material',
  type: 'top',
});

const bottomNotification = NotificationFactory.build(bottomContainer, {
  style: 'ios',
  type: 'bottom',
});
```

## API Reference

### Config Interface

```typescript
interface Config {
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
```

### ShowConfig Interface

```typescript
interface ShowConfig {
  /** Whether to show close button */
  closed: boolean;
  /** Custom React element content */
  children: ReactElement;
}
```

### ShowStandardConfig Interface

```typescript
interface ShowStandardConfig {
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
```

### NotificationInstance Interface

```typescript
interface NotificationInstance {
  /** Show custom notification */
  show(config: ShowConfig): string;
  /** Show standard notification */
  showStandard(config: ShowStandardConfig): string;
  /** Close notification by ID */
  close(id: string): void;
}
```

### NotificationFactory Interface

```typescript
interface NotificationFactory {
  /** Set render wrapper function */
  setRenderToWrapper(renderToWrapper: (children: () => ReactNode) => ReactNode): void;
  /** Build notification instance */
  build(container: HTMLElement, config: Config): NotificationInstance;
}
```

## CSS Customization

The component uses CSS custom properties for easy customization:

```css
/* Example customizations */
.adhere-ui-notification {
  --z-index: 2000;
  --ul-margin: 10px;
  --ul-padding: 0;
  --ul-li-padding: 0 20px;
  --ul-li-info-padding: 10px 10px 10px 0;
  --ul-li-info-font-size: 14px;
  --close-btn-top: 10px;
  --close-btn-right: 10px;
  --close-btn-z-index: 999;
}
```

## Browser Support

- Chrome >= 60
- Firefox >= 55
- Safari >= 12
- Edge >= 79

## Dependencies

- React >= 16.8.0
- @baifendian/adhere-ui-configprovider
- @baifendian/adhere-util
- uuid

## License

MIT License

