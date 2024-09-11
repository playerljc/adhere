import React from 'react';
/**
 * 表格列头筛选
 * @param render
 * @param icon
 * @return {{filterDropdown: (function(*=): *), filterIcon: (function(*): *)}}
 */
declare const _default: (render: any, icon?: React.JSX.Element) => {
    filterIcon: () => React.JSX.Element;
    filterDropdown: (props: any) => any;
};
export default _default;
