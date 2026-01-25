import type { DropdownProps } from 'antd';
import React from 'react';
export interface OptionsWrapProps {
    className?: string;
    style?: React.CSSProperties;
    ellipsisCount?: number;
    isEllipsesShowOnlyOneAfterCollapsing?: boolean;
    renderEllipsis?: () => React.ReactElement;
    children?: any;
    more?: DropdownProps;
}
/**
 * OptionsWrap
 * @description - 表格操作列的父组件，自动加入分割线
 * @param children
 * @param className
 * @param style
 * @param ellipsisCount
 * @param isEllipsesShowOnlyOneAfterCollapsing
 * @param renderEllipsis
 * @param more
 * @return {JSX.Element}
 */
declare const OptionsWrap: React.FC<OptionsWrapProps>;
export default OptionsWrap;
