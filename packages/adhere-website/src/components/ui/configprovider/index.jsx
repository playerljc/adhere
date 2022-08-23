import React, { useState } from 'react';
import { ConfigProvider, TableGridLayout, Intl } from '@baifendian/adhere';
import PlayGroundPage, { Section, PropsSection, CodeBoxSection } from '@/lib/PlaygroundPage';
import { Radio } from 'antd';

const { Label, Value } = TableGridLayout;

export default () => {
  const [lang, setLang] = useState('zh_CN');

  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `基本使用`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '基本使用',
            info: '基本使用',
          },
        },
        codeText: ``,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <Radio.Group
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              options={[
                { label: '中文', value: 'zh_CN' },
                { label: '英文', value: 'en_US' },
                { label: '葡语', value: 'pt_PT' },
              ]}
            />

            <ConfigProvider
              intl={{
                lang,
                locales: {
                  en_US: require('@/locales/en_US').default,
                  zh_CN: require('@/locales/zh_CN').default,
                  pt_PT: require('@/locales/pt_PT').default,
                },
              }}
            >
              {() => (
                <TableGridLayout
                  data={[
                    {
                      name: 'g1',
                      width: '100%',
                      columnCount: 3,
                      colgroup: [, 'auto', , 'auto', , 'auto'],
                      data: [
                        {
                          key: 'UserName',
                          label: <Label>{Intl.v('姓名')}：</Label>,
                          value: <Value>张三</Value>,
                        },
                        {
                          key: 'Telephone',
                          label: <Label>{Intl.v('性别')}：</Label>,
                          value: <Value>男</Value>,
                        },
                        {
                          key: 'Live',
                          label: <Label>{Intl.v('出生年月')}：</Label>,
                          value: <Value>2020-10-09</Value>,
                        },
                        {
                          key: 'Address',
                          label: <Label>{Intl.v('详细地址')}：</Label>,
                          value: (
                            <Value>
                              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                            </Value>
                          ),
                        },
                      ],
                    },
                  ]}
                />
              )}
            </ConfigProvider>
          </>
        ),
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="ConfigProvider">
        <p>全局配置</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'IData',
            data: [
              {
                params: 'name',
                desc: '菜单名称',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'icon',
                desc: '菜单图标',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'id',
                desc: '菜单的唯一id',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'disabled',
                desc: '是否可用',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'separation',
                desc: '是否是分割线',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'attribute',
                desc: '自定义参数',
                type: 'Object',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '孩子',
                type: 'Array<IData>',
                defaultVal: '[]',
              },
              {
                params: 'className',
                desc: '附加样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加样式',
                type: 'Object',
                defaultVal: '',
              },
              {
                params: 'subMenuClassName',
                desc: '附加样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'subMenuStyle',
                desc: '附加样式',
                type: 'Object',
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
