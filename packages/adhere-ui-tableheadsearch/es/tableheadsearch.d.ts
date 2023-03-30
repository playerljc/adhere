/// <reference types="react" />
/**
 * 表格列头筛选
 * @param render
 * @param icon
 * @return {{filterDropdown: (function(*=): *), filterIcon: (function(*): *)}}
 */
declare const _default: (render: any, icon?: JSX.Element) => {
    filterIcon: () => JSX.Element;
    filterDropdown: (props: any) => any;
};
export default _default;
