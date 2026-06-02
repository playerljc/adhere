import React from 'react';
import type { ElementType } from 'react';
import type { DesignValue } from '../types';
export declare function createSimpleFieldRenderDesign(Component: ElementType): ({ parentId, value }: {
    parentId?: string;
    value: DesignValue;
}) => React.JSX.Element;
