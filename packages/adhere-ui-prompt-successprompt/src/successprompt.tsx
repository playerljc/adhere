import React from 'react';
import { message } from 'antd';

import Intl from '@baifendian/adhere-util-intl';

/**
 * 成功的提示
 * @param text - {string | React.ReactElement}
 */
export default (text: string | React.ReactElement) => {
  message.success(text ? text : Intl.v('操作成功'));
};
