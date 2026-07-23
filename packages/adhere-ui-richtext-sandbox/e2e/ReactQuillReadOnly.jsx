import React, { useState } from 'react';

import { ReactQuillSandbox } from '../src/index';

import '../src/index.less';

export default () => {
  const [value] = useState(
    '<p><span style="background-color: red; color: rgb(31, 35, 40);">TML, a&nbsp;</span><a href="https://quilljs.com/docs/delta/" target="_blank">Quill Delta</a><span>&nbsp;instance</span></p>',
  );

  return (
    <div style={{ padding: 16 }}>
      <ReactQuillSandbox readOnly value={value} wrapStyle={{ height: 420 }} />
    </div>
  );
};
