import React, { type ReactNode } from 'react';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import type { DesignValueProps } from '../../../../types';
/**
 * MainProperty — Radio.Group，属性参考 https://ant.design/components/radio-cn
 * 是否换行（optionWrap）与列数（columnCount）互斥。
 */
export declare function MainProperty({ designValue, renderFormItems, }: {
    designValue: DesignValueProps;
    renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
}): React.JSX.Element;
export declare function renderMainProperty(props: DesignValueProps): ReactNode;
