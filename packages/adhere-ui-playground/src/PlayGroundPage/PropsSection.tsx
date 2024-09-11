import React, { memo } from 'react';

import Space from '@baifendian/adhere-ui-space';

import Props from '../Props';
import { PropsSectionProps } from '../types';
import Section from './Section';

/**
 * PropsSection
 * @constructor
 * @param props
 */
const PropsSection = memo<PropsSectionProps>((props) => {
  const { title, extra, config } = props;

  return (
    <Section title={title} extra={extra}>
      <Space.Group direction="vertical">
        {(config || []).map((c, index) => (
          <Props key={index + 1} {...c} />
        ))}
      </Space.Group>
    </Section>
  );
});

PropsSection.displayName = 'PropsSection';

export default PropsSection;
