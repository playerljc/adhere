import React from 'react';
/**
 * ListDensitySetting
 * @param props
 * @constructor
 */
declare function ListDensitySetting({ density, onReset, onChange }: {
    density: any;
    onReset: any;
    onChange: any;
}): React.JSX.Element;
declare namespace ListDensitySetting {
    var defaultProps: {
        density: string;
    };
    var propTypes: {
        density: any;
        onReset: any;
        onChange: any;
    };
}
export default ListDensitySetting;
