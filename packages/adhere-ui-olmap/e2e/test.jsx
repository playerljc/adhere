import React from 'react';

import OLMap from '../src/index.ts';

import '../src/index.less';

export default () => {
  return (
    <div style={{ height: '100%' }}>
      <OLMap
        style={{ height: '100%' }}
        // fitZoom={13}
        // minZoom={3}
        // maxZoom={20}
        // extent={[
        //   [-180, -90],
        //   [180, 90],
        // ]}
      />
    </div>
  );
};
