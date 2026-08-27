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
    /**
     * Split 分割条大小，数字为像素，字符串可带单位
     */
    size?: string | number;
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
 * @param size
 * @return {JSX.Element}
 */
declare const OptionsWrap: React.FC<OptionsWrapProps>;
export default OptionsWrap;
