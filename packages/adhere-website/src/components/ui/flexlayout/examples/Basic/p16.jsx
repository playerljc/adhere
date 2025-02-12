import { Card } from 'antd';
import React, { useState } from 'react';

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { FlexLayout } from '@baifendian/adhere';

import styles from './base.less';

const { Fixed, Auto } = FlexLayout;

export default () => {
  const [collapsible, setCollapsible] = useState(false);

  return (
    <FlexLayout direction="horizontal" className={styles.Wrapper7} gutter={20}>
      <Fixed span={5} collapseDirection="L" defaultCollapsible={collapsible} collapsedSize={200}>
        <div style={{ height: '100%', overflowY: 'auto' }}>
          第一章：引言 1.1 背景
          随着信息技术的快速发展，企业管理和运营模式正在经历巨大的变革。数字化转型不仅仅是一场技术革命，更是对企业文化、战略规划和市场竞争力的全方位挑战。企业如何顺应数字化浪潮，将直接影响其在市场上的竞争地位。
          1.2 研究目的
          本论文旨在深入研究数字化转型对企业效率的具体影响，探讨数字化技术在不同行业的应用情况，并提供一些建议，帮助企业更好地利用数字化工具提升管理效率和创新能力。
          第二章：数字化转型的定义和背景 2.1 数字化转型的定义
          数字化转型是指企业利用数字技术和数据来改变其业务、文化和运营模式的过程。它不仅仅是采用新的技术工具，更是一场关于创新和变革的战略性决策。
          2.2 数字化转型的背景
          数字化转型的兴起是由多种因素推动的，包括技术的迅猛发展、市场竞争的日益激烈、消费者需求的变化等。企业需要适应这一变革，否则将面临被淘汰的风险
        </div>
      </Fixed>

      <Auto>
        <FlexLayout direction="vertical" gutter={20}>
          <Fixed span={1} collapseDirection="T">
            <div style={{ width: '100%', height: '100%', overflowX: 'auto' }}>
              {collapsible && <MenuFoldOutlined onClick={() => setCollapsible(false)} />}
              {!collapsible && <MenuUnfoldOutlined onClick={() => setCollapsible(true)} />}
            </div>
          </Fixed>

          <Auto>
            <Card>
              第一章：引言 1.1 背景
              随着信息技术的快速发展，企业管理和运营模式正在经历巨大的变革。数字化转型不仅仅是一场技术革命，更是对企业文化、战略规划和市场竞争力的全方位挑战。企业如何顺应数字化浪潮，将直接影响其在市场上的竞争地位。
              1.2 研究目的
              本论文旨在深入研究数字化转型对企业效率的具体影响，探讨数字化技术在不同行业的应用情况，并提供一些建议，帮助企业更好地利用数字化工具提升管理效率和创新能力。
              第二章：数字化转型的定义和背景 2.1 数字化转型的定义
              数字化转型是指企业利用数字技术和数据来改变其业务、文化和运营模式的过程。它不仅仅是采用新的技术工具，更是一场关于创新和变革的战略性决策。
              2.2 数字化转型的背景
              数字化转型的兴起是由多种因素推动的，包括技术的迅猛发展、市场竞争的日益激烈、消费者需求的变化等。企业需要适应这一变革，否则将面临被淘汰的风险
            </Card>
          </Auto>
        </FlexLayout>
      </Auto>
    </FlexLayout>
  );
};
