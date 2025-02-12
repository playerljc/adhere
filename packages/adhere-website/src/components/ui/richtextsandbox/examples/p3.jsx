import React, { useState } from 'react';

import { ReactQuillSandbox } from '@baifendian/adhere-ui-richtext-sandbox';

export default () => {
  const [quillValue] = useState(
    '<p><span style="background-color: red; color: rgb(31, 35, 40);">TML, a&nbsp;</span><a href="https://quilljs.com/docs/delta/" target="_blank" style="color: var(--color-accent-fg); background-color: rgb(255, 255, 255);">Quill Delta</a><span style="background-color: rgb(255, 255, 255); color: rgb(31, 35, 40);">&nbsp;instance, or a</span></p>',
  );

  return <ReactQuillSandbox readOnly value={quillValue} wrapStyle={{ height: 500 }} />;
};
