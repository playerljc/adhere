import merge from 'lodash.merge';
import React from 'react';

import FormDesign from '../../src';

import '../../src/index.less';
import './index.less';

const { Design, Dict, Plugins, Layout } = FormDesign;

const antd = Plugins.installAntd();
const layout = Layout.install();

export default () => {
  const toolBox = merge(
    [...Dict.values.DefaultToolBox.value],
    [
      {
        items: [...antd.toolBox],
      },
      {
        items: [...layout.toolBox],
      },
    ],
  );

  debugger;

  return (
    <Design
      className="Design"
      terminal="desktop"
      toolBox={toolBox}
      items={[...layout.designItems, ...antd.designItems]}
    />
  );
};
