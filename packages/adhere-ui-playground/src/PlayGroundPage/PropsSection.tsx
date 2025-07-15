import React, { memo } from 'react';

import Space from '@baifendian/adhere-ui-space';

import Props from '../Props';
import type { PropsSectionProps } from '../types';
import Section from './Section';

/**
 * 属性区块组件
 * @component PropsSection
 * @description 用于展示组件属性说明的区块组件
 * @param props - 组件属性
 * @returns JSX.Element
 */
const PropsSection = memo<PropsSectionProps>((props) => {
  const { title, extra, config = [] } = props;

  return (
    <Section title={title} extra={extra}>
      <Space.Group direction="vertical">
        {config.map((c, index) => (
          <Props key={index + 1} {...c} />
        ))}
      </Space.Group>
    </Section>
  );
});

PropsSection.displayName = 'PropsSection';

export default PropsSection;
