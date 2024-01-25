import type { ReactNode } from 'react';
import SuspenseAsync from './Async';
import Suspense from './Suspense';
import SuspenseSync from './Sync';
import type { SuspenseProps, SuspenseState } from './types';
/**
 * SuspenseImpl
 */
declare class SuspenseImpl<P extends SuspenseProps = SuspenseProps, S extends SuspenseState = SuspenseState> extends Suspense {
    static displayName: string;
    static Sync: typeof SuspenseSync;
    static ASync: typeof SuspenseAsync;
    constructor(props: any);
    fetchData(): Promise<void>;
    renderInner(): ReactNode;
    showLoading(): boolean;
}
export default SuspenseImpl;
