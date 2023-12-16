import { Button, Form } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

import { FlexLayout, Space } from '@baifendian/adhere';
import { WangEditorSandbox } from '@baifendian/adhere-ui-richtext-sandbox';

const { Fixed, Auto } = FlexLayout;

export default () => {
  const [quillForm] = Form.useForm();

  const wangEditorRef = useRef();
  const [wangForm] = Form.useForm();
  const [wangValue, setWangValue] = useState(
    '<p><span style="background-color: red; color: rgb(31, 35, 40);">TML, a&nbsp;</span><a href="https://quilljs.com/docs/delta/" target="_blank" style="color: var(--color-accent-fg); background-color: rgb(255, 255, 255);">Quill Delta</a><span style="background-color: rgb(255, 255, 255); color: rgb(31, 35, 40);">&nbsp;instance, or a</span></p>',
  );

  useEffect(() => {
    quillForm.setFieldsValue({
      article: `
        <h3>Controlled mode caveats</h3><p>In controlled mode, components are supposed to prevent local stateful changes, and instead only have them happen through&nbsp;<code style="background-color: rgb(247, 247, 247);">onChange</code>&nbsp;and&nbsp;<code style="background-color: rgb(247, 247, 247);">value</code>.</p><p>Because Quill handles its own changes, and does not allow preventing edits, ReactQuill has to settle for a hybrid between controlled and uncontrolled mode. It can't prevent the change, but will still override the content whenever&nbsp;<code style="background-color: rgb(247, 247, 247);">value</code>&nbsp;differs from current state.</p><p>If you frequently need to manipulate the DOM or use the&nbsp;<a href="https://quilljs.com/docs/api/" target="_blank" style="color: rgb(203, 56, 55); background-color: transparent;">Quill API</a>s imperatively, you might consider switching to fully uncontrolled mode. ReactQuill will initialize the editor using&nbsp;<code style="background-color: rgb(247, 247, 247);">defaultValue</code>, but won't try to reset it after that. The&nbsp;<code style="background-color: rgb(247, 247, 247);">onChange</code>&nbsp;callback will still work as expected.</p><p>Read more about uncontrolled components in the&nbsp;<a href="https://facebook.github.io/react/docs/uncontrolled-components.html#default-values" target="_blank" style="color: rgb(203, 56, 55); background-color: transparent;">React docs</a>.</p><p><br></p>
      `,
    });

    wangForm.setFieldsValue({
      article: `
        <h3>Controlled mode caveats</h3><p>In controlled mode, components are supposed to prevent local stateful changes, and instead only have them happen through&nbsp;<code style="background-color: rgb(247, 247, 247);">onChange</code>&nbsp;and&nbsp;<code style="background-color: rgb(247, 247, 247);">value</code>.</p><p>Because Quill handles its own changes, and does not allow preventing edits, ReactQuill has to settle for a hybrid between controlled and uncontrolled mode. It can't prevent the change, but will still override the content whenever&nbsp;<code style="background-color: rgb(247, 247, 247);">value</code>&nbsp;differs from current state.</p><p>If you frequently need to manipulate the DOM or use the&nbsp;<a href="https://quilljs.com/docs/api/" target="_blank" style="color: rgb(203, 56, 55); background-color: transparent;">Quill API</a>s imperatively, you might consider switching to fully uncontrolled mode. ReactQuill will initialize the editor using&nbsp;<code style="background-color: rgb(247, 247, 247);">defaultValue</code>, but won't try to reset it after that. The&nbsp;<code style="background-color: rgb(247, 247, 247);">onChange</code>&nbsp;callback will still work as expected.</p><p>Read more about uncontrolled components in the&nbsp;<a href="https://facebook.github.io/react/docs/uncontrolled-components.html#default-values" target="_blank" style="color: rgb(203, 56, 55); background-color: transparent;">React docs</a>.</p><p><br></p>
      `,
    });
  }, []);

  return (
    <FlexLayout style={{ height: 800 }}>
      <Fixed style={{ marginBottom: 20 }}>
        <Space.Group>
          <Button
            type="primary"
            onClick={() => {
              setWangValue(`${Date.now()}`);
            }}
          >
            设置值
          </Button>
          <Button
            type="primary"
            onClick={() => {
              alert(wangValue);
            }}
          >
            获取值
          </Button>
        </Space.Group>
      </Fixed>

      <Auto>
        <WangEditorSandbox
          ref={wangEditorRef}
          onChange={(_v) => {
            console.log('外部的onChange', _v);
            setWangValue(_v);
          }}
          value={wangValue}
          wrapStyle={{ height: '100%' }}
        />
      </Auto>
    </FlexLayout>
  );
};
