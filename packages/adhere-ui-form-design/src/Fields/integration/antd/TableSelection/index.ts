import Util from '@baifendian/adhere-util';

import { Copy, Delete } from '../../../../components/DesignFieldActions/actions';
import { DEFAULT_PAGING_SETTING } from '../../../../components/PagingSettingFormItem';
import { DEFAULT_TABLE_DATA_SOURCE_JSON } from '../../../../components/TableDataSourceManagerFormItem/constants';
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
    designCanvasInteractive: true,
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
        bordered: true,
        loading: false,
        size: 'middle',
        showHeader: true,
        tableLayout: 'auto',
        rowKey: 'key',
        rowSelectionType: 'checkbox',
        hideSelectAll: false,
        rowSelectionFixed: true,
        showSearch: true,
        searchAllowClear: true,
        searchPlaceholder: defaultI18nTitle('请输入关键字搜索', 'Enter keyword to search'),
        pagination: false,
        paginationSetting: { ...DEFAULT_PAGING_SETTING },
        columnSetting: [
          {
            id: Util.uuid(),
            title: defaultI18nTitle('姓名', 'Name'),
            dataIndex: 'name',
            visible: true,
            align: 'left',
            ellipsis: false,
          },
          {
            id: Util.uuid(),
            title: defaultI18nTitle('年龄', 'Age'),
            dataIndex: 'age',
            visible: true,
            align: 'left',
            ellipsis: false,
          },
        ],
        tableOptions: {
          type: 'static',
          dataSourceJson: DEFAULT_TABLE_DATA_SOURCE_JSON,
        },
      },
      fieldActionTypes: [Copy.key, Delete.key],
    },
  };
}
