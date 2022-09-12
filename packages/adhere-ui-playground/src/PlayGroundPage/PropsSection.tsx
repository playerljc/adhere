import React, { FC } from 'react';
// import PropTypes from 'prop-types';

import { PropsSectionProps } from '../types';
import Space from '@baifendian/adhere-ui-space';
import Section from './Section';
import Props from '../Props';

/**
 * PropsSection
 * @constructor
 * @param props
 */
const PropsSection: FC<PropsSectionProps> = (props) => {
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
};

// PropsSection.defaultProps = {
//   ...SectionDefaultProps,
//   config: [],
// };
//
// PropsSection.propTypes = {
//   ...SectionPropTypes,
//   config: PropTypes.arrayOf(PropsPropTypes),
// };

export default PropsSection;
