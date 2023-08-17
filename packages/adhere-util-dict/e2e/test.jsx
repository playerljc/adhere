import React, { useState } from 'react';

import { Space, Spin } from '@baifendian/adhere';

import Dict from '../src';

const { useDict } = Dict;

export default () => {
  const [params, setParams] = useState('666');

  const dictRadio = useDict('SystemTestRadio');

  const dynamicDictRadio = useDict('SystemTestDynamicRadio');

  const userInfo = useDict('SystemGetInfo', {
    functionArgs: [params],
  });

  console.log('111===', dictRadio.isPending, dictRadio.data);
  console.log('222===', dynamicDictRadio.isPending, dynamicDictRadio.data);
  console.log('333===', userInfo.isPending, userInfo.data);

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
