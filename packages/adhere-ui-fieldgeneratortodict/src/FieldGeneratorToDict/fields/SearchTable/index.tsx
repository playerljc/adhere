import React from 'react';

import { setItem } from '../../ItemFactory';
import {
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

  return (props) => <SearchTable {...props} />;
});

/**
 * SearchTableEditorCell
 */
setItem('SearchTable', 'EditorCell', (dictName) => (params) => {
  const SearchTable = editorCellSearchTableClassFactory({
    dictName,
    ...params,
  });

  return (props) => <SearchTable {...props} />;
});

/**
 * SearchTableEditorRow
 */
setItem('SearchTable', 'EditorRow', (dictName) => (params) => {
  const SearchTable = editorRowSearchTableClassFactory({
    dictName,
    ...params,
  });

  return (props) => <SearchTable {...props} />;
});

/**
 * SearchTableEditorTable
 */
setItem('SearchTable', 'EditorTable', (dictName) => (params) => {
  const SearchTable = editorTableSearchTableClassFactory({
    dictName,
    ...params,
  });

  return (props) => <SearchTable {...props} />;
});

/**
 * SearchTableRowDragSort
 */
setItem('SearchTable', 'RowDragSort', (dictName) => (params) => {
  const SearchTable = rowDragSortSearchTableClassFactory({
    dictName,
    ...params,
  });

  return (props) => <SearchTable {...props} />;
});

/**
 * SearchTableEditorCellRowDragSort
 */
setItem('SearchTable', 'EditorCellRowDragSort', (dictName) => (params) => {
  const SearchTable = editorCellRowDragSortSearchTableClassFactory({
    dictName,
    ...params,
  });

  return (props) => <SearchTable {...props} />;
});

/**
 * SearchTableEditorRowDragSort
 */
setItem('SearchTable', 'EditorRowDragSort', (dictName) => (params) => {
  const SearchTable = editorRowDragSortSearchTableClassFactory({
    dictName,
    ...params,
  });

  return (props) => <SearchTable {...props} />;
});

/**
 * SearchTableEditorTableRowDragSort
 */
setItem('SearchTable', 'EditorTableRowDragSort', (dictName) => (params) => {
  const SearchTable = editorTableRowDragSortSearchTableClassFactory({
    dictName,
    ...params,
  });

  return (props) => <SearchTable {...props} />;
});
