import React from 'react';
import PropTypes, { Requireable, InferType } from 'prop-types';
/**
 * SimpleTabs
 * @class SimpleTabs
 * @classdesc 一个超级简单的选项卡
 */
declare class SimpleTabs extends React.PureComponent {
    static TabPanel: {
        ({ className, children, index }: {
            className: any;
            children: any;
            index: any;
        }): JSX.Element;
        defaultProps: {
            title: string;
            index: string;
            className: string;
        };
        propTypes: {
            title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            index: PropTypes.Requireable<React.ReactText>;
            className: PropTypes.Requireable<string>;
        };
    };
    static defaultProps: {
        onChange: () => void;
        activeKey: string;
        className: string;
    };
    static propTypes: {
        onChange: Requireable<(...args: any[]) => any>;
        activeKey: Requireable<NonNullable<InferType<Requireable<number> | any>>>;
        className: any;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    renderHead(): JSX.Element | JSX.Element[];
    renderHeadItem({ props: { index, title } }: {
        props: {
            index: any;
            title: any;
        };
    }): JSX.Element;
    render(): JSX.Element;
}
export default SimpleTabs;
