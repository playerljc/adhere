import { Button } from 'antd';
import React from 'react';

import { FormItemCreator, MessageDialog } from '@baifendian/adhere';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        MessageDialog.Prompt({
          title: '提示',
          config: {
            schema: {
              properties: {
                value: {
                  title: '生日',
                  widget: 'treeSelect',
                  props: {
                    treeData: [
                      {
                        value: 'parent 1',
                        title: 'parent 1',
                        children: [
                          {
                            value: 'parent 1-0',
                            title: 'parent 1-0',
                            children: [
                              {
                                value: 'leaf1',
                                title: 'leaf1',
                              },
                              {
                                value: 'leaf2',
                                title: 'leaf2',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            },
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
  );
};
