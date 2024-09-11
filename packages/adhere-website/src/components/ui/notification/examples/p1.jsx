import { Button, Tabs } from 'antd';
import React, { useLayoutEffect, useState } from 'react';

import { Notification } from '@baifendian/adhere';

import styles from '../index.less';

const { TabPane } = Tabs;

const config = [
  { key: 'ios-top', ref: React.createRef(), ins: null },
  { key: 'ios-bottom', ref: React.createRef(), ins: null },
  { key: 'material-top', ref: React.createRef(), ins: null },
  { key: 'material-bottom', ref: React.createRef(), ins: null },
];

export default () => {
  const [activeKey, setActiveKey] = useState('ios-top');

  useLayoutEffect(() => {
    setTimeout(() => {
      const record = getRecord(activeKey);

      if (!record || (record && !record.ref.current)) return;

      const [style, type] = activeKey.split('-');
      record.ins = Notification.build(record.ref.current, {
        style,
        type,
      });
    }, 1000);
  }, [...config.map((t) => t.ref.current)]);

  function onChange(key) {
    setActiveKey(key);
  }

  function getRecord(curKey) {
    return config.find(({ key }) => key === curKey);
  }

  return (
    <Tabs tabPosition="left" activeKey={activeKey} onChange={onChange}>
      {config.map((t) => (
        <TabPane tab={t.key} key={t.key} id={t.key}>
          {activeKey === t.key && (
            <div className={styles.Tab}>
              <div className={styles.Fixed}>
                <Button
                  onClick={() => {
                    const record = getRecord(activeKey);
                    record?.ins?.show?.({
                      closed: true,
                      children: <div>自定义的UI</div>,
                    });
                  }}
                >
                  show custom close
                </Button>

                <Button
                  onClick={() => {
                    const record = getRecord(activeKey);
                    record?.ins?.show?.({
                      closed: false,
                      children: <div>自定义的UI</div>,
                    });
                  }}
                >
                  show custom unclose
                </Button>

                <Button
                  onClick={() => {
                    const record = getRecord(activeKey);
                    record?.ins?.showStandard?.({
                      headerLabel: 'NotificationTitle',
                      headerIcon:
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
                      title: 'Notification',
                      text: 'CtMobile A mobile-side framework that supports multiple forms of page switching, page transitions, page values, notifications, etc., suitable for developing single-page applications (SPA), hybrid development (mixed), and Córdoba development',
                      icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
                      closed: true,
                      datetime: '2019-02-12',
                    });
                  }}
                >
                  show Standard close
                </Button>

                <Button
                  onClick={() => {
                    const record = getRecord(activeKey);
                    record?.ins?.showStandard?.({
                      headerLabel: 'NotificationTitle',
                      headerIcon:
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
                      title: 'Notification',
                      text: 'CtMobile A mobile-side framework that supports multiple forms of page switching, page transitions, page values, notifications, etc., suitable for developing single-page applications (SPA), hybrid development (mixed), and Córdoba development',
                      icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
                      closed: false,
                      datetime: '2019-02-12',
                    });
                  }}
                >
                  show Standard unclose
                </Button>
              </div>
              <div className={styles.Auto} ref={t.ref} />
            </div>
          )}
        </TabPane>
      ))}
    </Tabs>
  );
};
