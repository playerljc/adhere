import { Button } from 'antd';
import React from 'react';

import { Ajax, GlobalIndicator } from '@baifendian/adhere';

const k007Ajax = new Ajax('http://k007-pe.baifendian.com');

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        const globalIndicator = GlobalIndicator.show();

        Promise.all([
          k007Ajax.get({
            path: '/api/securitypolice/frontend/config/namespace?kw=k007.service_address@@resource@@gis@@application',
          }).promise,
          k007Ajax.get({
            path: '/api/SystemManager/system/role/login/list?state=&kw=&pageNum=1&pageSize=10',
          }).promise,
          k007Ajax.post({
            path: '/api/controlledObject/facade/fq/queryList',
            data: [
              {
                resource: '12345678',
                type: '101',
                uuid: '7419d8b2-76f8-11eb-ada5-b76f62efdb0c',
              },
              { resource: '', type: '103', uuid: '562096255732281344' },
            ],
          }).promise,
        ])
          .then((res) => {
            GlobalIndicator.hide(globalIndicator);
            alert(JSON.stringify(res));
          })
          .catch(() => {
            GlobalIndicator.hide(globalIndicator);
          });
      }}
    >
      call
    </Button>
  );
};
