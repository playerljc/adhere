import type { DesignItem } from '../../../types';
import { TYPE } from './constant';
import { layoutReducerToAdd } from './layoutReducerToAdd';
import { layoutReducerToRemove } from './layoutReducerToRemove';
import { renderActions } from './renderActions';
import { renderActionsToMobile } from './renderActionsToMobile';
import { renderDesign } from './renderDesign';
import { renderDesignToMobile } from './renderDesignToMobile';
import { renderFlexProperty } from './renderFlexProperty';
import { renderMainProperty } from './renderMainProperty';
import { renderStyleProperty } from './renderStyleProperty';

export function define(): DesignItem {
  return {
    type: TYPE,
    renderDesign,
    renderDesignToMobile,
    renderMainProperty,
    renderStyleProperty,
    hasFormProperty: false,
    hasActionsProperty: false,
    hasFlexProperty: true,
    layoutReducerToAdd,
    layoutReducerToRemove,
    renderActions,
    renderActionsToMobile,
    renderFlexProperty,
    defaultValue: {
      fieldProps: {
        layout: 'vertical',
        bordered: false,
        density: 'default',
        mode: 'normal',
        data: [
          {
            name: 'g1',
            width: 'auto',
            columnCount: 2,
            colgroup: ['auto', 'auto'],
            data: [],
          },
        ],
      },
      flexProps: {
        minSize: true,
        scroll: true,
      },
      children: [],
    },
  };
}
