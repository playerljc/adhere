import classNames from 'classnames';
import React, {
  MutableRefObject,
  type PropsWithoutRef,
  type ReactElement,
  type RefAttributes,
  forwardRef,
  memo,
  useContext,
} from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
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

const { useTheme } = ConfigProvider;

/**
 * PlayGround页面组件
 * @component InternalPlayGroundPage
 * @description PlayGround页面主组件，提供完整的页面布局和导航功能
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns JSX.Element
 */
const InternalPlayGroundPage = memo<
  PropsWithoutRef<PlayGroundPageProps> & RefAttributes<HTMLDivElement>
>(
  forwardRef<HTMLDivElement, PlayGroundPageProps>((props, ref) => {
    const {
      className,
      style,
      anchorNavigationClassName,
      anchorNavigationStyle,
      anchorNavigationAutoClassName,
      anchorNavigationAutoStyle,
      anchorNavigationFixedClassName,
      anchorNavigationFixedStyle,
      anchorPosition = {
        top: 77,
        width: 120,
      },
      children,
    } = props;

    const { scrollEl } = useContext(PlayGroundPageContext);

    useTheme<HTMLDivElement>({
      elRef: ref as MutableRefObject<HTMLDivElement | null>,
      group: 'normal',
      displayName: 'Playground',
    });

    /**
     * 获取锚点配置
     * @function getAnchors
     * @returns AnchorConfig[]
     */
    const getAnchors = () => {
      if (!children) return [];
      
      const childrenArray = Array.isArray(children) ? children : [children];
      return childrenArray
        .flat()
        .filter(
          (c) =>
            'type' in c &&
            c.type?.type instanceof Function &&
            c.type?.type === (CodeBoxSection as unknown as ReactElement)?.type,
        )
        .map((c) =>
          c?.props?.config?.map((t: any) => ({
            name: t.name,
            anchor: t.id,
          })),
        )
        ?.flat() || [];
    };

    return (
      <AnchorNavigationContext.Provider
        value={{
          scrollEl: scrollEl!,
        }}
      >
        <div
          ref={ref}
          className={classNames(selectPrefix, className)}
          style={style}
        >
          <AnchorNavigation
            className={anchorNavigationClassName}
            style={anchorNavigationStyle}
            autoClassName={anchorNavigationAutoClassName}
            autoStyle={anchorNavigationAutoStyle}
            fixedClassName={anchorNavigationFixedClassName}
            fixedStyle={anchorNavigationFixedStyle}
            anchors={getAnchors()}
            anchorPosition={anchorPosition}
          >
            <Space.Group direction="vertical">{children}</Space.Group>
          </AnchorNavigation>
        </div>
      </AnchorNavigationContext.Provider>
    );
  }),
);

InternalPlayGroundPage.displayName = 'InternalPlayGroundPage';

/**
 * PlayGround页面组件
 * @component PlayGroundPage
 * @description 导出的PlayGround页面组件，包含所有子组件
 */
const PlayGroundPage = InternalPlayGroundPage as PlayGroundPageComponent;

PlayGroundPage.displayName = 'PlayGroundPage';

// 添加子组件
PlayGroundPage.Section = Section;
PlayGroundPage.CodeBoxSection = CodeBoxSection;
PlayGroundPage.PropsSection = PropsSection;
PlayGroundPage.FunctionPropsSection = FunctionPropsSection;

export default PlayGroundPage;
