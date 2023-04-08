import React from 'react';

import { SearchListImplement } from '../SearchListImplement';
import type { ResourceManagerProps, ResourceManagerState } from '../types';
import GridView from './GridView';
import ResourceManagerFactory from './ResourceManagerFactory';
import TableView from './TableView';

/**
 * ResourceManager
 * @class
 * @classdesc 可编辑单元格的表格
 */
class ResourceManager<
  P extends ResourceManagerProps,
  S extends ResourceManagerState,
> extends ResourceManagerFactory<ResourceManagerProps, ResourceManagerState>(SearchListImplement) {
  renderThumbnailView() {
    return (
      // @ts-ignore
      <GridView
        ref={this.ref}
        context={this}
        {...this.props}
        antdListProps={{
          ...(this.props.antdListProps || {}),
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
      <TableView
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

export default ResourceManager;
