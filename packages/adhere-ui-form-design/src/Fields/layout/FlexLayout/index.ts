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
    renderFlexProperty,
    hasFormProperty: false,
    hasActionsProperty: false,
    hasFlexProperty: true,
    layoutReducerToAdd,
    layoutReducerToRemove,
    renderActions,
    renderActionsToMobile,
    defaultValue: {
      fieldProps: {
        direction: 'vertical',
        wrap: false,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'normal',
        gap: 8,
      },
      flexProps: {
        minSize: true,
        scroll: true,
      },
    },
  };
}
