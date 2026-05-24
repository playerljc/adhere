import type { TagProps } from 'antd';
export type TagSemanticType = 'success' | 'info' | 'warning' | 'error' | 'primary' | 'default' | 'processing' | 'danger' | 'pink' | 'red' | 'orange' | 'yellow' | 'green' | 'cyan' | 'blue' | 'purple' | 'geekblue' | 'magenta' | 'volcano' | 'gold' | 'lime' | 'secondary' | 'neutral' | 'disabled';
export interface InternalTagProps extends Omit<TagProps, 'color'> {
    type?: TagSemanticType | string;
    textColor?: string;
    bgColor?: string;
    borderColor?: string;
    radius?: string | number;
    padding?: string | number;
    color?: TagProps['color'];
}
export interface TagResolvedColors {
    textColor?: string;
    bgColor?: string;
    borderColor?: string;
}
