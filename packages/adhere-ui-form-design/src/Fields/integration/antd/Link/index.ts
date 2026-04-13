import { Copy, Delete } from '../../../../components/DesignFieldActions/actions';
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
      },
      fieldProps: {
        children: 'Link',
        href: '',
        target: '_blank',
        disabled: false,
        fill: true,
      },
      fieldActionTypes: [Copy.key, Delete.key],
    },
  };
}
