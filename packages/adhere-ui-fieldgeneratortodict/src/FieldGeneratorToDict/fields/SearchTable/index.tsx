import React from 'react';

import { setItem } from '../../ItemFactory';
import {
  createAsyncSearchTableSelect,
  createSearchTableSelect,
  createSearchTreeTableSelect,
  editorCellRowDragSortSearchTableClassFactory,
  editorCellSearchTableClassFactory,
  editorRowDragSortSearchTableClassFactory,
  editorRowSearchTableClassFactory,
  editorTableRowDragSortSearchTableClassFactory,
  editorTableSearchTableClassFactory,
  rowDragSortSearchTableClassFactory,
  standardSearchTableClassFactory,
} from './Util';

/**
 * SearchTableStandard
 */
setItem('SearchTable', 'Standard', (dictName) => (params) => {
  const SearchTable = standardSearchTableClassFactory({
    dictName,
    ...params,
  });

  return (props) => <SearchTable FieldGeneratorToDict={params?.FieldGeneratorToDict} {...props} />;
});

/**
 * SearchTableEditorCell
 */
setItem('SearchTable', 'EditorCell', (dictName) => (params) => {
  const SearchTable = editorCellSearchTableClassFactory({
    dictName,
    ...params,
  });

  return (props) => <SearchTable FieldGeneratorToDict={params?.FieldGeneratorToDict} {...props} />;
});

/**
 * SearchTableEditorRow
 */
setItem('SearchTable', 'EditorRow', (dictName) => (params) => {
  const SearchTable = editorRowSearchTableClassFactory({
    dictName,
    ...params,
  });

  return (props) => <SearchTable FieldGeneratorToDict={params?.FieldGeneratorToDict} {...props} />;
});

/**
 * SearchTableEditorTable
 */
setItem('SearchTable', 'EditorTable', (dictName) => (params) => {
  const SearchTable = editorTableSearchTableClassFactory({
    dictName,
    ...params,
  });

  return (props) => <SearchTable FieldGeneratorToDict={params?.FieldGeneratorToDict} {...props} />;
});

/**
 * SearchTableRowDragSort
 */
setItem('SearchTable', 'RowDragSort', (dictName) => (params) => {
  const SearchTable = rowDragSortSearchTableClassFactory({
    dictName,
    ...params,
  });

  return (props) => <SearchTable FieldGeneratorToDict={params?.FieldGeneratorToDict} {...props} />;
});

/**
 * SearchTableEditorCellRowDragSort
 */
setItem('SearchTable', 'EditorCellRowDragSort', (dictName) => (params) => {
  const SearchTable = editorCellRowDragSortSearchTableClassFactory({
    dictName,
    ...params,
  });

  return (props) => <SearchTable FieldGeneratorToDict={params?.FieldGeneratorToDict} {...props} />;
});

/**
 * SearchTableEditorRowDragSort
 */
setItem('SearchTable', 'EditorRowDragSort', (dictName) => (params) => {
  const SearchTable = editorRowDragSortSearchTableClassFactory({
    dictName,
    ...params,
  });

  return (props) => <SearchTable FieldGeneratorToDict={params?.FieldGeneratorToDict} {...props} />;
});

/**
 * SearchTableEditorTableRowDragSort
 */
setItem('SearchTable', 'EditorTableRowDragSort', (dictName) => (params) => {
  const SearchTable = editorTableRowDragSortSearchTableClassFactory({
    dictName,
    ...params,
  });

  return (props) => <SearchTable FieldGeneratorToDict={params?.FieldGeneratorToDict} {...props} />;
});

// ---------------------------------------------------------------------------
/**
 * SearchTableSingleSelect
 */
setItem('SearchTable', 'SingleSelect', (dictName) => (params) => {
  return createSearchTableSelect({
    dictName,
    params,
    selectionMode: 'single',
    rowSelectionMode: 'normal',
  });
});

/**
 * SearchTableMultipleSelect
 */
setItem('SearchTable', 'MultipleSelect', (dictName) => (params) => {
  return createSearchTableSelect({
    dictName,
    params,
    selectionMode: 'multiple',
    rowSelectionMode: 'normal',
  });
});

/**
 * SearchTableContinuousMultipleSelect
 */
setItem('SearchTable', 'ContinuousMultipleSelect', (dictName) => (params) => {
  return createSearchTableSelect({
    dictName,
    params,
    selectionMode: 'multiple',
    rowSelectionMode: 'continuous',
  });
});
// ---------------------------------------------------------------------------
/**
 * SearchTableTreeSingleSelect
 */
setItem('SearchTableTree', 'SingleSelect', (dictName) => (params) => {
  return createSearchTreeTableSelect({
    dictName,
    params,
    selectionMode: 'single',
    rowSelectionMode: 'normal',
  });
});

/**
 * SearchTableTreeMultipleSelect
 */
setItem('SearchTableTree', 'MultipleSelect', (dictName) => (params) => {
  return createSearchTreeTableSelect({
    dictName,
    params,
    selectionMode: 'multiple',
    rowSelectionMode: 'normal',
  });
});

/**
 * SearchTableTreeContinuousMultipleSelect
 */
setItem('SearchTableTree', 'ContinuousMultipleSelect', (dictName) => (params) => {
  return createSearchTreeTableSelect({
    dictName,
    params,
    selectionMode: 'multiple',
    rowSelectionMode: 'continuous',
  });
});
// -------------------------------------------------------------------------
/**
 * SearchTableAsyncSingleSelect
 */
setItem('SearchTable', 'AsyncSingleSelect', (dictName) => (params) => {
  return createAsyncSearchTableSelect({
    dictName,
    params,
    selectionMode: 'single',
    rowSelectionMode: 'normal',
  });
});

/**
 * SearchTableAsyncMultipleSelect
 */
setItem('SearchTable', 'AsyncMultipleSelect', (dictName) => (params) => {
  return createAsyncSearchTableSelect({
    dictName,
    params,
    selectionMode: 'multiple',
    rowSelectionMode: 'normal',
  });
});

/**
 * SearchTableAsyncContinuousMultipleSelect
 */
setItem('SearchTable', 'AsyncContinuousMultipleSelect', (dictName) => (params) => {
  return createAsyncSearchTableSelect({
    dictName,
    params,
    selectionMode: 'multiple',
    rowSelectionMode: 'continuous',
  });
});
// ----------------------------------------------------------------------

// 单选
// 多选 - 不能跨页
// 多选 - 能跨页

// CheckedStrategy模式多选 - 不能跨页
// CheckedStrategy模式多选 - 能跨页

// Async模式
// Async模式 - 单选

// Async模式多选 - 不能跨页
// Async模式多选 - 能跨页

// Async模式CheckedStrategy模式 - 不能跨页
// Async模式CheckedStrategy模式 - 能跨页
