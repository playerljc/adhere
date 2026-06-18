import React from 'react';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import type { DesignValueProps } from '../types';
export declare function createStandardMainProperty({ formName, buildRows, autoFill, }: {
    formName: string;
    buildRows: (props: {
        designValue: DesignValueProps;
    }) => DataItemRow[];
    autoFill?: boolean;
}): ({ designValue, renderFormItems, }: {
    designValue: DesignValueProps;
    renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
}) => React.JSX.Element;
