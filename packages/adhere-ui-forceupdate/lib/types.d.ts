import React from 'react';
/**
 * IForceUpdateStates
 * @interface IForceUpdateStates
 */
export interface IForceUpdateStates {
    count: number;
    renderDOM: React.ReactNode | null;
}
/**
 * ITemplateProps
 * @interface IForceUpdateProps
 */
export interface IForceUpdateProps<T> {
    forceUpdateCount: number;
}
