import classNames from 'classnames';
import React from 'react';
import type { FC } from 'react';

import { ApartmentOutlined, CreditCardOutlined } from '@ant-design/icons';
import { Tabs } from '@baifendian/adhere-ui-anthoc';

import { SELECT_PREFIX } from '../../constant';
import type { ToolboxProps } from '../../types';
import OutlineView from './OutlineView';
import ToolboxView from './ToolboxView';

const selectPrefix = `${SELECT_PREFIX}-design-toolbox`;

/**
 * Toolbox
 */
const Toolbox: FC<ToolboxProps> = ({ toolBox }) => {
  return (
    <div className={classNames(`${selectPrefix}-wrapper`)}>
      <Tabs
        classNames={{
          root: `${selectPrefix}-tabs`,
          header: `${selectPrefix}-tabs-header`,
          content: `${selectPrefix}-tabs-content`,
        }}
        items={[
          {
            key: 'ToolBox',
            label: '',
            icon: <CreditCardOutlined className={`${selectPrefix}-tabs-item-icon`} />,
            children: <ToolboxView toolBox={toolBox} />,
          },
          {
            key: 'Outline',
            label: '',
            icon: <ApartmentOutlined className={`${selectPrefix}-tabs-item-icon`} />,
            children: <OutlineView />,
          },
        ]}
      />
    </div>
  );
};

export default Toolbox;
