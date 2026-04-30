import { Copy, Delete } from '../../../components/DesignFieldActions/actions';
import type { DesignItem } from '../../../types';
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
      },
      fieldProps: {
        // 手机号（PhoneWithAreaCode）
        defaultCode: '+86',
        areaCodeOptionsSource: {
          type: 'static',
          areaCodeJson: '',
        },
        phonePlaceholder: '',
        allowClear: true,
        // 验证码
        placeholder: '',
        disabled: false,
        readOnly: false,
        countdownSeconds: 60,
        sendApi: {
          source: {
            type: 'dynamic',
            dynamicConfigId: undefined,
          },
          responseMap: {
            dataPath: '',
          },
          requestData: {},
        },
        fill: true,
      },
      actionsProps: {
        actions: [],
        codeInputActions: [],
        sendButtonActions: [],
        countdownActions: [],
        // PhoneWithAreaCode events
        areaCodeActions: [],
        phoneInputActions: [],
      },
      fieldActionTypes: [Copy.key, Delete.key],
    },
  };
}

