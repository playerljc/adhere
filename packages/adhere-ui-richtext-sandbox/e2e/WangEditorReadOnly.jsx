import React, { useState } from 'react';

import { WangEditorSandbox } from '../src/index';

import '../src/index.less';

export default () => {
  const [value] = useState(
    '<p><span style="background-color: red;">WangEditor</span> readOnly demo</p>',
  );

  return (
    <div style={{ padding: 16 }}>
      <WangEditorSandbox readOnly value={value} wrapStyle={{ height: 420 }} />
    </div>
  );
};
