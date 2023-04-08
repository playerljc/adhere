import React, { ReactNode } from 'react';

import ListDensitySetting from '../Extension/ListDensitySetting';
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

    renderTableDensitySetting({ density, onChange, onReset }) {
      return (
        <ListDensitySetting
          density={density}
          onChange={(_density) => {
            this.setState({
              listDensity: _density,
            });
            onChange(_density);
          }}
          onReset={() => {
            const defaultDensity = this.getListDensity();

            this.setState({
              listDensity: defaultDensity,
            });
            onReset(defaultDensity);
          }}
        />
      );
    }
  };
}
