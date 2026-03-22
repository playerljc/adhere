import type { DesignItem } from '../../../../types';
import { TYPE } from './constant';
import { renderActions } from './renderActions';
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
    renderActionsToMobile,
    hasFormProperty: false,
    hasActionsProperty: false,
    hasFlexProperty: false,
    defaultValue: {
      formItemProps: {
        noStyle: true,
        fill: true,
      },
      fieldProps: {
        children: 'Text',
        type: 'secondary',
        strong: false,
        underline: false,
        delete: false,
        disabled: false,
        ellipsis: false,
      },
    },
  };
}
