import React from 'react';
import { message } from 'antd';

/**
 * 警告的提示
 * @param text - {string | React.ReactElement}
 */
export default (text: string | React.ReactElement) => {
  return message.warn(text);
};
