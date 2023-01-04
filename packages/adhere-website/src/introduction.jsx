import { Typography } from 'antd';
import React from 'react';

import PlayGroundMulit from '@/lib/PlaygroundMulit';
import Playground from '@/lib/Playground';
import ScrollFooterPanel from '@/lib/ScrollFooterPanel';

import styles from './introduction.less';

const { Title, Paragraph, Text } = Typography;

class Introduction extends React.Component {
  render() {
    return (
      <ScrollFooterPanel>
        <div className={styles.Wrap}>
          <Typography>
            <Title level={2}>概述</Title>
            <Paragraph>
              <Text>
                这个工程中包含很多个npm包(整体也是一个npm包)，这些包都是在平时工作中沉淀出来的一些可以高度复用的组件，有UI相关、工具相关、GIS相关,使用的是React技术，有的可能是对ant-design(还有其他第三方的库)的二次封装
              </Text>
            </Paragraph>
            <Title level={2}>兼容</Title>
            <Paragraph>
              <ul>
                <li>- 支持 react(17.x)</li>
                <li>- 支持 ant-design(4.x)</li>
                <li>- 支持国际化</li>
                <li>- 支持修改主题</li>
                <li>- 支持动态引入(babel-plugin-import)</li>
                <li>每一个子包都可以单独安装</li>
                <li>使用typescript编写</li>
              </ul>
            </Paragraph>

            <Title level={2}>兼容环境</Title>
            <Paragraph>
              <ul>
                <li>- 现代浏览器，不支持IE</li>
                <li>- 每一个子包对IE的兼容性都不一样需要具体看</li>
              </ul>
            </Paragraph>

            <Title level={2}>安装</Title>
            <Paragraph>
              <code>npm i @baifendian/adhere --save</code>
            </Paragraph>
            <Paragraph>
              <code>yarn add @baifendian/adhere</code>
            </Paragraph>
          </Typography>

          <Typography className={styles.Margin}>
            <Title level={2}>按需加载</Title>
            <Paragraph>
              需要在webpack构建中加入如下配置,如果进行了按需加载，则就不需要单独引入
              <code>@baifendian/adhere/lib/index.less</code>和<code>antd/dist/antd.less</code>
              <br />
              如果没有进行按需加载则需要单独引入<code>@baifendian/adhere/lib/index.less</code>和
              <code>antd/dist/antd.less</code>
              <p style={{ color: 'red' }}>
                注：如果对antd进行了按需加载在应该在webpack的babel-loader的include中加入adhere路径
                <code>include.push(/@baifendian[\\/]adhere/)</code>
              </p>
            </Paragraph>
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
          </Typography>

          <Typography className={styles.Margin}>
            <Title level={2}>UMD使用</Title>
            <Paragraph>
              <p>
                umd需要2处理，第一处是HTML模板中需要进行一些必要库umd的外部引入，第二处是需要在webpack中加入一些externals的设置
              </p>
              <p style={{ color: 'red' }}>
                注意：使用umd的时候不能使用babel-plugin-import插件，webpack的alias中不能进行vue的设置
              </p>
            </Paragraph>
            <PlayGroundMulit
              mode="code"
              scope={{ React }}
              expand
              config={[
                {
                  title: '模板HTML文件',
                  codeText: `
  <link href="https://cdn.jsdelivr.net/npm/antd@4.14.0/dist/antd.min.css" rel="stylesheet">
  <link rel="stylesheet" href="/assets/umd/adhere.min.css">
  <script src="https://momentjs.com/downloads/moment-with-locales.min.js" crossorigin></script>
  <script src="https://cdn.jsdelivr.net/npm/react@17.0.1/umd/react.production.min.js" crossorigin></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@17.0.1/umd/react-dom.production.min.js" crossorigin></script>
  <script src="https://cdn.jsdelivr.net/npm/antd@4.14.0/dist/antd.min.js"></script>
  <script src="/assets/umd/adhere.bundle.js"></script>
                `,
                },
                {
                  title: 'webpack配置',
                  codeText: `
  webpackConfig.externals = {
    '@baifendian/adhere': "adhere",
    'antd': 'antd',
    'react': 'React',
    'react-dom':"ReactDOM",
    'moment':'moment',
  };
                `,
                },
              ]}
            />
          </Typography>
        </div>
      </ScrollFooterPanel>
    );
  }
}

export default Introduction;
