import React from 'react';

import DateDisplay from '../src/index';

const value = Date.now();

const formats = [
  'LT',
  'LTS',
  'L',
  'LL',
  'LLL',
  'LLLL',
  'l',
  'll',
  'lll',
  'llll',
  'LLTS', // L LTS
  'LLT', // L LT
  'lLTS', // l LTS
  'lLT', // l LT
];

export default () => {
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
      {formats.map((name) => {
        const Comp = DateDisplay[`DateDisplay${name}`];

        if (!Comp) return null;

        return (
          <div key={name}>
            DateDisplay{name}：
            <Comp value={value} />
          </div>
        );
      })}
    </div>
  );
};
