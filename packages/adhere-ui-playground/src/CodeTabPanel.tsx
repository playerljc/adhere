import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import CodePanel, { CodePanelPropTypes } from './CodePanel';

import { ICodeTabPanelProps } from './types';
import SimpleTabs from './SimpleTabs';

const selectPrefix = 'adhere-ui-playground-code-tab-panel';

const { TabPanel } = SimpleTabs;

/**
 * CodeTabPanel
 * @param props
 * @constructor
 */
function CodeTabPanel(props: ICodeTabPanelProps) {
  const [active, setActive] = useState(props.active);

  /**
   * useEffect props.active
   */
  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div className={selectPrefix}>
      <SimpleTabs
        activeKey={active}
        onChange={(key) => {
          setActive(key);

          if (props.onChange) {
            props.onChange(key);
          }
        }}
      >
        {props.config.map(({ key, title, ...codePanelConfig }) => (
          <TabPanel title={title} key={key} index={key}>
            <ConditionalRender conditional={active === key}>
              {() => <CodePanel {...codePanelConfig} />}
            </ConditionalRender>
          </TabPanel>
        ))}
      </SimpleTabs>
    </div>
  );
}

export const CodeTabPanelDefaultProps = {
  active: '',
  config: [],
};

export const CodeTabPanelPropTypes = {
  active: PropTypes.string,
  config: PropTypes.arrayOf(
    PropTypes.shape({
      ...CodePanelPropTypes,
      key: PropTypes.string,
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    }),
  ),
  onChange: PropTypes.func,
};

CodeTabPanel.defaultProps = CodeTabPanelDefaultProps;

CodeTabPanel.propTypes = CodeTabPanelPropTypes;

export default memo(CodeTabPanel);
