import { Copy, Delete } from '../../../../components/DesignFieldActions/actions';
import type { DesignItem } from '../../../../types';
import { TYPE } from './constant';
import { renderActions } from './renderActions';
import { renderActionsProperty } from './renderActionsProperty';
import { renderActionsToMobile } from './renderActionsToMobile';
import { renderDesign } from './renderDesign';
import { renderDesignToMobile } from './renderDesignToMobile';
import { renderMainProperty } from './renderMainProperty';
import { renderStyleProperty } from './renderStyleProperty';

export function define(): DesignItem {
  return {
    type: TYPE,
    renderDesign,
    renderDesignToMobile,
    renderMainProperty,
    renderStyleProperty,
    renderActionsProperty,
    renderActions,
    renderActionsToMobile,
    hasFormProperty: false,
    hasActionsProperty: true,
    hasFlexProperty: false,
    defaultValue: {
      formItemProps: {
        noStyle: true,
      },
      fieldProps: {
        children: 'Button',
        type: 'primary',
        shape: 'default',
        size: 'middle',
        htmlType: 'button',
        ghost: false,
        danger: false,
        loading: false,
        disabled: false,
        block: false,
        fill: true,
      },
      fieldActionTypes: [Copy.key, Delete.key],
    },
  };
}
