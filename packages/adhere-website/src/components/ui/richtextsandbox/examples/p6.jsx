import React, { useState } from 'react';

import { WangEditorSandbox } from '@baifendian/adhere-ui-richtext-sandbox';

export default () => {
  const [wangValue] = useState(
    '<p><span style="background-color: red; color: rgb(31, 35, 40);">TML, a&nbsp;</span><a href="https://quilljs.com/docs/delta/" target="_blank" style="color: var(--color-accent-fg); background-color: rgb(255, 255, 255);">Quill Delta</a><span style="background-color: rgb(255, 255, 255); color: rgb(31, 35, 40);">&nbsp;instance, or a</span></p>',
  );

  return <WangEditorSandbox readOnly value={wangValue} wrapStyle={{ height: 500 }} />;
};
