import Util from '@baifendian/adhere-util';

import type { DesignItem, DesignValueProps } from '../../../types';
import { createFlexLayoutDesignValue } from '../FlexLayout';
import { TYPE } from './constant';
import { renderActions } from './renderActions';
import { renderActionsProperty } from './renderActionsProperty';
import { renderActionsToMobile } from './renderActionsToMobile';
import { renderDesign } from './renderDesign';
import { renderDesignToMobile } from './renderDesignToMobile';
import { renderFlexProperty } from './renderFlexProperty';
import { renderMainProperty } from './renderMainProperty';
import { renderStyleProperty } from './renderStyleProperty';

/** 生成一份新的 Tabs 设计默认值（含独立 tab id 与子 Flex 容器 id） */
export function createDefaultDesignValueProps(): DesignValueProps {
  const tab1Id = Util.uuid();
  const tab2Id = Util.uuid();
  const tab3Id = Util.uuid();

  const tabItems = [
    {
      id: tab1Id,
      key: '1',
      label: {
        selectValue: 'zh_CN',
        zh_CN: '标签页1',
        en_US: 'Tab 1',
        pt_PT: 'Separador 1',
        ar_EG: 'علامة تبويب 1',
      },
      closable: true,
    },
    {
      id: tab2Id,
      key: '2',
      label: {
        selectValue: 'zh_CN',
        zh_CN: '标签页2',
        en_US: 'Tab 2',
        pt_PT: 'Separador 2',
        ar_EG: 'علامة تبويب 2',
      },
      closable: true,
    },
    {
      id: tab3Id,
      key: '3',
      label: {
        selectValue: 'zh_CN',
        zh_CN: '标签页3',
        en_US: 'Tab 3',
        pt_PT: 'Separador 3',
        ar_EG: 'علامة تبويب 3',
      },
      closable: true,
    },
  ];

  return {
    fieldProps: {
      tabItems,
      defaultActiveKey: tabItems[0].key,
      type: 'line',
      size: 'middle',
      tabPlacement: 'top',
      centered: false,
    },
    flexProps: {
      minSize: true,
      scroll: true,
    },
    children: tabItems.map(() => createFlexLayoutDesignValue()),
  };
}

export function define(): DesignItem {
  return {
    type: TYPE,
    renderDesign,
    renderDesignToMobile,
    renderMainProperty,
    renderStyleProperty,
    renderFlexProperty,
    renderActionsProperty,
    hasFormProperty: false,
    hasActionsProperty: true,
    hasFlexProperty: true,
    renderActions,
    renderActionsToMobile,
    createDefaultValue: createDefaultDesignValueProps,
    defaultValue: createDefaultDesignValueProps(),
  };
}
