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

/** 生成一份新的 Steps 设计默认值（含独立 step id 与子 Flex 容器 id） */
export function createDefaultDesignValueProps(): DesignValueProps {
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
