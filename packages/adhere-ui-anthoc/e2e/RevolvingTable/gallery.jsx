import React from 'react';

import CustomRender from './custom-render';
import Empty from './empty';
import Normal from './normal';
import RefControl from './ref-control';
import RevolvingConfig from './revolving-config';
import Sizes from './sizes';
import Slots from './slots';
import Theme from './theme';

import '../../src/index.less';

const demos = [
  {
    title: '基础用法',
    description: '固定表头、纵向轮播、奇偶行、省略与列宽',
    Comp: Normal,
  },
  {
    title: '尺寸 size',
    description: 'small / middle / large',
    Comp: Sizes,
  },
  {
    title: '插槽渲染',
    description: 'renderHeaderBefore/After、renderBodyBefore/After',
    Comp: Slots,
  },
  {
    title: '空状态',
    description: '默认 Empty 与自定义 renderEmpty',
    Comp: Empty,
  },
  {
    title: '自定义单元格',
    description: 'columns.render、对齐、省略、百分比列宽',
    Comp: CustomRender,
  },
  {
    title: '轮播配置 revolvingConfig',
    description: 'loop、slidesPerView、speed、autoplay delay',
    Comp: RevolvingConfig,
  },
  {
    title: 'Swiper ref 控制',
    description: 'slidePrev / slideNext / autoplay start|stop',
    Comp: RefControl,
  },
  {
    title: '主题 / CSS 变量',
    description: '大屏看板风格配色覆盖',
    Comp: Theme,
  },
];

/** 聚合全部 RevolvingTable 特性示例，便于本地浏览 */
export default () => {
  return (
    <div style={{ padding: 24, background: '#f5f5f5', minHeight: '100%' }}>
      <h2 style={{ margin: '0 0 8px', fontSize: 20 }}>RevolvingTable Demos</h2>
      <p style={{ margin: '0 0 24px', color: '#8c8c8c' }}>
        覆盖尺寸、插槽、空状态、自定义渲染、轮播配置、ref 控制与主题变量等特性
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {demos.map(({ title, description, Comp }) => (
          <section
            key={title}
            style={{
              background: '#fff',
              borderRadius: 8,
              padding: 16,
              boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
            }}
          >
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 16, fontWeight: 600 }}>{title}</div>
              <div style={{ fontSize: 12, color: '#8c8c8c', marginTop: 4 }}>{description}</div>
            </div>
            <Comp />
          </section>
        ))}
      </div>
    </div>
  );
};
