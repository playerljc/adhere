import React, { Suspense, lazy } from 'react';

import e2e from '@baifendian/adhere-e2e';

import Test from './test.tsx';

const FormDesignTest = lazy(() =>
  import(/* webpackChunkName: "conditionalrender" */ './FormDesignTest/index.jsx'),
);

e2e.PC({
  children: (
    <Suspense fallback={<div>loading</div>}>
      <FormDesignTest />
    </Suspense>
  ),
});
