import PlayGroundExt from 'component-playground';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

import { CodePanelProps } from './types';

const selectPrefix = 'adhere-ui-playground-code-panel';

/**
 * CodePanel
 * @classdesc - 单一的代码片段
 * @constructor
 */
const CodePanel = memo<CodePanelProps>((props) => {
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
});

export const CodePanelDefaultProps = {
  codeText: '',
  theme: 'monokai',
};

export const CodePanelPropTypes = {
  codeText: PropTypes.string,
  theme: PropTypes.string,
};

export default CodePanel;
