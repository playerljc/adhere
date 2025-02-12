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
          .get({
            path: '/api/securitypolice/frontend/config/namespace?kw=k007.service_address@@resource@@gis@@application',
            loading: {
              show: true,
            },
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
