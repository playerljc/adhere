import React from 'react';
import { TableDensity } from '../../types';
/**
 * TableDensitySetting
 * @param props
 * @constructor
 */
declare function TableDensitySetting({ density, onReset, onChange }: {
    density: any;
    onReset: any;
    onChange: any;
}): React.JSX.Element;
declare namespace TableDensitySetting {
    var defaultProps: {
        density: TableDensity;
    };
    var propTypes: {
        density: any;
        onReset: any;
        onChange: any;
    };
    var displayName: string;
}
export default TableDensitySetting;
