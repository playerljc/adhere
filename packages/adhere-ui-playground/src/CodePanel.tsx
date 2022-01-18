import React from 'react';
import PropTypes from 'prop-types';
import PlayGroundExt from 'component-playground';

const selectPrefix = 'adhere-ui-playground-code-panel';

/**
 * CodePanel
 * @param props
 * @constructor
 */
function CodePanel(props) {
  return (
    <div className={selectPrefix}>
      <PlayGroundExt
        docClass={null}
        propDescriptionMap={null}
        scope={{ React }}
        collapsableCode={false}
        initiallyExpanded={false}
        es6Console={false}
        {...props}
      />
    </div>
  );
}

CodePanel.defaultProps = {
  codeText: '',
  expand: false,
};

CodePanel.propTypes = {
  codeText: PropTypes.string,
  expand: PropTypes.bool,
};

export default CodePanel;
