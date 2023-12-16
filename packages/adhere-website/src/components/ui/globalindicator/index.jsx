import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';

import React from 'react';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';
import P3 from './examples/p3';

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
        name: `使用parent属性遮罩局部元素`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '使用parent属性遮罩局部元素',
            info: '使用parent属性遮罩局部元素',
          },
        },
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => <P2 />,
      },
      {
        id: `p3`,
        name: `各种大小`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '各种大小',
            info: '各种大小',
          },
        },
        type: 'PlayGround',
        codeText: P3CodeText,
        renderChildren: () => <P3 />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="GlobalIndicator">
        <p>全局无侵入的遮罩</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: '方法',
            data: [
              {
                name: 'show',
                desc: '显示遮罩',
                modifier: 'public',
                params: [
                  {
                    name: 'parent',
                    desc: '遮罩挂载的元素，这个元素需要有position:relative',
                    type: 'HtmlElement',
                    defaultVal: 'document.body',
                    required: 'false',
                  },
                  {
                    name: 'text',
                    desc: '显示的文本',
                    type: 'string',
                    defaultVal: '19999',
                    required: 'false',
                  },
                  {
                    name: 'zIndex',
                    desc: '遮罩的层级',
                    type: 'number',
                    defaultVal: '19999',
                    required: 'false',
                  },
                  {
                    name: 'size',
                    desc: '大小',
                    type: 'default | small | large',
                    defaultVal: 'default',
                    required: 'false',
                  },
                ],
                returnType: 'HtmlElement',
                returnDesc: '返回遮罩的Html对象',
              },
              {
                name: 'hide',
                desc: '取消遮罩',
                modifier: 'public',
                params: [
                  {
                    name: 'indicatorDom',
                    desc: '取消的HtmlElement元素,是show的返回值',
                    type: 'HtmlElement',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'hideAll',
                desc: '取消所有遮罩',
                modifier: 'public',
                params: [],
                returnType: '',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
