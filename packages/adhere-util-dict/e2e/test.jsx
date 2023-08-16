import React, { useState } from 'react';

import { Space, Spin } from '@baifendian/adhere';

import Dict from '../src';

export default () => {
  const [params, setParams] = useState('666');

  return (
    <Space.Group direction="vertical">
      <Dict.React.SystemTestRadio>
        {({ data }) => (
          <ul>
            {data?.map((t) => (
              <li key={t.value}>{t.label}</li>
            ))}
          </ul>
        )}
      </Dict.React.SystemTestRadio>

      <Dict.React.SystemTestDynamicRadio>
        {({ data }) => (
          <ul>
            {data?.map((t) => (
              <li key={t.value}>{t.label}</li>
            ))}
          </ul>
        )}
      </Dict.React.SystemTestDynamicRadio>

      <Dict.React.SystemGetInfo
        args={[params]}
        renderNormalLoading={({ children, loading }) => {
          return (
            <div style={{ position: 'relative' }}>
              {children}
              <Spin text="处理中..." spinning={loading} />
            </div>
          );
        }}
      >
        {({ isPending, data, isValidate }) => {
          console.log('isPending', isPending);
          console.log('isValidate', isValidate);
          console.log('data', data);

          return (
            <ul>
              {data?.map((t) => (
                <li key={t.value}>{t.label}</li>
              ))}
            </ul>
          );
        }}
      </Dict.React.SystemGetInfo>

      <button onClick={() => setParams(`${Date.now()}`)}>refresh</button>
    </Space.Group>
  );
};
