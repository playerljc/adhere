import { Button, Form, Result } from 'antd';
import React, { useRef, useState } from 'react';

import { FormItemCreator, GlobalIndicator, MessageDialog, SuccessPrompt } from '@baifendian/adhere';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import SelectPerson from './SelectPerson';
import Task from './Task';
import icon from './icon.svg';

export default () => {
  const [persons, setPersons] = useState([]);
  const personSelectRef = useRef();
  const [form] = Form.useForm();
  const watchPerson = Form.useWatch('person', form);

  const taskSelectRef = useRef();

  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `Confirm`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'Confirm',
            info: '使用Confirm',
          },
        },
        codeText: `
  import React from 'react';
  import { Button } from 'antd';
  import { MessageDialog } from '@baifendian/adhere';

  <Button
    type="primary"
    onClick={() => {
      MessageDialog.Confirm({
        title: '提示',
        text: '确认要进行此操作码？',
        width: 300,
        zIndex: 1000,
        local: 'zh_CN',
        icon: <img src={icon} alt="" width={30} />,
        onSuccess: () => {
          return new Promise((resolve) => {
            alert('点击了确认');

            resolve();
          });
        },
      });
    }}
  >
    Open Confirm
  </Button>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              MessageDialog.Confirm({
                title: '提示',
                text: '确认要进行此操作码？',
                width: 300,
                zIndex: 1000,
                local: 'zh_CN',
                icon: <img src={icon} alt="" width={30} />,
                onSuccess: () => {
                  return new Promise((resolve) => {
                    alert('点击了确认');

                    resolve();
                  });
                },
              });
            }}
          >
            Open Confirm
          </Button>
        ),
      },
      {
        id: `p2`,
        name: `Alert`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'Alert',
            info: '使用Alert',
          },
        },
        codeText: `
  import React from 'react';
  import { Button } from 'antd';
  import { MessageDialog } from '@baifendian/adhere';

  <Button
    type="primary"
    onClick={() => {
      MessageDialog.Alert({
        title: '提示',
        text: '操作失败！',
        width: 300,
        zIndex: 1000,
        local: 'zh_CN',
        icon: <img src={icon} alt="" width={30} />,
      });
    }}
  >
    Open Alert
  </Button>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              MessageDialog.Alert({
                title: '提示',
                text: '操作失败！',
                width: 300,
                zIndex: 1000,
                local: 'zh_CN',
                icon: <img src={icon} alt="" width={30} />,
              });
            }}
          >
            Open Alert
          </Button>
        ),
      },
      {
        id: `p3`,
        name: `Prompt`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'Prompt',
            info: '使用Prompt',
          },
        },
        codeText: `
  import React from 'react';
  import { Button } from 'antd';
  import { MessageDialog,FormItemCreator } from '@baifendian/adhere';

  <Button
    type="primary"
    onClick={() => {
      MessageDialog.Prompt({
        title: '提示',
        config: {
          type: FormItemCreator.SLIDER,
          label: '大小',
          initialValue: 10,
        },
        width: 300,
        zIndex: 1000,
        local: 'zh_CN',
        onSuccess: (value) => {
          return new Promise((resolve) => {
            alert(value);
            resolve();
          });
        },
      });
    }}
  >
    Open Prompt
  </Button>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              MessageDialog.Prompt({
                title: '提示',
                config: {
                  type: FormItemCreator.SLIDER,
                  label: '大小',
                  initialValue: 10,
                },
                width: 300,
                zIndex: 1000,
                local: 'zh_CN',
                onSuccess: (value) => {
                  return new Promise((resolve) => {
                    alert(value);
                    resolve();
                  });
                },
              });
            }}
          >
            Open Prompt
          </Button>
        ),
      },
      {
        id: `p4`,
        name: `InputPrompt`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'InputPrompt',
            info: '使用InputPrompt',
          },
        },
        codeText: `
  import React from 'react';
  import { Button } from 'antd';
  import { MessageDialog } from '@baifendian/adhere';

  <Button
    type="primary"
    onClick={() => {
      MessageDialog.InputPrompt({
        title: '提示',
        config: {
          label: '姓名',
          initialValue: '张三',
        },
        width: 300,
        zIndex: 1000,
        local: 'zh_CN',
        onSuccess: (value) => {
          return new Promise((resolve) => {
            alert(value);
            resolve();
          });
        },
      });
    }}
  >
    Open InputPrompt
  </Button>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              MessageDialog.InputPrompt({
                title: '提示',
                config: {
                  label: '姓名',
                  initialValue: '张三',
                },
                width: 300,
                zIndex: 1000,
                local: 'zh_CN',
                onSuccess: (value) => {
                  return new Promise((resolve) => {
                    alert(value);
                    resolve();
                  });
                },
              });
            }}
          >
            Open InputPrompt
          </Button>
        ),
      },
      {
        id: `p5`,
        name: `TextAreaPrompt`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TextAreaPrompt',
            info: '使用TextAreaPrompt',
          },
        },
        codeText: `
  import React from 'react';
  import { Button } from 'antd';
  import { MessageDialog } from '@baifendian/adhere';

  <Button
    type="primary"
    onClick={() => {
      MessageDialog.TextAreaPrompt({
        title: '提示',
        config: {
          label: '地址',
          initialValue: '',
        },
        width: 300,
        zIndex: 1000,
        local: 'zh_CN',
        onSuccess: (value) => {
          return new Promise((resolve) => {
            alert(value);
            resolve();
          });
        },
      });
    }}
  >
    Open InputPrompt
  </Button>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              MessageDialog.TextAreaPrompt({
                title: '提示',
                config: {
                  label: '地址',
                  initialValue: '',
                },
                width: 300,
                zIndex: 1000,
                local: 'zh_CN',
                onSuccess: (value) => {
                  return new Promise((resolve) => {
                    alert(value);
                    resolve();
                  });
                },
              });
            }}
          >
            Open TextAreaPrompt
          </Button>
        ),
      },
      {
        id: `p6`,
        name: `PassWordPrompt`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'PassWordPrompt',
            info: '使用PassWordPrompt',
          },
        },
        codeText: `
  import React from 'react';
  import { Button } from 'antd';
  import { MessageDialog } from '@baifendian/adhere';

  <Button
    type="primary"
    onClick={() => {
      MessageDialog.PassWordPrompt({
        title: '提示',
        config: {
          label: '密码',
          initialValue: '',
        },
        width: 300,
        zIndex: 1000,
        local: 'zh_CN',
        onSuccess: (value) => {
          return new Promise((resolve) => {
            alert(value);
            resolve();
          });
        },
      });
    }}
  >
    Open PassWordPrompt
  </Button>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              MessageDialog.PassWordPrompt({
                title: '提示',
                config: {
                  label: '密码',
                  initialValue: '',
                },
                width: 300,
                zIndex: 1000,
                local: 'zh_CN',
                onSuccess: (value) => {
                  return new Promise((resolve) => {
                    alert(value);
                    resolve();
                  });
                },
              });
            }}
          >
            Open PassWordPrompt
          </Button>
        ),
      },
      {
        id: `p7`,
        name: `NumberPrompt`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'NumberPrompt',
            info: '使用NumberPrompt',
          },
        },
        codeText: `
  import React from 'react';
  import { Button } from 'antd';
  import { MessageDialog } from '@baifendian/adhere';

  <Button
    type="primary"
    onClick={() => {
      MessageDialog.NumberPrompt({
        title: '提示',
        config: {
          label: '数字',
          initialValue: '',
        },
        width: 300,
        zIndex: 1000,
        local: 'zh_CN',
        onSuccess: (value) => {
          return new Promise((resolve) => {
            alert(value);
            resolve();
          });
        },
      });
    }}
  >
    Open NumberPrompt
  </Button>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              MessageDialog.NumberPrompt({
                title: '提示',
                config: {
                  label: '数字',
                  initialValue: '',
                },
                width: 300,
                zIndex: 1000,
                local: 'zh_CN',
                onSuccess: (value) => {
                  return new Promise((resolve) => {
                    alert(value);
                    resolve();
                  });
                },
              });
            }}
          >
            Open NumberPrompt
          </Button>
        ),
      },
      {
        id: `p8`,
        name: `Modal`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'Modal',
            info: '使用Modal',
          },
        },
        codeText: `
  import React from 'react';
  import { Result, Button } from 'antd';
  import { MessageDialog } from '@baifendian/adhere';

  <Button
    type="primary"
    onClick={() => {
      const {close} = MessageDialog.Modal({
        config: {
          title: '提示',
        },
        defaultCloseBtn: false,
        children: (
          <Result
            title="Your operation has been executed"
            extra={
              <Button
                type="primary"
                key="console"
                onClick={() => {
                  // MessageDialog.close(el);
                  close();
                }}
              >
                Close
              </Button>
            }
          />
        ),
      });
    }}
  >
    Open Modal
  </Button>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              const { close } = MessageDialog.Modal({
                config: {
                  title: '提示',
                },
                defaultCloseBtn: false,
                children: (
                  <Result
                    title="Your operation has been executed"
                    extra={
                      <Button
                        type="primary"
                        key="console"
                        onClick={() => {
                          // MessageDialog.close(el);
                          close();
                        }}
                      >
                        Close
                      </Button>
                    }
                  />
                ),
              });
            }}
          >
            Open Modal
          </Button>
        ),
      },
      {
        id: `p9`,
        name: `MaximizeModal`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'MaximizeModal',
            info: '使用MaximizeModal',
          },
        },
        codeText: `
  import React from 'react';
  import { Result, Button } from 'antd';
  import { MessageDialog } from '@baifendian/adhere';

  <Button
    type="primary"
    onClick={() => {
      const {close} = MessageDialog.Modal({
        config: {
          title: '提示',
        },
        defaultCloseBtn: false,
        children: (
          <Result
            title="Your operation has been executed"
            extra={
              <Button
                type="primary"
                key="console"
                onClick={() => {
                  // MessageDialog.close(el);
                  close();
                }}
              >
                Close
              </Button>
            }
          />
        ),
      });
    }}
  >
    Open Modal
  </Button>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              const { close } = MessageDialog.MaximizeModal({
                config: {
                  title: '提示',
                },
                defaultCloseBtn: false,
                children: (
                  <Result
                    title="Your operation has been executed"
                    extra={
                      <Button
                        type="primary"
                        key="console"
                        onClick={() => {
                          // MessageDialog.close(el);
                          close();
                        }}
                      >
                        Close
                      </Button>
                    }
                  />
                ),
              });
            }}
          >
            Open MaximizeModal
          </Button>
        ),
      },
      {
        id: `p10`,
        name: '使用TriggerPrompt弹出MessageDialog',
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '使用TriggerPrompt弹出MessageDialog',
            info: '基本的显示 - 只显示内容',
          },
        },
        codeText: `
  import React from 'react';
  import { Button, Result } from 'antd';
  import { MessageDialog } from '@baifendian/adhere';

  export default () => (
    <MessageDialog.TriggerPrompt
      okText="确认"
      renderTrigger={() => <Button type="primary">触发</Button>}
      modalConfig={{
        config: {
          title: '提示',
        },
      }}
      onSubmit={() =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(123);
          }, 2000);
        })
      }
    >
      <Result
        status="success"
        title="Successfully Purchased Cloud Server ECS!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      />
    </MessageDialog.TriggerPrompt>
  )
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <MessageDialog.TriggerPrompt
            okText="确认"
            renderTrigger={() => <Button type="primary">触发</Button>}
            modalConfig={{
              config: {
                title: '提示',
              },
            }}
            onSubmit={() =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve(123);
                }, 2000);
              })
            }
          >
            <Result
              status="success"
              title="Successfully Purchased Cloud Server ECS!"
              subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            />
          </MessageDialog.TriggerPrompt>
        ),
      },
      {
        id: `p11`,
        name: '使用TriggerPrompt选取人员',
        cardProps: {
          description: {
            title: '使用TriggerPrompt选取人员',
            info: '在弹出的穿梭框中选取指定的人员',
          },
        },
        active: 'index.jsx',
        config: [
          {
            key: 'index.jsx',
            title: 'index.jsx',
            codeText: `
  import React, { useState, useRef } from 'react';
  import { MessageDialog } from '@baifendian/adhere';
  import { Button } from 'antd';
  import SelectPerson from './SelectPerson';

  export default () => {
    const [persons, setPersons] = useState([]);
    const personSelectRef = useRef();

    return (
      <MessageDialog.TriggerPrompt
        okText="确认"
        renderTrigger={() => <Button type="primary">选取({persons.length})</Button>}
        modalConfig={{
          config: {
            title: '人员选择',
          },
        }}
        onSubmit={() =>
          new Promise((resolve) => {
            resolve(personSelectRef.current.getValues());
          })
        }
        value={persons}
        onChange={(_values) => {
          setPersons(_values);
        }}
      >
        <SelectPerson ref={personSelectRef} />
      </MessageDialog.TriggerPrompt>
    );
  }
      `,
          },
          {
            key: 'SelectPerson.jsx',
            title: 'SelectPerson.jsx',
            codeText: `
  import { Transfer } from 'antd';
  import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

  const mockData = Array.from({
    length: 20,
  }).map((_, i) => ({
    key: i.toString(),
    title: \`content\${i + 1}\`,
    description: \`description of content\${i + 1}\`,
  }));

  function SelectPerson(props, ref) {
    const [targetKeys, setTargetKeys] = useState(props.value);

    useEffect(() => {
      setTargetKeys(props.value);
    }, [props.value]);

    useImperativeHandle(ref, () => ({
      getValues: () => targetKeys,
    }));

    return (
      <Transfer
        dataSource={mockData}
        targetKeys={targetKeys}
        render={(item) => item.title}
        onChange={(sourceSelectedKeys) => {
          setTargetKeys(sourceSelectedKeys);
        }}
        {...props}
      />
    );
  }

  export default forwardRef(SelectPerson);
      `,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => (
          <MessageDialog.TriggerPrompt
            okText="确认"
            renderTrigger={() => <Button type="primary">选取({persons.length})</Button>}
            modalConfig={{
              config: {
                title: '人员选择',
              },
            }}
            onSubmit={() =>
              new Promise((resolve) => {
                resolve(personSelectRef.current.getValues());
              })
            }
            value={persons}
            onChange={(_values) => {
              setPersons(_values);
            }}
          >
            <SelectPerson ref={personSelectRef} />
          </MessageDialog.TriggerPrompt>
        ),
      },
      {
        id: `p12`,
        name: '在表单中当作一个FormItem来使用TriggerPrompt',
        cardProps: {
          description: {
            title: '在表单中当作一个FormItem来使用TriggerPrompt',
            info: '在表单中当作一个FormItem来使用TriggerPrompt',
          },
        },
        type: 'PlayGroundTab',
        active: 'index.jsx',
        config: [
          {
            key: 'index.jsx',
            title: 'index.jsx',
            codeText: `
  import React, { useRef } from 'react';
  import { Form, Button } from 'antd';
  import { MessageDialog } from '@baifendian/adhere';
  import SelectPerson from './SelectPerson';

  export default () => {
    const [form] = Form.useForm();
    const watchPerson = Form.useWatch('person', form);
    const personSelectRef = useRef();

    return (
      <Form
        name="PersonForm"
        form={form}
        onFinish={(values) => {
          alert(values);
        }}
      >
        <Form.Item
          label="人员选择"
          name="person"
          rules={[
            {
              required: true,
              message: '请选择人员',
            },
          ]}
        >
          <MessageDialog.TriggerPrompt
            okText="确认"
            renderTrigger={() => <Button type="primary">选取({watchPerson?.length})</Button>}
            modalConfig={{
              config: {
                title: '人员选择',
              },
            }}
            onSubmit={() =>
              new Promise((resolve) => {
                resolve(personSelectRef.current.getValues());
              })
            }
          >
            <SelectPerson ref={personSelectRef} />
          </MessageDialog.TriggerPrompt>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    );
  }
      `,
          },
          {
            key: 'SelectPerson.jsx',
            title: 'SelectPerson.jsx',
            codeText: `
  import { Transfer } from 'antd';
  import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

  const mockData = Array.from({
    length: 20,
  }).map((_, i) => ({
    key: i.toString(),
    title: \`content\${i + 1}\`,
    description: \`description of content\${i + 1}\`,
  }));

  function SelectPerson(props, ref) {
    const [targetKeys, setTargetKeys] = useState(props.value);

    useEffect(() => {
      setTargetKeys(props.value);
    }, [props.value]);

    useImperativeHandle(ref, () => ({
      getValues: () => targetKeys,
    }));

    return (
      <Transfer
        dataSource={mockData}
        targetKeys={targetKeys}
        render={(item) => item.title}
        onChange={(sourceSelectedKeys) => {
          setTargetKeys(sourceSelectedKeys);
        }}
        {...props}
      />
    );
  }

  export default forwardRef(SelectPerson);
      `,
          },
        ],
        renderChildren: () => (
          <Form
            name="PersonForm"
            form={form}
            onFinish={(values) => {
              alert(values);
            }}
          >
            <Form.Item
              label="人员选择"
              name="person"
              rules={[
                {
                  required: true,
                  message: '请选择人员',
                },
              ]}
            >
              <MessageDialog.TriggerPrompt
                okText="确认"
                renderTrigger={() => <Button type="primary">选取({watchPerson?.length})</Button>}
                modalConfig={{
                  config: {
                    title: '人员选择',
                  },
                }}
                onSubmit={() =>
                  new Promise((resolve) => {
                    resolve(personSelectRef.current.getValues());
                  })
                }
              >
                <SelectPerson ref={personSelectRef} />
              </MessageDialog.TriggerPrompt>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        ),
      },
      {
        id: `p13`,
        name: '处理一个表单',
        cardProps: {
          description: {
            title: '弹出一个表单进行处理',
            info: '弹出一个表单进行处理',
          },
        },
        type: 'PlayGroundTab',
        active: 'index.jsx',
        config: [
          {
            key: 'index.jsx',
            title: 'index.jsx',
            codeText: `
  import React from 'react';
  import { MessageDialog, GlobalIndicator, SuccessPrompt } from '@baifendian/adhere';
  import { Button } from 'antd';
  import Task from './Task';

  export default () => {

    return (
      <MessageDialog.Trigger
        okText="确认"
        renderTrigger={() => <Button type="primary">添加任务</Button>}
        modalConfig={{
          config: {
            title: '任务',
          },
        }}
        actions={[
          {
            key: 'submit',
            type: 'primary',
            children: <span>提交</span>,
            onClick: () =>
              new Promise((resolve, reject) => {
                taskSelectRef.current
                  .getValues()
                  .then((values) => {
                    console.log('values', values);
                    const indicator = GlobalIndicator.show();

                    setTimeout(() => {
                      GlobalIndicator.hide(indicator);
                      resolve();

                      setTimeout(() => {
                        SuccessPrompt.openSuccessDialog({});
                      }, 500);
                    }, 1500);
                  })
                  .catch((error) => reject(error));
              }),
          },
          {
            key: 'save',
            children: <span>暂存</span>,
            onClick: () =>
              new Promise((resolve, reject) => {
                taskSelectRef.current
                  .getValues()
                  .then((values) => {
                    console.log('values', values);
                    const indicator = GlobalIndicator.show();

                    setTimeout(() => {
                      GlobalIndicator.hide(indicator);
                      resolve();

                      setTimeout(() => {
                        SuccessPrompt.openSuccessDialog({});
                      }, 500);
                    }, 1500);
                  })
                  .catch((error) => reject(error));
              }),
          },
        ]}
      >
        <Task ref={taskSelectRef} />
      </MessageDialog.Trigger>
    );
  }
      `,
          },
          {
            key: 'Task.jsx',
            title: 'Task.jsx',
            codeText: `
  import { Form, Input, Select } from 'antd';
  import React, { forwardRef, useImperativeHandle } from 'react';

  function Task(props, ref) {
    const [form] = Form.useForm();

    useImperativeHandle(ref, () => ({
      getValues: () => form.validateFields(),
    }));

    return (
      <Form
        name="userForm"
        form={form}
        labelCol={{
          span: 3,
        }}
        wrapperCol={{
          span: 21,
        }}
      >
        <Form.Item
          name="name"
          label="姓名"
          rules={[
            {
              required: true,
              message: '请输入姓名',
            },
          ]}
        >
          <Input placeholder="姓名" />
        </Form.Item>

        <Form.Item
          name="sex"
          label="性别"
          rules={[
            {
              required: true,
              message: '请选择姓名',
            },
          ]}
        >
          <Select>
            <Select.Option value="1">男</Select.Option>
            <Select.Option value="2">女</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="address" label="地址">
          <Input placeholder="地址" />
        </Form.Item>
      </Form>
    );
  }

  export default forwardRef(Task);
      `,
          },
        ],
        renderChildren: () => (
          <MessageDialog.Trigger
            okText="确认"
            renderTrigger={() => <Button type="primary">添加任务</Button>}
            modalConfig={{
              config: {
                title: '任务',
              },
            }}
            actions={[
              {
                key: 'submit',
                type: 'primary',
                children: <span>提交</span>,
                onClick: () =>
                  new Promise((resolve, reject) => {
                    taskSelectRef.current
                      .getValues()
                      .then((values) => {
                        console.log('values', values);
                        const indicator = GlobalIndicator.show();

                        setTimeout(() => {
                          GlobalIndicator.hide(indicator);
                          resolve();

                          setTimeout(() => {
                            SuccessPrompt.openSuccessDialog({});
                          }, 500);
                        }, 1500);
                      })
                      .catch((error) => reject(error));
                  }),
              },
              {
                key: 'save',
                children: <span>暂存</span>,
                onClick: () =>
                  new Promise((resolve, reject) => {
                    taskSelectRef.current
                      .getValues()
                      .then((values) => {
                        console.log('values', values);
                        const indicator = GlobalIndicator.show();

                        setTimeout(() => {
                          GlobalIndicator.hide(indicator);
                          resolve();

                          setTimeout(() => {
                            SuccessPrompt.openSuccessDialog({});
                          }, 500);
                        }, 1500);
                      })
                      .catch((error) => reject(error));
                  }),
              },
            ]}
          >
            <Task ref={taskSelectRef} />
          </MessageDialog.Trigger>
        ),
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="MessageDialog">
        <p>对 ant-design 的&lt;Model&gt;进行封装</p>
        <ul>
          <li>- 支持使用 open 方式打开</li>
          <li>- 支持 Modal 原始方法</li>
          <li>- 支持预定义 Alert、Confirm</li>
          <li>- 不与变量进行绑定，开箱即用的功能</li>
        </ul>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: 'Confirm方法',
            data: [
              {
                name: 'MessageDialog.Confirm',
                desc: '打开确认对话框',
                modifier: 'static',
                params: [
                  {
                    name: 'title',
                    desc: '标题',
                    type: 'String | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'text',
                    desc: '显示的内容',
                    type: 'String | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'width',
                    desc: '宽度',
                    type: 'number',
                    defaultVal: '300',
                    required: '',
                  },
                  {
                    name: 'zIndex',
                    desc: '层级',
                    type: 'number',
                    defaultVal: '1000',
                    required: '',
                  },
                  {
                    name: 'local',
                    desc: '语言',
                    type: 'string [zh_CN | pt_PT | en_US]',
                    defaultVal: 'zh_CN',
                    required: '',
                  },
                  {
                    name: 'icon',
                    desc: '图标',
                    type: 'string | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'onSuccess',
                    desc: '成功的回调函数，返回Promise',
                    type: 'Function',
                    defaultVal: '() => {}',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'Alert方法',
            data: [
              {
                name: 'MessageDialog.Alert',
                desc: '打开Alert对话框',
                modifier: 'static',
                params: [
                  {
                    name: 'title',
                    desc: '标题',
                    type: 'String | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'text',
                    desc: '显示的内容',
                    type: 'String | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'width',
                    desc: '宽度',
                    type: 'number',
                    defaultVal: '300',
                    required: '',
                  },
                  {
                    name: 'zIndex',
                    desc: '层级',
                    type: 'number',
                    defaultVal: '1000',
                    required: '',
                  },
                  {
                    name: 'local',
                    desc: '语言',
                    type: 'string [zh_CN | pt_PT | en_US]',
                    defaultVal: 'zh_CN',
                    required: '',
                  },
                  {
                    name: 'icon',
                    desc: '图标',
                    type: 'string | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'Prompt方法',
            data: [
              {
                name: 'MessageDialog.Prompt',
                desc: '打开一个FormItem的窗体',
                modifier: 'static',
                params: [
                  {
                    name: 'title',
                    desc: '标题',
                    type: 'String | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'config',
                    desc: 'FormItemCreator的一个配置，请参考adhere-ui-formitemcreator',
                    type: 'Object',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'layout',
                    desc: 'FormItemCreator的layout配置，请参考adhere-ui-formitemcreator',
                    type: 'Object',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'width',
                    desc: '宽度',
                    type: 'number',
                    defaultVal: '300',
                    required: '',
                  },
                  {
                    name: 'zIndex',
                    desc: '层级',
                    type: 'number',
                    defaultVal: '1000',
                    required: '',
                  },
                  {
                    name: 'local',
                    desc: '语言',
                    type: 'string [zh_CN | pt_PT | en_US]',
                    defaultVal: 'zh_CN',
                    required: '',
                  },
                  {
                    name: 'icon',
                    desc: '图标',
                    type: 'string | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'InputPrompt方法',
            data: [
              {
                name: 'MessageDialog.InputPrompt方法',
                desc: '打开一个InputFormItem的窗体',
                modifier: 'static',
                params: [
                  {
                    name: 'title',
                    desc: '标题',
                    type: 'String | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'config',
                    desc: 'FormItemCreator的一个配置，请参考adhere-ui-formitemcreator',
                    type: 'Object',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'layout',
                    desc: 'FormItemCreator的layout配置，请参考adhere-ui-formitemcreator',
                    type: 'Object',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'width',
                    desc: '宽度',
                    type: 'number',
                    defaultVal: '300',
                    required: '',
                  },
                  {
                    name: 'zIndex',
                    desc: '层级',
                    type: 'number',
                    defaultVal: '1000',
                    required: '',
                  },
                  {
                    name: 'local',
                    desc: '语言',
                    type: 'string [zh_CN | pt_PT | en_US]',
                    defaultVal: 'zh_CN',
                    required: '',
                  },
                  {
                    name: 'icon',
                    desc: '图标',
                    type: 'string | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'TextAreaPrompt方法',
            data: [
              {
                name: 'MessageDialog.TextAreaPrompt方法',
                desc: '打开一个TextAreaFormItem的窗体',
                modifier: 'static',
                params: [
                  {
                    name: 'title',
                    desc: '标题',
                    type: 'String | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'config',
                    desc: 'FormItemCreator的一个配置，请参考adhere-ui-formitemcreator',
                    type: 'Object',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'layout',
                    desc: 'FormItemCreator的layout配置，请参考adhere-ui-formitemcreator',
                    type: 'Object',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'width',
                    desc: '宽度',
                    type: 'number',
                    defaultVal: '300',
                    required: '',
                  },
                  {
                    name: 'zIndex',
                    desc: '层级',
                    type: 'number',
                    defaultVal: '1000',
                    required: '',
                  },
                  {
                    name: 'local',
                    desc: '语言',
                    type: 'string [zh_CN | pt_PT | en_US]',
                    defaultVal: 'zh_CN',
                    required: '',
                  },
                  {
                    name: 'icon',
                    desc: '图标',
                    type: 'string | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'PassWordPrompt方法',
            data: [
              {
                name: 'MessageDialog.PassWordPrompt方法',
                desc: '打开一个PassWordFormItem的窗体',
                modifier: 'static',
                params: [
                  {
                    name: 'title',
                    desc: '标题',
                    type: 'String | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'config',
                    desc: 'FormItemCreator的一个配置，请参考adhere-ui-formitemcreator',
                    type: 'Object',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'layout',
                    desc: 'FormItemCreator的layout配置，请参考adhere-ui-formitemcreator',
                    type: 'Object',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'width',
                    desc: '宽度',
                    type: 'number',
                    defaultVal: '300',
                    required: '',
                  },
                  {
                    name: 'zIndex',
                    desc: '层级',
                    type: 'number',
                    defaultVal: '1000',
                    required: '',
                  },
                  {
                    name: 'local',
                    desc: '语言',
                    type: 'string [zh_CN | pt_PT | en_US]',
                    defaultVal: 'zh_CN',
                    required: '',
                  },
                  {
                    name: 'icon',
                    desc: '图标',
                    type: 'string | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'NumberPromptPrompt方法',
            data: [
              {
                name: 'MessageDialog.NumberPrompt方法',
                desc: '打开一个NumberFormItem的窗体',
                modifier: 'static',
                params: [
                  {
                    name: 'title',
                    desc: '标题',
                    type: 'String | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'config',
                    desc: 'FormItemCreator的一个配置，请参考adhere-ui-formitemcreator',
                    type: 'Object',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'layout',
                    desc: 'FormItemCreator的layout配置，请参考adhere-ui-formitemcreator',
                    type: 'Object',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'width',
                    desc: '宽度',
                    type: 'number',
                    defaultVal: '300',
                    required: '',
                  },
                  {
                    name: 'zIndex',
                    desc: '层级',
                    type: 'number',
                    defaultVal: '1000',
                    required: '',
                  },
                  {
                    name: 'local',
                    desc: '语言',
                    type: 'string [zh_CN | pt_PT | en_US]',
                    defaultVal: 'zh_CN',
                    required: '',
                  },
                  {
                    name: 'icon',
                    desc: '图标',
                    type: 'string | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'Modal方法',
            data: [
              {
                name: 'MessageDialog.Modal',
                desc: '打开一个模式对话框',
                modifier: 'static',
                params: [
                  {
                    name: 'config',
                    desc: '配置',
                    type: 'Object - antd的Modal的配置',
                    defaultVal: '{}',
                    required: '',
                  },
                  {
                    name: 'children',
                    desc: '显示的内容',
                    type: 'React.ReactElement | null',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'defaultCloseBtn',
                    desc: '是否缺省有关闭按钮',
                    type: 'boolean',
                    defaultVal: 'true',
                    required: '',
                  },
                  {
                    name: 'local',
                    desc: '语言',
                    type: 'string [zh_CN | pt_PT | en_US]',
                    defaultVal: 'zh_CN',
                    required: '',
                  },
                ],
                returnType: 'HtmlElement',
                returnDesc: '返回Modal的HtmlElement对象',
              },
            ],
          },
          {
            border: true,
            title: 'MaximizeModal方法',
            data: [
              {
                name: 'MessageDialog.MaximizeModal',
                desc: '打开一个可以最大化和还原的对话框',
                modifier: 'static',
                params: [
                  {
                    name: 'config',
                    desc: '配置',
                    type: 'Object - antd的Modal的配置',
                    defaultVal: '{}',
                    required: '',
                  },
                  {
                    name: 'children',
                    desc: '显示的内容',
                    type: 'React.ReactElement | null',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'defaultCloseBtn',
                    desc: '是否缺省有关闭按钮',
                    type: 'boolean',
                    defaultVal: 'true',
                    required: '',
                  },
                  {
                    name: 'local',
                    desc: '语言',
                    type: 'string [zh_CN | pt_PT | en_US]',
                    defaultVal: 'zh_CN',
                    required: '',
                  },
                ],
                returnType: 'HtmlElement',
                returnDesc: '返回Modal的HtmlElement对象',
              },
            ],
          },
          {
            border: true,
            title: 'Close方法',
            data: [
              {
                name: 'MessageDialog.close',
                desc: '关闭一个Modal对话框',
                modifier: 'static',
                params: [
                  {
                    name: 'el',
                    desc: 'Model的el,一般是MessageDialog.Modal的返回值',
                    type: 'HtmlElement',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'Trigger',
            data: [
              {
                name: 'MessageDialog.Trigger',
                desc: 'Trigger组件',
                modifier: 'static',
                params: [],
                returnType: 'ReactFunction',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'TriggerPrompt',
            data: [
              {
                name: 'MessageDialog.TriggerPrompt',
                desc: 'Trigger组件',
                modifier: 'static',
                params: [],
                returnType: 'ReactFunction',
                returnDesc: '',
              },
            ],
          },
        ]}
      />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'Trigger',
            data: [
              {
                params: 'className',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '',
                type: 'any',
                defaultVal: '',
              },
              {
                params: 'value',
                desc: '',
                type: 'any',
                defaultVal: '',
              },
              {
                params: 'onChange',
                desc: '',
                type: '(params?: any) => void',
                defaultVal: '',
              },
              {
                params: 'renderTrigger',
                desc: '',
                type: '() => ReactNode',
                defaultVal: '',
              },
              {
                params: 'maximized',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'actions',
                desc: '',
                type: `
                  Omit<ButtonProps, 'onClick'> &
                    {
                      key: any;
                      onClick?: () => Promise<any>;
                    }[];
                  modalConfig?: Omit<
                    Omit<ModalArgv, 'config'> & {
                      config?: Omit<ModalProps, 'footer'>;
                    },
                    'children' | 'defaultCloseBtn'
                  >
                `,
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'TriggerPrompt',
            data: [
              {
                params: 'onSubmit',
                desc: '提交，resolve的值是onChange的参数',
                type: '() => Promise<any>',
                defaultVal: '',
              },
              {
                params: 'modalConfig',
                desc: 'Modal的配置',
                type: "Omit<ModalArgv, 'children' | 'defaultCloseBtn'>",
                defaultVal: '',
              },
              {
                params: 'okText',
                desc: '确定按钮的文本',
                type: 'string',
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
