import React from 'react';

import { Space } from '@baifendian/adhere';

import Dict from '../src';

export default () => (
  <Space.Group direction="vertical">
    <Dict.React.SystemTestRadio>
      {(value) => (
        <ul>
          {value?.map((t) => (
            <li key={t.value}>{t.label}</li>
          ))}
        </ul>
      )}
    </Dict.React.SystemTestRadio>

    <Dict.React.SystemTestDynamicRadio>
      {(value) => (
        <ul>
          {value?.map((t) => (
            <li key={t.value}>{t.label}</li>
          ))}
        </ul>
      )}
    </Dict.React.SystemTestDynamicRadio>

    <Dict.React.SystemGetInfo args={['666']}>
      {(value) => (
        <ul>
          {value?.map((t) => (
            <li key={t.value}>{t.label}</li>
          ))}
        </ul>
      )}
    </Dict.React.SystemGetInfo>
  </Space.Group>
);
