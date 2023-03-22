import PropTypes from 'prop-types';
import React, { FC, memo, useCallback, useEffect, useState } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import CodePanel, { CodePanelPropTypes } from './CodePanel';
import SimpleTabs from './SimpleTabs';
import { CodeTabPanelProps } from './types';

const selectPrefix = 'adhere-ui-playground-code-tab-panel';

const { TabPanel } = SimpleTabs;

/**
 * CodeTabPanel
 * @param props
 * @constructor
 */
const CodeTabPanel: FC<CodeTabPanelProps> = (props) => {
  const { config = [], onChange } = props;

  const [active, setActive] = useState(props.active);

  const SimpleTabsOnChange = useCallback(
    (key) => {
      setActive(key);

      onChange && onChange(key as string);
    },
    [onChange, active],
  );

  /**
   * useEffect props.active
   */
  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div className={selectPrefix}>
      <SimpleTabs activeKey={active} onChange={SimpleTabsOnChange}>
        {(config || []).map(({ key, title, ...codePanelConfig }) => (
          // @ts-ignore
          <TabPanel title={title} key={key} index={key}>
            <ConditionalRender conditional={active === key}>
              {() => <CodePanel {...codePanelConfig} />}
            </ConditionalRender>
          </TabPanel>
        ))}
      </SimpleTabs>
    </div>
  );
};

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

// CodeTabPanel.defaultProps = CodeTabPanelDefaultProps;

// CodeTabPanel.propTypes = CodeTabPanelPropTypes;

export default memo<CodeTabPanelProps>(CodeTabPanel);
