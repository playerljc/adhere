import React from 'react';

import './index.less';

export const COLUMN_COUNT = 10;
export const GROUP_COUNT = 10;
export const CELL_WIDTH = 140;

export const columns = Array.from({ length: COLUMN_COUNT }).fill(0);

export const groups = Array.from({ length: GROUP_COUNT }).fill(0);

function renderCellText(text) {
  return (
    <div className="adhere-ui-cascade-compared-cell-inner">
      <span className="CascadeComparedE2E-cellText">{text}</span>
    </div>
  );
}

export function createRow() {
  return columns.reduce((result, _, index) => {
    result[`column${index + 1}`] = index + 1;
    return result;
  }, {});
}

export function getIndicator() {
  return {
    columns: columns.map((_, i) => ({
      dataIndex: `column${i + 1}`,
      isFixed: i === 0,
      width: CELL_WIDTH,
      render: () => renderCellText(`指标${i + 1}`),
    })),
    dataSource: createRow(),
  };
}

export function createMasterItem(index) {
  return {
    title: <h2 className="CascadeComparedE2E-title">{`分组 ${index + 1}`}</h2>,
    columns: columns.map((_, j) => ({
      dataIndex: `column${j + 1}`,
      isFixed: j === 0,
      width: CELL_WIDTH,
      render: () => renderCellText(`指导价 ${j + 1}`),
    })),
    dataSource: [createRow(), createRow(), createRow()],
  };
}

export function getMaster() {
  return groups.map((_, i) => createMasterItem(i));
}
