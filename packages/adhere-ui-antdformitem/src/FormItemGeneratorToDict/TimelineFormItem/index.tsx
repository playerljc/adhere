import type { TimelineItemProps } from 'antd/lib/timeline/TimelineItem';
import React, { FC, useEffect, useState } from 'react';

import { Suspense } from '@baifendian/adhere';

import { Timeline } from '../../AntFormItemNormalize';
import { TimelineFormItemProps } from '../../types';

/**
 * TimelineFormItem
 * @param firstLoading
 * @param renderEmpty
 * @param props
 * @constructor
 */
const TimelineFormItem: FC<TimelineFormItemProps> = ({ firstLoading, renderEmpty, ...props }) => {
  const [data, setData] = useState<TimelineItemProps[]>([]);

  useEffect(() => {
    setData(props.items || []);
  }, [props.items]);

  return (
    <Suspense.Sync
      data={data}
      isEmpty={() => data.length === 0}
      firstLoading={firstLoading}
      renderEmpty={renderEmpty}
    >
      <Timeline {...(props || {})} />
    </Suspense.Sync>
  );
};

export default TimelineFormItem;
