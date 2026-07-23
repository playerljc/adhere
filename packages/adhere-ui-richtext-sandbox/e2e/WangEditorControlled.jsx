import { Button, Space } from 'antd';
import React, { useRef, useState } from 'react';

import { WangEditorSandbox } from '../src/index';

import '../src/index.less';

export default () => {
  const ref = useRef();
  const [value, setValue] = useState(
    '<p><span style="background-color: red;">WangEditor</span> controlled demo</p>',
  );

  return (
    <div style={{ padding: 16 }}>
      <Space style={{ marginBottom: 12 }} wrap>
        <Button
          type="primary"
          onClick={() => {
            setValue(`<p>${Date.now()}</p>`);
          }}
        >
          设置 value
        </Button>
        <Button
          onClick={() => {
            console.log('value', value);
          }}
        >
          获取 value
        </Button>
        <Button
          onClick={() => {
            console.log('editor', ref.current?.getEditor?.());
            console.log('wangEditor', ref.current?.getWangEditor?.());
          }}
        >
          getEditor / getWangEditor
        </Button>
        <Button
          onClick={() => {
            ref.current?.setTheme?.({
              toolbarBgColor: '#f0f5ff',
              toolbarActiveColor: '#1677ff',
              textareaBgColor: '#fafafa',
            });
          }}
        >
          setTheme
        </Button>
      </Space>
      <WangEditorSandbox
        ref={ref}
        value={value}
        onChange={(v) => {
          console.log('onChange', v);
          setValue(v);
        }}
        wrapStyle={{ height: 420 }}
        bordered
        gap={8}
      />
    </div>
  );
};
