import React, { useState } from 'react';

import { ConfigProvider, Dict, FontSizeSetting } from '@baifendian/adhere';

export default () => {
  const [color, setColor] = useState('#2480ff');

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
      </div>

      <ConfigProvider
        theme={{
          colorPrimary: color,
        }}
        intl={{
          lang: 'zh_CN',
          locales: Array.from(Object.values(Dict.value.SystemLang.value)).reduce((pre, cur) => {
            pre[cur.code] = cur.module;
            return pre;
          }, {}),
        }}
      >
        {() => <FontSizeSetting max={20} min={12} step={1} value={12} />}
      </ConfigProvider>
    </div>
  );
};
