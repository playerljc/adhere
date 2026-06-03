import { Copy, Delete } from '../../../../components/DesignFieldActions/actions';
import { SELECT_VALUE_KEY_NAME } from '../../../../constant';
import type { DesignItem } from '../../../../types';
import { RICH_EDITOR_EMPTY_VALIDATOR_CODE } from '../../../../utils';
import { TYPE } from './constant';
import { renderActions } from './renderActions';
import { renderActionsProperty } from './renderActionsProperty';
import { renderActionsToMobile } from './renderActionsToMobile';
import { renderDesign } from './renderDesign';
import { renderDesignToMobile } from './renderDesignToMobile';
import { renderFormProperty } from './renderFormProperty';
import { renderMainProperty } from './renderMainProperty';
import { renderStyleProperty } from './renderStyleProperty';

const defaultRequiredMessage = {
  zh_CN: '请输入富文本内容',
  en_US: 'Rich text content is required',
  pt_PT: 'O conteúdo de texto rico é obrigatório',
  ar_EG: 'محتوى النص الغني مطلوب',
  [SELECT_VALUE_KEY_NAME]: 'zh_CN',
};

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
        require: true,
        hidden: false,
        noStyle: false,
        valuePropName: 'value',
        validateFirst: false,
        validateTrigger: 'onChange',
        rules: [
          {
            type: 'custom',
            config: {
              validator: RICH_EDITOR_EMPTY_VALIDATOR_CODE,
              message: defaultRequiredMessage,
            },
          },
        ],
      },
      fieldProps: {
        readOnly: false,
        disabled: false,
        bordered: true,
        placeholder: {
          zh_CN: '',
          en_US: '',
          pt_PT: '',
          ar_EG: '',
          [SELECT_VALUE_KEY_NAME]: 'zh_CN',
        },
        minHeight: 300,
        height: 360,
        gap: 60,
        direction: 'ltr',
        toolbarPreset: 'basic',
        fill: true,
      },
      fieldActionTypes: [Copy.key, Delete.key],
    },
  };
}
