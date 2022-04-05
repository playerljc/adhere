// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import { SearchTable } from '@baifendian/adhere';
import Table from './table';

const { Table: $SearchTable } = SearchTable;

/**
 * RowSelectedContinuous
 * @classdesc
 */
class RowSelectedContinuous extends Table {
    getRowSelectionMode() {
        return $SearchTable.ROW_SELECTION_NORMAL_MODE;
    }
}

export default RowSelectedContinuous;
