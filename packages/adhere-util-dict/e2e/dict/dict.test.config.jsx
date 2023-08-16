import React from 'react';

import Dict from '../../src';

export default {
  initStatic() {
    Dict.handlers.SystemTestRadio = () => [
      {
        value: 1,
        label: '通过',
      },
      {
        value: 2,
        label: '不通过',
      },
      {
        value: 3,
        label: '退回',
      },
    ];

    Dict.handlers.SystemTestDynamicRadio = () =>
      Promise.resolve([
        {
          value: 1,
          label: '通过',
        },
        {
          value: 2,
          label: '不通过',
        },
        {
          value: 3,
          label: '退回',
        },
      ]);

    Dict.handlers.SystemGetInfo = () => (id) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              value: 1,
              label: '通过',
            },
            {
              value: 2,
              label: '不通过',
            },
            {
              value: 3,
              label: '退回',
            },
          ]);
        }, 3000);
      });
    };
  },

  initRemote() {},
};
