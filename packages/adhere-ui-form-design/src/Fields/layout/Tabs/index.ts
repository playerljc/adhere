import Util from '@baifendian/adhere-util';

import type { DesignItem } from '../../../types';
import { TYPE } from './constant';
import { layoutReducerToAdd } from './layoutReducerToAdd';
import { layoutReducerToRemove } from './layoutReducerToRemove';
import { renderActions } from './renderActions';
import { renderActionsToMobile } from './renderActionsToMobile';
import { renderDesign } from './renderDesign';
import { renderDesignToMobile } from './renderDesignToMobile';
import { renderFlexProperty } from './renderFlexProperty';
import { renderMainProperty } from './renderMainProperty';
import { renderStyleProperty } from './renderStyleProperty';

export function define(): DesignItem {
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
    type: TYPE,
    renderDesign,
    renderDesignToMobile,
    renderMainProperty,
    renderStyleProperty,
    renderFlexProperty,
    hasFormProperty: false,
    hasActionsProperty: false,
    hasFlexProperty: true,
    layoutReducerToAdd,
    layoutReducerToRemove,
    renderActions,
    renderActionsToMobile,
    defaultValue: {
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
      children: tabItems.map(() => []),
    },
  };
}
