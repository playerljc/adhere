import React from 'react';

import ContourBlock from '@baifendian/adhere-ui-contourblock';

import Glass from '../src/index';

import '@baifendian/adhere-ui-contourblock/es/index.less';
import '../src/index.less';
import './index.less';

export default () => {
  return (
    <div className="scene">
      <div className="grid">
        {Array.from({ length: 8 }).map((_, index) => (
          <ContourBlock key={index}>
            <Glass
              autoHeight={false}
              borderRadius={24}
              borderWidth={3}
              borderColor="gray"
              corners={{
                leftTop: 'dark',
                rightTop: 'light',
                rightBottom: 'dark',
                leftBottom: 'light',
              }}
              boxInnerStyle={{ backdropFilter: 'blur(1px)' }}
            >
              <div className="content">
                <strong>Card {index + 1}</strong>
                <p>ContourBlock + Glass</p>
              </div>
            </Glass>
          </ContourBlock>
        ))}
      </div>
    </div>
  );
};
