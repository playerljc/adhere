import React from 'react';

import FlexLayout from '../src/index';

import '../src/index.less';
import './Responsive.less';

const { Fixed, Auto } = FlexLayout;

export default () => (
  <div className="flex-layout-responsive-example">
    <FlexLayout direction="horizontal" isResponsive gutter={[10, 0]} style={{ columnGap: 10 }}>
      {Array.from({ length: 4 }, (_, index) => (
        <Auto key={index} className="responsive-grid-item" fit={false}>
          111111
        </Auto>
      ))}
    </FlexLayout>

    <FlexLayout direction="horizontal" isResponsive>
      <Fixed className="responsive-left">1111111111</Fixed>

      <Auto className="responsive-auto" fit={false}>
        <FlexLayout direction="horizontal" isResponsive style={{ flexWrap: 'nowrap' }}>
          <Auto className="responsive-map-auto" fit={false}>
            111111111111111111111
          </Auto>
          <Fixed className="responsive-map-grid">1111111111111111111</Fixed>
        </FlexLayout>
      </Auto>

      <Fixed className="responsive-right">1111111111</Fixed>
    </FlexLayout>
  </div>
);
