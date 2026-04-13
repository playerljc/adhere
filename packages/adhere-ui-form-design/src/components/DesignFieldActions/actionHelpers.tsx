import React from 'react';

import { DesignValueProps } from '../../types';
import { DesignFieldActions } from '../index';
import { ACTIONS } from './actions';
import type { DesignFieldAction } from './index';

function isDesignFieldAction(item: DesignFieldAction | null): item is DesignFieldAction {
  return item !== null;
}

/**
 * renderActionsByConfig
 * @description 根据配置创建actions
 * @param id
 * @param fieldActionTypes
 */
export function renderActionsByConfig(
  id: string,
  fieldActionTypes: DesignValueProps['fieldActionTypes'],
) {
  const items =
    fieldActionTypes?.map((type) => createAction(id, type)).filter(isDesignFieldAction) ?? [];

  return <DesignFieldActions items={items} />;
}

export function createAction(id: string, type: string): DesignFieldAction | null {
  return ACTIONS.get(type)?.(id) ?? null;
}
