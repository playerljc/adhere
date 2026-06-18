import { type TransferProps } from 'antd';
import React, { type CSSProperties } from 'react';
import type { FieldProps, StyleProps } from '../../../../types';
export type TransferDesignBodyProps = {
    fieldProps: FieldProps;
    style?: CSSProperties;
    styleProps?: StyleProps;
    lang: string;
    actions?: Record<string, (...args: any[]) => any>;
    targetKeys?: TransferProps['targetKeys'];
    onChange?: TransferProps['onChange'];
};
declare const TransferDesignBody: React.FC<TransferDesignBodyProps>;
export default TransferDesignBody;
