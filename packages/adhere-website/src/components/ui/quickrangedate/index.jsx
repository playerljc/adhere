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
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'Form中使用',
            info: 'Form中使用',
          },
        },
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => <P2 />,
      },
      {
        id: `p3`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '自定义',
            info: '自定义',
          },
        },
        type: 'PlayGround',
        codeText: P3CodeText,
        renderChildren: () => <P3 />,
      },
      {
        id: `p4`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '显示默认时间',
            info: '显示默认时间',
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
      <Section title="QuickRangeDate">
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
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'config',
                desc: '配置',
                type: 'ConfigItem[]',
                defaultVal: '',
              },
              {
                params: 'value',
                desc: '',
                type: 'DateValue',
                defaultVal: '',
              },
              {
                params: 'onChange',
                desc: '',
                type: 'QuickRangeDateChange',
                defaultVal: '',
              },
              {
                params: 'rangePickerProps',
                desc: '',
                type: 'RangePickerProps',
                defaultVal: '',
              },
              {
                params: 'radioGroupProps',
                desc: '',
                type: 'RadioGroupProps',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '',
                type: `
                  (params: {
                    defaultElement: ReactNode;
                    value?: DateValue;
                    onChange?: QuickRangeDateChange;
                  }) => ReactNode
                `,
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'QuickRangeDateComponent',
            data: [
              {
                params: 'sync',
                desc: '',
                type: '(dateValue: DateValue | undefined) => DateValue | undefined',
                defaultVal: '',
              },
              {
                params: 'stringValue',
                desc: '',
                type: '(dateValue: DateValue | undefined) => undefined | string',
                defaultVal: '',
              },
              {
                params: 'getLabel',
                desc: '',
                type: '(params: { type: DateType; value?: number }) => ReactNode',
                defaultVal: '',
              },
              {
                params: 'numberToDayjs',
                desc: '',
                type: `
                  (
                    dateValue: [number | undefined, number | undefined],
                  ) => null | [dayjs.Dayjs, dayjs.Dayjs]
                `,
                defaultVal: '',
              },
              {
                params: 'datesToNumbers',
                desc: '',
                type: `
                  (
                    _value: undefined | [dayjs.Dayjs, dayjs.Dayjs] | [],
                  ) => [undefined | number, undefined | number]
                `,
                defaultVal: '',
              },
              {
                params: 'getValueEntityByStringValue',
                desc: '',
                type: '(stringValue: string) => { type: DateType; value: number }',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'QuickRangeDateChange',
            data: [
              {
                params: '',
                desc: '',
                type: '(value: DateValue) => void',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'ConfigItem',
            data: [
              {
                params: 'label',
                desc: '',
                type: 'ReactNode',
                defaultVal: '',
              },
              {
                params: 'render',
                desc: '',
                type: '(value?: DateValue) => ReactNode',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'DateValue',
            data: [
              {
                params: 'type',
                desc: '',
                type: 'DateType',
                defaultVal: '',
              },
              {
                params: 'value',
                desc: '',
                type: 'number | undefined',
                defaultVal: '',
              },
              {
                params: 'start',
                desc: '',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'end',
                desc: '',
                type: 'number',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'DateType',
            data: [
              {
                params: '',
                desc: '',
                type: `
                  | 'a-d'
                  | 'a-w'
                  | 'a-M'
                  | 'a-Q'
                  | 'a-y'
                  | 'a-h'
                  | 'a-m'
                  | 'a-s'
                  | 'a-ms'
                  | 'b-d'
                  | 'b-w'
                  | 'b-M'
                  | 'b-Q'
                  | 'b-y'
                  | 'b-h'
                  | 'b-m'
                  | 'b-s'
                  | 'b-ms'
                  | 'custom'
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
