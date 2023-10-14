import React from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

export default () => {
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
        config: [
          {
            key: 'index.jsx',
            title: 'index.jsx',
            codeText: `
  import React from 'react';

  import DemoBlock from '@/lib/DemoBlock';

  import Demo1 from './Demo1';
  import Demo2 from './Demo2';
  import Demo3 from './Demo3';

  export default () => (
    <DemoBlock>
      <DemoBlock.Item title="基本使用">
        <Demo1 />
      </DemoBlock.Item>

      <DemoBlock.Item title="自定义渲染查询项">
        <Demo2 />
      </DemoBlock.Item>

      <DemoBlock.Item title="自定义渲染选择项">
        <Demo3 />
      </DemoBlock.Item>
    </DemoBlock>
  );
      `,
            style: { maxHeight: 500 },
            theme: 'eclipse',
          },
          {
            key: 'Demo1.jsx',
            title: 'Demo1.jsx',
            codeText: `
  import React, { useState } from 'react';

  import { MobileAutoComplete, MobileGlobalIndicator } from '@baifendian/adhere';

  import Book from '@/data';

  export default () => {
    const [searchDataSource, setSearchDataSource] = useState([]);

    const [value, setValue] = useState([]);

    return (
      <MobileAutoComplete
        style={{ height: 500 }}
        onChange={(_value) => {
          setValue(_value);
        }}
        value={value}
        loadData={(_kw) => {
          if (!_kw) {
            setSearchDataSource([]);
            return;
          }

          const handler = MobileGlobalIndicator.show();

          setTimeout(() => {
            setSearchDataSource(Book.filter((_book) => _book.t.indexOf(_kw) !== -1));

            MobileGlobalIndicator.hide(handler);
          }, 500);
        }}
        checkListProps={{
          multiple: true,
        }}
        searchDataSource={searchDataSource}
      />
    );
  };
      `,
            style: { maxHeight: 500 },
            theme: 'eclipse',
          },
          {
            key: 'Demo2.jsx',
            title: 'Demo2.jsx',
            codeText: `
  import { Image } from 'antd-mobile';
  import React, { useState } from 'react';

  import { MobileAutoComplete, MobileGlobalIndicator } from '@baifendian/adhere';

  import Book from '@/data';

  export default () => {
    const [searchDataSource, setSearchDataSource] = useState([]);

    const [value, setValue] = useState([]);

    return (
      <MobileAutoComplete
        style={{ height: 500 }}
        value={value}
        loadData={(_kw) => {
          if (!_kw) {
            setSearchDataSource([]);
            return;
          }

          const handler = MobileGlobalIndicator.show();

          setTimeout(() => {
            setSearchDataSource(Book.filter((_book) => _book.t.indexOf(_kw) !== -1));

            MobileGlobalIndicator.hide(handler);
          }, 500);
        }}
        onChange={(_value) => {
          setValue(_value);
        }}
        checkListProps={{
          multiple: true,
        }}
        searchDataSource={searchDataSource}
        renderItem={(record) => ({
          description: record.label,
          prefix: (
            <Image
              src="https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
              style={{ borderRadius: 20 }}
              fit="cover"
              width={40}
              height={40}
            />
          ),
          children: record.t,
        })}
      />
    );
  };
      `,
            style: { maxHeight: 500 },
            theme: 'eclipse',
          },
          {
            key: 'Demo3.jsx',
            title: 'Demo3.jsx',
            codeText: `
  import { CheckList, Image } from 'antd-mobile';
  import React, { useState } from 'react';

  import { MobileAutoComplete, MobileGlobalIndicator } from '@baifendian/adhere';

  import Book from '@/data';

  export default () => {
    const [searchDataSource, setSearchDataSource] = useState([]);

    const [value, setValue] = useState([]);

    return (
      <MobileAutoComplete
        style={{ height: 500 }}
        value={value}
        loadData={(_kw) => {
          if (!_kw) {
            setSearchDataSource([]);
            return;
          }

          const handler = MobileGlobalIndicator.show();

          setTimeout(() => {
            setSearchDataSource(Book.filter((_book) => _book.t.indexOf(_kw) !== -1));

            MobileGlobalIndicator.hide(handler);
          }, 500);
        }}
        onChange={(_value) => {
          setValue(_value);
        }}
        checkListProps={{
          multiple: true,
        }}
        searchDataSource={searchDataSource}
        renderItem={(record) => ({
          description: record.label,
          prefix: (
            <Image
              src="https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
              style={{ borderRadius: 20 }}
              fit="cover"
              width={40}
              height={40}
            />
          ),
          children: record.t,
        })}
        renderResultItem={(record) => (
          <CheckList>
            <CheckList.Item
              prefix={
                <Image
                  src="https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                  style={{ borderRadius: 20 }}
                  fit="cover"
                  width={40}
                  height={40}
                />
              }
              description={record.label}
            >
              {record.t}
            </CheckList.Item>
          </CheckList>
        )}
      />
    );
  };
      `,
            style: { maxHeight: 500 },
            theme: 'eclipse',
          },
        ],
        type: 'PlayGroundTabMobile',
        url: 'http://www.baidu.com',
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
