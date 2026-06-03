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
        value: [] as Array<any>,
      } as FormItemProps & { value?: Array<any> },
      fieldProps: {
        disabled: false,
        accept: 'image/*',
        multiple: true,
        maxCount: undefined,
        listType: 'picture-card',
        showUploadList: true,
        // 与 FileUpload 保持一致的数据源配置
        uploadDataSource: {
          type: 'dynamic',
          dynamicConfigId: undefined,
        },
        // 裁剪配置
        cropEnabled: true,
        cropShape: 'rect', // rect | circle | triangle | diamond
        cropAspect: undefined, // number | undefined
        cropAllowFlip: true,
        fill: true,
      },
      fieldActionTypes: [Copy.key, Delete.key],
    },
  };
}

