import React from 'react';

import CascaderFormItem from '../CascaderFormItem';

/**
 * CascaderMulitFormItem
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
function CascaderMulitFormItem(props) {
  return <CascaderFormItem {...props} multiple maxTagCount="responsive" />;
}

export default CascaderMulitFormItem;
