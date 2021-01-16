import React from 'react';
import { message } from 'antd';

import Intl from '@baifendian/adhere-util-intl';

/**
 * 错误的提示
 * @param text - {string | React.ReactElement}
 */
export default (text: string | React.ReactElement) => {
  message.error(text ? text : Intl.v('系统异常'));
};
