import { Button } from 'antd';
import React, { useRef } from 'react';

import { Space, StickupLayout } from '@baifendian/adhere';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import './index.less';

const { Item } = StickupLayout;

export default () => {
  const ref1 = useRef();

  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `基本使用`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '基本使用',
            info: '基本使用',
          },
        },
        codeText: `
  import { StickupLayout, Space } from '@baifendian/adhere'; import {Component} from "react";

  class Item extends Component {
  render() {
    return null
  }
} <div style={{ height: 500, overflow: 'hidden' }}>
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
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ height: 500, overflow: 'hidden' }}>
            <StickupLayout>
              <Item
                title={<span className="title">基本参数</span>}
                content={
                  <table>
                    <tr>
                      <td>厂商指导价(元)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>本地参考底价(元)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>厂商</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>级别</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>能源类型</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>上市时间</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>最大功率(KW)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>最大扭矩(NH)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>发动机</td>
                      <td />
                      <td />
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
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>宽度(mm)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>高度(mm)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>轴距(mm)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>前轮距(mm)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>后轮距(mm)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>车身结构</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>最大扭矩(NH)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>最大扭矩(NH)</td>
                      <td />
                      <td />
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
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>宽度(mm)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>高度(mm)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>轴距(mm)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>前轮距(mm)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>后轮距(mm)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>车身结构</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>最大扭矩(NH)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>最大扭矩(NH)</td>
                      <td />
                      <td />
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
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>宽度(mm)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>高度(mm)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>轴距(mm)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>前轮距(mm)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>后轮距(mm)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>车身结构</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>最大扭矩(NH)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>最大扭矩(NH)</td>
                      <td />
                      <td />
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
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>宽度(mm)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>高度(mm)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>轴距(mm)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>前轮距(mm)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>后轮距(mm)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>车身结构</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>最大扭矩(NH)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>最大扭矩(NH)</td>
                      <td />
                      <td />
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
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>宽度(mm)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>高度(mm)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>轴距(mm)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>前轮距(mm)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>后轮距(mm)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>车身结构</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>最大扭矩(NH)</td>
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>最大扭矩(NH)</td>
                      <td />
                      <td />
                    </tr>
                  </table>
                }
              />
            </StickupLayout>
          </div>
        ),
      },
      {
        id: `p2`,
        name: `滚动到指定位置`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '滚动到指定位置',
            info: '滚动到指定位置',
          },
        },
        codeText: `
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

  <Space direction="vertical" />

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
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
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

            <Space direction="vertical" />

            <div style={{ height: 500, overflow: 'hidden' }}>
              <StickupLayout ref={ref1}>
                <Item
                  title={<span className="title">基本参数</span>}
                  content={
                    <table>
                      <tr>
                        <td>厂商指导价(元)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>本地参考底价(元)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>厂商</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>级别</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>能源类型</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>上市时间</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>最大功率(KW)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>发动机</td>
                        <td />
                        <td />
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
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td />
                        <td />
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
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td />
                        <td />
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
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td />
                        <td />
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
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td />
                        <td />
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
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td />
                        <td />
                      </tr>
                    </table>
                  }
                />
              </StickupLayout>
            </div>
          </>
        ),
      },
    ];
  }

  return (
    <PlayGroundPage className="StickupLayout">
      <Section title="StickupLayout">
        <p>滚动固定头额布局</p>
        <p>父元素需要固定高度</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'SplitLayout',
            data: [
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
            ],
          },
          {
            border: true,
            title: 'SplitLayout.Item',
            data: [
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
            ],
          },
        ]}
      />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: '方法',
            data: [
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
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
