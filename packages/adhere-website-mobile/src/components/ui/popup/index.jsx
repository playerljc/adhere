import { Button, Form, Result } from 'antd-mobile';
import React, { useRef, useState } from 'react';

import { MobileGlobalIndicator, MobileSuccessPrompt, Popup } from '@baifendian/adhere';

import DemoBlock from '@/lib/DemoBlock';

import SelectPerson from './SelectPerson';
import Task from './Task';

export default () => {
  const personSelectRef = useRef();
  const [persons, setPersons] = useState([]);

  const [form] = Form.useForm();
  const watchPerson = Form.useWatch('person', form);

  const taskSelectRef = useRef();

  return (
    <DemoBlock>
      <DemoBlock.Item title="使用TriggerPrompt弹出MessageDialog">
        <Popup.TriggerPrompt
          okText="确认"
          renderTrigger={() => <Button type="primary">触发</Button>}
          title="提示"
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
            title="操作成功"
            description="内容详情可折行，建议不超过两行建议不超过两行建议不超过两行"
          />
        </Popup.TriggerPrompt>
      </DemoBlock.Item>

      <DemoBlock.Item title="使用TriggerPrompt选取人员">
        <Popup.TriggerPrompt
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
        </Popup.TriggerPrompt>
      </DemoBlock.Item>

      <DemoBlock.Item title="在表单中当作一个FormItem来使用TriggerPrompt">
        <Form
          layout="horizontal"
          form={form}
          footer={
            <Button
              block
              type="submit"
              color="primary"
              size="large"
              onClick={() => {
                form
                  .validateFields()
                  .then((values) => {
                    alert(values);
                  })
                  .catch((error) => {
                    console.log('error', error);
                  });
              }}
            >
              提交
            </Button>
          }
        >
          <Form.Item
            label="人员选择"
            name="person"
            childElementPosition="right"
            // arrow
            rules={[
              {
                required: true,
                message: '请选择人员',
              },
            ]}
          >
            <Popup.TriggerPrompt
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
            </Popup.TriggerPrompt>
          </Form.Item>
        </Form>
      </DemoBlock.Item>

      <DemoBlock.Item title="弹出一个表单进行处理">
        <Popup.Trigger
          okText="确认"
          renderTrigger={() => <Button color="primary">添加任务</Button>}
          title="任务"
          actions={[
            {
              key: 'submit',
              color: 'primary',
              children: <span>提交</span>,
              onClick: () =>
                new Promise((resolve, reject) => {
                  taskSelectRef.current
                    .getValues()
                    .then((values) => {
                      console.log('values', values);
                      const indicator = MobileGlobalIndicator.show();

                      setTimeout(() => {
                        MobileGlobalIndicator.hide(indicator);
                        resolve();

                        setTimeout(() => {
                          MobileSuccessPrompt.openSuccessDialog({});
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
                      const indicator = MobileGlobalIndicator.show();

                      setTimeout(() => {
                        MobileGlobalIndicator.hide(indicator);
                        resolve();

                        setTimeout(() => {
                          MobileSuccessPrompt.openSuccessDialog({});
                        }, 500);
                      }, 1500);
                    })
                    .catch((error) => reject(error));
                }),
            },
          ]}
        >
          <Task ref={taskSelectRef} />
        </Popup.Trigger>
      </DemoBlock.Item>
    </DemoBlock>
  );
};
