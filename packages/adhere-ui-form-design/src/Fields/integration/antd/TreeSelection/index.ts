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

const defaultI18nTitle = (zh: string, en: string) => ({
  selectValue: 'zh_CN',
  zh_CN: zh,
  en_US: en,
  pt_PT: en,
  ar_EG: en,
});

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
        initialValue: [],
      },
      fieldProps: {
        checkable: true,
        checkStrictly: false,
        defaultExpandAll: false,
        autoExpandParent: true,
        blockNode: false,
        selectable: true,
        multiple: false,
        treeLine: false,
        virtual: true,
        draggable: false,
        disabled: false,
        height: undefined,
        contentMaxHeight: 320,
        showSearch: true,
        searchAllowClear: true,
        searchPlaceholder: defaultI18nTitle('请输入关键字搜索', 'Enter keyword to search'),
        treeOptions: {
          type: 'static',
          treeDataJson: undefined,
        },
      },
      fieldActionTypes: [Copy.key, Delete.key],
    },
  };
}
