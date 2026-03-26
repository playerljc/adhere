// import { Form } from 'antd';
import React, { useState } from 'react';

import { PlusOutlined } from '@ant-design/icons';

import { Button, Checkbox, Form, Input } from '../../src';

const FormDisabledDemo = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);

  const [form] = Form.useForm();

  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox>

      <Form
        name="userName"
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        // disabled={componentDisabled}
        style={{ maxWidth: 600 }}
        scrollToFirstError
        onFinish={(values) => {
          console.log('values======', values);
        }}
      >
        <Form.Item
          label="Input1"
          name="name1"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            onChange={(e) => {
              console.log('1111111111111111111111');
            }}
          />
        </Form.Item>
        {/*<Form.Item*/}
        {/*  label="Input2"*/}
        {/*  name="name2"*/}
        {/*  rules={[*/}
        {/*    {*/}
        {/*      required: true,*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*>*/}
        {/*  <Input />*/}
        {/*</Form.Item>*/}
        {/*<Form.Item*/}
        {/*  label="Input3"*/}
        {/*  name="name3"*/}
        {/*  rules={[*/}
        {/*    {*/}
        {/*      required: true,*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*>*/}
        {/*  <Input />*/}
        {/*</Form.Item>*/}
        {/*<Form.Item*/}
        {/*  label="Input4"*/}
        {/*  name="name4"*/}
        {/*  rules={[*/}
        {/*    {*/}
        {/*      required: true,*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*>*/}
        {/*  <Input />*/}
        {/*</Form.Item>*/}
        {/*<Form.Item*/}
        {/*  label="Input5"*/}
        {/*  name="name5"*/}
        {/*  rules={[*/}
        {/*    {*/}
        {/*      required: true,*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*>*/}
        {/*  <Input />*/}
        {/*</Form.Item>*/}
        {/*<Form.Item*/}
        {/*  label="Input6"*/}
        {/*  name="name6"*/}
        {/*  rules={[*/}
        {/*    {*/}
        {/*      required: true,*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*>*/}
        {/*  <Input />*/}
        {/*</Form.Item>*/}
        {/*<Form.Item*/}
        {/*  label="Input7"*/}
        {/*  name="name7"*/}
        {/*  rules={[*/}
        {/*    {*/}
        {/*      required: true,*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*>*/}
        {/*  <Input />*/}
        {/*</Form.Item>*/}
        {/*<Form.Item*/}
        {/*  label="Input8"*/}
        {/*  name="name8"*/}
        {/*  rules={[*/}
        {/*    {*/}
        {/*      required: true,*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*>*/}
        {/*  <Input />*/}
        {/*</Form.Item>*/}
        {/*<Form.Item*/}
        {/*  label="Input9"*/}
        {/*  name="name9"*/}
        {/*  rules={[*/}
        {/*    {*/}
        {/*      required: true,*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*>*/}
        {/*  <Input />*/}
        {/*</Form.Item>*/}
        {/*<Form.Item*/}
        {/*  label="Input10"*/}
        {/*  name="name10"*/}
        {/*  rules={[*/}
        {/*    {*/}
        {/*      required: true,*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*>*/}
        {/*  <Input />*/}
        {/*</Form.Item>*/}
        {/*<Form.Item*/}
        {/*  label="Input11"*/}
        {/*  name="name11"*/}
        {/*  rules={[*/}
        {/*    {*/}
        {/*      required: true,*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*>*/}
        {/*  <Input />*/}
        {/*</Form.Item>*/}
        {/*<Form.Item*/}
        {/*  label="Input12"*/}
        {/*  name="name12"*/}
        {/*  rules={[*/}
        {/*    {*/}
        {/*      required: true,*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*>*/}
        {/*  <Input />*/}
        {/*</Form.Item>*/}
        {/*<Form.Item*/}
        {/*  label="Input13"*/}
        {/*  name="name13"*/}
        {/*  rules={[*/}
        {/*    {*/}
        {/*      required: true,*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*>*/}
        {/*  <Input />*/}
        {/*</Form.Item>*/}
        {/*<Form.Item*/}
        {/*  label="Input14"*/}
        {/*  name="name14"*/}
        {/*  rules={[*/}
        {/*    {*/}
        {/*      required: true,*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*>*/}
        {/*  <Input />*/}
        {/*</Form.Item>*/}
        {/*<Form.Item*/}
        {/*  label="Input15"*/}
        {/*  name="name15"*/}
        {/*  rules={[*/}
        {/*    {*/}
        {/*      required: true,*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*>*/}
        {/*  <Input />*/}
        {/*</Form.Item>*/}
        {/*<Form.Item*/}
        {/*  label="Input16"*/}
        {/*  name="name16"*/}
        {/*  rules={[*/}
        {/*    {*/}
        {/*      required: true,*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*>*/}
        {/*  <Input />*/}
        {/*</Form.Item>*/}
        {/*<Form.Item*/}
        {/*  label="Input17"*/}
        {/*  name="name17"*/}
        {/*  rules={[*/}
        {/*    {*/}
        {/*      required: true,*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*>*/}
        {/*  <Input />*/}
        {/*</Form.Item>*/}
        {/*<Form.Item*/}
        {/*  label="Input18"*/}
        {/*  name="name18"*/}
        {/*  rules={[*/}
        {/*    {*/}
        {/*      required: true,*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*>*/}
        {/*  <Input />*/}
        {/*</Form.Item>*/}
        {/*<Form.Item*/}
        {/*  label="Input19"*/}
        {/*  name="name19"*/}
        {/*  rules={[*/}
        {/*    {*/}
        {/*      required: true,*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*>*/}
        {/*  <Input />*/}
        {/*</Form.Item>*/}
        {/*<Form.Item*/}
        {/*  label="Input20"*/}
        {/*  name="name20"*/}
        {/*  rules={[*/}
        {/*    {*/}
        {/*      required: true,*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*>*/}
        {/*  <Input />*/}
        {/*</Form.Item>*/}

        {/*<Form.List*/}
        {/*  name="dynamicFields"*/}
        {/*  rules={[*/}
        {/*    {*/}
        {/*      required: true,*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*>*/}
        {/*  {(fields, { add, remove }, { errors }) => (*/}
        {/*    <>*/}
        {/*      {fields.map(({ key, name, ...restField }) => (*/}
        {/*        <Form.Item*/}
        {/*          {...restField}*/}
        {/*          key={key}*/}
        {/*          label={`Dynamic Field ${name + 1}`}*/}
        {/*          name={[name, 'value']}*/}
        {/*          rules={[*/}
        {/*            {*/}
        {/*              required: true,*/}
        {/*              message: 'This field is required',*/}
        {/*            },*/}
        {/*          ]}*/}
        {/*        >*/}
        {/*          <Input placeholder="Enter value" />*/}
        {/*        </Form.Item>*/}
        {/*      ))}*/}

        {/*      <Form.Item>*/}
        {/*        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>*/}
        {/*          Add Dynamic Field*/}
        {/*        </Button>*/}

        {/*        <Form.ErrorList errors={errors} />*/}
        {/*      </Form.Item>*/}

        {/*      /!*<Form.Item>*/}
        {/*        <Form.ErrorList errors={errors} />*/}
        {/*      </Form.Item>*!/*/}
        {/*    </>*/}
        {/*  )}*/}
        {/*</Form.List>*/}

        <div>
          <Button
            onClick={() => {
              // form
              //   .validateFields()
              //   .then(() => {})
              //   .catch((err) => {});

              form.submit();
            }}
          >
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;
