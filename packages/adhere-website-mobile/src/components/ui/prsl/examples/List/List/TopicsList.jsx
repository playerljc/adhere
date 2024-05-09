import { Typography } from 'antd';
import { Image, List } from 'antd-mobile';
import React from 'react';

import { FlexLayout, MobilePRSL } from '@baifendian/adhere';

import styles from './TopicsList.less';

const { Auto, Fixed } = FlexLayout;

const { Text, Paragraph } = Typography;

export default function ({ data: dataSource, actionTriggerMode }) {
  return (
    <List
      header="用户列表"
      className={styles.Wrapper}
      style={{
        '--border-inner': '0px solid',
        '--padding-left': '0',
        '--padding-right': '0',
      }}
    >
      {dataSource.map((user) => (
        <MobilePRSL.Item key={user.id} record={user}>
          {({ actionSheetTrigger }) => (
            <List.Item extra={actionTriggerMode ? actionSheetTrigger : null}>
              <div className={styles.Item}>
                <div className={styles.MediaWrapper}>
                  <Image lazy src={user.bigImg} width="100%" height={195} />

                  <div className={styles.MediaInfo}>2021年我推荐这9本书，你最喜欢哪本?</div>
                </div>

                <p className={styles.Info}>
                  <Paragraph
                    ellipsis={{
                      rows: 2,
                    }}
                  >
                    阅读会大大改善你的生活，如果你把这些书多读几遍，你就会看到你的思想、行为和生活都发生了
                  </Paragraph>
                </p>

                <div className={styles.Footer}>
                  <FlexLayout direction="horizontal">
                    <Auto>
                      <Text>神译局</Text>
                    </Auto>

                    <Fixed>
                      <Text type="secondary">查看详情</Text>
                    </Fixed>
                  </FlexLayout>
                </div>
              </div>
            </List.Item>
          )}
        </MobilePRSL.Item>
      ))}
    </List>
  );
}
