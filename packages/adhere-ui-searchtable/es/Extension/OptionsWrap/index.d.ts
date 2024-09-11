import React from 'react';
/**
 * OptionsWrap
 * @description - 表格操作列的父组件，自动加入分割线
 * @param children
 * @param className
 * @param style
 * @param ellipsisCount
 * @param isEllipsesShowOnlyOneAfterCollapsing
 * @return {JSX.Element}
 */
declare const OptionsWrap: {
    ({ className, style, ellipsisCount, isEllipsesShowOnlyOneAfterCollapsing, children, }: {
        className?: string | undefined;
        style?: {} | undefined;
        ellipsisCount?: number | undefined;
        isEllipsesShowOnlyOneAfterCollapsing?: boolean | undefined;
        children: any;
    }): React.JSX.Element;
    displayName: string;
};
export default OptionsWrap;
