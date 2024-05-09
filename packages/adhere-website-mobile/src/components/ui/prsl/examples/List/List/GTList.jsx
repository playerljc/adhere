import { Typography } from 'antd';
import { Ellipsis, Image, List } from 'antd-mobile';
import React from 'react';

import { FlexLayout, MobilePRSL, Space } from '@baifendian/adhere';

const { Auto, Fixed } = FlexLayout;

const { Title, Text, Paragraph } = Typography;

export default function ({ data: dataSource, actionTriggerMode }) {
  return (
    <List header="用户列表">
      {dataSource.map((user) => (
        <MobilePRSL.Item key={user.id} record={user}>
          {({ actionSheetTrigger }) => (
            <List.Item arrow extra={actionTriggerMode ? actionSheetTrigger : null}>
              <FlexLayout direction="horizontal">
                <Space.Group direction="horizontal" size={10}>
                  <Fixed fit style={{ alignItems: 'center' }}>
                    <Image
                      lazy
                      src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
                      fit="cover"
                      width={70}
                      height={70}
                    />
                  </Fixed>

                  <Auto style={{ flexDirection: 'column' }}>
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

                    <Paragraph ellipsis>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus
                      ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus,
                      ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel
                      felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet,
                      commodo augue id, pulvinar lacus.
                    </Paragraph>

                    <Paragraph
                      type="secondary"
                      ellipsis={{
                        rows: 2,
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus
                      ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus,
                      ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel
                      felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet,
                      commodo augue id, pulvinar lacus.
                    </Paragraph>

                    <Ellipsis
                      style={{ fontSize: 14 }}
                      rows={2}
                      direction="end"
                      expandText="展开"
                      collapseText="收起"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis
                            tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor
                            metus, ultrices condimentum sodales sit amet, pharetra sodales eros.
                            Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In
                            vel dui laoreet, commodo augue id, pulvinar lacus"
                    />
                  </Auto>
                </Space.Group>
              </FlexLayout>
            </List.Item>
          )}
        </MobilePRSL.Item>
      ))}
    </List>
  );
}
