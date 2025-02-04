import React, { useEffect } from 'react';

import { names, values } from './dict/dict.gen.config';

export default () => {
  useEffect(() => {
    Object.keys(names).forEach((name) => {
      console.log(name, names[name]);
      console.log(values[name].value);
      console.log('\r\n');
    });
  }, []);
  return <div>GenModule</div>;
};
