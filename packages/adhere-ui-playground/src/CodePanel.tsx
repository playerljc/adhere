import PlayGroundExt from 'component-playground';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

import type { CodePanelProps } from './types';

const selectPrefix = 'adhere-ui-playground-code-panel';

/**
 * 代码面板组件
 * @component CodePanel
 * @description 单一的代码片段展示组件，基于component-playground实现
 * @param props - 组件属性
 * @returns JSX.Element
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

CodePanel.displayName = 'CodePanel';

/**
 * 默认属性
 * @constant CodePanelDefaultProps
 */
export const CodePanelDefaultProps = {
  codeText: '',
  theme: 'monokai',
};

/**
 * 属性类型定义
 * @constant CodePanelPropTypes
 */
export const CodePanelPropTypes = {
  codeText: PropTypes.string,
  theme: PropTypes.string,
};

export default CodePanel;
