import { message } from 'antd';
import React from 'react';

import Intl from '@baifendian/adhere-util-intl';

/**
 * 错误的提示
 * @param text - {string | React.ReactElement}
 */
export default (text: string | React.ReactElement) => {
  return message.error(text ? text : Intl.v('系统异常'));
};
