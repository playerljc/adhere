import { List } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo } from 'react';

import type { DataSourceListProps, DisplayNameInternal } from '../types';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-data-source-list';

/**
 * DataSourceList
 * @constructor
 */
const InternalDataSourceList = memo<DataSourceListProps>(
  ({ wrapperClassName, wrapperStyle, dataSource, renderItem, onClick, ...listProps }) => {
    return (
      <div
        className={classNames(selectorPrefix, wrapperClassName ?? '')}
        style={wrapperStyle ?? {}}
      >
        <List {...listProps}>
          {(dataSource ?? []).map((record) => (
            <List.Item
              {...record}
              children={renderItem?.(record)}
              onClick={() => onClick?.(record)}
            />
          ))}
        </List>
      </div>
    );
  },
);

const DataSourceList = InternalDataSourceList as DisplayNameInternal<typeof InternalDataSourceList>;
DataSourceList.displayName = 'DataSourceList';

export default DataSourceList;
