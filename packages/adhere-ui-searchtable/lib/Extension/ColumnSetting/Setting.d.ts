import React from 'react';
/**
 * ColumnSetting
 * @param props
 * @constructor
 */
declare function ColumnSetting({ columns, onShowColumns, onReset, onDisplayColumn, onSortEnd }: {
    columns: any;
    onShowColumns: any;
    onReset: any;
    onDisplayColumn: any;
    onSortEnd: any;
}): React.JSX.Element;
declare namespace ColumnSetting {
    var defaultProps: {
        columns: never[];
    };
    var propTypes: {
        columns: any;
        onShowColumns: any;
        onReset: any;
        onDisplayColumn: any;
        onSortEnd: any;
    };
}
export default ColumnSetting;
