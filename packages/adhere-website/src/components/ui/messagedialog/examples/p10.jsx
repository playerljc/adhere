import { Button, Result } from 'antd';
import React from 'react';

import { MessageDialog } from '@baifendian/adhere';

export default () => {
  return (
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
  );
};
