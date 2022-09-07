import React, { FC, useContext } from 'react';
import classNames from 'classnames';

import type { JdCategoryTabItemProps, JdCategoryTabContext } from './types';
import { JdCategoryContext } from './context';

const selectorPrefix = 'adhere-ui-jdcategorytab';

const JdCategoryTabItem: FC<JdCategoryTabItemProps> = (props) => {
  const { id, children, className, style } = props;

  const { activeKey } = useContext<JdCategoryTabContext>(JdCategoryContext);

  return (
    <li
      className={classNames(
        `${selectorPrefix}-tab-item`,
        activeKey === id ? 'active' : null,
        className || '',
      )}
      style={style || {}}
    >
      {children}
    </li>
  );
};

// JdCategoryTabItem.defaultProps = {
//   className: '',
//   style: {},
//   id: '',
// };
//
// JdCategoryTabItem.propTypes = {
//   className: PropTypes.string,
//   style: PropTypes.object,
//   id: PropTypes.string,
// };

export default JdCategoryTabItem;
