import React from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `基本使用`,
        cardProps: {
          description: {
            title: '基本使用',
            info: '基本使用',
          },
        },
        active: 'index.jsx',
        config: [
          {
            key: 'index.jsx',
            title: 'index.jsx',
            codeText: `
  import { Badge } from 'antd-mobile';
  import { AppOutline, MessageFill, UnorderedListOutline, UserOutline } from 'antd-mobile-icons';
  import React from 'react';

  import { MobileTabs } from '@baifendian/adhere';

  import DemoBlock from '@/lib/DemoBlock';

  import styles from './index.less';

  const { CapsuleTabs, JumboTabs, SideTabs, Tabs, TabBar } = MobileTabs;

  export default ({ children }) => (
    <DemoBlock>
      <DemoBlock.Item title="CapsuleTabs">
        <CapsuleTabs>
          <CapsuleTabs.Tab title="水果" key="fruits">
            菠萝
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title="蔬菜" key="vegetables">
            西红柿
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title="动物" key="animals">
            蚂蚁
          </CapsuleTabs.Tab>
        </CapsuleTabs>
      </DemoBlock.Item>

      <DemoBlock.Item title="CapsuleTabs - 超长自动滑动">
        <CapsuleTabs defaultActiveKey="1">
          <CapsuleTabs.Tab title="Espresso" key="1">
            1
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title="Coffee Latte" key="2">
            2
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title="Cappuccino" key="3">
            3
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title="Americano" key="4">
            4
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title="Flat White" key="5">
            5
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title="Caramel Macchiato" key="6">
            6
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title="Cafe Mocha" key="7">
            7
          </CapsuleTabs.Tab>
        </CapsuleTabs>
      </DemoBlock.Item>

      <DemoBlock.Item title="JumboTabs">
        <JumboTabs>
          <JumboTabs.Tab title="水果" description="描述文案" key="fruits">
            菠萝
          </JumboTabs.Tab>
          <JumboTabs.Tab title="蔬菜" description="描述文案" key="vegetables">
            西红柿
          </JumboTabs.Tab>
          <JumboTabs.Tab title="动物" description="描述文案" key="animals">
            蚂蚁
          </JumboTabs.Tab>
        </JumboTabs>
      </DemoBlock.Item>

      <DemoBlock.Item title="JumboTabs - 超长自动滑动">
        <JumboTabs defaultActiveKey="1">
          <JumboTabs.Tab title="Espresso" description="描述文案" key="1">
            1
          </JumboTabs.Tab>
          <JumboTabs.Tab title="Coffee Latte" description="描述文案" key="2">
            2
          </JumboTabs.Tab>
          <JumboTabs.Tab title="Cappuccino" description="描述文案" key="3">
            3
          </JumboTabs.Tab>
          <JumboTabs.Tab title="Americano" description="描述文案" key="4">
            4
          </JumboTabs.Tab>
          <JumboTabs.Tab title="Flat White" description="描述文案" key="5">
            5
          </JumboTabs.Tab>
          <JumboTabs.Tab title="Caramel Macchiato" description="描述文案" key="6">
            6
          </JumboTabs.Tab>
          <JumboTabs.Tab title="Cafe Mocha" description="描述文案" key="7">
            7
          </JumboTabs.Tab>
        </JumboTabs>
      </DemoBlock.Item>

      <DemoBlock.Item title="SideTabs">
        <SideTabs activeKey="1">
          {Array.from({ length: 6 })
            .fill(0)
            .map((item, _index) => (
              <SideTabs.Tab key={\`${_index + 1}\`} title={\`选项卡${_index + 1}\`}>
                {_index + 1}
              </SideTabs.Tab>
            ))}
        </SideTabs>
      </DemoBlock.Item>

      <DemoBlock.Item title="Tabs">
        <Tabs>
          <Tabs.Tab title="水果" key="fruits">
            菠萝
          </Tabs.Tab>
          <Tabs.Tab title="蔬菜" key="vegetables">
            西红柿
          </Tabs.Tab>
          <Tabs.Tab title="动物" key="animals">
            蚂蚁
          </Tabs.Tab>
        </Tabs>
      </DemoBlock.Item>

      <DemoBlock.Item title="Tabs - 超长">
        <Tabs defaultActiveKey="1">
          <Tabs.Tab title="Espresso" key="1">
            1
          </Tabs.Tab>
          <Tabs.Tab title="Coffee Latte" key="2">
            2
          </Tabs.Tab>
          <Tabs.Tab title="Cappuccino" key="3">
            3
          </Tabs.Tab>
          <Tabs.Tab title="Americano" key="4">
            4
          </Tabs.Tab>
          <Tabs.Tab title="Flat White" key="5">
            5
          </Tabs.Tab>
          <Tabs.Tab title="Caramel Macchiato" key="6">
            6
          </Tabs.Tab>
          <Tabs.Tab title="Cafe Mocha" key="7">
            7
          </Tabs.Tab>
        </Tabs>
      </DemoBlock.Item>

      <DemoBlock.Item title="Tabs - swiper">
        <Tabs defaultActiveKey="1" swiper>
          <Tabs.Tab title="Espresso" key="1">
            1
          </Tabs.Tab>
          <Tabs.Tab title="Coffee Latte" key="2">
            2
          </Tabs.Tab>
          <Tabs.Tab title="Cappuccino" key="3">
            3
          </Tabs.Tab>
          <Tabs.Tab title="Americano" key="4">
            4
          </Tabs.Tab>
          <Tabs.Tab title="Flat White" key="5">
            5
          </Tabs.Tab>
          <Tabs.Tab title="Caramel Macchiato" key="6">
            6
          </Tabs.Tab>
          <Tabs.Tab title="Cafe Mocha" key="7">
            7
          </Tabs.Tab>
        </Tabs>
      </DemoBlock.Item>

      <DemoBlock.Item title="Tabs - noShowArrowMore">
        <Tabs defaultActiveKey="1" showArrowMore={false}>
          <Tabs.Tab title="Espresso" key="1">
            1
          </Tabs.Tab>
          <Tabs.Tab title="Coffee Latte" key="2">
            2
          </Tabs.Tab>
          <Tabs.Tab title="Cappuccino" key="3">
            3
          </Tabs.Tab>
          <Tabs.Tab title="Americano" key="4">
            4
          </Tabs.Tab>
          <Tabs.Tab title="Flat White" key="5">
            5
          </Tabs.Tab>
          <Tabs.Tab title="Caramel Macchiato" key="6">
            6
          </Tabs.Tab>
          <Tabs.Tab title="Cafe Mocha" key="7">
            7
          </Tabs.Tab>
        </Tabs>
      </DemoBlock.Item>

      <DemoBlock.Item title="TabBar">
        <TabBar
          className={styles.TabBarWrap}
          data={[
            {
              key: '/adhere/component/ui/tabs/home',
              title: '首页',
              icon: <AppOutline />,
              badge: Badge.dot,
            },
            {
              key: '/adhere/component/ui/tabs/todo',
              title: '待办',
              icon: <UnorderedListOutline />,
              badge: '5',
            },
            {
              key: '/adhere/component/ui/tabs/message',
              title: '消息',
              icon: <MessageFill />,
              badge: '99+',
            },
            {
              key: '/adhere/component/ui/tabs/personalcenter',
              title: '我的',
              icon: <UserOutline />,
            },
          ]}
        >
          {children}
        </TabBar>
      </DemoBlock.Item>
    </DemoBlock>
  );
      `,
            style: { maxHeight: 500 },
            theme: 'eclipse',
          },
          {
            key: 'Home.jsx',
            title: 'Home.jsx',
            codeText: `
  import React from 'react';

  export default () => <div>Home</div>;
            `,
            theme: 'eclipse',
          },
          {
            key: 'Todo.jsx',
            title: 'Todo.jsx',
            codeText: `
  import React from 'react';

  export default () => <div>Todo</div>;
            `,
            theme: 'eclipse',
          },
          {
            key: 'Message.jsx',
            title: 'Message.jsx',
            codeText: `
  import React from 'react';

  export default () => <div>Message</div>;
            `,
            theme: 'eclipse',
          },
          {
            key: 'PersonalCenter.jsx',
            title: 'PersonalCenter.jsx',
            codeText: `
  import React from 'react';

  export default () => <div>PersonalCenter</div>;
            `,
            theme: 'eclipse',
          },
        ],
        type: 'PlayGroundTabMobile',
        url: 'http://www.baidu.com',
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="MobileTabs">
        <p>
          <p>Tabs</p>
        </p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'CapsuleTabs',
            data: [
              {
                params: 'className',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'innerClassName',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'innerStyle',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '',
                type: 'CapsuleTabs.Tab[]',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'CapsuleTabs.Tab',
            data: [
              {
                params: 'title',
                desc: '',
                type: 'ReactNode',
                defaultVal: '',
              },
              {
                params: 'disabled',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'forceRender',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'destroyOnClose',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '',
                type: 'ReactNode',
                defaultVal: '',
              },
            ],
          },

          {
            border: true,
            title: 'JumboTabs',
            data: [
              {
                params: 'className',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'innerClassName',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'innerStyle',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: 'children',
                type: 'JumboTabs.Tab[]',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'JumboTabs.Tab',
            data: [
              {
                params: 'title',
                desc: '',
                type: 'ReactNode',
                defaultVal: '',
              },
              {
                params: 'disabled',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'forceRender',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'destroyOnClose',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '',
                type: 'ReactNode',
                defaultVal: '',
              },
            ],
          },

          {
            border: true,
            title: 'SideTabs',
            data: [
              {
                params: 'className',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'activeKey',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'defaultActiveKey',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'onChange',
                desc: '',
                type: '(params?: any) => void',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: 'children',
                type: 'SideTabs.Tab[]',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'SideTabs.Tab',
            data: [
              {
                params: 'className',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: 'children',
                type: 'React.ReactNode',
                defaultVal: '',
              },
            ],
          },

          {
            border: true,
            title: 'TabBar',
            data: [
              {
                params: 'className',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'mainClassName',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'mainStyle',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'bottomClassName',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'bottomStyle',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'activeKey',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'onChange',
                desc: '',
                type: '(params?: any) => void',
                defaultVal: '',
              },
              {
                params: 'data',
                desc: '',
                type: 'TabBarItemProps[]',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: 'children',
                type: 'React.ReactNode',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'TabBarItemProps',
            data: [
              {
                params: 'className',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'icon',
                desc: '',
                type: 'ReactNode | ((active: boolean) => ReactNode)',
                defaultVal: '',
              },
              {
                params: 'title',
                desc: '',
                type: 'ReactNode | ((active: boolean) => ReactNode)',
                defaultVal: '',
              },
              {
                params: 'badge',
                desc: '',
                type: "BadgeProps['content']",
                defaultVal: '',
              },
            ],
          },

          {
            border: true,
            title: 'Tabs',
            data: [
              {
                params: 'className',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'innerClassName',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'innerStyle',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'showArrowMore',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'swiper',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'swiperProps',
                desc: '',
                type: 'SwiperProps',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: 'children',
                type: 'Tabs.Tab[]',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'Tabs.Tab',
            data: [
              {
                params: 'className',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: 'children',
                type: 'React.ReactNode',
                defaultVal: '',
              },

              {
                params: 'title',
                desc: '',
                type: 'React.ReactNode',
                defaultVal: '',
              },
              {
                params: 'disabled',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'forceRender',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'destroyOnClose',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '',
                type: 'React.ReactNode',
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
