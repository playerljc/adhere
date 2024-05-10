import React from 'react';

import { useMobileCodeText } from '@/hooks';
import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  Section,
} from '@/lib/PlaygroundPage';

export default () => {
  const indexCodeText = useMobileCodeText('globalindicator/index.jsx');
  const p1CodeText = useMobileCodeText('globalindicator/examples/p1.jsx');
  const p2CodeText = useMobileCodeText('globalindicator/examples/p2.jsx');

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
            codeText: indexCodeText,
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
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/globalindicator`,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="MobileGlobalIndicator">
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
