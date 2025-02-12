import { Checkbox } from 'antd-mobile';
import React, { useContext } from 'react';

import Space from '@baifendian/adhere-ui-space';
import Intl from '@baifendian/adhere-util-intl';

import Context from '../Context';

const selectorPrefix = 'adhere-mobile-ui-prsl-selection';

const CheckAllManage = () => {
  const { getOptionSelectedRowKeys, getDatasourceLength, selectionAllChange } = useContext(Context);

  const optionSelectedRowKeys = getOptionSelectedRowKeys();

  const dataSourceLength = getDatasourceLength();

  const isCheckAll = optionSelectedRowKeys.length === dataSourceLength;

  return (
    <div className={`${selectorPrefix}-check-all`}>
      <div className={`${selectorPrefix}-check-box`}>
        <Space.Group direction="horizontal" size={5}>
          <Checkbox checked={isCheckAll} onChange={selectionAllChange} />
          <span>{Intl.v('全选')}</span>
        </Space.Group>
      </div>

      <div className={`${selectorPrefix}-total`}>
        {Intl.vHtml('共 <em>{n}</em> 条', { n: optionSelectedRowKeys.length })}
      </div>
    </div>
  );
};

export default CheckAllManage;
