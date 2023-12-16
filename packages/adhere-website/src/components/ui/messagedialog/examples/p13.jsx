import { Button } from 'antd';
import React, { useRef } from 'react';

import { GlobalIndicator, MessageDialog, SuccessPrompt } from '@baifendian/adhere';

import Task from '../Task';

export default () => {
  const taskSelectRef = useRef();

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
};
