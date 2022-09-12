import React from 'react';
import Suspense from './suspense';
import { SuspenseSyncProps, SuspenseSyncState, ISuspenseSync } from './types';
/**
 * SuspenseSync
 * @class
 * @classdesc 传数据
 */
declare class SuspenseSync extends Suspense<SuspenseSyncProps, SuspenseSyncState> implements ISuspenseSync {
    state: {
        loading: boolean;
    };
    isLoading: boolean;
    componentWillReceiveProps(nextProps: any): void;
    reset(): Promise<void>;
    showLoading(): boolean;
    renderInner(): React.ReactElement | null;
    fetchData(): void;
}
export default SuspenseSync;
