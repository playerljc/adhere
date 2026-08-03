import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import ElasticSearchExpression from './ElasticSearchExpression';
import Expression from './Expression';
import FormValidator from './FormValidator';
import MathExpression from './MathExpression';
import SqlExpression from './SqlExpression';
import Variables from './Variables';
import ViewAndParse from './ViewAndParse';

e2e.PC({
  children: <ViewAndParse />,
});
