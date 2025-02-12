import React from 'react';

import { useMobileCodeText } from '@/hooks';
import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

export default () => {
  const p1CodeText = useMobileCodeText('spin/P1.jsx');
  const p1ComCodeText = useMobileCodeText('spin/examples/p1.jsx');
  const p1ComLessCodeText = useMobileCodeText('spin/examples/p1.less');

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
            style: { position: 'relative', height: 500 },
            theme: 'eclipse',
            codeText: p1CodeText,
          },
          {
            key: 'p1.jsx',
            title: 'p1.jsx',
            style: { position: 'relative', height: 500 },
            theme: 'eclipse',
            codeText: p1ComCodeText,
          },
          {
            key: 'p1.less',
            title: 'p1.less',
            style: { position: 'relative', height: 500 },
            theme: 'eclipse',
            codeText: p1ComLessCodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/anthoc/spin/p1`,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="MobileSpin">
        <p>无侵入的loading</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'MobileSpin',
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
                params: 'spinning',
                desc: '是否显示',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'text',
                desc: '显示的内容',
                type: "ToastProps['content']",
                defaultVal: '',
              },
              {
                params: 'zIndex',
                desc: '显示的层级',
                type: 'number',
                defaultVal: '999',
              },
              {
                params: 'afterClose',
                desc: '',
                type: '() => void',
                defaultVal: '',
              },
              {
                params: 'maskStyle',
                desc: '',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'maskClassName',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'maskClickable',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'icon',
                desc: '',
                type: "'success' | 'fail' | 'loading' | ReactNode",
                defaultVal: '',
              },
              {
                params: 'stopPropagation',
                desc: '',
                type: "'click' | 'touchstart'",
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
