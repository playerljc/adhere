import { Button } from 'antd';
import React from 'react';

import { Ajax } from '@baifendian/adhere';

const k007Ajax = new Ajax('http://k007-pe.baifendian.com');

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        k007Ajax
          .post({
            path: '/api/controlledObject/facade/fq/queryList',
            data: [
              {
                resource: '12345678',
                type: '101',
                uuid: '7419d8b2-76f8-11eb-ada5-b76f62efdb0c',
              },
              { resource: '', type: '103', uuid: '562096255732281344' },
            ],
            loading: {
              show: true,
            },
            // customSendJSONStringify: (self, key, value) => {
            //   return value;
            // },
          })
          .promise.then((res) => {
            if (res) {
              if (res.data.code === 200) {
                alert(JSON.stringify(res.data.data));
              }

              res.hideIndicator();
            }
          });
      }}
    >
      call
    </Button>
  );
};
