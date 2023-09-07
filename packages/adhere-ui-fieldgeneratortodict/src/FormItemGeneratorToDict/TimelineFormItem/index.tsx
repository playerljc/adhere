import type { TimelineItemProps } from 'antd/lib/timeline/TimelineItem';
import React, { FC, useEffect, useState } from 'react';

import { Timeline } from '@baifendian/adhere-ui-anthoc';
import Suspense from '@baifendian/adhere-ui-suspense';

import { TimelineFormItemProps } from '../../types';

/**
 * TimelineFormItem
 * @param firstLoading
 * @param isEmpty
 * @param renderEmpty
 * @param renderNormalLoading
 * @param props
 * @constructor
 */
const TimelineFormItem: FC<TimelineFormItemProps> = ({
  firstLoading,
  isEmpty,
  renderEmpty,
  renderNormalLoading,
  ...props
}) => {
  const [data, setData] = useState<TimelineItemProps[]>([]);

  useEffect(() => {
    setData(props.items || []);
  }, [props.items]);

  return (
    <Suspense.Sync
      data={data}
      isEmpty={() => (isEmpty ? isEmpty?.(data) : data.length === 0)}
      firstLoading={firstLoading}
      renderEmpty={renderEmpty ? renderEmpty(data) : <Timeline />}
      renderNormalLoading={renderNormalLoading}
    >
      <Timeline {...(props ?? {})} />
    </Suspense.Sync>
  );
};

export default TimelineFormItem;
