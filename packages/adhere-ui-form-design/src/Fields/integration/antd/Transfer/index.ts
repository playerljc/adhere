import { Copy, Delete } from '../../../../components/DesignFieldActions/actions';
import type { DesignItem } from '../../../../types';
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
        valuePropName: 'targetKeys',
        getValueFromEvent: (nextTargetKeys: string[]) => nextTargetKeys,
        validateFirst: false,
        validateTrigger: 'onChange',
        initialValue: [],
      },
      fieldProps: {
        disabled: false,
        showSearch: false,
        oneWay: false,
        pagination: false,
        showSelectAll: true,
        leftTitle: undefined,
        rightTitle: undefined,
        leftOperation: undefined,
        rightOperation: undefined,
        transferOptions: {
          type: 'static',
          dataSource: [
            {
              key: '1',
              title: { key: 'zh_CN', zh_CN: '选项 1', en_US: 'Option 1', pt_PT: 'Opção 1', ar_EG: 'الخيار 1' },
              description: { key: 'zh_CN', zh_CN: '选项 1 描述', en_US: 'Description of Option 1', pt_PT: 'Descrição da Opção 1', ar_EG: 'وصف الخيار 1' },
              disabled: false,
            },
            {
              key: '2',
              title: { key: 'zh_CN', zh_CN: '选项 2', en_US: 'Option 2', pt_PT: 'Opção 2', ar_EG: 'الخيار 2' },
              description: { key: 'zh_CN', zh_CN: '选项 2 描述', en_US: 'Description of Option 2', pt_PT: 'Descrição da Opção 2', ar_EG: 'وصف الخيار 2' },
              disabled: false,
            },
            {
              key: '3',
              title: { key: 'zh_CN', zh_CN: '选项 3', en_US: 'Option 3', pt_PT: 'Opção 3', ar_EG: 'الخيار 3' },
              description: { key: 'zh_CN', zh_CN: '选项 3 描述', en_US: 'Description of Option 3', pt_PT: 'Descrição da Opção 3', ar_EG: 'وصف الخيار 3' },
              disabled: false,
            },
          ],
        },
      },
      fieldActionTypes: [Copy.key, Delete.key],
    },
  };
}
