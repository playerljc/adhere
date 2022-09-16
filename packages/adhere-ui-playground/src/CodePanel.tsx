import PlayGroundExt from 'component-playground';
import PropTypes from 'prop-types';
import React, { FC, memo } from 'react';

import { CodePanelProps } from './types';

const selectPrefix = 'adhere-ui-playground-code-panel';

/**
 * CodePanel
 * @classdesc - 单一的代码片段
 * @constructor
 */
const CodePanel: FC<CodePanelProps> = (props) => {
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
};

export const CodePanelDefaultProps = {
  codeText: '',
  theme: 'monokai',
};

export const CodePanelPropTypes = {
  codeText: PropTypes.string,
  theme: PropTypes.string,
};

// CodePanel.defaultProps = CodePanelDefaultProps;

// CodePanel.propTypes = CodePanelPropTypes;

export default memo<any>(CodePanel);
