import React from 'react';

import ProSearchStateTableImpl from './proStateSearchTable.jsx';

export default () => (
  <div style={{ display: 'flex', height: 700 }}>
    <ProSearchStateTableImpl pagination={true} title="123" />
  </div>
);
