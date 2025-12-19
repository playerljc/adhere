import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';
import P4CodeText from '!!raw-loader!./examples/p4';

import React from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';
import P3 from './examples/p3';
import P4 from './examples/p4';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `基本使用`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '基本使用',
            info: '基本使用',
          },
        },
        type: 'PlayGround',
        codeText: P1CodeText,
        renderChildren: () => <P1 />,
      },
      {
        id: `p2`,
        name: `原始尺寸可滚动`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '最外层可滚动',
            info: '图片是原始尺寸',
          },
        },
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => <P2 />,
      },
      {
        id: `p3`,
        name: `使用items的props渲染子项`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '使用items的props渲染子项',
            info: '使用items的props渲染子项',
          },
        },
        type: 'PlayGround',
        codeText: P3CodeText,
        renderChildren: () => <P3 />,
      },
      {
        id: `p4`,
        name: `对宽度进行动态改变`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '对宽度进行动态改变',
            info: '对宽度进行动态改变',
          },
        },
        type: 'PlayGround',
        codeText: P4CodeText,
        renderChildren: () => <P4 />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="MagicPanel">
        <p>魔法面板</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'MagicPanelProps',
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
                params: 'metaData',
                desc: '元数据',
                type: 'MetaData',
                defaultVal: '',
              },
              {
                params: 'renderBody',
                desc: '渲染主体元素',
                type: '(ref: RefObject<HTMLElement | null>) => ReactElement',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '渲染children',
                type: `
                      (
                        bodyElement: ReactElement,
                        newElements: ComputeData,
                        items?: ReactElement[],
                      ) => ReactNode`,
                defaultVal: '',
              },
              {
                params: 'items',
                desc: '子元素配置',
                type: 'Item[]',
                defaultVal: '',
              },
              {
                params: 'onChange',
                desc: '当主体元素的尺寸发生改变后触发',
                type: '(e: ComputeData) => void',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'MetaData',
            data: [
              {
                params: 'elementsInfo',
                desc: '主体元素内部元素的元数据',
                type: 'ElementInfo[]',
                defaultVal: '',
              },
              {
                params: 'originWidth',
                desc: '主体元素的宽度',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'originHeight',
                desc: '主体元素的高度',
                type: 'number',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'ElementInfo',
            data: [
              {
                params: 'x',
                desc: 'x位置',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'y',
                desc: 'y位置',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'width',
                desc: '宽度',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'height',
                desc: '高度',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'attrs',
                desc: '附加属性',
                type: 'Record<string, string>',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'Item',
            data: [
              {
                params: 'key',
                desc: '唯一值',
                type: 'string',
                defaultVal: '',
              },
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
                desc: '孩子元素',
                type: '(params: ElementInfo) => ReactNode',
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
