import { Button } from 'antd';
import React, { useRef } from 'react';

import { Space, StickupLayout } from '@baifendian/adhere';

import '../index.less';
import styles from './examples.less';

const { Item } = StickupLayout;

export default () => {
  const ref = useRef();

  return (
    <>
      <Space.Group direction="horizontal" size={10}>
        <Button
          type="primary"
          onClick={() => {
            ref.current.scrollToByIndex(5);
          }}
        >
          滚动到底部(动画)
        </Button>
        <Button
          onClick={() => {
            ref.current.scrollToByIndex(0);
          }}
        >
          置顶(动画)
        </Button>
        <Button
          type="primary"
          onClick={() => {
            ref.current.scrollToByIndex(5, 0);
          }}
        >
          滚动到底部(无动画)
        </Button>
        <Button
          onClick={() => {
            ref.current.scrollToByIndex(0, 0);
          }}
        >
          置顶(无动画)
        </Button>
      </Space.Group>

      <Space direction="vertical" />

      <div className={styles.Wrapper}>
        <StickupLayout ref={ref}>
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
  );
};
