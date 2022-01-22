import React from 'react';
/**
 * IConditionalRenderProps
 * @interface IConditionalRenderProps
 */
export interface IConditionalRenderProps {
    conditional: boolean;
    noMatch?: React.ReactElement | null;
    children?: any;
}
