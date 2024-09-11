import React, { useContext } from 'react';

import { ConfigProvider, Util } from '@baifendian/adhere';

import { useMobileCodeText } from '@/hooks';
import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

export default () => {
  const baseCodeText = useMobileCodeText('popovermenu/Base.jsx');
  const tabsCodeText = useMobileCodeText('popovermenu/Tabs.jsx');
  const sliderTabsCodeText = useMobileCodeText('popovermenu/SliderTabs.jsx');
  const p1CodeText = useMobileCodeText('popovermenu/examples/p1.jsx');
  const p2CodeText = useMobileCodeText('popovermenu/examples/p2.jsx');
  const p3CodeText = useMobileCodeText('popovermenu/examples/p3.jsx');
  const p4CodeText = useMobileCodeText('popovermenu/examples/p4.jsx');
  const p5CodeText = useMobileCodeText('popovermenu/examples/p5.jsx');
  const p6CodeText = useMobileCodeText('popovermenu/examples/p6.jsx');

  const { media } = useContext(ConfigProvider.Context);

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
        active: 'Base.jsx',
        displayBodyStyle: {
          width: 450,
        },
        config: [
          {
            key: 'Base.jsx',
            title: 'Base.jsx',
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
            theme: 'eclipse',
            codeText: baseCodeText,
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
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/popovermenubase`,
      },
      {
        id: `p2`,
        name: `Tabs中使用`,
        cardProps: {
          description: {
            title: 'Tabs中使用',
            info: 'Tabs中使用',
          },
        },
        active: 'Tabs.jsx',
        displayBodyStyle: {
          width: 450,
        },
        config: [
          {
            key: 'Tabs.jsx',
            title: 'Tabs.jsx',
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
            theme: 'eclipse',
            codeText: tabsCodeText,
          },
          {
            key: 'p5x.jsx',
            title: 'p5x.jsx',
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
            theme: 'eclipse',
            codeText: p5CodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/popovermenutabs`,
      },
      {
        id: `p3`,
        name: `SliderTabs`,
        cardProps: {
          description: {
            title: 'SliderTabs',
            info: 'SliderTabs',
          },
        },
        active: 'SliderTabs.jsx',
        displayBodyStyle: {
          width: 450,
        },
        config: [
          {
            key: 'SliderTabs.jsx',
            title: 'SliderTabs.jsx',
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
            theme: 'eclipse',
            codeText: sliderTabsCodeText,
          },
          {
            key: 'p6.jsx',
            title: 'p6.jsx',
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
            theme: 'eclipse',
            codeText: p6CodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/popovermenuslidertabs`,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="MobilePopoverMenu">
        <p>popover的菜单</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'PopoverMenuProps',
            data: [
              {
                params: 'className',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: "''",
              },
              {
                params: 'style',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '{}',
              },
              {
                params: 'menuClassName',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: "''",
              },
              {
                params: 'menuStyle',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '{}',
              },
              {
                params: 'direction',
                desc: '方向',
                type: "'vertical' | 'horizontal'",
                defaultVal: 'horizontal',
              },
              {
                params: 'maxCount',
                desc: '滚动的最大菜单数',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'items',
                desc: '菜单数据',
                type: 'PopoverMenuItemProps[]',
                defaultVal: '[]',
              },
              {
                params: 'popoverProps',
                desc: 'popover的Props',
                type: "Omit<PopoverProps, 'content' | 'children'>",
                defaultVal: '{}',
              },
              {
                params: 'children',
                desc: 'children',
                type: 'any',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'PopoverMenuItemProps',
            data: [
              {
                params: 'className',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: "''",
              },
              {
                params: 'style',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '{}',
              },
              {
                params: 'key',
                desc: '菜单项的唯一值',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'isLeaf',
                desc: '是否是叶子结点',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'text',
                desc: '菜单名称',
                type: 'React.ReactNode',
                defaultVal: '',
              },
              {
                params: 'icon',
                desc: '菜单图标',
                type: 'React.ReactNode',
                defaultVal: '',
              },
              {
                params: 'disabled',
                desc: '是否禁用',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'onClick',
                desc: 'click事件',
                type: '() => Promise<any>',
                defaultVal: '',
              },
              {
                params: 'popoverProps',
                desc: 'popoverProps',
                type: "Omit<PopoverProps, 'content' | 'children'>",
                defaultVal: '{}',
              },
              {
                params: 'items',
                desc: '子菜菜单项',
                type: 'PopoverMenuItemProps[]',
                defaultVal: '[]',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
