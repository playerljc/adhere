import { StepProps } from 'antd/es/steps';
import React, { FC, useEffect, useState } from 'react';

import { Steps } from '@baifendian/adhere-ui-anthoc';
import Suspense from '@baifendian/adhere-ui-suspense';

import { StepsFormItemProps } from '../../types';

/**
 * StepsFormItem
 * @param firstLoading
 * @param renderEmpty
 * @param renderNormalLoading
 * @param props
 * @constructor
 */
const StepsFormItem: FC<StepsFormItemProps> = ({
  firstLoading,
  renderEmpty,
  renderNormalLoading,
  ...props
}) => {
  const [current, setCurrent] = useState<number>(props.value);

  const [data, setData] = useState<StepProps[]>([]);

  useEffect(() => {
    setData(props.items || []);
  }, [props.items]);

  useEffect(() => {
    setCurrent(props.value);
  }, [props.value]);

  return (
    <Suspense.Sync
      data={data}
      isEmpty={() => data.length === 0}
      firstLoading={firstLoading}
      renderEmpty={renderEmpty}
      renderNormalLoading={renderNormalLoading}
    >
      <Steps {...(props ?? {})} current={current} />
    </Suspense.Sync>
  );
};

export default StepsFormItem;
