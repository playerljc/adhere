import React, { useEffect, useState } from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';
import Util from '@/util';

export default () => {
  const [p1IndexCodeText, setP1IndexCodeText] = useState('');
  const [p2IndexCodeText, setP2IndexCodeText] = useState('');
  const [p1CodeText, setP1CodeText] = useState('');
  const [p2CodeText, setP2CodeText] = useState('');
  const [p3CodeText, setP3CodeText] = useState('');
  const [p4CodeText, setP4CodeText] = useState('');
  const [p5CodeText, setP5CodeText] = useState('');
  const [p6CodeText, setP6CodeText] = useState('');
  const [p7CodeText, setP7CodeText] = useState('');
  const [p8CodeText, setP8CodeText] = useState('');
  const [p9CodeText, setP9CodeText] = useState('');
  const [p10CodeText, setP10CodeText] = useState('');
  const [homeCodeText, setHomeCodeText] = useState('');
  const [messageCodeText, setMessageCodeText] = useState('');
  const [todoCodeText, setTodoCodeText] = useState('');
  const [personalCenterCodeText, setPersonalCenterCodeText] = useState('');

  useEffect(() => {
    Util.getMobileCodeText('tabs/P1.jsx').then(setP1IndexCodeText);
    Util.getMobileCodeText('tabs/P2.jsx').then(setP2IndexCodeText);
    Util.getMobileCodeText('tabs/examples/p1.jsx').then(setP1CodeText);
    Util.getMobileCodeText('tabs/examples/p2.jsx').then(setP2CodeText);
    Util.getMobileCodeText('tabs/examples/p3.jsx').then(setP3CodeText);
    Util.getMobileCodeText('tabs/examples/p4.jsx').then(setP4CodeText);
    Util.getMobileCodeText('tabs/examples/p5.jsx').then(setP5CodeText);
    Util.getMobileCodeText('tabs/examples/p6.jsx').then(setP6CodeText);
    Util.getMobileCodeText('tabs/examples/p7.jsx').then(setP7CodeText);
    Util.getMobileCodeText('tabs/examples/p8.jsx').then(setP8CodeText);
    Util.getMobileCodeText('tabs/examples/p9.jsx').then(setP9CodeText);
    Util.getMobileCodeText('tabs/examples/p10/index.jsx').then(setP10CodeText);
    Util.getMobileCodeText('tabs/examples/p10/Home.jsx').then(setHomeCodeText);
    Util.getMobileCodeText('tabs/examples/p10/Message.jsx').then(setMessageCodeText);
    Util.getMobileCodeText('tabs/examples/p10/PersonalCenter.jsx').then(setPersonalCenterCodeText);
    Util.getMobileCodeText('tabs/examples/p10/Todo.jsx').then(setTodoCodeText);
  }, []);

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
        displayBodyStyle: {
          width: 450,
        },
        config: [
          {
            key: 'index.jsx',
            title: 'index.jsx',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: p1IndexCodeText,
          },
          {
            key: 'p1.jsx',
            title: 'p1.jsx',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: p1CodeText,
          },
          {
            key: 'p2.jsx',
            title: 'p2.jsx',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: p2CodeText,
          },
          {
            key: 'p3.jsx',
            title: 'p3.jsx',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: p3CodeText,
          },
          {
            key: 'p4.jsx',
            title: 'p4.jsx',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: p4CodeText,
          },
          {
            key: 'p5.jsx',
            title: 'p5.jsx',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: p5CodeText,
          },
          {
            key: 'p6.jsx',
            title: 'p6.jsx',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: p6CodeText,
          },
          {
            key: 'p7.jsx',
            title: 'p7.jsx',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: p7CodeText,
          },
          {
            key: 'p8.jsx',
            title: 'p8.jsx',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: p8CodeText,
          },
          {
            key: 'p9.jsx',
            title: 'p9.jsx',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: p9CodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/tabs/p1`,
      },
      {
        id: `p2`,
        name: `基本使用`,
        cardProps: {
          description: {
            title: '基本使用',
            info: '基本使用',
          },
        },
        active: 'index.jsx',
        displayBodyStyle: {
          width: 450,
        },
        config: [
          {
            key: 'index.jsx',
            title: 'index.jsx',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: p2IndexCodeText,
          },
          {
            key: 'p10.jsx',
            title: 'p10.jsx',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: p10CodeText,
          },

          {
            key: 'Home.jsx',
            title: 'Home.jsx',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: homeCodeText,
          },
          {
            key: 'PersonalCenter.jsx',
            title: 'PersonalCenter.jsx',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: personalCenterCodeText,
          },
          {
            key: 'Todo.jsx',
            title: 'Todo.jsx',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: todoCodeText,
          },
          {
            key: 'Message.jsx',
            title: 'Message.jsx',
            style: { maxHeight: 500 },
            theme: 'eclipse',
            codeText: messageCodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/tabs/p2`,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="MobileTabs">
        <p>Tabs</p>
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
