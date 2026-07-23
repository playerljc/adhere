import React from 'react';

import Glass from '../src/index';

import '../src/index.less';
import './index.less';

const samples = [
  {
    title: '默认对角亮暗',
    corners: undefined,
  },
  {
    title: '对角翻转',
    corners: {
      leftTop: 'dark',
      rightTop: 'light',
      rightBottom: 'dark',
      leftBottom: 'light',
    },
  },
  {
    title: '四角全亮',
    corners: {
      leftTop: 'light',
      rightTop: 'light',
      rightBottom: 'light',
      leftBottom: 'light',
    },
  },
  {
    title: '四角全暗',
    corners: {
      leftTop: 'dark',
      rightTop: 'dark',
      rightBottom: 'dark',
      leftBottom: 'dark',
    },
  },
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
              borderColor="#fff"
              corners={sample.corners}
              boxInnerStyle={{ backdropFilter: 'blur(2px)' }}
            >
              <div className="content">{sample.title}</div>
            </Glass>
          </div>
        ))}
      </div>
    </div>
  );
};
