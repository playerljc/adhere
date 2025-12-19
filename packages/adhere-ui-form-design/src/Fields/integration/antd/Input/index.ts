import type { DesignItem } from '../../../../types';
import { TYPE } from './constant';
import { renderActionsProperty } from './renderActionsProperty';
import { renderDesign } from './renderDesign';
import { renderDesignToMobile } from './renderDesignToMobile';
import { renderFormProperty } from './renderFormProperty';
import { renderMainProperty } from './renderMainProperty';
import { renderStyleProperty } from './renderStyleProperty';

export function define(): DesignItem {
  return {
    type: TYPE,
    renderDesign,
    renderDesignToMobile,
    renderFormProperty,
    renderMainProperty,
    renderStyleProperty,
    renderActionsProperty,
    hasFormProperty: true,
    hasActionsProperty: true,
    defaultValue: {
      formItemProps: {
        hidden: false,
        noStyle: false,
        valuePropName: 'value',
        validateFirst: false,
        validateTrigger: 'onChange',
      },
      fieldProps: {
        readOnly: true,
        type: 'text',
        allowClear: true,
        disabled: false,
        showCount: false,
        size: 'middle',
      },
    },
  };
}
