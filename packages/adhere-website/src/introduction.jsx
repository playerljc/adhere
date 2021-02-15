import React from 'react';
import { Typography } from 'antd';

import Playground from '@/lib/Playground';

import styles from './introduction.less';

const { Title, Paragraph, Text } = Typography;

class Introduction extends React.Component {
  render() {
    return (
      <div className={styles.Wrap}>
        <Typography>
          <Title level={2}>概述</Title>
          <Paragraph>
            <Text>
              这个工程中包含很多个 npm
              包，这些包都是在平时工作中沉淀出来的一些可以高度复用的组件，有 UI 相关、功能相关、GIS
              相关,使用的是 React 技术，有的可能是对 ant-design(还有其他第三方的库)的二次封装
            </Text>
          </Paragraph>
          <Title level={2}>兼容</Title>
          <Paragraph>
            <ul>
              <li>- 支持react16.x | 17.x</li>
              <li>- 支持antd4.x</li>
              <li>- 支持国际化</li>
              <li>- 支持修改主题</li>
              <li>- 支持动态引入(babel-plugin-import)</li>
            </ul>
          </Paragraph>
          <Title level={2}>安装</Title>
          <Paragraph>
            <code>npm i @baifendian/adhere --save</code>
          </Paragraph>
          <Title level={2}>动态引入</Title>
        </Typography>

        <Typography>
          <Paragraph>
            需要在webpack构建中加入如下配置,如果进行了动态引入，则不就需要要单独引入
            <code>@baifendian/adhere/lib/index.less</code>和<code>antd/dist/antd.less</code>
            <br />
            如果没有进行动态引入则需要单独引入<code>@baifendian/adhere/lib/index.less</code>和
            <code>antd/dist/antd.less</code>
          </Paragraph>
        </Typography>
        <Playground
          mode="code"
          scope={{ React }}
          expand
          codeText={`
  [
    'import',
    {
      libraryName: '@baifendian/adhere',
      transformToDefaultImport: true,
      style: true,
    },
    'adhere',
  ],
  [
    'import',
    {
      libraryName: 'antd',
      style: true,
    },
    'ant',
  ],
              `}
        />
      </div>
    );
  }
}

export default Introduction;
