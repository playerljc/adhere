import React from 'react';
import Suspense from './suspense';
import { SuspenseASyncProps, SuspenseASyncState } from './types';
/**
 * SuspenseAsync
 * @class
 * @classdesc 调用接口
 */
declare class SuspenseAsync extends Suspense<SuspenseASyncProps, SuspenseASyncState> {
    state: {
        loading: boolean;
    };
    showLoading(): boolean;
    renderInner(): React.ReactElement | null;
    reset(): Promise<void>;
    fetchData(): Promise<void>;
}
export default SuspenseAsync;
