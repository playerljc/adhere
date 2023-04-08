import classNames from 'classnames';
import React, { ReactNode } from 'react';

import ContourBlock from '@baifendian/adhere-ui-contourblock';
import Dict from '@baifendian/adhere-util-dict';

import { selectorPrefix } from './ProResourceManagerFactory';
import ViewFactory from './ViewFactory';

/**
 * GridViewFactory
 * @param SuperClass
 */
export default function <P, S>(SuperClass) {
  return class extends ViewFactory<P, S>(SuperClass) {
    renderCard({ record, rowIndex, grid }): ReactNode {
      const rowSelection = this.getRowSelection();
      const id = record[this.getRowKey()];

      const className = classNames(
        {
          [`${selectorPrefix}-grid-view-item`]: true,
        },
        this.getSelectionClassName(id),
      );

      return (
        <ContourBlock>
          <div className={className}>
            {!!rowSelection && (
              <div className={`${selectorPrefix}-grid-view-item-selection`}>
                {this.renderItemSelection(record)}
              </div>
            )}
            <div className={`${selectorPrefix}-grid-view-item-icon`}>
              {Dict.value.AdhereSearchListResourceManagerIconMap.value.get(record.type || 'other')}
            </div>
            <div className={`${selectorPrefix}-grid-view-item-name`} title={record.name}>
              {record.name}
            </div>
          </div>
        </ContourBlock>
      );
    }
  };
}
