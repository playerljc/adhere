import { useUpdateEffect } from 'ahooks';
import classNames from 'classnames';
import React, { useContext, useMemo, useState } from 'react';
import type { FC } from 'react';

import { Tabs } from '@baifendian/adhere-ui-anthoc';
import Intl from '@baifendian/adhere-util-intl';

import { SELECT_PREFIX } from '../../constant';
import type { PropertiesProps } from '../../types';
import { DesignContext } from '../Context';
import ActionsTab from './ActionsTab';
import FormTab from './FormTab';
import PropertiesTab from './PropertiesTab';
import StyleTab from './StyleTab';

const selectPrefix = `${SELECT_PREFIX}-design-properties`;

/**
 * Properties
 */
const Properties: FC<PropertiesProps> = () => {
  const { getActiveFieldId, getActiveDesignFieldValue, getItems } = useContext(DesignContext);

  const activeFieldId = getActiveFieldId();
  const activeDesignFieldValue = getActiveDesignFieldValue();
  const items = getItems();

  const item = useMemo(() => {
    if (!!activeDesignFieldValue) {
      return items.find((_item) => _item.type === activeDesignFieldValue.type);
    }

    return null;
  }, [items, activeDesignFieldValue]);

  const tabItems = useMemo(() => {
    return [
      // 控件表单属性修改面板
      ...(item?.hasFormProperty
        ? [
            {
              key: 'FormPropertyTab',
              label: Intl.get('form'),
              children: <FormTab />,
            },
          ]
        : []),
      // 控件属性修改面板
      {
        key: 'PropertiesTab',
        label: Intl.get('main'),
        children: <PropertiesTab />,
      },
      // 控件样式修改面板
      {
        key: 'StyleTab',
        label: Intl.get('style'),
        children: <StyleTab />,
      },
      // 控件事件属性修改面板
      ...(item?.hasActionsProperty
        ? [
            {
              key: 'ActionsPropertyTab',
              label: Intl.get('actions'),
              children: <ActionsTab />,
            },
          ]
        : []),
    ];
  }, [activeFieldId, activeDesignFieldValue, item]);

  const [activeTab, setActiveTab] = useState(tabItems[0].key);

  useUpdateEffect(() => {
    setActiveTab(tabItems[0].key);
  }, [tabItems]);

  return (
    <div className={classNames(selectPrefix)}>
      {!activeFieldId && (
        <div className={classNames(`${selectPrefix}-no-selected`)}>
          {Intl.get('select_field_to_edit_properties')}
        </div>
      )}

      {!!activeFieldId && !!activeDesignFieldValue && !!item && (
        <Tabs
          activeKey={activeTab}
          className={classNames(`${selectPrefix}-tabs`)}
          items={tabItems}
          onChange={setActiveTab}
        />
      )}
    </div>
  );
};

export default Properties;
