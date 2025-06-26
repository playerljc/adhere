import React from 'react';

import e2e from '@baifendian/adhere-e2e';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import TreeAutoComplete from './TreeAutoComplete';
import Test from './test';

import '@baifendian/adhere-e2e/es/index.less';

e2e.Mobile({
  children: (
    <ConfigProvider
      theme={{
        components: {
          mobile: {
            AutoComplete: {
              searchBarPadding: '100px',
              bodyPadding: '100px',
            },
          },
        },
      }}
    >
      {() => {
        return <TreeAutoComplete />;
      }}
    </ConfigProvider>
  ),
});
