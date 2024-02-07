// import dayjs from 'dayjs';
import React from 'react';

import DateDisplay from '../src/index';

// console.log(dayjs.Ls.en.formats.L);

console.log(DateDisplay.dayjs);
export default () => {
  // DateDisplay.setGlobalLocal('en');

  return <DateDisplay.DateDisplay format="L LTS" value={Date.now()} />;
  // return <div>{DateDisplay.dayjs(Date.now()).format('L')}</div>;
};
