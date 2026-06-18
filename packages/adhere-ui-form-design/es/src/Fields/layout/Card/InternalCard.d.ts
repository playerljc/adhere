import type { CardProps } from 'antd';
import type { CSSProperties, FC, ReactNode } from 'react';
import type { DesignValue, StyleProps } from '../../../types';
export interface InternalCardLayoutProps {
    id?: string;
    className?: string;
    style?: CSSProperties;
    children?: DesignValue[];
    title?: ReactNode;
    extra?: ReactNode;
    variant?: CardProps['variant'];
    size?: CardProps['size'];
    hoverable?: boolean;
    loading?: boolean;
    type?: CardProps['type'];
    styleProps?: StyleProps;
}
/**
 * InternalCard
 * @description 设计器中的 Card 容器，属性对齐 antd Card
 */
declare const InternalCard: FC<InternalCardLayoutProps>;
export default InternalCard;
