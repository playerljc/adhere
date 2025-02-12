import { Typography } from 'antd';
import { Image, List } from 'antd-mobile';
import React from 'react';

import { ContourBlock, FlexLayout, MobilePRSL } from '@baifendian/adhere';

import styles from './GTMList.less';

const { Auto, Fixed } = FlexLayout;

const { Title, Text, Paragraph } = Typography;

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
                <Title level={4} ellipsis>
                  如何看待win10的审美
                </Title>

                <FlexLayout direction="horizontal">
                  <Auto>
                    <Text type="secondary">科技日报</Text>
                  </Auto>

                  <Fixed fit style={{ alignItems: 'center' }}>
                    <Text type="secondary">2023-01-05</Text>
                  </Fixed>
                </FlexLayout>

                <Paragraph
                  ellipsis={{
                    rows: 2,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                  turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices
                  condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus.
                  Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id,
                  pulvinar lacus.
                </Paragraph>

                <div className={styles.Images}>
                  {Array.from({ length: 9 }).map((t, index) => (
                    <ContourBlock key={index}>
                      <Image
                        lazy
                        src="https://t7.baidu.com/it/u=2168645659,3174029352&fm=193&f=GIF"
                      />
                    </ContourBlock>
                  ))}
                </div>
              </div>
            </List.Item>
          )}
        </MobilePRSL.Item>
      ))}
    </List>
  );
}
