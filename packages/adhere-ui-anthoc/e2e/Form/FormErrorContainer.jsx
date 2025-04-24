// import { Button, Form, Input } from 'antd';
import { Col, Row } from 'antd';
import React from 'react';

import { MinusCircleOutlined } from '@ant-design/icons';

import { Button, Form, Input } from '../../src';

var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };

export default () => {
  const [form] = Form.useForm();

  return (
    <div style={{ height: 100, overflowY: 'auto' }}>
      <Form form={form} name="userName" scrollToFirstError scrollMarginTop={133}>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: '请输入姓名',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="address"
          rules={[
            {
              required: true,
              message: '请输入地址',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.List
          name="names"
          rules={[
            {
              validator: (_, names) =>
                __awaiter(void 0, void 0, void 0, function* () {
                  if (!names || names.length < 2) {
                    return Promise.reject(new Error('At least 2 passengers'));
                  }
                }),
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field) => (
                <Row>
                  <Col span={20}>
                    <Form.Item
                      {...field}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: "Please input passenger's name or delete this field.",
                        },
                      ]}
                      noStyle
                    >
                      <Input placeholder="passenger name" style={{ width: '60%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => remove(field.name)}
                      />
                    ) : null}
                  </Col>
                </Row>
              ))}

              <Button type="dashed" onClick={() => add()} style={{ width: '60%' }}>
                Add field
              </Button>

              <Button
                type="dashed"
                onClick={() => {
                  add('The head item', 0);
                }}
                style={{ width: '60%', marginTop: '20px' }}
              >
                Add field at head
              </Button>

              <Form.ErrorList errors={errors} />
            </>
          )}
        </Form.List>
      </Form>

      <Button
        block
        onClick={() => {
          form
            .validateFields()
            .then((values) => {})
            .catch(() => {});
        }}
      >
        Submit
      </Button>

      <div id="error" style={{ color: 'red', display: 'none' }}></div>
    </div>
  );
};
// import { Form, Input } from 'antd';
// import React from 'react';
//
// const App = () => {
//   const [form] = Form.useForm();
//
//   return (
//     <Form form={form}>
//       <Form.Item name="name" label="User List" shouldUpdate>
//         {() => {
//           return <Input />;
//         }}
//       </Form.Item>
//     </Form>
//   );
// };
// export default App;
