import { message } from 'antd';
import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

/**
 * 成功的提示
 * @param text - {string | React.ReactElement}
 */
export default (text: string | React.ReactElement) => {
  return message.success(text ? text : Intl.v('操作成功'));
};
