import React from 'react';
import PropTypes from 'prop-types';
import PlayGroundExt from 'component-playground';

import { ICodePanelProps } from './types';

const selectPrefix = 'adhere-ui-playground-code-panel';

/**
 * CodePanel
 * @classdesc - 单一的代码片段
 * @constructor
 */
function CodePanel(props: ICodePanelProps) {
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

export const CodePanelDefaultProps = {
  codeText: '',
  theme: 'monokai',
};

export const CodePanelPropTypes = {
  codeText: PropTypes.string,
  theme: PropTypes.string,
};

CodePanel.defaultProps = CodePanelDefaultProps;

CodePanel.propTypes = CodePanelPropTypes;

export default CodePanel;
