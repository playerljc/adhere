import { Radio } from 'antd';
import React, { useState } from 'react';

import { ConfigProvider, Intl, TableGridLayout } from '@baifendian/adhere';

const { Label, Value } = TableGridLayout;

export default () => {
  const [lang, setLang] = useState('zh_CN');

  return (
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
                      <Value>No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China</Value>
                    ),
                  },
                ],
              },
            ]}
          />
        )}
      </ConfigProvider>
    </>
  );
};
