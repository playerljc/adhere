import React, { useEffect, useState } from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';
import Util from '@/util';

export default () => {
  const [P1CodeText, setP1CodeText] = useState('');
  const [P2CodeText, setP2CodeText] = useState('');
  const [P3CodeText, setP3CodeText] = useState('');
  const [p1ComCodeText, setP1ComCodeText] = useState('');
  const [p2ComCodeText, setP2ComCodeText] = useState('');
  const [p3ComCodeText, setP3ComCodeText] = useState('');

  useEffect(() => {
    Util.getMobileCodeText('autocomplete/P1.jsx').then(setP1CodeText);
    Util.getMobileCodeText('autocomplete/P2.jsx').then(setP2CodeText);
    Util.getMobileCodeText('autocomplete/P3.jsx').then(setP3CodeText);
    Util.getMobileCodeText('autocomplete/examples/p1.jsx').then(setP1ComCodeText);
    Util.getMobileCodeText('autocomplete/examples/p2.jsx').then(setP2ComCodeText);
    Util.getMobileCodeText('autocomplete/examples/p3.jsx').then(setP3ComCodeText);
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
            style: { position: 'relative', height: 500 },
            theme: 'eclipse',
            codeText: P1CodeText,
          },
          {
            key: 'p1.jsx',
            title: 'p1.jsx',
            style: { position: 'relative', height: 500 },
            theme: 'eclipse',
            codeText: p1ComCodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/autocomplete/p1`,
      },
      {
        id: `p2`,
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
            codeText: P2CodeText,
          },
          {
            key: 'p2.jsx',
            title: 'p2.jsx',
            style: { position: 'relative', height: 500 },
            theme: 'eclipse',
            codeText: p2ComCodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/autocomplete/p2`,
      },
      {
        id: `p3`,
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
            codeText: P3CodeText,
          },
          {
            key: 'p3.jsx',
            title: 'p3.jsx',
            style: { position: 'relative', height: 500 },
            theme: 'eclipse',
            codeText: p3ComCodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/autocomplete/p3`,
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
