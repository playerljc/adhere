import Util from '@baifendian/adhere-util';

import type { DesignItem } from '../../../types';
import { TYPE } from './constant';
import { layoutReducerToAdd } from './layoutReducerToAdd';
import { layoutReducerToRemove } from './layoutReducerToRemove';
import { renderActions } from './renderActions';
import { renderActionsProperty } from './renderActionsProperty';
import { renderActionsToMobile } from './renderActionsToMobile';
import { renderDesign } from './renderDesign';
import { renderDesignToMobile } from './renderDesignToMobile';
import { renderFlexProperty } from './renderFlexProperty';
import { renderMainProperty } from './renderMainProperty';
import { renderStyleProperty } from './renderStyleProperty';

export function define(): DesignItem {
  const panel1Id = Util.uuid();
  const panel2Id = Util.uuid();
  const panel3Id = Util.uuid();

  const panelItems = [
    {
      id: panel1Id,
      key: '1',
      label: {
        selectValue: 'zh_CN',
        zh_CN: '面板1',
        en_US: 'Panel 1',
        pt_PT: 'Painel 1',
        ar_EG: 'لوحة 1',
      },
      forceRender: false,
      destroyOnHidden: false,
      showArrow: true,
    },
    {
      id: panel2Id,
      key: '2',
      label: {
        selectValue: 'zh_CN',
        zh_CN: '面板2',
        en_US: 'Panel 2',
        pt_PT: 'Painel 2',
        ar_EG: 'لوحة 2',
      },
      forceRender: false,
      destroyOnHidden: false,
      showArrow: true,
    },
    {
      id: panel3Id,
      key: '3',
      label: {
        selectValue: 'zh_CN',
        zh_CN: '面板3',
        en_US: 'Panel 3',
        pt_PT: 'Painel 3',
        ar_EG: 'لوحة 3',
      },
      forceRender: false,
      destroyOnHidden: false,
      showArrow: true,
    },
  ];

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
    layoutReducerToAdd,
    layoutReducerToRemove,
    renderActions,
    renderActionsToMobile,
    defaultValue: {
      fieldProps: {
        panelItems,
        defaultActiveKey: ['1'],
        accordion: false,
        bordered: true,
        ghost: false,
        size: 'medium',
        expandIconPlacement: 'start',
        destroyOnHidden: false,
      },
      flexProps: {
        minSize: true,
        scroll: true,
      },
      children: panelItems.map(() => []),
    },
  };
}
