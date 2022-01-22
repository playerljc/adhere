import React from 'react';
import PropTypes from 'prop-types';
declare const TabPanel: {
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
export default TabPanel;
