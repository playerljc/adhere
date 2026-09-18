import React from 'react';
import type { DateFieldDependencyContextValue, DateFieldDependencyProviderProps } from '../types';
export declare function useDateFieldDependency(): DateFieldDependencyContextValue | null;
export declare function DateFieldDependencyProvider({ children, form, getFieldValue: externalGetFieldValue, }: DateFieldDependencyProviderProps): React.JSX.Element;
export type { DateFieldDependencyProviderProps };
