import React, { ReactNode } from 'react';

import ViewFactory from './ViewFactory';

/**
 * GridViewFactory
 * @param SuperClass
 */
export default function <P, S>(SuperClass) {
  return class extends ViewFactory<P, S>(SuperClass) {
    renderCard(params): ReactNode {
      const { context } = this.props;

      return context?.renderGridViewCard.call?.(this, params);
    }
  };
}
