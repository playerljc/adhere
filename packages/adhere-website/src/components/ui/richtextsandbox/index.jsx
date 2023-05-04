import { Button, Form } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

import { FlexLayout, Space } from '@baifendian/adhere';
import { ReactQuillSandbox, WangEditorSandbox } from '@baifendian/adhere-ui-richtext-sandbox';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';

const { Fixed, Auto } = FlexLayout;

export default () => {
  const [theme, setTheme] = useState('snow');
  const [modules, setModules] = useState({});
  const [formats, setFormats] = useState(null);
  const [quillValue, setQuillValue] = useState(
    '<p><span style="background-color: red; color: rgb(31, 35, 40);">TML, a&nbsp;</span><a href="https://quilljs.com/docs/delta/" target="_blank" style="color: var(--color-accent-fg); background-color: rgb(255, 255, 255);">Quill Delta</a><span style="background-color: rgb(255, 255, 255); color: rgb(31, 35, 40);">&nbsp;instance, or a</span></p>',
  );
  const quillRef = useRef();
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
    <PlayGroundPage>
      <Section title="RichTextSandBox">
        <p>对富文本进行样式隔离的包装</p>
      </Section>

      <CodeBoxSection
        config={[
          {
            id: `p1`,
            name: `ReactQuillSandBox基本使用`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'ReactQuillSandBox基本使用',
                info: 'ReactQuillSandBox基本使用',
              },
            },
            codeText: `
  import { Button,  } from 'antd';
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
                  [
                    { list: 'ordered' },
                    { list: 'bullet' },
                    { indent: '-1' },
                    { indent: '+1' },
                  ],
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
              setQuillValue(\`${Date.now()}\`);
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
  }
            `,
            type: 'PlayGround',
            renderChildren: () => (
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
                            [
                              { list: 'ordered' },
                              { list: 'bullet' },
                              { indent: '-1' },
                              { indent: '+1' },
                            ],
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
            ),
          },
          {
            id: `p2`,
            name: `ReactQuillSandBox结合Form`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'ReactQuillSandBox结合Form',
                info: 'ReactQuillSandBox结合Form',
              },
            },
            codeText: `
  import { Button, Form } from 'antd';
  import React, { useEffect, useRef, useState } from 'react';

  import { FlexLayout, Space } from '@baifendian/adhere';
  import { ReactQuillSandbox } from '@baifendian/adhere-ui-richtext-sandbox';

  const { Fixed, Auto } = FlexLayout;

  export default () => {
    const [theme, setTheme] = useState('snow');
    const [modules, setModules] = useState({});
    const [formats, setFormats] = useState(null);
    const [quillForm] = Form.useForm();

    useEffect(() => {
      quillForm.setFieldsValue({
        article: \`
          <h3>Controlled mode caveats</h3><p>In controlled mode, components are supposed to prevent local stateful changes, and instead only have them happen through&nbsp;<code style="background-color: rgb(247, 247, 247);">onChange</code>&nbsp;and&nbsp;<code style="background-color: rgb(247, 247, 247);">value</code>.</p><p>Because Quill handles its own changes, and does not allow preventing edits, ReactQuill has to settle for a hybrid between controlled and uncontrolled mode. It can't prevent the change, but will still override the content whenever&nbsp;<code style="background-color: rgb(247, 247, 247);">value</code>&nbsp;differs from current state.</p><p>If you frequently need to manipulate the DOM or use the&nbsp;<a href="https://quilljs.com/docs/api/" target="_blank" style="color: rgb(203, 56, 55); background-color: transparent;">Quill API</a>s imperatively, you might consider switching to fully uncontrolled mode. ReactQuill will initialize the editor using&nbsp;<code style="background-color: rgb(247, 247, 247);">defaultValue</code>, but won't try to reset it after that. The&nbsp;<code style="background-color: rgb(247, 247, 247);">onChange</code>&nbsp;callback will still work as expected.</p><p>Read more about uncontrolled components in the&nbsp;<a href="https://facebook.github.io/react/docs/uncontrolled-components.html#default-values" target="_blank" style="color: rgb(203, 56, 55); background-color: transparent;">React docs</a>.</p><p><br></p>
        \`,
      });
    }, []);

    return (
      <Form name="quillForm" form={quillForm}>
        <FlexLayout>
          <Fixed style={{ marginBottom: 20 }}>
            <Space.Group>
              <Button
                type="primary"
                onClick={() => {
                  quillForm.setFieldsValue({
                    article: \`${Date.now()}\`,
                  });
                }}
              >
                设置表单值
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  alert(quillForm.getFieldValue('article'));
                }}
              >
                获取表单值
              </Button>
            </Space.Group>
          </Fixed>

          <Auto>
            <Form.Item
              name="article"
              rules={[
                {
                  required: true,
                  message: '请输入文章',
                },
              ]}
            >
              <ReactQuillSandbox
                onChange={() => {}}
                theme={theme}
                modules={modules}
                formats={formats}
                wrapStyle={{ height: 500 }}
              />
            </Form.Item>
          </Auto>
        </FlexLayout>
      </Form>
    );
  }
            `,
            type: 'PlayGround',
            renderChildren: () => (
              <Form name="quillForm" form={quillForm}>
                <FlexLayout>
                  <Fixed style={{ marginBottom: 20 }}>
                    <Space.Group>
                      <Button
                        type="primary"
                        onClick={() => {
                          quillForm.setFieldsValue({
                            article: `${Date.now()}`,
                          });
                        }}
                      >
                        设置表单值
                      </Button>
                      <Button
                        type="primary"
                        onClick={() => {
                          alert(quillForm.getFieldValue('article'));
                        }}
                      >
                        获取表单值
                      </Button>
                    </Space.Group>
                  </Fixed>

                  <Auto>
                    <Form.Item
                      name="article"
                      rules={[
                        {
                          required: true,
                          message: '请输入文章',
                        },
                      ]}
                    >
                      <ReactQuillSandbox
                        onChange={() => {}}
                        theme={theme}
                        modules={modules}
                        formats={formats}
                        wrapStyle={{ height: 500 }}
                      />
                    </Form.Item>
                  </Auto>
                </FlexLayout>
              </Form>
            ),
          },
          {
            id: `p3`,
            name: `ReactQuillSandBox的只读模式`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'ReactQuillSandBox的只读模式',
                info: 'ReactQuillSandBox的只读模式',
              },
            },
            codeText: `
  import React from 'react';

  import { ReactQuillSandbox } from '@baifendian/adhere-ui-richtext-sandbox';

  export default () => {
    const [quillValue] = useState(
      '<p><span style="background-color: red; color: rgb(31, 35, 40);">TML, a&nbsp;</span><a href="https://quilljs.com/docs/delta/" target="_blank" style="color: var(--color-accent-fg); background-color: rgb(255, 255, 255);">Quill Delta</a><span style="background-color: rgb(255, 255, 255); color: rgb(31, 35, 40);">&nbsp;instance, or a</span></p>',
    );

    return (
      <ReactQuillSandbox readOnly value={quillValue} wrapStyle={{ height: 500 }} />
    );
  }
            `,
            type: 'PlayGround',
            renderChildren: () => (
              <ReactQuillSandbox readOnly value={quillValue} wrapStyle={{ height: 500 }} />
            ),
          },
          {
            id: `p4`,
            name: `WangEditorSandBox基本使用`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'WangEditorSandBox基本使用',
                info: 'WangEditorSandBox基本使用',
              },
            },
            codeText: `
  import { Button } from 'antd';
  import React, { useRef, useState } from 'react';

  import { FlexLayout, Space } from '@baifendian/adhere';
  import { WangEditorSandbox } from '@baifendian/adhere-ui-richtext-sandbox';

  const { Fixed, Auto } = FlexLayout;

  export default () => {
    const wangEditorRef = useRef();
    const [wangValue, setWangValue] = useState(
      '<p><span style="background-color: red; color: rgb(31, 35, 40);">TML, a&nbsp;</span><a href="https://quilljs.com/docs/delta/" target="_blank" style="color: var(--color-accent-fg); background-color: rgb(255, 255, 255);">Quill Delta</a><span style="background-color: rgb(255, 255, 255); color: rgb(31, 35, 40);">&nbsp;instance, or a</span></p>',
    );

    return (
      <FlexLayout style={{ height: 800 }}>
        <Fixed style={{ marginBottom: 20 }}>
          <Space.Group>
            <Button
              type="primary"
              onClick={() => {
                setWangValue(\`${Date.now()}\`);
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
  }
            `,
            type: 'PlayGround',
            renderChildren: () => (
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
            ),
          },
          {
            id: `p5`,
            name: `WangEditorSandBox结合Form`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'WangEditorSandBox结合Form',
                info: 'WangEditorSandBox结合Form',
              },
            },
            codeText: `
  import { Button, Form } from 'antd';
  import React, { useEffect } from 'react';

  import { FlexLayout, Space } from '@baifendian/adhere';
  import { WangEditorSandbox } from '@baifendian/adhere-ui-richtext-sandbox';

  const { Fixed, Auto } = FlexLayout;

  export default () => {
    const [wangForm] = Form.useForm();

    useEffect(() => {
      wangForm.setFieldsValue({
        article: \`
          <h3>Controlled mode caveats</h3><p>In controlled mode, components are supposed to prevent local stateful changes, and instead only have them happen through&nbsp;<code style="background-color: rgb(247, 247, 247);">onChange</code>&nbsp;and&nbsp;<code style="background-color: rgb(247, 247, 247);">value</code>.</p><p>Because Quill handles its own changes, and does not allow preventing edits, ReactQuill has to settle for a hybrid between controlled and uncontrolled mode. It can't prevent the change, but will still override the content whenever&nbsp;<code style="background-color: rgb(247, 247, 247);">value</code>&nbsp;differs from current state.</p><p>If you frequently need to manipulate the DOM or use the&nbsp;<a href="https://quilljs.com/docs/api/" target="_blank" style="color: rgb(203, 56, 55); background-color: transparent;">Quill API</a>s imperatively, you might consider switching to fully uncontrolled mode. ReactQuill will initialize the editor using&nbsp;<code style="background-color: rgb(247, 247, 247);">defaultValue</code>, but won't try to reset it after that. The&nbsp;<code style="background-color: rgb(247, 247, 247);">onChange</code>&nbsp;callback will still work as expected.</p><p>Read more about uncontrolled components in the&nbsp;<a href="https://facebook.github.io/react/docs/uncontrolled-components.html#default-values" target="_blank" style="color: rgb(203, 56, 55); background-color: transparent;">React docs</a>.</p><p><br></p>
        \`,
      });
    }, []);

    return (
      <Form name="wangForm" form={wangForm}>
        <FlexLayout>
          <Fixed style={{ marginBottom: 20 }}>
            <Space.Group>
              <Button
                type="primary"
                onClick={() => {
                  wangForm.setFieldsValue({
                    article: \`${Date.now()}\`,
                  });
                }}
              >
                设置表单值
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  alert(wangForm.getFieldValue('article'));
                }}
              >
                获取表单值
              </Button>
            </Space.Group>
          </Fixed>

          <Auto>
            <Form.Item
              name="article"
              rules={[
                {
                  required: true,
                  message: '请输入文章',
                },
              ]}
            >
              <WangEditorSandbox
                wrapStyle={{
                  height: 500,
                }}
              />
            </Form.Item>
          </Auto>
        </FlexLayout>
      </Form>
    );
  }
            `,
            type: 'PlayGround',
            renderChildren: () => (
              <Form name="wangForm" form={wangForm}>
                <FlexLayout>
                  <Fixed style={{ marginBottom: 20 }}>
                    <Space.Group>
                      <Button
                        type="primary"
                        onClick={() => {
                          wangForm.setFieldsValue({
                            article: `${Date.now()}`,
                          });
                        }}
                      >
                        设置表单值
                      </Button>
                      <Button
                        type="primary"
                        onClick={() => {
                          alert(wangForm.getFieldValue('article'));
                        }}
                      >
                        获取表单值
                      </Button>
                    </Space.Group>
                  </Fixed>

                  <Auto>
                    <Form.Item
                      name="article"
                      rules={[
                        {
                          required: true,
                          message: '请输入文章',
                        },
                      ]}
                    >
                      <WangEditorSandbox
                        wrapStyle={{
                          height: 500,
                        }}
                      />
                    </Form.Item>
                  </Auto>
                </FlexLayout>
              </Form>
            ),
          },
          {
            id: `p6`,
            name: `WangEditorSandBox的只读模式`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'WangEditorSandBox的只读模式',
                info: 'WangEditorSandBox的只读模式',
              },
            },
            codeText: `
  import React from 'react';

  import { WangEditorSandbox } from '@baifendian/adhere-ui-richtext-sandbox';

  export default () => {
    const [wangValue] = useState(
      '<p><span style="background-color: red; color: rgb(31, 35, 40);">TML, a&nbsp;</span><a href="https://quilljs.com/docs/delta/" target="_blank" style="color: var(--color-accent-fg); background-color: rgb(255, 255, 255);">Quill Delta</a><span style="background-color: rgb(255, 255, 255); color: rgb(31, 35, 40);">&nbsp;instance, or a</span></p>',
    );

    return (
      <WangEditorSandbox readOnly value={wangValue} wrapStyle={{ height: 500 }} />
    );
  }
            `,
            type: 'PlayGround',
            renderChildren: () => (
              <WangEditorSandbox readOnly value={wangValue} wrapStyle={{ height: 500 }} />
            ),
          },
        ]}
        title="代码演示"
      />

      <PropsSection
        title="ReactQuillSandbox - Props"
        config={[
          {
            border: true,
            title: '属性',
            data: [
              {
                params: 'wrapClassName',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'wrapStyle',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'quillStyle',
                desc: '附加的样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'bounds',
                desc: '',
                type: 'string | HTMLElement',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '',
                type: 'React.ReactElement<any>',
                defaultVal: '',
              },
              {
                params: 'className',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'defaultValue',
                desc: '',
                type: 'Value',
                defaultVal: '',
              },
              {
                params: 'formats',
                desc: '',
                type: 'string[]',
                defaultVal: '',
              },
              {
                params: 'id',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'modules',
                desc: '',
                type: 'StringMap',
                defaultVal: '',
              },
              {
                params: 'onChange',
                desc: '',
                type: '(value: string, delta: DeltaStatic, source: Sources, editor: UnprivilegedEditor): void',
                defaultVal: '',
              },
              {
                params: 'onChangeSelection',
                desc: '',
                type: '(selection: Range, source: Sources, editor: UnprivilegedEditor): void',
                defaultVal: '',
              },
              {
                params: 'onFocus',
                desc: '',
                type: '(selection: Range, source: Sources, editor: UnprivilegedEditor): void',
                defaultVal: '',
              },
              {
                params: 'onBlur',
                desc: '',
                type: '(previousSelection: Range, source: Sources, editor: UnprivilegedEditor): void',
                defaultVal: '',
              },

              {
                params: 'onKeyDown',
                desc: '',
                type: 'React.EventHandler<any>',
                defaultVal: '',
              },
              {
                params: 'onKeyPress',
                desc: '',
                type: 'React.EventHandler<any>',
                defaultVal: '',
              },
              {
                params: 'onKeyUp',
                desc: '',
                type: 'React.EventHandler<any>',
                defaultVal: '',
              },
              {
                params: 'placeholder',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'preserveWhitespace',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'readOnly',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'scrollingContainer',
                desc: '',
                type: 'string | HTMLElement',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'tabIndex',
                desc: '',
                type: 'number',
                defaultVal: '',
              },
              {
                params: 'theme',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'value',
                desc: '',
                type: 'Value',
                defaultVal: '',
              },
            ],
          },
        ]}
      />

      <PropsSection
        title="WangEditorSandbox - Props"
        config={[
          {
            border: true,
            title: '属性',
            data: [
              {
                params: 'wrapClassName',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'wrapStyle',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'wangEditorStyle',
                desc: '附加的样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'onChange',
                desc: '',
                type: '(value: string, delta: DeltaStatic, source: Sources, editor: UnprivilegedEditor): void',
                defaultVal: '',
              },
              {
                params: 'value',
                desc: '',
                type: 'Value',
                defaultVal: '',
              },
              {
                params: 'toolBarProps',
                desc: '工具栏配置',
                type: 'ToolBarProps',
                defaultVal: '',
              },
              {
                params: 'editorProps',
                desc: '编辑器配置',
                type: 'EditorProps',
                defaultVal: '',
              },
              {
                params: 'readOnly',
                desc: '是否是只读状态',
                type: 'boolean',
                defaultVal: '',
              },
            ],
          },
        ]}
      />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: '方法',
            data: [
              {
                name: 'focus',
                desc: '',
                modifier: 'public',
                params: [],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'blur',
                desc: '',
                modifier: 'public',
                params: [],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'getEditor',
                desc: '',
                modifier: 'public',
                params: [],
                returnType: 'Quill',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
