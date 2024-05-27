import React, { useContext } from 'react';

import { ConfigProvider, Util } from '@baifendian/adhere';

import { useMobileCodeText } from '@/hooks';
import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

export default () => {
  const { media } = useContext(ConfigProvider.Context);

  const indexCodeText = useMobileCodeText('tabs/index.jsx');
  const p1CodeText = useMobileCodeText('tabs/timepickerview/p1.jsx');
  const p2CodeText = useMobileCodeText('tabs/timepickerview/p2.jsx');
  const p3CodeText = useMobileCodeText('tabs/timepickerview/p3.jsx');
  const p4CodeText = useMobileCodeText('tabs/timepickerview/p4.jsx');
  const p5CodeText = useMobileCodeText('tabs/timepickerview/p5.jsx');
  const p6CodeText = useMobileCodeText('tabs/timepickerview/p6.jsx');

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
            codeText: indexCodeText,
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
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/timepickerview`,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="MobileTimePickerView">
        <p>时间选择</p>
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
