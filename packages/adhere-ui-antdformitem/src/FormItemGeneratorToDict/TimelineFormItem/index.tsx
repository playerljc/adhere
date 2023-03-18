import React, { FC } from 'react';

import { Timeline } from '../../AntFormItemNormalize';
import { TimelineFormItemProps } from '../../types';

/**
 * TimelineFormItem
 * @param props
 * @constructor
 */
const TimelineFormItem: FC<TimelineFormItemProps> = (props) => {
  return <Timeline {...(props || {})} />;
};

export default TimelineFormItem;
