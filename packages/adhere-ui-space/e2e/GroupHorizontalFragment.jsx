import React from 'react';

import Space from '../src/index';

import '../src/index.less';

export default () => {
  return (
    <div style={{ display: 'flex' }}>
      <Space.Group direction="horizontal" isUseMedia={true}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <>
          <p>4</p>
          <>
            <p>5</p>
            <p>6</p>
          </>
          <p>7</p>
        </>
      </Space.Group>
    </div>
  );
};
