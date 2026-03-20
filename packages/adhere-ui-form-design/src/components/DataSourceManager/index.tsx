import React, { type FC, useContext, useState } from 'react';

import { Modal } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../Design/Context';
import { SELECT_PREFIX } from '../../constant';

export interface DataSourceManagerProps {
  defaultOpen?: boolean;
}

const selectorPrefix = `${SELECT_PREFIX}-design-field-data-source-manager`;

const DataSourceManager: FC<DataSourceManagerProps> = ({ defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  const { getDesignValue } = useContext(DesignContext);

  const designValue = getDesignValue();

  return (
    <Modal open={open} title={Intl.get('data_source_manager')}>
      <div className={selectorPrefix}>
        <div className={`${selectorPrefix}-menus`}></div>

        <div className={`${selectorPrefix}-info`}></div>
      </div>
    </Modal>
  );
};

export default DataSourceManager;
