import React, { useState } from 'react';

import MessageDialog from '../src/index';

import '../src/index.less';

function Inner({ title, onClick }) {
  return (
    <div>
      <button onClick={onClick}>{title}</button>
    </div>
  );
}

export default () => {
  const [title, setTitle] = useState(`1`);

  return (
    <div>
      <MessageDialog.TriggerPrompt
        okText="确认"
        renderTrigger={() => <div>trigger</div>}
        modalConfig={{
          config: {
            title,
          },
        }}
        onSubmit={() => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, 2000);
          });
        }}
      >
        <Inner
          title={title}
          onClick={() => {
            setTitle((title) => `${parseInt(title) + 1}`);
          }}
        />
      </MessageDialog.TriggerPrompt>

      {/*<MessageDialog.Trigger
                renderTrigger={() => <div>Trigger</div>}
                modalConfig={{
                    config: {
                        title: '确认',
                    },
                }}
                actions={[
                    {
                        key: 'submit',
                        type: 'primary',
                        children: '提交',
                        onClick: () =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    resolve(123);
                                }, 2000);
                            }),
                    },
                    {
                        key: 'submit',
                        type: 'primary',
                        children: '暂存',
                        onClick: () =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    resolve(123);
                                }, 2000);
                            }),
                    },
                ]}
            >
                <div>Inner</div>
            </MessageDialog.Trigger>*/}
    </div>
  );
};
