import { Tooltip } from 'antd';
import ExcelJS from 'exceljs';
import FileSaver from 'file-saver';
import React, { FC } from 'react';

import { FileExcelOutlined } from '@ant-design/icons';
import GlobalIndicator from '@baifendian/adhere-ui-globalindicator';
import ErrorPrompt from '@baifendian/adhere-ui-prompt-errorprompt';
import SuccessPrompt from '@baifendian/adhere-ui-prompt-successprompt';
import Util from '@baifendian/adhere-util';
import Intl from '@baifendian/adhere-util-intl';

import { selectorPrefix } from '../../SearchTable';
import type { ExportExcelProps } from '../../types';

/**
 * isLeaf
 * @param column
 */
function isLeaf(column) {
  return !('children' in column) || (Array.isArray(column.children) && !column.children.length);
}

/**
 * renderTitle
 * @param worksheet
 * @param title
 * @param columnsLength
 */
function renderTitle({ worksheet, title, columnsLength }) {
  worksheet.mergeCells(1, 1, 1, columnsLength);

  const mergedCell = worksheet.getCell('A1');
  mergedCell.value = title;
  mergedCell.alignment = { vertical: 'middle', horizontal: 'center' };
  mergedCell.font = { bold: true, size: 14 };
  mergedCell.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: '8DB4E2' },
  };
  mergedCell.border = {
    top: { style: 'thin' },
    left: { style: 'thin' },
    bottom: { style: 'thin' },
    right: { style: 'thin' },
  };
}

/**
 * renderColumns
 * @description
 *   // getTreeLevel 获取Tree层级
 *   // getLeafNodes 获取所有叶子节点
 *   // 是否是叶子节点
 *   // 当前几点在第几层
 *   // 是叶子节点竖着合并
 *   // 不是叶子节点横着合并
 * @param worksheet
 * @param leafNodes
 * @param columns
 * @param level
 */
function renderColumns({ worksheet, columns, leafNodes, level }) {
  const startRowNumber = 1;

  function addColumnToWorksheet(_columns) {
    for (let i = 0; i < _columns.length; i++) {
      const column = _columns[i];

      // 当前节点所在的层级(从1开始)
      const currentLevel = Util.getNodeLevel(columns, column, 'key');

      let cell;
      let mergeCellsData: {
        startRow: number;
        startCell: number;
        endRow: number;
        endCell: number;
      } | null;

      if (isLeaf(column)) {
        // 竖着合并
        const position = leafNodes.findIndex((node) => node.key === column.key) + 1;
        mergeCellsData = {
          startRow: startRowNumber + currentLevel,
          startCell: position,
          endRow: startRowNumber + level,
          endCell: position,
        };
      } else {
        // 横着合并
        const _leafNodes = Util.getLeafNodes(column.children);
        const position = leafNodes.findIndex((node) => node.key === _leafNodes[0].key) + 1;
        mergeCellsData = {
          startRow: startRowNumber + currentLevel,
          startCell: position,
          endRow: startRowNumber + currentLevel,
          endCell: position + _leafNodes.length - 1,
        };
      }

      if (mergeCellsData) {
        worksheet.mergeCells(
          mergeCellsData.startRow,
          mergeCellsData.startCell,
          mergeCellsData.endRow,
          mergeCellsData.endCell,
        );
        cell = worksheet.getRow(mergeCellsData.startRow).getCell(mergeCellsData.startCell);
      }

      if (cell) {
        cell.value = column.title;
        cell.font = { bold: true, size: 12 };
        cell.alignment = { vertical: 'middle', horizontal: 'center' };
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' },
        };
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'C5D9F1' },
        };
      }

      addColumnToWorksheet(column.children ?? []);
    }
  }

  addColumnToWorksheet(columns);
}

/**
 * renderData
 * @param worksheet
 * @param leafNodes
 * @param level
 * @param dataSource
 */
function renderData({ worksheet, leafNodes, level, dataSource }) {
  let rowCount = 0;

  const addDataToWorksheet: (data: any[], currentLevel: number, parentRow?: any) => void = (
    data,
    currentLevel,
    parentRow,
  ) => {
    // 数据
    data.forEach((record, _index) => {
      const row = worksheet.getRow(1 + level + 1 + rowCount++);

      row.indent = currentLevel * 2; // 设置缩进以表示层级

      if (parentRow) {
        row.outlineLevel = currentLevel; // 创建分组以表示层次结构
      }

      leafNodes.forEach(({ dataIndex }, _columnIndex) => {
        const cell = row.getCell(_columnIndex + 1);

        cell.value = record[dataIndex];
        cell.font = { bold: false, size: 10 };
        cell.alignment = { vertical: 'middle', horizontal: 'center' };
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' },
        };
      });

      if ('children' in record && Array.isArray(record.children) && !!record.children.length) {
        addDataToWorksheet(record.children, currentLevel + 1, row);
      }
    });
  };

  addDataToWorksheet(dataSource, 0);
}

/**
 * columnsAdaption
 * @param worksheet
 */
function columnsAdaption(worksheet) {
  // 自适应列宽度
  worksheet.columns.forEach((column) => {
    let maxLength = 0;

    column?.eachCell?.({ includeEmpty: true }, (cell) => {
      const length = cell.value ? cell.value.toString().length : 10;
      if (length > maxLength) {
        maxLength = length;
      }
    });

    column.width = maxLength < 10 ? 10 : maxLength + 2; // 适当增加列宽度
  });
}

/**
 * download
 * @param workbook
 * @param title
 */
function download({ workbook, title }) {
  return workbook.xlsx.writeBuffer().then((buffer) => {
    FileSaver(new Blob([buffer], { type: 'application/octet-stream' }), `${title}.xlsx`);
  });
}

/**
 * exportExcel
 * @param dataSource
 * @param columns
 * @param title
 */
function exportExcel({ dataSource, columns, title }) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet(title);

  const leafNodes = Util.getLeafNodes(columns);
  const level = Util.getTreeLevel(columns, 'key');

  // 标题
  renderTitle({ worksheet, title, columnsLength: leafNodes.length });

  // 列
  renderColumns({ worksheet, leafNodes, columns, level });

  // 数据
  renderData({ worksheet, leafNodes, level, dataSource });

  // 列宽自适应
  columnsAdaption(worksheet);

  // 导出
  return download({ workbook, title });
}

/**
 * ExportExcel
 * @description 导出excel
 * @param {String} name
 * @param {Function} getColumns
 * @constructor
 */
const ExportExcel: FC<ExportExcelProps> = ({
  title = 'excel',
  getDataSource,
  getColumns,
  renderExportExcelBtn,
}) => {
  function onExportExcel() {
    const indicator = GlobalIndicator.show();

    const columns = getColumns();

    const dataSource = getDataSource();

    return exportExcel({ dataSource, columns, title })
      .then(() => {
        GlobalIndicator.hide(indicator);
        SuccessPrompt.openSuccessMessage();
      })
      .catch((err) => {
        GlobalIndicator.hide(indicator);
        ErrorPrompt.openErrorMessage(err);
      });
  }

  return (
    <Tooltip title={`${Intl.v('导出excel')}`}>
      {renderExportExcelBtn && renderExportExcelBtn(onExportExcel)}
      {!renderExportExcelBtn && (
        <FileExcelOutlined
          onClick={onExportExcel}
          className={`${selectorPrefix}-export-excel-btn`}
        />
      )}
    </Tooltip>
  );
};

export default ExportExcel;
