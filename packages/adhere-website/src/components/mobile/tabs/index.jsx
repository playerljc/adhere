import React, { useContext } from 'react';

import { ConfigProvider, Util } from '@baifendian/adhere';

import { useMobileCodeText } from '@/hooks';
import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

export default () => {
  const { media } = useContext(ConfigProvider.Context);

  const p1IndexCodeText = useMobileCodeText('tabs/P1.jsx');
  const p2IndexCodeText = useMobileCodeText('tabs/P2.jsx');
  const p1CodeText = useMobileCodeText('tabs/examples/p1.jsx');
  const p2CodeText = useMobileCodeText('tabs/examples/p2.jsx');
  const p3CodeText = useMobileCodeText('tabs/examples/p3.jsx');
  const p4CodeText = useMobileCodeText('tabs/examples/p4.jsx');
  const p5CodeText = useMobileCodeText('tabs/examples/p5.jsx');
  const p6CodeText = useMobileCodeText('tabs/examples/p6.jsx');
  const p7CodeText = useMobileCodeText('tabs/examples/p7.jsx');
  const p8CodeText = useMobileCodeText('tabs/examples/p8.jsx');
  const p9CodeText = useMobileCodeText('tabs/examples/p9.jsx');
  const p10CodeText = useMobileCodeText('tabs/examples/p10/index.jsx');
  const homeCodeText = useMobileCodeText('tabs/examples/p10/Home.jsx');
  const messageCodeText = useMobileCodeText('tabs/examples/p10/Message.jsx');
  const todoCodeText = useMobileCodeText('tabs/examples/p10/PersonalCenter.jsx');
  const personalCenterCodeText = useMobileCodeText('tabs/examples/p10/Todo.jsx');

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
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
            theme: 'eclipse',
            codeText: p1IndexCodeText,
          },
          {
            key: 'p1.jsx',
            title: 'p1.jsx',
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
            theme: 'eclipse',
            codeText: p1CodeText,
          },
          {
            key: 'p2.jsx',
            title: 'p2.jsx',
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
            theme: 'eclipse',
            codeText: p2CodeText,
          },
          {
            key: 'p3.jsx',
            title: 'p3.jsx',
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
            theme: 'eclipse',
            codeText: p3CodeText,
          },
          {
            key: 'p4.jsx',
            title: 'p4.jsx',
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
            theme: 'eclipse',
            codeText: p4CodeText,
          },
          {
            key: 'p5.jsx',
            title: 'p5.jsx',
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
            theme: 'eclipse',
            codeText: p5CodeText,
          },
          {
            key: 'p6.jsx',
            title: 'p6.jsx',
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
            theme: 'eclipse',
            codeText: p6CodeText,
          },
          {
            key: 'p7.jsx',
            title: 'p7.jsx',
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
            theme: 'eclipse',
            codeText: p7CodeText,
          },
          {
            key: 'p8.jsx',
            title: 'p8.jsx',
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
            theme: 'eclipse',
            codeText: p8CodeText,
          },
          {
            key: 'p9.jsx',
            title: 'p9.jsx',
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
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
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
            theme: 'eclipse',
            codeText: p2IndexCodeText,
          },
          {
            key: 'p10.jsx',
            title: 'p10.jsx',
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
            theme: 'eclipse',
            codeText: p10CodeText,
          },

          {
            key: 'Home.jsx',
            title: 'Home.jsx',
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
            theme: 'eclipse',
            codeText: homeCodeText,
          },
          {
            key: 'PersonalCenter.jsx',
            title: 'PersonalCenter.jsx',
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
            theme: 'eclipse',
            codeText: personalCenterCodeText,
          },
          {
            key: 'Todo.jsx',
            title: 'Todo.jsx',
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
            theme: 'eclipse',
            codeText: todoCodeText,
          },
          {
            key: 'Message.jsx',
            title: 'Message.jsx',
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
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
