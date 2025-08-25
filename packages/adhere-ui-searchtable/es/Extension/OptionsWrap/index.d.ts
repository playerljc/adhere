/**
 * OptionsWrap
 * @description - 表格操作列的父组件，自动加入分割线
 * @param children
 * @param className
 * @param style
 * @param ellipsisCount
 * @param isEllipsesShowOnlyOneAfterCollapsing
 * @param renderEllipsis
 * @return {JSX.Element}
 */
declare const OptionsWrap: {
    ({ className, style, ellipsisCount, isEllipsesShowOnlyOneAfterCollapsing, renderEllipsis, children, }: {
        className?: string | undefined;
        style?: {} | undefined;
        ellipsisCount?: number | undefined;
        isEllipsesShowOnlyOneAfterCollapsing?: boolean | undefined;
        renderEllipsis: any;
        children: any;
    }): JSX.Element;
    displayName: string;
};
export default OptionsWrap;
