import React, { useContext } from 'react';

import { ConfigProvider, Util } from '@baifendian/adhere';

import { useMobileCodeText } from '@/hooks';
import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

export default () => {
  const p1JSCodeText = useMobileCodeText('quickrangedate/examples/p1.jsx');
  const p2JSCodeText = useMobileCodeText('quickrangedate/examples/p2.jsx');

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
        active: 'p1.jsx',
        displayBodyStyle: {
          width: 450,
        },
        config: [
          {
            key: 'p1.jsx',
            title: 'p1.jsx',
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
            theme: 'eclipse',
            codeText: p1JSCodeText,
          },
          {
            key: 'p2.jsx',
            title: 'p2.jsx',
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
            theme: 'eclipse',
            codeText: p2JSCodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/quickrangedate`,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="MobileQuickRangeDate">
        <p>快速时间选取</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'QuickRangeDateProps',
            data: [
              {
                params: 'className',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '',
                type: 'CSSProperties',
                defaultVal: '',
              },
              {
                params: 'innerClassName',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'innerStyle',
                desc: '',
                type: 'CSSProperties',
                defaultVal: '',
              },
              {
                params: 'calendarModalProps',
                desc: '',
                type: 'CalendarModalProps',
                defaultVal: '',
              },
              {
                params: 'checkboxCheckListProps',
                desc: '',
                type: 'CheckboxCheckListProps',
                defaultVal: '',
              },
              {
                params: 'modalTriggerPromptProps',
                desc: '',
                type: 'ModalTriggerPromptProps<string>',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '',
                type: `
                  (params: {
                    originDefaultElement: ReactNode;
                    defaultElement: ReactNode;
                    value?: DateValue;
                    onChange?: QuickRangeDateChange;
                  }) => ReactNode
                `,
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
