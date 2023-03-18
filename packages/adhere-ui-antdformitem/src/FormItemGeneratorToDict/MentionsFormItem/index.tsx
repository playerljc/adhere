import React, { FC } from 'react';

import { Mentions } from '../../AntFormItemNormalize';
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
