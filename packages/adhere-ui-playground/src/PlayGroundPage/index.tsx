import classNames from 'classnames';
import React, {
  PropsWithoutRef,
  ReactElement,
  RefAttributes,
  forwardRef,
  memo,
  useContext,
} from 'react';

import Space from '@baifendian/adhere-ui-space';

import AnchorNavigation from '../AnchorNavigation';
import { AnchorNavigationContext } from '../AnchorNavigationContext';
import type { PlayGroundPageComponent, PlayGroundPageProps } from '../types';
import CodeBoxSection from './CodeBoxSection';
import { PlayGroundPageContext } from './Context';
import FunctionPropsSection from './FunctionPropsSection';
import PropsSection from './PropsSection';
import Section from './Section';

const selectPrefix = 'adhere-ui-playground-page';

/**
 * PlayGroundPage
 * @constructor
 */
const InternalPlayGroundPage = memo<
  PropsWithoutRef<PlayGroundPageProps> & RefAttributes<HTMLElement>
>(
  forwardRef<HTMLElement, PlayGroundPageProps>((props, ref) => {
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
      console.log('children', children);

      return children
        .flat()
        .filter(
          (c) =>
            'type' in c &&
            c.type?.type instanceof Function &&
            c.type?.type === (CodeBoxSection as unknown as ReactElement)?.type,
        )
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
        <div
          // @ts-ignore
          ref={ref}
          className={`${classNames(selectPrefix, className ?? '')}`}
          style={style ?? {}}
        >
          <AnchorNavigation anchors={getAnchors()} anchorPosition={anchorPosition}>
            <Space.Group direction="vertical">{children}</Space.Group>
          </AnchorNavigation>
        </div>
      </AnchorNavigationContext.Provider>
    );
  }),
);

const PlayGroundPage = InternalPlayGroundPage as PlayGroundPageComponent;

PlayGroundPage.displayName = 'PlayGroundPage';

PlayGroundPage.Section = Section;
PlayGroundPage.CodeBoxSection = CodeBoxSection;
PlayGroundPage.PropsSection = PropsSection;
PlayGroundPage.FunctionPropsSection = FunctionPropsSection;

export default PlayGroundPage;
