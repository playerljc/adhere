import { Copy, Delete } from '../../../../components/DesignFieldActions/actions';
import type { DesignItem } from '../../../../types';
import { TYPE } from './constant';
import { renderActions } from './renderActions';
import { renderActionsProperty } from './renderActionsProperty';
import { renderActionsToMobile } from './renderActionsToMobile';
import { renderDesign, renderDesignToMobile } from './renderDesign';
import { renderMainProperty } from './renderMainProperty';
import { renderStyleProperty } from './renderStyleProperty';

export function define(): DesignItem {
  return {
    type: TYPE,
    renderDesign,
    renderDesignToMobile,
    renderMainProperty,
    renderStyleProperty,
    renderActions,
    renderActionsProperty,
    renderActionsToMobile,
    hasActionsProperty: true,
    hasFormProperty: false,
    hasFlexProperty: false,
    defaultValue: {
      formItemProps: {
        noStyle: true,
      },
      fieldProps: {
        children: {
          selectValue: 'zh_CN',
          zh_CN: '分割线',
          en_US: 'Divider',
        },
        orientation: 'horizontal',
        vertical: false,
        dashed: false,
        plain: false,
        titlePlacement: 'center',
        variant: 'solid',
        size: 'medium',
        fill: true,
      },
      fieldActionTypes: [Copy.key, Delete.key],
    },
  };
}

