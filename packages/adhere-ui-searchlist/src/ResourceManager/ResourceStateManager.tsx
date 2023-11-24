import React from 'react';

import { SearchListStateImplement } from '../SearchListStateImplement';
import type { ResourceManagerProps, ResourceManagerState } from '../types';
import GridStateView from './GridStateView';
import ResourceManagerFactory from './ResourceManagerFactory';
import TableStateView from './TableStateView';

/**
 * ResourceStateManager
 * @class
 * @classdesc 可编辑单元格的表格
 */
class ResourceStateManager<
  P extends ResourceManagerProps,
  S extends ResourceManagerState,
> extends ResourceManagerFactory<ResourceManagerProps, ResourceManagerState>(
  SearchListStateImplement,
) {
  static displayName = 'ResourceStateManager';

  renderThumbnailView() {
    return (
      // @ts-ignore
      <GridStateView
        ref={this.ref}
        context={this}
        {...this.props}
        antdListProps={{
          ...(this.props.antdListProps ?? {}),
          grid: { gutter: 16, column: 8 },
        }}
        defaultValues={{
          ...this.getDefaultValues(),
        }}
      />
    );
  }

  renderInfoView() {
    return (
      // @ts-ignore
      <TableStateView
        ref={this.ref}
        context={this}
        {...this.props}
        defaultValues={{
          ...this.getDefaultValues(),
        }}
      />
    );
  }
}

export default ResourceStateManager;
