import React, { useEffect, useState } from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';
import Util from '@/util';

export default () => {
  const [indexCodeText, setIndexCodeText] = useState('');
  const [p1CodeText, setP1CodeText] = useState('');
  const [p2CodeText, setP2CodeText] = useState('');
  const [p3CodeText, setP3CodeText] = useState('');

  useEffect(() => {
    Util.getMobileCodeText('autocomplete/index.jsx').then(setIndexCodeText);
    Util.getMobileCodeText('autocomplete/examples/p1.jsx').then(setP1CodeText);
    Util.getMobileCodeText('autocomplete/examples/p2.jsx').then(setP2CodeText);
    Util.getMobileCodeText('autocomplete/examples/p3.jsx').then(setP3CodeText);
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
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/autocomplete`,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="MobileAutoComplete">
        <p>
          <p>自动补全</p>
        </p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'AutoCompleteProps',
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
                params: 'searchBarProps',
                desc: '',
                type: 'SearchBarProps',
                defaultVal: '',
              },
              {
                params: 'loadData',
                desc: '',
                type: '(kw?: string) => Promise<Record<any, any>>',
                defaultVal: '',
              },
              {
                params: 'rowKey',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'labelProp',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'valueProp',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'renderResultItem',
                desc: '',
                type: '(record: any) => ReactNode',
                defaultVal: '',
              },
              {
                params: 'renderEmpty',
                desc: '',
                type: '() => ReactNode',
                defaultVal: '',
              },
              {
                params: 'searchDataSource',
                desc: '',
                type: 'any[]',
                defaultVal: '',
              },
              {
                params: 'value',
                desc: '',
                type: 'CheckListValue[]',
                defaultVal: '',
              },
              {
                params: 'onChange',
                desc: '',
                type: '(val: CheckListValue[]) => void',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '',
                type: `
                   (arg: {
                    value?: CheckListValue[];
                    onChange?: (_values: CheckListValue[]) => void;
                    searchDataSource?: any[];
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
