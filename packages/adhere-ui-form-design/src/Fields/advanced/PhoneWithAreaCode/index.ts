import { Copy, Delete } from '../../../components/DesignFieldActions/actions';
import type { DesignItem } from '../../../types';
import { TYPE } from './constant';
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
    hasFormProperty: true,
    hasActionsProperty: false,
    hasFlexProperty: false,
    defaultValue: {
      formItemProps: {
        require: false,
        hidden: false,
        noStyle: false,
        valuePropName: 'value',
        validateFirst: false,
        validateTrigger: 'onChange',
      },
      fieldProps: {
        defaultCode: '+86',
        allowClear: true,
        placeholder: {
          zh_CN: '',
          en_US: '',
          ar_EG: '',
          pt_PT: '',
        },
        fill: true,
      },
      fieldActionTypes: [Copy.key, Delete.key],
    },
  };
}

