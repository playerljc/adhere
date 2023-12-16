import { Button } from 'antd';
import React from 'react';

import { Preferences } from '@baifendian/adhere';

export default () => {
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          Preferences.putStringByLocal('a', 'a');
          Preferences.putObjectByLocal('b', { a: 1, b: 2 });

          Preferences.putStringBySession('a', 'a');
          Preferences.putObjectBySession('b', { a: 1, b: 2 });

          const el = document.getElementById('PreferencesConsole');

          el.innerHTML = `
              ${Preferences.getStringByLocal('a')}</br>
              ${JSON.stringify(Preferences.getObjectByLocal('b'))}</br>
              ${Preferences.getStringBySession('a')}</br>
              ${JSON.stringify(Preferences.getObjectBySession('b'))}</br>
            `;
        }}
      >
        放入和拿出
      </Button>
      <p id="PreferencesConsole" />
    </>
  );
};
