// import { Button, Form, Input } from 'antd';
import React from 'react';

import { Button, Form, Input } from '../../src';

export default () => {
  const [form] = Form.useForm();

  return (
    <div>
      <Form form={form}>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: '请输入姓名',
            },
          ]}
          getErrorContainer={() => {
            return document.getElementById('error');
          }}
        >
          <Input />
        </Form.Item>
      </Form>

      <Button
        block
        onClick={() => {
          form.validateFields().then((values) => {
            debugger;
          });
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
