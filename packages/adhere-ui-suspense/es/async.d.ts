import React from 'react';
import Suspense from './Suspense';
import type { SuspenseASyncProps, SuspenseASyncState } from './types';
/**
 * SuspenseAsync
 * @class
 * @classdesc 调用接口
 */
declare class SuspenseAsync extends Suspense<SuspenseASyncProps, SuspenseASyncState> {
    static displayName: string;
    state: {
        loading: boolean;
    };
    showLoading(): boolean;
    renderInner(): React.ReactNode;
    reset(): Promise<any>;
    fetchData(): Promise<any>;
}
export default SuspenseAsync;
