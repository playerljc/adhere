import React from 'react';

import OLMap from '../src/index.ts';

import '../src/index.less';

const { OLMap: OLMapComponent } = OLMap;

export default () => {
  return (
    <div style={{ height: '100%' }}>
      <OLMapComponent
        fitZoom={13}
        minZoom={3}
        maxZoom={20}
        extent={[
          [-180, -90],
          [180, 90],
        ]}
      />
    </div>
  );
};
