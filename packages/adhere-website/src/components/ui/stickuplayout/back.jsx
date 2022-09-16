import { Button } from 'antd';
import React, { useRef } from 'react';

import { Space, StickupLayout } from '@baifendian/adhere';

import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';
import Props from '@/lib/Props';

import './index.less';

const { Item } = StickupLayout;

export default () => {
  const ref1 = useRef();

  return (
    <div className="Page StickupLayout">
      <h1>StickupLayout</h1>
      <p>滚动固定头额布局</p>
      <p>父元素需要固定高度</p>

      <Props
        border
        title="SplitLayout"
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
            params: 'fixedClassName',
            desc: '固定头附加的样式表',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'fixedStyle',
            desc: '固定头的样式',
            type: 'React.CSSProperties',
            defaultVal: '',
          },
          {
            params: 'innerClassName',
            desc: '内部附加的样式表',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'innerStyle',
            desc: '内部附加的样式',
            type: 'React.CSSProperties',
            defaultVal: '',
          },
          {
            params: 'onChange',
            desc: '滚动到固定区域',
            type: 'Function',
            defaultVal: '',
          },
        ]}
      />

      <Space />

      <FunctionProps
        border
        title="方法"
        data={[
          {
            name: 'scrollToByIndex',
            desc: '滚动到指定所引出',
            modifier: 'public',
            params: [
              {
                name: 'index',
                desc: '滚动到的索引',
                type: 'number',
                defaultVal: '',
                required: 'true',
              },
              {
                name: 'duration',
                desc: '滚动的时间',
                type: 'number',
                defaultVal: '600',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'scrollToByHeaderEl',
            desc: '滚动到指定el',
            modifier: 'public',
            params: [
              {
                name: 'headerEl',
                desc: '指定的el',
                type: 'HtmlElement',
                defaultVal: '',
                required: 'true',
              },
              {
                name: 'duration',
                desc: '滚动的时间',
                type: 'number',
                defaultVal: '300',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
        ]}
      />

      <Space />

      <Props
        border
        title="SplitLayout.Item"
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
        ]}
      />

      <h2>基本使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import { StickupLayout, Space } from '@baifendian/adhere';

  <div style={{ height: 500, overflow: 'hidden' }}>
    <StickupLayout>
      <Item
        title={<span className="title">基本参数</span>}
        content={
          <table>
            <tr>
              <td>厂商指导价(元)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>本地参考底价(元)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>厂商</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>级别</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>能源类型</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>上市时间</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>最大功率(KW)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>最大扭矩(NH)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>发动机</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        }
      />

      <Item
        title={<span className="title">车身</span>}
        content={
          <table>
            <tr>
              <td>长度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>宽度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>高度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>轴距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>前轮距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>后轮距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>车身结构</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>最大扭矩(NH)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>最大扭矩(NH)</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        }
      />

      <Item
        title={<span className="title">发动机</span>}
        content={
          <table>
            <tr>
              <td>长度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>宽度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>高度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>轴距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>前轮距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>后轮距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>车身结构</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>最大扭矩(NH)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>最大扭矩(NH)</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        }
      />

      <Item
        title={<span className="title">变速箱</span>}
        content={
          <table>
            <tr>
              <td>长度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>宽度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>高度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>轴距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>前轮距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>后轮距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>车身结构</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>最大扭矩(NH)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>最大扭矩(NH)</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        }
      />

      <Item
        title={<span className="title">车轮制动</span>}
        content={
          <table>
            <tr>
              <td>长度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>宽度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>高度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>轴距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>前轮距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>后轮距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>车身结构</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>最大扭矩(NH)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>最大扭矩(NH)</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        }
      />

      <Item
        title={<span className="title">主/被动安全装备</span>}
        content={
          <table>
            <tr>
              <td>长度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>宽度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>高度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>轴距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>前轮距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>后轮距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>车身结构</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>最大扭矩(NH)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>最大扭矩(NH)</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        }
      />
    </StickupLayout>
  </div>
      `}
      >
        <div style={{ height: 500, overflow: 'hidden' }}>
          <StickupLayout>
            <Item
              title={<span className="title">基本参数</span>}
              content={
                <table>
                  <tr>
                    <td>厂商指导价(元)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>本地参考底价(元)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>厂商</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>级别</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>能源类型</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>上市时间</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大功率(KW)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>发动机</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              }
            />

            <Item
              title={<span className="title">车身</span>}
              content={
                <table>
                  <tr>
                    <td>长度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>宽度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>高度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>轴距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>前轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>后轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>车身结构</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              }
            />

            <Item
              title={<span className="title">发动机</span>}
              content={
                <table>
                  <tr>
                    <td>长度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>宽度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>高度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>轴距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>前轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>后轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>车身结构</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              }
            />

            <Item
              title={<span className="title">变速箱</span>}
              content={
                <table>
                  <tr>
                    <td>长度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>宽度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>高度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>轴距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>前轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>后轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>车身结构</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              }
            />

            <Item
              title={<span className="title">车轮制动</span>}
              content={
                <table>
                  <tr>
                    <td>长度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>宽度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>高度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>轴距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>前轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>后轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>车身结构</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              }
            />

            <Item
              title={<span className="title">主/被动安全装备</span>}
              content={
                <table>
                  <tr>
                    <td>长度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>宽度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>高度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>轴距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>前轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>后轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>车身结构</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              }
            />
          </StickupLayout>
        </div>
      </Playground>

      <h2>滚动到指定位置</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import { StickupLayout, Space } from '@baifendian/adhere';

  <Space.Group direction="horizontal" size={10}>
    <Button
      type="primary"
      onClick={() => {
        ref1.current.scrollToByIndex(5);
      }}
    >
      滚动到底部(动画)
    </Button>
    <Button
      onClick={() => {
        ref1.current.scrollToByIndex(0);
      }}
    >
      置顶(动画)
    </Button>
    <Button
      type="primary"
      onClick={() => {
        ref1.current.scrollToByIndex(5, 0);
      }}
    >
      滚动到底部(无动画)
    </Button>
    <Button
      onClick={() => {
        ref1.current.scrollToByIndex(0, 0);
      }}
    >
      置顶(无动画)
    </Button>
  </Space.Group>

  <Space />

  <div style={{ height: 500, overflow: 'hidden' }}>
    <StickupLayout ref={ref1}>
      <Item
        title={<span className="title">基本参数</span>}
        content={
          <table>
            <tr>
              <td>厂商指导价(元)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>本地参考底价(元)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>厂商</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>级别</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>能源类型</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>上市时间</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>最大功率(KW)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>最大扭矩(NH)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>发动机</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        }
      />

      <Item
        title={<span className="title">车身</span>}
        content={
          <table>
            <tr>
              <td>长度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>宽度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>高度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>轴距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>前轮距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>后轮距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>车身结构</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>最大扭矩(NH)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>最大扭矩(NH)</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        }
      />

      <Item
        title={<span className="title">发动机</span>}
        content={
          <table>
            <tr>
              <td>长度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>宽度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>高度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>轴距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>前轮距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>后轮距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>车身结构</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>最大扭矩(NH)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>最大扭矩(NH)</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        }
      />

      <Item
        title={<span className="title">变速箱</span>}
        content={
          <table>
            <tr>
              <td>长度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>宽度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>高度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>轴距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>前轮距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>后轮距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>车身结构</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>最大扭矩(NH)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>最大扭矩(NH)</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        }
      />

      <Item
        title={<span className="title">车轮制动</span>}
        content={
          <table>
            <tr>
              <td>长度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>宽度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>高度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>轴距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>前轮距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>后轮距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>车身结构</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>最大扭矩(NH)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>最大扭矩(NH)</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        }
      />

      <Item
        title={<span className="title">主/被动安全装备</span>}
        content={
          <table>
            <tr>
              <td>长度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>宽度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>高度(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>轴距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>前轮距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>后轮距(mm)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>车身结构</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>最大扭矩(NH)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>最大扭矩(NH)</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        }
      />
    </StickupLayout>
  </div>
      `}
      >
        <Space.Group direction="horizontal" size={10}>
          <Button
            type="primary"
            onClick={() => {
              ref1.current.scrollToByIndex(5);
            }}
          >
            滚动到底部(动画)
          </Button>
          <Button
            onClick={() => {
              ref1.current.scrollToByIndex(0);
            }}
          >
            置顶(动画)
          </Button>
          <Button
            type="primary"
            onClick={() => {
              ref1.current.scrollToByIndex(5, 0);
            }}
          >
            滚动到底部(无动画)
          </Button>
          <Button
            onClick={() => {
              ref1.current.scrollToByIndex(0, 0);
            }}
          >
            置顶(无动画)
          </Button>
        </Space.Group>

        <Space />

        <div style={{ height: 500, overflow: 'hidden' }}>
          <StickupLayout ref={ref1}>
            <Item
              title={<span className="title">基本参数</span>}
              content={
                <table>
                  <tr>
                    <td>厂商指导价(元)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>本地参考底价(元)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>厂商</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>级别</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>能源类型</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>上市时间</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大功率(KW)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>发动机</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              }
            />

            <Item
              title={<span className="title">车身</span>}
              content={
                <table>
                  <tr>
                    <td>长度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>宽度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>高度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>轴距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>前轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>后轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>车身结构</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              }
            />

            <Item
              title={<span className="title">发动机</span>}
              content={
                <table>
                  <tr>
                    <td>长度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>宽度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>高度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>轴距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>前轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>后轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>车身结构</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              }
            />

            <Item
              title={<span className="title">变速箱</span>}
              content={
                <table>
                  <tr>
                    <td>长度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>宽度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>高度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>轴距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>前轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>后轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>车身结构</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              }
            />

            <Item
              title={<span className="title">车轮制动</span>}
              content={
                <table>
                  <tr>
                    <td>长度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>宽度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>高度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>轴距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>前轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>后轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>车身结构</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              }
            />

            <Item
              title={<span className="title">主/被动安全装备</span>}
              content={
                <table>
                  <tr>
                    <td>长度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>宽度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>高度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>轴距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>前轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>后轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>车身结构</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              }
            />
          </StickupLayout>
        </div>
      </Playground>
    </div>
  );
};
