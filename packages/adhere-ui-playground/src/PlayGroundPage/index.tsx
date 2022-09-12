import React, { useContext, forwardRef, ForwardRefRenderFunction } from 'react';
import classNames from 'classnames';
import Space from '@baifendian/adhere-ui-space';

import { PlayGroundPageContext } from './Context';
import { AnchorNavigationContext } from '../AnchorNavigationContext';
import AnchorNavigation from '../AnchorNavigation';

import Section from './Section';
import CodeBoxSection from './CodeBoxSection';
import PropsSection from './PropsSection';
import FunctionPropsSection from './FunctionPropsSection';

import { PlayGroundPageHOC, PlayGroundPageProps } from '../types';

const selectPrefix = 'adhere-ui-playground-page';

/**
 * PlayGroundPage
 * @constructor
 */
const PlayGroundPage: ForwardRefRenderFunction<HTMLDivElement, PlayGroundPageProps> = (
  props,
  ref,
) => {
  const {
    className = '',
    style = {},
    anchorPosition = {
      top: 77,
      width: 120,
    },
    children,
  } = props;

  const { scrollEl } = useContext(PlayGroundPageContext);

  function getAnchors() {
    return children
      .filter((c) => 'type' in c && c.type instanceof Function && c.type === CodeBoxSection)
      .map((c) =>
        c?.props?.config?.map((t) => ({
          name: t.name,
          anchor: t.id,
        })),
      )
      ?.flat();
  }

  return (
    <AnchorNavigationContext.Provider
      value={{
        scrollEl: scrollEl!,
      }}
    >
      <div ref={ref} className={`${classNames(selectPrefix, className || '')}`} style={style || {}}>
        <AnchorNavigation anchors={getAnchors()} anchorPosition={anchorPosition}>
          <Space.Group direction="vertical">{children}</Space.Group>
        </AnchorNavigation>
      </div>
    </AnchorNavigationContext.Provider>
  );
};

// PlayGroundPage.defaultProps = {
//   className: '',
//   style: {},
//   anchorPosition: {
//     top: 77,
//     width: 120,
//   },
// };
//
// PlayGroundPage.propTypes = {
//   className: PropTypes.string,
//   style: PropTypes.object,
//   anchorPosition: PropTypes.shape({
//     top: PropTypes.number,
//     width: PropTypes.number,
//   }),
// };

// @ts-ignore
const PlayGroundPageForward: PlayGroundPageHOC<HTMLDivElement, PlayGroundPageProps> = forwardRef<
  HTMLDivElement,
  PlayGroundPageProps
>(PlayGroundPage);

PlayGroundPageForward.Section = Section;
PlayGroundPageForward.CodeBoxSection = CodeBoxSection;
PlayGroundPageForward.PropsSection = PropsSection;
PlayGroundPageForward.FunctionPropsSection = FunctionPropsSection;

export default PlayGroundPageForward;
