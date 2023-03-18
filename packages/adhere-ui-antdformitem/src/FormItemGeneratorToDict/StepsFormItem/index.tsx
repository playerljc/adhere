import React, { FC, useEffect, useState } from 'react';

import { Steps } from '../../AntFormItemNormalize';
import { StepsFormItemProps } from '../../types';

/**
 * StepsFormItem
 * @param props
 * @constructor
 */
const StepsFormItem: FC<StepsFormItemProps> = (props) => {
  const [current, setCurrent] = useState<number>(props.value);

  useEffect(() => setCurrent(props.value), [props.value]);

  return <Steps {...(props || {})} current={current} />;
};

export default StepsFormItem;
