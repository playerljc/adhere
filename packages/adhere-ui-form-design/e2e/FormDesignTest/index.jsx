import React from 'react';

import FormDesign from '../../src';

import '../../src/index.less';
import './index.less';

const { Design, Plugins, Layout } = FormDesign;

const antd = Plugins.installAntd();
const layout = Layout.install();

export default () => {
  return (
    <Design
      className="Design"
      terminal="desktop"
      toolBox={[...layout.toolBox, ...antd.toolBox]}
      items={[...layout.designItems, ...antd.designItems]}
    />
  );
};
