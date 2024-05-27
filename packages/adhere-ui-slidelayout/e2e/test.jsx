import { Button } from 'antd';
import React, { useState } from 'react';

import SlideLayout from '../src/index';

import '../src/index.less';

const horizontalCSS = {
  position: 'relative',
  width: 400,
  height: 400,
  border: '1px solid rgba(0,0,0,.1)',
  overflow: 'hidden',
};

export default () => {
  const [collapse1, setCollapse1] = useState(false);

  return (
    <>
      <div>
        <Button
          type="primary"
          onClick={() => {
            setCollapse1(true);
          }}
        >
          打开
        </Button>
        <Button
          onClick={() => {
            setCollapse1(false);
          }}
        >
          关闭
        </Button>
      </div>

      <div style={horizontalCSS}>
        {/*<SlideLayout.Revolving
          onAfterClose={() => {
            setCollapse1(false);
          }}
          collapse={collapse1}
          slide={<div>left</div>}
          master={<div>Master</div>}
        >
          left
        </SlideLayout.Revolving>*/}

        <SlideLayout.Overlay
          onAfterClose={() => {
            setCollapse1(false);
          }}
          collapse={collapse1}
        >
          left
        </SlideLayout.Overlay>

        {/*<SlideLayout.Push
          onAfterClose={() => {
            setCollapse1(false);
          }}
          collapse={collapse1}
          slide={<div>left</div>}
          master={<div>Master</div>}
        />*/}
      </div>
    </>
  );
};
