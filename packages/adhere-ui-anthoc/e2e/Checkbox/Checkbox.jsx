import React, { useState } from 'react';

import Checkbox from '../../src/checkbox';

export default () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)}>
      男
    </Checkbox>
  );
};
