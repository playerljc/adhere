import { Copy, Delete } from '../../../../components/DesignFieldActions/actions';
import type { DesignItem } from '../../../../types';
import { TYPE } from './constant';
import { renderActions } from './renderActions';
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
    renderActions,
    renderActionsToMobile,
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
        initialValue: '',
      },
      fieldProps: {
        value: '',
        penColor: '#000000',
        backgroundColor: '#ffffff',
        mode: 'free',
        lineWidth: 2,
        canvasWidth: 300,
        canvasHeight: 200,
        clearOnResize: false,
        fill: true,
      },
      fieldActionTypes: [Copy.key, Delete.key],
    },
  };
}
