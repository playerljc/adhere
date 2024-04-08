import { AppstoreOutline } from 'antd-mobile-icons';
import React, { useMemo } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import NormalItem from '../NormalItem';

const selectorPrefix = 'adhere-mobile-ui-prsl-toolbar-view-setting-item';

const ViewSettingItem = ({ children }) => {
  const defaultElement = useMemo(
    () => (
      <NormalItem
        key="filter-item"
        className={selectorPrefix}
        icon={<AppstoreOutline />}
        label={Intl.v('视图')}
        onClick={onClick}
      />
    ),
    [children],
  );

  function onClick() {
    console.log('view click');
  }

  return children?.(defaultElement) ?? defaultElement;
};

ViewSettingItem.displayName = 'ViewSettingItem';

export default ViewSettingItem;
