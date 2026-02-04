import type { DesignItem } from '../../../types';
import { TYPE } from './constant';
import { layoutReducerToAdd } from './layoutReducerToAdd';
import { layoutReducerToRemove } from './layoutReducerToRemove';
import { renderActions } from './renderActions';
import { renderActionsToMobile } from './renderActionsToMobile';
import { renderDesign } from './renderDesign';
import { renderDesignToMobile } from './renderDesignToMobile';
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
    layoutReducerToAdd,
    layoutReducerToRemove,
    renderActions,
    renderActionsToMobile,
    defaultValue: {
      fieldProps: {
        layout: 'vertical',
        bordered: false,
        density: 'default',
        mode: 'normal',
        columnCount: 2,
        data: [
          {
            name: 'g1',
            width: '100%',
            columnCount: 2,
            colgroup: ['auto', 'auto'],
            data: [],
          },
        ],
      },
      children: [],
    },
  };
}
