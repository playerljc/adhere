import React from 'react';

import Split from '../src/index';

import '../src/index.less';

export default () => {
  return (
    <div style={{ display: 'flex', height: 20 }}>
      <Split.Group direction="vertical" isUseMedia={false}>
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
      </Split.Group>
    </div>
  );
};
