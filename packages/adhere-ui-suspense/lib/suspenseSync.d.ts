import Suspense from './suspense';
import { ISuspenseSync, ISuspenseSyncProps, ISuspenseSyncState } from './types';
import React from 'react';
/**
 * SuspenseSync
 * @class
 * @classdesc 传数据
 */
declare class SuspenseSync extends Suspense<ISuspenseSyncProps, ISuspenseSyncState> implements ISuspenseSync {
    state: {
        loading: boolean;
    };
    isLoading: boolean;
    protected componentWillReceiveProps(nextProps: any): void;
    reset(): Promise<void>;
    protected showLoading(): boolean;
    protected renderInner(): React.ReactElement | null;
    protected fetchData(): void;
}
export default SuspenseSync;
