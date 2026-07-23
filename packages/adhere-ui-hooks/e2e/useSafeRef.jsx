import { Button } from 'antd';
import React, { useRef, useState } from 'react';

import Hooks from '../src';

const { useSafeRef } = Hooks;

/**
 * useSafeRef
 * @description 安全读取 ref.current，支持默认值
 */
export default () => {
  const divRef = useRef(null);
  const [, bump] = useState(0);
  const safeEl = useSafeRef(divRef);
  const withDefault = useSafeRef(divRef, { tagName: 'FALLBACK' });

  return (
    <div style={{ padding: 24, lineHeight: 1.8 }}>
      <div ref={divRef}>safe ref target</div>
      <p>useSafeRef(divRef)：{safeEl ? safeEl.textContent : String(safeEl)}</p>
      <p>
        useSafeRef(divRef, fallback)：
        {withDefault && 'tagName' in withDefault
          ? withDefault.tagName
          : withDefault?.textContent}
      </p>
      <Button type="primary" onClick={() => bump((n) => n + 1)}>
        重新读取
      </Button>
    </div>
  );
};
