import React from 'react';
import Suspense from './Suspense';
import type { ISuspenseSync, SuspenseSyncProps, SuspenseSyncState } from './types';
/**
 * SuspenseSync
 * @class
 * @classdesc 传数据
 */
declare class SuspenseSync extends Suspense<SuspenseSyncProps, SuspenseSyncState> implements ISuspenseSync {
    static displayName: string;
    state: {
        loading: boolean;
    };
    isLoading: boolean;
    componentWillReceiveProps(nextProps: any): void;
    isDataDirty(data: any, nextData: any): boolean;
    reset(): Promise<void>;
    showLoading(): boolean;
    renderInner(): React.ReactElement | null;
    fetchData(): Promise<any>;
}
export default SuspenseSync;
