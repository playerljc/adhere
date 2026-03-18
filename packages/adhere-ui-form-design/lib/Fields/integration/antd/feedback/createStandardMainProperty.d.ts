import React from 'react';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import type { DesignValueProps } from '../../../../types';
export declare function createStandardMainProperty({ formName, buildRows, }: {
    formName: string;
    buildRows: (props: {
        designValue: DesignValueProps;
    }) => DataItemRow[];
}): ({ designValue, renderFormItems, }: {
    designValue: DesignValueProps;
    renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
}) => React.JSX.Element;
