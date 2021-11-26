import React, { useState } from 'react';
import { Select } from 'antd';
import { ReactUtil, Space } from '@baifendian/adhere';

import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';

const { Option } = Select;

export default () => {
  const [data] = useState([
    { label: 'java', value: 'java' },
    { label: 'javascript', value: 'javascript' },
    { label: 'css', value: 'css' },
    { label: 'git', value: 'git' },
  ]);

  return (
    <div className="Page">
      <h1>ReactUtil</h1>
      <p>扩展React的工具类</p>

      <FunctionProps
        border
        title="方法"
        data={[
          {
            name: 'keyMap',
            desc: '迭代数组返回一个肯定含有key的JSX数组',
            modifier: 'public',
            params: [
              {
                name: 'arr',
                desc: '数组',
                type: 'Array<any>',
                defaultVal: '',
                required: 'true',
              },
              {
                name: 'handler',
                desc: '句柄',
                type: '(item: any, index: number) => ReactElement',
                defaultVal: '',
                required: 'true',
              },
            ],
            returnType: 'Array<ReactElement>',
            returnDesc: '返回迭代的React.ReactElement数组',
          },
          {
            name: 'fillKey',
            desc: '将一个ReactElements填充key',
            modifier: 'public',
            params: [
              {
                name: 'elements',
                desc: '数组',
                type: 'Array<ReactElement>',
                defaultVal: '[]',
                required: 'true',
              },
            ],
            returnType: 'Array<ReactElement>',
            returnDesc: '返回迭代的React.ReactElement数组',
          },
        ]}
      />

      <h2>迭代数组返回一个肯定含有key的JSX数组</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React, { useState } from 'react';
  import { Select } from 'antd';
  import { ReactUtil, Space } from '@baifendian/adhere';
        
  <>
    <div>
      <Select style={{ width: 200 }}>
        {data.map((t) => (
          <Option key={t.value} value={t.value}>
            {t.label}
          </Option>
        ))}
      </Select>
    </div>

    <Space direction="vertical" />

    <div>
      <Select style={{ width: 200 }}>
        {ReactUtil.keyMap(data, (t) => (
          <Option value={t.value}>{t.label}</Option>
        ))}
      </Select>
    </div>
  </>
      `}
      >
        <>
          <div>
            <Select style={{ width: 200 }}>
              {data.map((t) => (
                <Option key={t.value} value={t.value}>
                  {t.label}
                </Option>
              ))}
            </Select>
          </div>

          <Space direction="vertical" />

          <div>
            <Select style={{ width: 200 }}>
              {ReactUtil.keyMap(data, (t) => (
                <Option value={t.value}>{t.label}</Option>
              ))}
            </Select>
          </div>
        </>
      </Playground>
    </div>
  );
};
