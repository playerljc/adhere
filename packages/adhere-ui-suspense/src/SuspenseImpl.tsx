import React from 'react';

import SuspenseAsync from './Async';
import Suspense from './Suspense';
import SuspenseSync from './Sync';
import { SuspenseProps, SuspenseState } from './types';

/**
 * SuspenseImpl
 */
class SuspenseImpl<
  P extends SuspenseProps = SuspenseProps,
  S extends SuspenseState = SuspenseState,
> extends Suspense {
  static Sync = SuspenseSync;
  static ASync = SuspenseAsync;

  constructor(props) {
    super(props);
  }

  fetchData(): void {}

  renderInner() {
    return null;
  }

  showLoading() {
    return true;
  }
}

export default SuspenseImpl;
