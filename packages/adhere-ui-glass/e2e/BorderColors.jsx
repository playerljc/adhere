import React from 'react';

import Glass from '../src/index';

import '../src/index.less';
import './index.less';

const samples = [
  { title: '白色', borderColor: '#fff' },
  { title: '灰色', borderColor: 'gray' },
  { title: '青色', borderColor: '#5eead4' },
  { title: '金色', borderColor: '#fbbf24' },
];

export default () => {
  return (
    <div className="scene">
      <div className="row">
        {samples.map((sample) => (
          <div key={sample.title} className="stack">
            <div className="label">{sample.title}</div>
            <Glass
              className="panel"
              autoHeight={false}
              borderRadius={28}
              borderWidth={3}
              borderColor={sample.borderColor}
              strongColorAlpha={0.65}
              mediumColorAlpha={0.75}
              lightColorAlpha={0.12}
              corners={{
                leftTop: 'dark',
                rightTop: 'light',
                rightBottom: 'dark',
                leftBottom: 'light',
              }}
              boxInnerStyle={{ backdropFilter: 'blur(2px)' }}
            >
              <div className="content">borderColor: {sample.borderColor}</div>
            </Glass>
          </div>
        ))}
      </div>
    </div>
  );
};
