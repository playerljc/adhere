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
        mode: 'image',
        imageApi: {
          source: {
            type: 'dynamic',
            dynamicConfigId: undefined,
          },
          responseMap: {
            captchaKey: 'captcha',
            tokenKey: 'token',
            dataPath: '',
          },
          refresh: {
            showButton: true,
            autoRefreshOnMount: true,
          },
        },
        sliderCaptcha: {
          mode: 'api',
          components: {},
          requestApi: {
            source: {
              type: 'dynamic',
              dynamicConfigId: undefined,
            },
            responseMap: {
              bgUrlKey: 'bgUrl',
              puzzleUrlKey: 'puzzleUrl',
              dataPath: '',
            },
          },
          verifyApi: {
            source: {
              type: 'dynamic',
              dynamicConfigId: undefined,
            },
            responseMap: {
              tokenKey: 'token',
              dataPath: '',
            },
          },
        },
        fill: true,
      },
      fieldActionTypes: [Copy.key, Delete.key],
    },
  };
}

