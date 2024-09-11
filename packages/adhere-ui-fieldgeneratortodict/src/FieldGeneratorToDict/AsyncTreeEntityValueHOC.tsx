import React, { memo } from 'react';

import { AsyncTreeEntityValueHOC as InternalHOC } from '@baifendian/adhere-ui-anthoc';
import type { AsyncTreeEntityValueHOCProps } from '@baifendian/adhere-ui-anthoc/es/types';

const AsyncTreeEntityValueHOC = memo<AsyncTreeEntityValueHOCProps>((props) => {
  return <InternalHOC {...props} />;
});

export default AsyncTreeEntityValueHOC;
