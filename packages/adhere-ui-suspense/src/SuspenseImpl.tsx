import React from 'react';
import type { ReactNode } from 'react';

import SuspenseAsync from './Async';
import Suspense from './Suspense';
import SuspenseSync from './Sync';
import type { SuspenseProps, SuspenseState } from './types';

/**
 * SuspenseImpl
 */
class SuspenseImpl<
  P extends SuspenseProps = SuspenseProps,
  S extends SuspenseState = SuspenseState,
> extends Suspense {
  static displayName = 'SuspenseImpl';

  static Sync = SuspenseSync;
  static ASync = SuspenseAsync;

  constructor(props) {
    super(props);
  }

  fetchData() {
    return Promise.resolve();
  }

  renderInner(): ReactNode {
    return null;
  }

  showLoading() {
    return true;
  }

  onFirstFetchDataAfter(res: any): Promise<any> {
    return Promise.resolve(undefined);
  }

  onFirstFetchDataBefore(): Promise<any> {
    return Promise.resolve(undefined);
  }
}

export default SuspenseImpl;
