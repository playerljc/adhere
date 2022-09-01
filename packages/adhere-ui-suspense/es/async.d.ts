import React from 'react';
import Suspense from './suspense';
import { ISuspenseASyncProps, ISuspenseASyncState } from './types';
/**
 * SuspenseAsync
 * @class
 * @classdesc 调用接口
 */
declare class SuspenseAsync extends Suspense<ISuspenseASyncProps, ISuspenseASyncState> {
    state: {
        loading: boolean;
    };
    protected showLoading(): boolean;
    protected renderInner(): React.ReactElement | null;
    reset(): Promise<void>;
    fetchData(): Promise<void>;
}
export default SuspenseAsync;
