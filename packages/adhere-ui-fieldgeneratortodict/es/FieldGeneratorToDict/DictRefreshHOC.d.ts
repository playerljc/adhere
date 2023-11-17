import React from 'react';
import { DictRefreshWrapperFunction } from '../types';
/**
 * DictRefreshHOC
 * @param FieldComponent
 * @constructor
 */
declare function DictRefreshHOC<P>(FieldComponent: any): React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<DictRefreshWrapperFunction>>;
export default DictRefreshHOC;
