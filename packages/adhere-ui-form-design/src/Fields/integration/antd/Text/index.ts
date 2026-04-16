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
        children: 'Text',
        type: 'secondary',
        strong: false,
        underline: false,
        delete: false,
        disabled: false,
        ellipsis: false,
        fill: true,
      },
      fieldActionTypes: [Copy.key, Delete.key],
    },
  };
}
