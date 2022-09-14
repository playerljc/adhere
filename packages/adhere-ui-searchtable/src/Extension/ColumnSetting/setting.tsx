import { Checkbox } from 'antd';
import { arrayMoveImmutable } from 'array-move';
import PropTypes from 'prop-types';
import React from 'react';
import {
  SortableContainer as SortableContainerHOC,
  SortableElement,
  SortableHandle,
} from 'react-sortable-hoc';

import Intl from '@baifendian/adhere-util-intl';

import { selectorPrefix } from '../../searchtable';

const DragHandle = SortableHandle(() => (
  <img
    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1pYyIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNjY2MiIGQ9Ik0xMSAxOGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTJzLjktMiAyLTJzMiAuOSAyIDJ6bS0yLThjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyczItLjkgMi0ycy0uOS0yLTItMnptMC02Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMnMyLS45IDItMnMtLjktMi0yLTJ6bTYgNGMxLjEgMCAyLS45IDItMnMtLjktMi0yLTJzLTIgLjktMiAycy45IDIgMiAyem0wIDJjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyczItLjkgMi0ycy0uOS0yLTItMnptMCA2Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMnMyLS45IDItMnMtLjktMi0yLTJ6Ij48L3BhdGg+PC9zdmc+DQo="
    alt=""
  />
));

const SortableItem = SortableElement(({ column, onDisplayColumn }) => (
  <li>
    <DragHandle />
    <Checkbox
      checked={column.display}
      onChange={(e) => {
        onDisplayColumn(column, e.target.checked);
      }}
    >
      {column.title}
    </Checkbox>
  </li>
));

const SortableContainer = SortableContainerHOC(({ children }) => <ul>{children}</ul>);

/**
 * ColumnSetting
 * @param props
 * @constructor
 */
function ColumnSetting({ columns, onShowColumns, onReset, onDisplayColumn, onSortEnd }) {
  return (
    <div className={`${selectorPrefix}-column-setting`}>
      <div className={`${selectorPrefix}-column-setting-header`}>
        <div>
          <Checkbox
            checked={columns.every((column) => column.display)}
            onChange={(e) => {
              onShowColumns(e.target.checked);
            }}
          >
            {Intl.v('列展示')}
          </Checkbox>
        </div>

        <div>
          <a onClick={onReset}>{Intl.v('重置')}</a>
        </div>
      </div>

      <div className={`${selectorPrefix}-column-setting-body`}>
        <SortableContainer
          onSortEnd={({ oldIndex, newIndex }) => {
            const changeColumns = arrayMoveImmutable([...columns], oldIndex, newIndex);

            const map = new Map<string, number>();

            changeColumns.forEach((column, index) => {
              map.set(column.key, index);
            });

            onSortEnd(map);
          }}
          useDragHandle
          // lockToContainerEdges
          helperClass={`${selectorPrefix}-sortableHelper`}
        >
          {columns.map((column, index) => (
            <SortableItem
              key={column.key}
              index={index}
              column={column}
              onDisplayColumn={onDisplayColumn}
            />
          ))}
        </SortableContainer>
      </div>
    </div>
  );
}

ColumnSetting.defaultProps = {
  columns: [],
};

ColumnSetting.propTypes = {
  columns: PropTypes.array,
  onShowColumns: PropTypes.func,
  onReset: PropTypes.func,
  onDisplayColumn: PropTypes.func,
  onSortEnd: PropTypes.func,
};

export default ColumnSetting;
