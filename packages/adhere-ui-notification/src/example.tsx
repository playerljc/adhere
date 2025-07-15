import React, { useEffect, useRef } from 'react';
import NotificationFactory from './Notification';
import type { Config, ShowConfig, ShowStandardConfig } from './types';

/**
 * Example component demonstrating the usage of Adhere UI Notification
 */
const NotificationExample: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Configuration for the notification instance
    const config: Config = {
      style: 'material',
      type: 'top',
      onCreate: (element) => {
        console.log('Notification created:', element);
      },
      onShow: (element) => {
        console.log('Notification shown:', element);
      },
      onCloseBefore: (element) => {
        console.log('Notification closing:', element);
      },
      onCloseAfter: (element) => {
        console.log('Notification closed:', element);
      },
    };

    // Create notification instance
    notificationRef.current = NotificationFactory.build(containerRef.current, config);

    // Set custom render wrapper for ConfigProvider integration
    NotificationFactory.setRenderToWrapper((children) => (
      <div className="notification-wrapper">
        {children()}
      </div>
    ));
  }, []);

  const showCustomNotification = () => {
    if (!notificationRef.current) return;

    const customConfig: ShowConfig = {
      closed: true,
      children: (
        <div style={{ padding: '16px' }}>
          <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>
            🎉 Custom Notification
          </h3>
          <p style={{ margin: 0, color: '#666' }}>
            This is a custom notification with React elements and custom styling.
          </p>
          <div style={{ marginTop: '12px' }}>
            <button 
              onClick={() => console.log('Custom action clicked')}
              style={{
                padding: '4px 12px',
                marginRight: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                background: '#fff',
                cursor: 'pointer',
              }}
            >
              Action
            </button>
            <button 
              onClick={() => console.log('Dismiss clicked')}
              style={{
                padding: '4px 12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                background: '#fff',
                cursor: 'pointer',
              }}
            >
              Dismiss
            </button>
          </div>
        </div>
      ),
    };

    const id = notificationRef.current.show(customConfig);
    console.log('Custom notification ID:', id);
  };

  const showStandardNotification = () => {
    if (!notificationRef.current) return;

    const standardConfig: ShowStandardConfig = {
      closed: true,
      headerLabel: 'Adhere UI',
      headerIcon: 'https://via.placeholder.com/50x50/007bff/ffffff?text=A',
      title: 'Standard Notification',
      text: 'This is a standard notification with header, title, text, icon, and datetime.',
      icon: 'https://via.placeholder.com/50x50/28a745/ffffff?text=✓',
      datetime: new Date().toLocaleString(),
    };

    const id = notificationRef.current.showStandard(standardConfig);
    console.log('Standard notification ID:', id);
  };

  const showIOSNotification = () => {
    if (!containerRef.current) return;

    // Create iOS style notification
    const iosConfig: Config = {
      style: 'ios',
      type: 'top',
    };

    const iosNotification = NotificationFactory.build(containerRef.current, iosConfig);

    const iosStandardConfig: ShowStandardConfig = {
      closed: true,
      headerLabel: 'iOS App',
      headerIcon: 'https://via.placeholder.com/50x50/ff6b6b/ffffff?text=i',
      title: 'iOS Style Notification',
      text: 'This notification uses the iOS style with rounded corners and translucent background.',
      icon: 'https://via.placeholder.com/50x50/4ecdc4/ffffff?text=📱',
      datetime: new Date().toLocaleTimeString(),
    };

    const id = iosNotification.showStandard(iosStandardConfig);
    console.log('iOS notification ID:', id);
  };

  const showBottomNotification = () => {
    if (!containerRef.current) return;

    // Create bottom positioned notification
    const bottomConfig: Config = {
      style: 'material',
      type: 'bottom',
    };

    const bottomNotification = NotificationFactory.build(containerRef.current, bottomConfig);

    const bottomStandardConfig: ShowStandardConfig = {
      closed: true,
      headerLabel: 'Bottom Notification',
      headerIcon: 'https://via.placeholder.com/50x50/6c5ce7/ffffff?text=B',
      title: 'Bottom Positioned',
      text: 'This notification appears at the bottom of the screen.',
      icon: 'https://via.placeholder.com/50x50/a29bfe/ffffff?text=⬇️',
      datetime: new Date().toLocaleString(),
    };

    const id = bottomNotification.showStandard(bottomStandardConfig);
    console.log('Bottom notification ID:', id);
  };

  const showMultipleNotifications = () => {
    if (!notificationRef.current) return;

    // Show multiple notifications with different content
    const notifications = [
      {
        title: 'Success',
        text: 'Operation completed successfully!',
        icon: 'https://via.placeholder.com/50x50/28a745/ffffff?text=✓',
        color: '#28a745',
      },
      {
        title: 'Warning',
        text: 'Please check your input data.',
        icon: 'https://via.placeholder.com/50x50/ffc107/ffffff?text=⚠️',
        color: '#ffc107',
      },
      {
        title: 'Error',
        text: 'An error occurred while processing.',
        icon: 'https://via.placeholder.com/50x50/dc3545/ffffff?text=✗',
        color: '#dc3545',
      },
    ];

    const ids: string[] = [];

    notifications.forEach((notification, index) => {
      setTimeout(() => {
        const config: ShowStandardConfig = {
          closed: true,
          headerLabel: `Notification ${index + 1}`,
          headerIcon: `https://via.placeholder.com/50x50/${notification.color.replace('#', '')}/ffffff?text=${index + 1}`,
          title: notification.title,
          text: notification.text,
          icon: notification.icon,
          datetime: new Date().toLocaleTimeString(),
        };

        const id = notificationRef.current.showStandard(config);
        ids.push(id);
        console.log(`${notification.title} notification ID:`, id);
      }, index * 1000); // Show each notification with 1 second delay
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Adhere UI Notification Examples</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Container</h2>
        <div 
          ref={containerRef}
          style={{
            position: 'relative',
            height: '400px',
            border: '2px dashed #ccc',
            borderRadius: '8px',
            padding: '20px',
            backgroundColor: '#f8f9fa',
          }}
        >
          <p style={{ textAlign: 'center', color: '#666', marginTop: '180px' }}>
            Notifications will appear here
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>Actions</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            onClick={showCustomNotification}
            style={{
              padding: '10px 16px',
              border: 'none',
              borderRadius: '6px',
              backgroundColor: '#007bff',
              color: 'white',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Show Custom Notification
          </button>

          <button
            onClick={showStandardNotification}
            style={{
              padding: '10px 16px',
              border: 'none',
              borderRadius: '6px',
              backgroundColor: '#28a745',
              color: 'white',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Show Standard Notification
          </button>

          <button
            onClick={showIOSNotification}
            style={{
              padding: '10px 16px',
              border: 'none',
              borderRadius: '6px',
              backgroundColor: '#ff6b6b',
              color: 'white',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Show iOS Style
          </button>

          <button
            onClick={showBottomNotification}
            style={{
              padding: '10px 16px',
              border: 'none',
              borderRadius: '6px',
              backgroundColor: '#6c5ce7',
              color: 'white',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Show Bottom Notification
          </button>

          <button
            onClick={showMultipleNotifications}
            style={{
              padding: '10px 16px',
              border: 'none',
              borderRadius: '6px',
              backgroundColor: '#fd79a8',
              color: 'white',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            Show Multiple Notifications
          </button>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>Features</h2>
        <ul style={{ lineHeight: '1.6' }}>
          <li>✅ <strong>Multiple Styles:</strong> iOS and Material Design</li>
          <li>✅ <strong>Flexible Positioning:</strong> Top and bottom positions</li>
          <li>✅ <strong>Two Types:</strong> Custom content and standard format</li>
          <li>✅ <strong>Smooth Animations:</strong> CSS transitions for show/hide</li>
          <li>✅ <strong>Customizable:</strong> Extensive configuration options</li>
          <li>✅ <strong>Responsive:</strong> Media query support</li>
          <li>✅ <strong>TypeScript:</strong> Full type safety</li>
          <li>✅ <strong>Event Callbacks:</strong> onCreate, onShow, onCloseBefore, onCloseAfter</li>
        </ul>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>Usage Instructions</h2>
        <ol style={{ lineHeight: '1.6' }}>
          <li>Click any of the buttons above to see different notification types</li>
          <li>Notifications will appear in the container above</li>
          <li>Click the close button (×) to dismiss notifications</li>
          <li>Check the browser console for callback logs</li>
          <li>Try different combinations to see various styles and positions</li>
        </ol>
      </div>
    </div>
  );
};

export default NotificationExample; 