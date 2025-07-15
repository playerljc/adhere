import PropTypes from 'prop-types';
import React, { memo, useCallback, useEffect, useState } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import CodePanel, { CodePanelPropTypes } from './CodePanel';
import SimpleTabs from './SimpleTabs';
import type { CodeTabPanelProps } from './types';

const selectPrefix = 'adhere-ui-playground-code-tab-panel';

const { TabPanel } = SimpleTabs;

/**
 * 代码标签面板组件
 * @component CodeTabPanel
 * @description 支持多标签页的代码展示组件
 * @param props - 组件属性
 * @returns JSX.Element
 */
const CodeTabPanel = memo<CodeTabPanelProps>((props) => {
  const { config = [], onChange, active: propActive } = props;

  const [active, setActive] = useState<string>(propActive ?? '');

  /**
   * 处理标签页切换
   * @function SimpleTabsOnChange
   * @param key - 标签页键值
   */
  const SimpleTabsOnChange = useCallback(
    (key: string) => {
      setActive(key);
      onChange?.(key);
    },
    [onChange],
  );

  /**
   * 监听active属性变化
   */
  useEffect(() => {
    setActive(propActive ?? '');
  }, [propActive]);

  return (
    <div className={selectPrefix}>
      <SimpleTabs activeKey={active} onChange={SimpleTabsOnChange}>
        {(config || []).map(({ key, title, className, style, ...codePanelConfig }) => (
          <TabPanel 
            key={key} 
            index={key} 
            className={className} 
            style={style}
          >
            <ConditionalRender conditional={active === key}>
              {() => <CodePanel {...codePanelConfig} />}
            </ConditionalRender>
          </TabPanel>
        ))}
      </SimpleTabs>
    </div>
  );
});

CodeTabPanel.displayName = 'CodeTabPanel';

/**
 * 默认属性
 * @constant CodeTabPanelDefaultProps
 */
export const CodeTabPanelDefaultProps = {
  active: '',
  config: [],
};

/**
 * 属性类型定义
 * @constant CodeTabPanelPropTypes
 */
export const CodeTabPanelPropTypes = {
  active: PropTypes.string,
  config: PropTypes.arrayOf(
    PropTypes.shape({
      ...CodePanelPropTypes,
      className: PropTypes.string,
      style: PropTypes.object,
      key: PropTypes.string,
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    }),
  ),
  onChange: PropTypes.func,
};

export default CodeTabPanel;
