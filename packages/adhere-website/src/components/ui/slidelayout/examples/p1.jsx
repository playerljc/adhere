import { Button } from 'antd';
import React, { useState } from 'react';

import { FlexLayout, SlideLayout, Space } from '@baifendian/adhere';

const horizontalCSS = {
  position: 'relative',
  width: 400,
  height: 400,
  border: '1px solid rgba(0,0,0,.1)',
  overflow: 'hidden',
};

const verticalCSS = {
  position: 'relative',
  width: 400,
  height: 500,
  border: '1px solid rgba(0,0,0,.1)',
  overflow: 'hidden',
};

export default () => {
  const [collapse1, setCollapse1] = useState(true);

  const [collapse2, setCollapse2] = useState(true);

  const [collapse3, setCollapse3] = useState(true);

  const [collapse4, setCollapse4] = useState(true);

  return (
    <>
      <FlexLayout direction="horizontal">
        <FlexLayout.Auto>
          <div>
            <h3>left</h3>
            <div>
              <Button
                type="primary"
                onClick={() => {
                  setCollapse1(true);
                }}
              >
                打开
              </Button>
              <Space size={10} direction="horizontal" />
              <Button
                onClick={() => {
                  setCollapse1(false);
                }}
              >
                关闭
              </Button>
            </div>

            <Space direction="vertical" />

            <div style={{ ...horizontalCSS }}>
              <SlideLayout.Overlay
                onAfterClose={() => {
                  setCollapse1(false);
                }}
                collapse={collapse1}
              >
                left
              </SlideLayout.Overlay>
            </div>
          </div>
        </FlexLayout.Auto>

        <FlexLayout.Auto>
          <div>
            <h3>right</h3>
            <div>
              <Button
                type="primary"
                onClick={() => {
                  setCollapse2(true);
                }}
              >
                打开
              </Button>
              <Space size={10} direction="horizontal" />
              <Button
                onClick={() => {
                  setCollapse2(false);
                }}
              >
                关闭
              </Button>
            </div>

            <Space direction="vertical" />

            <div
              style={{
                ...horizontalCSS,
              }}
            >
              <SlideLayout.Overlay
                direction="right"
                onAfterClose={() => {
                  setCollapse2(false);
                }}
                collapse={collapse2}
              >
                right
              </SlideLayout.Overlay>
            </div>
          </div>
        </FlexLayout.Auto>
      </FlexLayout>

      <FlexLayout direction="horizontal">
        <FlexLayout.Auto>
          <div>
            <h3>top</h3>
            <div>
              <Button
                type="primary"
                onClick={() => {
                  setCollapse3(true);
                }}
              >
                打开
              </Button>
              <Space size={10} direction="horizontal" />
              <Button
                onClick={() => {
                  setCollapse3(false);
                }}
              >
                关闭
              </Button>
            </div>

            <Space direction="vertical" />

            <div style={{ ...verticalCSS }}>
              <SlideLayout.Overlay
                direction="top"
                onAfterClose={() => {
                  setCollapse3(false);
                }}
                collapse={collapse3}
              >
                top
              </SlideLayout.Overlay>
            </div>
          </div>
        </FlexLayout.Auto>

        <FlexLayout.Auto>
          <div>
            <h3>bottom</h3>
            <div>
              <Button
                type="primary"
                onClick={() => {
                  setCollapse4(true);
                }}
              >
                打开
              </Button>
              <Space size={10} direction="horizontal" />
              <Button
                onClick={() => {
                  setCollapse4(false);
                }}
              >
                关闭
              </Button>
            </div>

            <Space direction="vertical" />

            <div
              style={{
                ...verticalCSS,
              }}
            >
              <SlideLayout.Overlay
                direction="bottom"
                onAfterClose={() => {
                  setCollapse4(false);
                }}
                collapse={collapse4}
              >
                bottom
              </SlideLayout.Overlay>
            </div>
          </div>
        </FlexLayout.Auto>
      </FlexLayout>
    </>
  );
};
