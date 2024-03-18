import React, { useEffect, useState } from 'react';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';
import Util from '@/util';

export default () => {
  const [indexCodeText, setIndexCodeText] = useState('');
  const [p1CodeText, setP1CodeText] = useState('');
  const [p2CodeText, setP2CodeText] = useState('');

  useEffect(() => {
    Util.getMobileCodeText('importantconfirm/index.jsx').then(setIndexCodeText);
    Util.getMobileCodeText('importantconfirm/examples/p1.jsx').then(setP1CodeText);
    Util.getMobileCodeText('importantconfirm/examples/p2.jsx').then(setP2CodeText);
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
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/importantconfirm`,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="MobileImportantConfirm">
        <p>重要操作确认提示</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: '属性',
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
        ]}
      />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: '方法',
            data: [
              {
                name: 'open',
                desc: '打开确认对话框',
                modifier: 'global',
                params: [
                  {
                    name: 'props',
                    desc: '参数',
                    type: 'DialogConfirmProps',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
