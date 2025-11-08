import { themes } from 'prism-react-renderer';
import PropTypes from 'prop-types';
import React, { memo, useMemo } from 'react';
import { LiveEditor, LivePreview, LiveProvider } from 'react-live';

import { CodePanelProps } from './types';

const selectPrefix = 'adhere-ui-playground-code-panel';

// 主题映射，将component-playground的主题名称映射到prism-react-renderer的主题
const getTheme = (themeName?: string) => {
  const themeMap: Record<string, any> = {
    monokai: themes.vsDark,
    dracula: themes.dracula,
    'night-owl': themes.nightOwl,
    'oceanic-next': themes.oceanicNext,
    github: themes.github,
    'vs-dark': themes.vsDark,
  };

  return themeMap[themeName || 'monokai'] || themes.vsDark;
};

/**
 * CodePanel
 * @classdesc - 单一的代码片段
 * @constructor
 */
const CodePanel = memo<CodePanelProps>((props) => {
  const { codeText = '', theme = 'monokai', ...restProps } = props;

  const prismTheme = useMemo(() => getTheme(theme), [theme]);

  return (
    <div className={selectPrefix}>
      <LiveProvider code={codeText} theme={prismTheme} scope={{ React }} disabled {...restProps}>
        <div className={`${selectPrefix}-wrapper`}>
          <div className={`${selectPrefix}-preview`}>
            <LivePreview />
          </div>
          {/* <div className={`${selectPrefix}-error`}>
            <LiveError />
          </div> */}
          <div className={`${selectPrefix}-editor`}>
            <LiveEditor />
          </div>
        </div>
      </LiveProvider>
    </div>
  );
});

CodePanel.displayName = 'CodePanel';

export const CodePanelDefaultProps = {
  codeText: '',
  theme: 'monokai',
};

export const CodePanelPropTypes = {
  codeText: PropTypes.string,
  theme: PropTypes.string,
};

export default CodePanel;
