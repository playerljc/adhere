import { Button, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';

import { Notification, Space } from '@baifendian/adhere';

import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';
import Props from '@/lib/Props';

import styles from './index.less';

const { TabPane } = Tabs;

const config = [
  { key: 'ios-top', ref: React.createRef(), ins: null },
  { key: 'ios-bottom', ref: React.createRef(), ins: null },
  { key: 'material-top', ref: React.createRef(), ins: null },
  { key: 'material-bottom', ref: React.createRef(), ins: null },
];

export default () => {
  const [activeKey, setActiveKey] = useState('ios-top');

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    const record = getRecord(activeKey);
    const [style, type] = activeKey.split('-');
    record.ins = Notification.build(record.ref.current, {
      style,
      type,
    });
  }, [activeKey]);

  function onChange(key) {
    setActiveKey(key);
  }

  function getRecord(curKey) {
    return config.find(({ key }) => key === curKey);
  }

  return (
    <div className="Page">
      <h1>Notification</h1>
      <p>通知</p>
      <ul>
        <li>- 支持ios和material</li>
        <li>- 支持top和bottom方向</li>
      </ul>

      <Space />

      <FunctionProps
        border
        title="NotificationFactory"
        data={[
          {
            name: 'build',
            desc: '构建一个Notification',
            modifier: 'static',
            params: [
              {
                name: 'container',
                desc: '父容器',
                type: 'HtmlElement',
                defaultVal: '',
                required: '',
              },
              {
                name: 'config',
                desc: '配置',
                type: 'IConfig',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'Notification',
            returnDesc: '',
          },
        ]}
      />

      <Space />

      <FunctionProps
        border
        title="Notification"
        data={[
          {
            name: 'show',
            desc: '显示一个自定义的notification',
            modifier: 'public',
            params: [
              {
                name: 'config',
                desc: '配置',
                type: 'IShowConfig',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'string',
            returnDesc: 'notification的id',
          },
          {
            name: 'showStandard',
            desc: '显示一个标准的notification',
            modifier: 'public',
            params: [
              {
                name: 'config',
                desc: '配置',
                type: 'IShowStandardConfig',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'string',
            returnDesc: 'notification的id',
          },
          {
            name: 'close',
            desc: '关闭一个notification',
            modifier: 'public',
            params: [
              {
                name: 'id',
                desc: 'id',
                type: 'string',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'void',
            returnDesc: '',
          },
        ]}
      />

      <Space />

      <Props
        border
        title="Notification"
        data={[
          {
            params: 'style',
            desc: '风格',
            type: "'ios' | 'material'",
            defaultVal: 'ios',
          },
          {
            params: 'type',
            desc: '类型',
            type: "'top' | 'bottom'",
            defaultVal: 'top',
          },
          {
            params: 'onCreate',
            desc: '创建完成',
            type: 'Function',
            defaultVal: '',
          },
          {
            params: 'onShow',
            desc: '显示完成',
            type: 'Function',
            defaultVal: '',
          },
          {
            params: 'onCloseBefore',
            desc: '关闭之前',
            type: 'Function',
            defaultVal: '',
          },
          {
            params: 'onCloseAfter',
            desc: '关闭之后',
            type: 'Function',
            defaultVal: '',
          },
        ]}
      />

      <Space />

      <Props
        border
        title="IShowConfig"
        data={[
          {
            params: 'closed',
            desc: '是否有关闭按钮',
            type: 'boolean',
            defaultVal: '',
          },
          {
            params: 'children',
            desc: '显示的UI',
            type: 'React.ReactElement',
            defaultVal: '',
          },
        ]}
      />

      <Space />

      <Props
        border
        title="IShowStandardConfig"
        data={[
          {
            params: 'closed',
            desc: '是否有关闭按钮',
            type: 'boolean',
            defaultVal: '',
          },
          {
            params: 'headerLabel',
            desc: '头部UI',
            type: 'string | React.ReactElement',
            defaultVal: '',
          },
          {
            params: 'headerIcon',
            desc: '头部图标',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'title',
            desc: '标题',
            type: 'string | React.ReactElement',
            defaultVal: '',
          },
          {
            params: 'text',
            desc: '内容',
            type: 'string | React.ReactElement',
            defaultVal: '',
          },
          {
            params: 'icon',
            desc: '图标',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'datetime',
            desc: '时间',
            type: 'string | React.ReactElement',
            defaultVal: '',
          },
        ]}
      />

      <h2>基本使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React, { useState, useEffect } from 'react';
  import { Button, Tabs } from 'antd';
  import { Notification, Space } from '@baifendian/adhere';

  import styles from './index.less';

  const { TabPane } = Tabs;

  const config = [
    { key: 'ios-top', ref: React.createRef(), ins: null },
    { key: 'ios-bottom', ref: React.createRef(), ins: null },
    { key: 'material-top', ref: React.createRef(), ins: null },
    { key: 'material-bottom', ref: React.createRef(), ins: null },
  ];

  export default () => {
    const [activeKey, setActiveKey] = useState('ios-top');

    useEffect(() => {
      // eslint-disable-next-line no-use-before-define
      const record = getRecord(activeKey);
      const [style, type] = activeKey.split('-');
      record.ins = Notification.build(record.ref.current, {
        style,
        type,
      });
    }, [activeKey]);

    function onChange(key) {
      setActiveKey(key);
    }

    function getRecord(curKey) {
      return config.find(({ key }) => key === curKey);
    }

    <Tabs tabPosition="left" activeKey={activeKey} onChange={onChange}>
      {config.map((t) => (
        <TabPane tab={t.key} key={t.key}>
          {activeKey === t.key ? (
            <div className={styles.Tab}>
              <div className={styles.Fixed}>
                <Button
                  onClick={() => {
                    const record = getRecord(activeKey);
                    record.ins.show({
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
                    record.ins.show({
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
                    record.ins.showStandard({
                      headerLabel: 'NotificationTitle',
                      headerIcon:
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
                      title: 'Notification',
                      text:
                        'CtMobile A mobile-side framework that supports multiple forms of page switching, page transitions, page values, notifications, etc., suitable for developing single-page applications (SPA), hybrid development (mixed), and Córdoba development',
                      icon:
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
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
                    record.ins.showStandard({
                      headerLabel: 'NotificationTitle',
                      headerIcon:
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
                      title: 'Notification',
                      text:
                        'CtMobile A mobile-side framework that supports multiple forms of page switching, page transitions, page values, notifications, etc., suitable for developing single-page applications (SPA), hybrid development (mixed), and Córdoba development',
                      icon:
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
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
          ) : null}
        </TabPane>
      ))}
    </Tabs>

    /*----------------------------index.less-------------------------*/
    .Tab {
      display: flex;
      flex-direction: column;
      height: 600px;

      > .Fixed {
        display: flex;
        flex-shrink: 0;
        :global {
          .ant-btn {
            margin-right: 10px;
          }
        }
      }

      > .Auto {
        position: relative;
        flex-grow: 1;
        min-height: 0;
      }
    }
  }
    `}
      >
        <Tabs tabPosition="left" activeKey={activeKey} onChange={onChange}>
          {config.map((t) => (
            <TabPane tab={t.key} key={t.key}>
              {activeKey === t.key ? (
                <div className={styles.Tab}>
                  <div className={styles.Fixed}>
                    <Button
                      onClick={() => {
                        const record = getRecord(activeKey);
                        record.ins.show({
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
                        record.ins.show({
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
                        record.ins.showStandard({
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
                        record.ins.showStandard({
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
              ) : null}
            </TabPane>
          ))}
        </Tabs>
      </Playground>
    </div>
  );
};
