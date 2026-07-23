import React from 'react';

import DateDisplay from '../src/index';

const value = Date.now();
const dictNames = ['2', '4', '6', '7', '8', '10', '13', '15', '16', '18'];

export default () => {
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
      {dictNames.map((name) => {
        const Comp = DateDisplay[`DateDisplay${name}`];

        if (!Comp) {
          return (
            <div key={name} style={{ color: '#999' }}>
              DateDisplay{name}：未注册（需 Resource.Dict 初始化）
            </div>
          );
        }

        return (
          <div key={name}>
            DateDisplay{name}：
            <Comp value={value} />
          </div>
        );
      })}
      {DateDisplay.DateDisplay10 ? (
        <div>
          DateDisplay10 custom split：
          <DateDisplay.DateDisplay10 value={value} split1="/" />
        </div>
      ) : null}
    </div>
  );
};
