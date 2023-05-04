import { Form } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

import { ReactQuillSandbox } from '../src/index';

import '../src/index.less';

export default () => {
  const [theme, setTheme] = useState('snow');
  const [modules, setModules] = useState({});
  const [formats, setFormats] = useState(null);
  const [form] = Form.useForm();
  const defaultValue =
    '<p><span style="background-color: red; color: rgb(31, 35, 40);">TML, a&nbsp;</span><a href="https://quilljs.com/docs/delta/" target="_blank" style="color: var(--color-accent-fg); background-color: rgb(255, 255, 255);">Quill Delta</a><span style="background-color: rgb(255, 255, 255); color: rgb(31, 35, 40);">&nbsp;instance, or a</span></p>';

  const [value, setValue] = useState(defaultValue);
  const ref = useRef();

  useEffect(() => {
    // form.setFieldsValue({
    //   article: `
    //     <h3>Controlled mode caveats</h3><p>In controlled mode, components are supposed to prevent local stateful changes, and instead only have them happen through&nbsp;<code style="background-color: rgb(247, 247, 247);">onChange</code>&nbsp;and&nbsp;<code style="background-color: rgb(247, 247, 247);">value</code>.</p><p>Because Quill handles its own changes, and does not allow preventing edits, ReactQuill has to settle for a hybrid between controlled and uncontrolled mode. It can't prevent the change, but will still override the content whenever&nbsp;<code style="background-color: rgb(247, 247, 247);">value</code>&nbsp;differs from current state.</p><p>If you frequently need to manipulate the DOM or use the&nbsp;<a href="https://quilljs.com/docs/api/" target="_blank" style="color: rgb(203, 56, 55); background-color: transparent;">Quill API</a>s imperatively, you might consider switching to fully uncontrolled mode. ReactQuill will initialize the editor using&nbsp;<code style="background-color: rgb(247, 247, 247);">defaultValue</code>, but won't try to reset it after that. The&nbsp;<code style="background-color: rgb(247, 247, 247);">onChange</code>&nbsp;callback will still work as expected.</p><p>Read more about uncontrolled components in the&nbsp;<a href="https://facebook.github.io/react/docs/uncontrolled-components.html#default-values" target="_blank" style="color: rgb(203, 56, 55); background-color: transparent;">React docs</a>.</p><p><br></p>
    //   `,
    // });
  }, []);

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
        <button
          onClick={() => {
            setValue(`${Date.now()}`);
          }}
        >
          设置value
        </button>
        <button
          onClick={() => {
            console.log(
              'ref.current.getEditor()',
              value /*ref.current.getEditor().root.innerHTML*/,
            );
          }}
        >
          获取
        </button>
        <button
          onClick={() => {
            form.setFieldsValue({
              article: `${Date.now()}`,
            });
          }}
        >
          表单设置
        </button>
        <button
          onClick={() => {
            // console.log(form.getFieldValue('article'));
            // form
            //   .validateFields()
            //   .then((values) => {
            //     console.log(values);
            //   })
            //   .catch(() => {});
            console.log(ref.current.getEditor().getLength());
            console.log(ref.current.getEditor().getText());
            console.log(ref.current.getEditor().root.innerHTML);
          }}
        >
          表单获取
        </button>
      </div>

      {/*<ReactQuillSandbox
        ref={ref}
        onChange={(_v) => {
          console.log('外部的onChange', _v);
          setValue(_v);
        }}
        value={value}
        theme={theme}
        modules={modules}
        formats={formats}
        wrapStyle={{ height: '100%' }}
      />*/}

      <Form name="userForm" form={form}>
        <Form.Item
          name="article"
          rules={[
            {
              required: true,
              message: '请输入文章',
            },
            ReactQuillSandbox.AntdFormRequireValidator(
              () => ref?.current?.getEditor?.(),
              '请输入文章',
            ),
          ]}
        >
          <ReactQuillSandbox
            ref={ref}
            onChange={() => {}}
            theme={theme}
            modules={modules}
            formats={formats}
            wrapStyle={{ height: '100%' }}
          />
        </Form.Item>
      </Form>
    </div>
  );
};
