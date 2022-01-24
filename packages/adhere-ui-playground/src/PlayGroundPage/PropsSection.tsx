import React from 'react';
import PropTypes from 'prop-types';

import Space from '@baifendian/adhere-ui-space';
import Section, { SectionDefaultProps, SectionPropTypes } from './Section';
import Props, { PropsPropTypes } from '../Props';

/**
 * PropsSection
 * @param title
 * @param extra
 * @param config
 * @constructor
 */
function PropsSection({ title, extra, config }) {
  return (
    // @ts-ignore
    <Section title={title} extra={extra}>
      <Space.Group direction="vertical">
        {(config || []).map((c, index) => (
          // @ts-ignore*
          <Props key={index + 1} {...c} />
        ))}
      </Space.Group>
    </Section>
  );
}

PropsSection.defaultProps = {
  ...SectionDefaultProps,
  config: [],
};

PropsSection.propTypes = {
  ...SectionPropTypes,
  // @ts-ignore*
  config: PropTypes.arrayOf(PropsPropTypes),
};

export default PropsSection;
