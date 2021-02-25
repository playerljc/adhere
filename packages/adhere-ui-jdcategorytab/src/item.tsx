import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { JdCategoryContext } from './context';

const selectorPrefix = 'adhere-ui-jdcategorytab';

function JdCategoryTabItem({ id, children, className, style }) {
  console.log('JdCategoryTabItem', id);

  function renderInner({ activeKey }) {
    console.log('activeKey', activeKey, typeof activeKey, typeof id, activeKey === id);

    return (
      <li
        className={classNames(
          `${selectorPrefix}-tab-item`,
          activeKey === id ? 'active' : null,
          // @ts-ignore
          className.split(' '),
        )}
        style={{ ...style }}
      >
        {children}
      </li>
    );
  }

  return <JdCategoryContext.Consumer>{renderInner}</JdCategoryContext.Consumer>;
}

JdCategoryTabItem.defaultProps = {
  className: '',
  style: {},
  id: '',
};

JdCategoryTabItem.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
};

export default JdCategoryTabItem;
