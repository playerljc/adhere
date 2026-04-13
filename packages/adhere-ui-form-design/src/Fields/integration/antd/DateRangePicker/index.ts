import { Copy, Delete } from '../../../../components/DesignFieldActions/actions';
import type { DesignItem, FormItemProps } from '../../../../types';
import { TYPE } from './constant';
import { renderActions } from './renderActions';
import { renderActionsProperty } from './renderActionsProperty';
import { renderActionsToMobile } from './renderActionsToMobile';
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
    renderActions,
    renderActionsToMobile,
    hasFormProperty: true,
    hasActionsProperty: true,
    hasFlexProperty: false,
    defaultValue: {
      formItemProps: {
        require: false,
        hidden: false,
        noStyle: false,
        valuePropName: 'value',
        validateFirst: false,
        validateTrigger: 'onChange',
        value: undefined as [string, string] | undefined,
      } as FormItemProps & { value?: [string, string] },
      fieldProps: {
        format: 'YYYY-MM-DD',
        allowClear: true,
        disabled: false,
        showTime: false,
        allowEmpty: [true, true] as [boolean, boolean],
        fill: true,
      },
      fieldActionTypes: [Copy.key, Delete.key],
    },
  };
}
