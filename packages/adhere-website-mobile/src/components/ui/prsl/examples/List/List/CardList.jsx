import { Typography } from 'antd';
import { Image, List } from 'antd-mobile';
import React from 'react';

import { FlexLayout, MobilePRSL } from '@baifendian/adhere';

import styles from './CardList.less';

const { Auto, Fixed } = FlexLayout;

const { Title, Text, Paragraph } = Typography;

export default function ({ data: dataSource, actionTriggerMode }) {
  return (
    <List header="用户列表" className={styles.Wrapper}>
      {dataSource.map((user) => (
        <MobilePRSL.Item key={user.id} record={user}>
          {({ actionSheetTrigger }) => (
            <List.Item>
              <div>
                <div>
                  <Image
                    lazy
                    height={115}
                    src="//img12.360buyimg.com/jdcms/s230x230_jfs/t1/230158/23/11564/153329/65a0a044Ff527786d/24e406ff457cabc0.jpg.avif"
                  />
                </div>

                <Title level={4} ellipsis>
                  Redmi K40游戏增强版
                </Title>

                <Paragraph type="secondary" ellipsis>
                  天玑1200年度旗舰处理器
                </Paragraph>

                <FlexLayout direction="horizontal">
                  <Auto>
                    <Text type="secondary" style={{ color: 'red' }}>
                      Y449
                    </Text>
                  </Auto>

                  <Fixed>
                    <Text type="secondary">科技日报</Text>
                  </Fixed>

                  <Fixed>{actionTriggerMode ? actionSheetTrigger : null}</Fixed>
                </FlexLayout>
              </div>
            </List.Item>
          )}
        </MobilePRSL.Item>
      ))}
    </List>
  );
}
