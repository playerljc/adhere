import React from 'react';

import Dict from '../src';

export default () => (
  <div>
    <Dict.React.SystemTestRadio>
      {(value) => (
        <ul>
          {value?.map((t) => (
            <li key={t.value}>{t.label}</li>
          ))}
        </ul>
      )}
    </Dict.React.SystemTestRadio>

    <div style={{ margin: 20 }}></div>

    <Dict.React.SystemTestDynamicRadio>
      {(value) => (
        <ul>
          {value?.map((t) => (
            <li key={t.value}>{t.label}</li>
          ))}
        </ul>
      )}
    </Dict.React.SystemTestDynamicRadio>
  </div>
);
