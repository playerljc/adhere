import React, { useState } from 'react';
import { Button } from 'antd';

import { SlideLayout, FlexLayout, Space } from '@baifendian/adhere';
import Props from '@/lib/Props';
import Playground from '@/lib/Playground';

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

  const [collapse5, setCollapse5] = useState(true);

  const [collapse6, setCollapse6] = useState(true);

  const [collapse7, setCollapse7] = useState(true);

  const [collapse8, setCollapse8] = useState(true);

  return (
    <div className="Page SlideLayout">
      <h1>SlideLayout</h1>
      <p>抽屉布局</p>

      <Props
        border
        title="Overlay"
        data={[
          {
            params: 'className',
            desc: '附加的样式表',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'style',
            desc: '附加的样式',
            type: 'React.CSSProperties',
            defaultVal: '',
          },
          {
            params: 'width',
            desc: '宽度',
            type: 'string',
            defaultVal: '80%',
          },
          {
            params: 'height',
            desc: '高度',
            type: 'string',
            defaultVal: '40%',
          },
          {
            params: 'mask',
            desc: '是否有遮罩',
            type: 'boolean',
            defaultVal: 'true',
          },
          {
            params: 'zIndex',
            desc: '显示层级',
            type: 'number',
            defaultVal: '9999',
          },
          {
            params: 'time',
            desc: '过渡时间',
            type: 'number',
            defaultVal: '300ms',
          },
          {
            params: 'direction',
            desc: "方向['left', 'right', 'top', 'bottom']",
            type: 'string',
            defaultVal: 'left',
          },
          {
            params: 'collapse',
            desc: '显示或隐藏',
            type: 'boolean',
            defaultVal: 'false',
          },
          {
            params: 'onBeforeShow',
            desc: '显示之前',
            type: 'Function',
            defaultVal: '',
          },
          {
            params: 'onBeforeClose',
            desc: '隐藏之前',
            type: 'Function',
            defaultVal: '',
          },
          {
            params: 'onAfterShow',
            desc: '显示之后',
            type: 'Function',
            defaultVal: '',
          },
          {
            params: 'onAfterClose',
            desc: '隐藏之后',
            type: 'Function',
            defaultVal: '',
          },
        ]}
      />

      <Space />

      <Props
        border
        title="Push"
        data={[
          {
            params: 'masterClassName',
            desc: '附加的样式表',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'masterStyle',
            desc: '附加的样式',
            type: 'React.CSSProperties',
            defaultVal: '',
          },
          {
            params: 'className',
            desc: '附加的样式表',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'style',
            desc: '附加的样式',
            type: 'React.CSSProperties',
            defaultVal: '',
          },
          {
            params: 'slaveClassName',
            desc: '附加的样式表',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'slaveStyle',
            desc: '附加的样式',
            type: 'React.CSSProperties',
            defaultVal: '',
          },
          {
            params: 'width',
            desc: '宽度',
            type: 'string',
            defaultVal: '80%',
          },
          {
            params: 'height',
            desc: '高度',
            type: 'string',
            defaultVal: '40%',
          },
          {
            params: 'mask',
            desc: '是否有遮罩',
            type: 'boolean',
            defaultVal: 'true',
          },
          {
            params: 'zIndex',
            desc: '显示层级',
            type: 'number',
            defaultVal: '9999',
          },
          {
            params: 'time',
            desc: '过渡时间',
            type: 'number',
            defaultVal: '300ms',
          },
          {
            params: 'direction',
            desc: "方向['left', 'right']",
            type: 'string',
            defaultVal: 'left',
          },
          {
            params: 'collapse',
            desc: '显示或隐藏',
            type: 'boolean',
            defaultVal: 'false',
          },
          {
            params: 'onBeforeShow',
            desc: '显示之前',
            type: 'Function',
            defaultVal: '',
          },
          {
            params: 'onBeforeClose',
            desc: '隐藏之前',
            type: 'Function',
            defaultVal: '',
          },
          {
            params: 'onAfterShow',
            desc: '显示之后',
            type: 'Function',
            defaultVal: '',
          },
          {
            params: 'onAfterClose',
            desc: '隐藏之后',
            type: 'Function',
            defaultVal: '',
          },
          {
            params: 'slide',
            desc: '抽屉面板JSX',
            type: 'React.ReactElement',
            defaultVal: '',
          },
          {
            params: 'master',
            desc: '抽屉主面板JSX',
            type: 'React.ReactElement',
            defaultVal: '',
          },
        ]}
      />

      <Space />

      <Props
        border
        title="Reveal"
        data={[
          {
            params: 'masterClassName',
            desc: '附加的样式表',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'masterStyle',
            desc: '附加的样式',
            type: 'React.CSSProperties',
            defaultVal: '',
          },
          {
            params: 'className',
            desc: '附加的样式表',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'style',
            desc: '附加的样式',
            type: 'React.CSSProperties',
            defaultVal: '',
          },
          {
            params: 'slaveClassName',
            desc: '附加的样式表',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'slaveStyle',
            desc: '附加的样式',
            type: 'React.CSSProperties',
            defaultVal: '',
          },
          {
            params: 'width',
            desc: '宽度',
            type: 'string',
            defaultVal: '80%',
          },
          {
            params: 'height',
            desc: '高度',
            type: 'string',
            defaultVal: '40%',
          },
          {
            params: 'mask',
            desc: '是否有遮罩',
            type: 'boolean',
            defaultVal: 'true',
          },
          {
            params: 'zIndex',
            desc: '显示层级',
            type: 'number',
            defaultVal: '9999',
          },
          {
            params: 'time',
            desc: '过渡时间',
            type: 'number',
            defaultVal: '300ms',
          },
          {
            params: 'direction',
            desc: "方向['left', 'right']",
            type: 'string',
            defaultVal: 'left',
          },
          {
            params: 'collapse',
            desc: '显示或隐藏',
            type: 'boolean',
            defaultVal: 'false',
          },
          {
            params: 'onBeforeShow',
            desc: '显示之前',
            type: 'Function',
            defaultVal: '',
          },
          {
            params: 'onBeforeClose',
            desc: '隐藏之前',
            type: 'Function',
            defaultVal: '',
          },
          {
            params: 'onAfterShow',
            desc: '显示之后',
            type: 'Function',
            defaultVal: '',
          },
          {
            params: 'onAfterClose',
            desc: '隐藏之后',
            type: 'Function',
            defaultVal: '',
          },
          {
            params: 'slide',
            desc: '抽屉面板JSX',
            type: 'React.ReactElement',
            defaultVal: '',
          },
          {
            params: 'master',
            desc: '抽屉主面板JSX',
            type: 'React.ReactElement',
            defaultVal: '',
          },
        ]}
      />

      <h2>公共代码</h2>
      <Playground
        mode="code"
        scope={{ React }}
        expand
        codeText={`
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
  
  const [collapse1, setCollapse1] = useState(true);

  const [collapse2, setCollapse2] = useState(true);

  const [collapse3, setCollapse3] = useState(true);

  const [collapse4, setCollapse4] = useState(true);

  const [collapse5, setCollapse5] = useState(true);

  const [collapse6, setCollapse6] = useState(true);

  const [collapse7, setCollapse7] = useState(true);

  const [collapse8, setCollapse8] = useState(true);
        `}
      />

      <h2>Overlay</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import { SlideLayout, FlexLayout, Space } from '@baifendian/adhere';
  
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

        <Space />

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

        <Space />

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

        <Space />

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

        <Space />

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
        `}
      >
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

              <Space />

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

              <Space />

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

              <Space />

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

              <Space />

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
      </Playground>

      <h2>Push</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import { SlideLayout, FlexLayout, Space } from '@baifendian/adhere';
  
  <FlexLayout direction="horizontal">
    <FlexLayout.Auto>
      <div>
        <h3>left</h3>
        <div>
          <Button
            type="primary"
            onClick={() => {
              setCollapse5(true);
            }}
          >
            打开
          </Button>
          <Space size={10} direction="horizontal" />
          <Button
            onClick={() => {
              setCollapse5(false);
            }}
          >
            关闭
          </Button>
        </div>

        <Space />

        <div style={{ ...horizontalCSS }}>
          <SlideLayout.Push
            onAfterClose={() => {
              setCollapse5(false);
            }}
            collapse={collapse5}
            slide={<div>left</div>}
            master={<div>Master</div>}
          />
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
              setCollapse6(true);
            }}
          >
            打开
          </Button>
          <Space size={10} direction="horizontal" />
          <Button
            onClick={() => {
              setCollapse6(false);
            }}
          >
            关闭
          </Button>
        </div>

        <Space />

        <div
          style={{
            ...horizontalCSS,
          }}
        >
          <SlideLayout.Push
            direction="right"
            onAfterClose={() => {
              setCollapse6(false);
            }}
            collapse={collapse6}
            slide={<div>right</div>}
            master={<div>Master</div>}
          />
        </div>
      </div>
    </FlexLayout.Auto>
  </FlexLayout>
        `}
      >
        <FlexLayout direction="horizontal">
          <FlexLayout.Auto>
            <div>
              <h3>left</h3>
              <div>
                <Button
                  type="primary"
                  onClick={() => {
                    setCollapse5(true);
                  }}
                >
                  打开
                </Button>
                <Space size={10} direction="horizontal" />
                <Button
                  onClick={() => {
                    setCollapse5(false);
                  }}
                >
                  关闭
                </Button>
              </div>

              <Space />

              <div style={{ ...horizontalCSS }}>
                <SlideLayout.Push
                  onAfterClose={() => {
                    setCollapse5(false);
                  }}
                  collapse={collapse5}
                  slide={<div>left</div>}
                  master={<div>Master</div>}
                />
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
                    setCollapse6(true);
                  }}
                >
                  打开
                </Button>
                <Space size={10} direction="horizontal" />
                <Button
                  onClick={() => {
                    setCollapse6(false);
                  }}
                >
                  关闭
                </Button>
              </div>

              <Space />

              <div
                style={{
                  ...horizontalCSS,
                }}
              >
                <SlideLayout.Push
                  direction="right"
                  onAfterClose={() => {
                    setCollapse6(false);
                  }}
                  collapse={collapse6}
                  slide={<div>right</div>}
                  master={<div>Master</div>}
                />
              </div>
            </div>
          </FlexLayout.Auto>
        </FlexLayout>
      </Playground>

      <h2>Revolving</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import { SlideLayout, FlexLayout, Space } from '@baifendian/adhere';
  
  <FlexLayout direction="horizontal">
    <FlexLayout.Auto>
      <div>
        <h3>Reveal</h3>
        <div>
          <Button
            type="primary"
            onClick={() => {
              setCollapse7(true);
            }}
          >
            打开
          </Button>
          <Space size={10} direction="horizontal" />
          <Button
            onClick={() => {
              setCollapse7(false);
            }}
          >
            关闭
          </Button>
        </div>

        <Space />

        <div style={{ ...horizontalCSS }}>
          <SlideLayout.Revolving
            onAfterClose={() => {
              setCollapse7(false);
            }}
            collapse={collapse7}
            slide={<div>left</div>}
            master={<div>Master</div>}
          />
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
              setCollapse8(true);
            }}
          >
            打开
          </Button>
          <Space size={10} direction="horizontal" />
          <Button
            onClick={() => {
              setCollapse8(false);
            }}
          >
            关闭
          </Button>
        </div>

        <Space />

        <div
          style={{
            ...horizontalCSS,
          }}
        >
          <SlideLayout.Revolving
            direction="right"
            onAfterClose={() => {
              setCollapse8(false);
            }}
            collapse={collapse8}
            slide={<div>right</div>}
            master={<div>Master</div>}
          />
        </div>
      </div>
    </FlexLayout.Auto>
  </FlexLayout>
        `}
      >
        <FlexLayout direction="horizontal">
          <FlexLayout.Auto>
            <div>
              <h3>Reveal</h3>
              <div>
                <Button
                  type="primary"
                  onClick={() => {
                    setCollapse7(true);
                  }}
                >
                  打开
                </Button>
                <Space size={10} direction="horizontal" />
                <Button
                  onClick={() => {
                    setCollapse7(false);
                  }}
                >
                  关闭
                </Button>
              </div>

              <Space />

              <div style={{ ...horizontalCSS }}>
                <SlideLayout.Revolving
                  onAfterClose={() => {
                    setCollapse7(false);
                  }}
                  collapse={collapse7}
                  slide={<div>left</div>}
                  master={<div>Master</div>}
                />
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
                    setCollapse8(true);
                  }}
                >
                  打开
                </Button>
                <Space size={10} direction="horizontal" />
                <Button
                  onClick={() => {
                    setCollapse8(false);
                  }}
                >
                  关闭
                </Button>
              </div>

              <Space />

              <div
                style={{
                  ...horizontalCSS,
                }}
              >
                <SlideLayout.Revolving
                  direction="right"
                  onAfterClose={() => {
                    setCollapse8(false);
                  }}
                  collapse={collapse8}
                  slide={<div>right</div>}
                  master={<div>Master</div>}
                />
              </div>
            </div>
          </FlexLayout.Auto>
        </FlexLayout>
      </Playground>
    </div>
  );
};
