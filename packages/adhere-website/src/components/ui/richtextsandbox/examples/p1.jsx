import { Button } from 'antd';
import React, { useRef, useState } from 'react';

import { FlexLayout, Space } from '@baifendian/adhere';
import { ReactQuillSandbox } from '@baifendian/adhere-ui-richtext-sandbox';

const { Fixed, Auto } = FlexLayout;

export default () => {
  const [theme, setTheme] = useState('snow');
  const [modules, setModules] = useState({});
  const [formats, setFormats] = useState(null);
  const [quillValue, setQuillValue] = useState(
    '<p><span style="background-color: red; color: rgb(31, 35, 40);">TML, a&nbsp;</span><a href="https://quilljs.com/docs/delta/" target="_blank" style="color: var(--color-accent-fg); background-color: rgb(255, 255, 255);">Quill Delta</a><span style="background-color: rgb(255, 255, 255); color: rgb(31, 35, 40);">&nbsp;instance, or a</span></p>',
  );
  const quillRef = useRef();

  return (
    <FlexLayout style={{ height: 800 }}>
      <Fixed style={{ marginBottom: 20 }}>
        <Space.Group>
          <Button
            type="primary"
            onClick={() => {
              setTheme('bubble');
            }}
          >
            设置Theme
          </Button>
          <Button
            type="primary"
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
          </Button>
          <Button
            type="primary"
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
          </Button>
          <Button
            type="primary"
            onClick={() => {
              setQuillValue(`${Date.now()}`);
            }}
          >
            设置值
          </Button>
          <Button
            type="primary"
            onClick={() => {
              alert(quillValue);
              console.log(/*ref.current.getEditor().root.innerHTML*/);
            }}
          >
            获取值
          </Button>
        </Space.Group>
      </Fixed>

      <Auto>
        <ReactQuillSandbox
          ref={quillRef}
          onChange={(_v) => {
            console.log('外部的onChange', _v);
            setQuillValue(_v);
          }}
          value={quillValue}
          theme={theme}
          modules={modules}
          formats={formats}
          wrapStyle={{ height: '100%' }}
        />
      </Auto>
    </FlexLayout>
  );
};
