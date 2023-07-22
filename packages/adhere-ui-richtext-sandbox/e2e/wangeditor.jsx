import { Form } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

import { WangEditorSandbox } from '../src/index';

import '../src/index.less';

export default () => {
  const [form] = Form.useForm();
  // const defaultValue =
  //   '<p><span style="background-color: red; color: rgb(31, 35, 40);">TML, a&nbsp;</span><a href="https://quilljs.com/docs/delta/" target="_blank" style="color: var(--color-accent-fg); background-color: rgb(255, 255, 255);">Quill Delta</a><span style="background-color: rgb(255, 255, 255); color: rgb(31, 35, 40);">&nbsp;instance, or a</span></p>';

  const defaultValue = `
    <table style="width: auto;"><tbody><tr><th colSpan="1" rowSpan="1" width="auto"></th><th colSpan="1" rowSpan="1" width="auto"></th><th colSpan="1" rowSpan="1" width="auto"></th><th colSpan="1" rowSpan="1" width="auto"></th><th colSpan="1" rowSpan="1" width="auto"></th><th colSpan="1" rowSpan="1" width="auto"></th></tr><tr><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td></tr><tr><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td></tr><tr><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td></tr><tr><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td></tr><tr><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td></tr><tr><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td></tr><tr><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td><td colSpan="1" rowSpan="1" width="auto"></td></tr></tbody></table><p>hello world</p><p><br></p>
    `;
  const [value, setValue] = useState(defaultValue);
  const ref = useRef();

  const [toolBarProps, setToolBarProps] = useState({
    defaultConfig: {
      toolbarKeys: [
        // 菜单 key
        'headerSelect',

        // 分割线
        '|',

        // 菜单 key
        'bold',
        'italic',

        // 菜单组，包含多个菜单
        {
          key: 'group-more-style', // 必填，要以 group 开头
          title: '更多样式', // 必填
          iconSvg: '<svg>....</svg>', // 可选
          menuKeys: ['through', 'code', 'clearStyle'], // 下级菜单 key ，必填
        },
      ],
    },
  });

  useEffect(() => {
    form.setFieldsValue({
      article: `<h3>Controlled mode caveats</h3><p>In controlled mode, components are supposed to prevent local stateful changes, and instead only have them happen through&nbsp;<code style="background-color: rgb(247, 247, 247);">onChange</code>&nbsp;and&nbsp;<code style="background-color: rgb(247, 247, 247);">value</code>.</p><p>Because Quill handles its own changes, and does not allow preventing edits, ReactQuill has to settle for a hybrid between controlled and uncontrolled mode. It can't prevent the change, but will still override the content whenever&nbsp;<code style="background-color: rgb(247, 247, 247);">value</code>&nbsp;differs from current state.</p><p>If you frequently need to manipulate the DOM or use the&nbsp;<a href="https://quilljs.com/docs/api/" target="_blank" style="color: rgb(203, 56, 55); background-color: transparent;">Quill API</a>s imperatively, you might consider switching to fully uncontrolled mode. ReactQuill will initialize the editor using&nbsp;<code style="background-color: rgb(247, 247, 247);">defaultValue</code>, but won't try to reset it after that. The&nbsp;<code style="background-color: rgb(247, 247, 247);">onChange</code>&nbsp;callback will still work as expected.</p><p>Read more about uncontrolled components in the&nbsp;<a href="https://facebook.github.io/react/docs/uncontrolled-components.html#default-values" target="_blank" style="color: rgb(203, 56, 55); background-color: transparent;">React docs</a>.</p><p><br></p>`,
    });
  }, []);

  console.log('toolBarProps', toolBarProps);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setValue(`${Date.now()}`);
          }}
        >
          设置value
        </button>
        <button
          onClick={() => {
            console.log('value', value);
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
            form
              .validateFields()
              .then((values) => {
                console.log(values);
              })
              .catch(() => {});
          }}
        >
          表单获取
        </button>
        <button
          onClick={() => {
            const wangEditor = ref.current.getWangEditor();
            console.log('wangEditor', wangEditor);
          }}
        >
          api
        </button>
        <button
          onClick={() => {
            const editor = ref.current.getEditor();
            const { DomEditor } = ref.current.getWangEditor();

            const toolbar = DomEditor.getToolbar(editor);

            console.log('toolbar', toolbar);

            const curToolbarConfig = toolbar.getConfig();

            curToolbarConfig.toolbarKeys = [
              // 菜单 key
              'headerSelect',

              // 菜单 key
              'bold',

              'italic',

              // 菜单组，包含多个菜单
              {
                key: 'group-more-style', // 必填，要以 group 开头
                title: '更多样式', // 必填
                iconSvg: '<svg>....</svg>', // 可选
                menuKeys: ['through', 'code', 'clearStyle'], // 下级菜单 key ，必填
              },
            ];

            console.log(curToolbarConfig.toolbarKeys); // 当前菜单排序和分组
          }}
        >
          设置工具栏
        </button>
      </div>

      <WangEditorSandbox
        ref={ref}
        wrapStyle={{
          height: 500,
        }}
        toolBarProps={toolBarProps}
        value={value}
        onChange={(v) => {
          setValue(v);
        }}
        readOnly
      />

      <Form name="userForm" form={form}>
        <Form.Item
          name="article"
          rules={[
            // {
            //   required: true,
            //   message: '请输入文章',
            // },
            WangEditorSandbox.AntdFormRequireValidator(
              () => ref.current?.getEditor?.(),
              '请输入文章',
            ),
          ]}
        >
          <WangEditorSandbox
            ref={ref}
            onChange={() => {}}
            wrapStyle={{
              height: 500,
            }}
          />
        </Form.Item>
      </Form>
    </div>
  );
};
