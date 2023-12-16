import React, { useEffect, useState } from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';
import Util from '@/util';

export default () => {
  const [indexCodeText, setIndexCodeText] = useState('');
  const [p1CodeText, setP1CodeText] = useState('');
  const [p2CodeText, setP2CodeText] = useState('');
  const [p3CodeText, setP3CodeText] = useState('');
  const [p4CodeText, setP4CodeText] = useState('');
  const [p5CodeText, setP5CodeText] = useState('');
  const [p6CodeText, setP6CodeText] = useState('');

  useEffect(() => {
    Util.getMobileCodeText('tabs/index.jsx').then(setIndexCodeText);
    Util.getMobileCodeText('tabs/timepickerview/p1.jsx').then(setP1CodeText);
    Util.getMobileCodeText('tabs/timepickerview/p2.jsx').then(setP2CodeText);
    Util.getMobileCodeText('tabs/timepickerview/p3.jsx').then(setP3CodeText);
    Util.getMobileCodeText('tabs/timepickerview/p4.jsx').then(setP4CodeText);
    Util.getMobileCodeText('tabs/timepickerview/p5.jsx').then(setP5CodeText);
    Util.getMobileCodeText('tabs/timepickerview/p6.jsx').then(setP6CodeText);
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
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/timepickerview`,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="MobileTimePickerView">
        <p>
          <p>时间选择</p>
        </p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'MobileTimePickerView',
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
                params: 'value',
                desc: '值',
                type: 'dayjs.Dayjs | null',
                defaultVal: '',
              },
              {
                params: 'onChange',
                desc: '切换时间触发',
                type: '(value: dayjs.Dayjs | null) => void',
                defaultVal: '',
              },
              {
                params: 'format',
                desc: '格式化',
                type: "'HH:mm:ss' | 'HH:mm' | 'HH' | 'mm:ss' | 'ss' | undefined",
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
