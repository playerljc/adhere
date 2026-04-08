import type { ElementType } from 'react';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import type { DesignContextType, DesignValue } from '../types';
export declare function createSimpleFieldRenderDesign(Component: ElementType): ({ parentId, value, context, }: {
    parentId?: string;
    value: DesignValue;
    context: DesignContextType;
}) => DataItemRow;
