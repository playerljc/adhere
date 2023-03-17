import React, { useState } from 'react';

import ReactQuillSandbox from '../src/index';

import '../src/index.less';

export default () => {
  const [theme, setTheme] = useState('snow');
  const [modules, setModules] = useState({});
  const [formats, setFormats] = useState(null);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setTheme('bubble');
          }}
        >
          设置Theme
        </button>
        <button
          onClick={() => {
            setModules({
              toolbar: [
                [{ header: [1, 2, false] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
                ['link', 'image'],
                ['clean'],
              ],
            });
          }}
        >
          设置modules
        </button>
        <button
          onClick={() => {
            setFormats([
              'header',
              'bold',
              'italic',
              'underline',
              'strike',
              'blockquote',
              'list',
              'bullet',
              'indent',
              'link',
              'image',
            ]);
          }}
        >
          设置formats
        </button>
      </div>
      <ReactQuillSandbox theme={theme} modules={modules} formats={formats} />
    </div>
  );
};
