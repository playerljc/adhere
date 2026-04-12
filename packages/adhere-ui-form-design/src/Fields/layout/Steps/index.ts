import Util from '@baifendian/adhere-util';

import type { DesignItem } from '../../../types';
import { createFlexLayoutDesignValue } from '../FlexLayout';
import { TYPE } from './constant';
import { isDrop } from './isDrop';
import { renderActions } from './renderActions';
import { renderActionsProperty } from './renderActionsProperty';
import { renderActionsToMobile } from './renderActionsToMobile';
import { renderDesign } from './renderDesign';
import { renderDesignToMobile } from './renderDesignToMobile';
import { renderFlexProperty } from './renderFlexProperty';
import { renderMainProperty } from './renderMainProperty';
import { renderStyleProperty } from './renderStyleProperty';

export function define(): DesignItem {
  const s1Id = Util.uuid();
  const s2Id = Util.uuid();
  const s3Id = Util.uuid();

  const stepItems = [
    {
      id: s1Id,
      title: {
        selectValue: 'zh_CN',
        zh_CN: '步骤 1',
        en_US: 'Step 1',
        pt_PT: 'Passo 1',
        ar_EG: 'الخطوة 1',
      },
    },
    {
      id: s2Id,
      title: {
        selectValue: 'zh_CN',
        zh_CN: '步骤 2',
        en_US: 'Step 2',
        pt_PT: 'Passo 2',
        ar_EG: 'الخطوة 2',
      },
    },
    {
      id: s3Id,
      title: {
        selectValue: 'zh_CN',
        zh_CN: '步骤 3',
        en_US: 'Step 3',
        pt_PT: 'Passo 3',
        ar_EG: 'الخطوة 3',
      },
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
    renderActions,
    renderActionsToMobile,
    isDrop,
    defaultValue: {
      fieldProps: {
        stepItems,
        current: 0,
        initial: 0,
        direction: 'top',
        type: 'default',
        size: 'default',
        itemRenderMode: 'lazy',
        itemLayoutMode: 'surplus',
        isFullWidth: true,
        isFullHeight: true,
        titlePlacement: 'horizontal',
      },
      flexProps: {
        minSize: true,
        scroll: true,
      },
      children: stepItems.map(() => createFlexLayoutDesignValue()),
    },
  };
}
