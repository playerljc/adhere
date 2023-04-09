import React, { FC } from 'react';

import { Mentions } from '@baifendian/adhere-ui-anthoc';

import { MentionsFormItemProps } from '../../types';

/**
 * MentionsFormItem
 * @param props
 * @constructor
 */
const MentionsFormItem: FC<MentionsFormItemProps> = (props) => {
  return <Mentions {...(props || {})} />;
};

export default MentionsFormItem;
