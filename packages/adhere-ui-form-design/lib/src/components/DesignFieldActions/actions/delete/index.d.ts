import React from 'react';
/**
 * Delete
 * @description 删除制定的控件
 * @param {string} id
 * @constructor
 */
export declare const Delete: ({ id }: {
    id: string;
}) => React.JSX.Element;
declare const config: {
    key: string;
    label: string;
    icon: React.JSX.Element;
    render: (id: string) => React.JSX.Element;
};
export default config;
