import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { CodeBoxContext } from './CodeBoxContext';

const selectPrefix = 'adhere-ui-playground-code-box';

/**
 * CodeBoxPanel
 * @classdesc - 代码组
 * @constructor
 */
function CodeBoxPanel(props) {
  const [activeAnchor, setAnchor] = useState('');
  const { columnCount, children } = props;

  const column = [];
  column.length = columnCount;
  // @ts-ignore
  column.fill(undefined);

  useEffect(() => {
    function onHashChange() {
      const hash = window.location.hash.substring(1);
      setAnchor(hash);
    }

    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  return (
    <CodeBoxContext.Provider
      value={{
        activeAnchor,
      }}
    >
      <div className={selectPrefix}>
        {column.map((item, columnIndex) => (
          <div className={`${selectPrefix}-column`}>
            {children.map((item, index) => {
              if (index % columnCount === columnIndex) {
                return <div className={`${selectPrefix}-item`}>{children[index]}</div>;
              }

              return null;
            })}
          </div>
        ))}
      </div>
    </CodeBoxContext.Provider>
  );
}

CodeBoxPanel.defaultProps = {
  columnCount: 1,
};

CodeBoxPanel.propTypes = {
  columnCount: PropTypes.number,
};

export default CodeBoxPanel;
