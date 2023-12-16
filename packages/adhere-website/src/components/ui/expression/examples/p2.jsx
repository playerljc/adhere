import React from 'react';

import { Expression } from '@baifendian/adhere';
import ElasticSearch from '@baifendian/adhere-ui-expression/es/operators/ElasticSearch';

export default () => (
  <div>
    <Expression operators={ElasticSearch} />
  </div>
);
