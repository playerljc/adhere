import React from 'react';
import { DesignValueProps } from '../../types';
import type { DesignFieldAction } from './index';
/**
 * renderActionsByConfig
 * @description 根据配置创建actions
 * @param id
 * @param fieldActionTypes
 */
export declare function renderActionsByConfig(id: string, fieldActionTypes: DesignValueProps['fieldActionTypes']): React.JSX.Element;
export declare function createAction(id: string, type: string): DesignFieldAction | null;
