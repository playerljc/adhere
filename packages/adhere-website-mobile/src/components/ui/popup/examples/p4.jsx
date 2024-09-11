import { Button } from 'antd-mobile';
import React, { useRef } from 'react';

import { MobileGlobalIndicator, MobileSuccessPrompt, Popup } from '@baifendian/adhere';

import Task from '../Task';

export default () => {
  const taskSelectRef = useRef();

  return (
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
  );
};
