import React, { useContext, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Space from '@baifendian/adhere-ui-space';

import { PlayGroundPageContext } from './Context';
import { AnchorNavigationContext } from '../AnchorNavigationContext';
import AnchorNavigation from '../AnchorNavigation';

import Section from './Section';
import CodeBoxSection from './CodeBoxSection';
import PropsSection from './PropsSection';
import FunctionPropsSection from './FunctionPropsSection';

const selectPrefix = 'adhere-ui-playground-page';

/**
 * PlayGroundPage
 * @constructor
 */
function PlayGroundPage(props, ref) {
  const { scrollEl } = useContext(PlayGroundPageContext);

  function getAnchors() {
    const { children } = props;

    return children
      .filter((c) => 'type' in c && c.type instanceof Function && c.type === CodeBoxSection)
      .map((c) =>
        c?.props?.config?.map((t) => ({
          name: t.name,
          anchor: t.id,
        })),
      )?.flat();
  }

  return (
    <AnchorNavigationContext.Provider
      value={{
        // @ts-ignore
        scrollEl,
      }}
    >
      <div
        ref={ref}
        className={`${classNames(selectPrefix, (props.className || '').split(/\s+/))}`}
        style={props.style || {}}
      >
        {/*@ts-ignore*/}
        <AnchorNavigation anchors={getAnchors()} anchorPosition={props.anchorPosition}>
          <Space.Group direction="vertical">{props.children}</Space.Group>
        </AnchorNavigation>
      </div>
    </AnchorNavigationContext.Provider>
  );
}

PlayGroundPage.defaultProps = {
  className: '',
  style: {},
  anchorPosition: {
    top: 77,
    width: 120,
  },
};

PlayGroundPage.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  anchorPosition: PropTypes.shape({
    top: PropTypes.number,
    width: PropTypes.number,
  }),
};

// @ts-ignore*
const PlayGroundPageForward = forwardRef(PlayGroundPage);

// @ts-ignore*
PlayGroundPageForward.Section = Section;

// @ts-ignore*
PlayGroundPageForward.CodeBoxSection = CodeBoxSection;

// @ts-ignore*
PlayGroundPageForward.PropsSection = PropsSection;

// @ts-ignore*
PlayGroundPageForward.FunctionPropsSection = FunctionPropsSection;

export default PlayGroundPageForward;
