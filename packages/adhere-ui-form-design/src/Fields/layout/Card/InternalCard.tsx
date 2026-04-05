import type { CardProps } from 'antd';
import classNames from 'classnames';
import React, { useContext, useMemo } from 'react';
import type { CSSProperties, FC, ReactNode } from 'react';

import { Card } from '@baifendian/adhere-ui-anthoc';

import { DesignContext } from '../../../Design/Context';
import type { DesignValue, StyleProps } from '../../../types';
import { styleCodeStringToCSSProperties } from '../../../utils';
import { parseDesign } from '../../parse';

export interface InternalCardLayoutProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children?: DesignValue[];
  title?: ReactNode;
  extra?: ReactNode;
  variant?: CardProps['variant'];
  size?: CardProps['size'];
  hoverable?: boolean;
  loading?: boolean;
  type?: CardProps['type'];
  styleProps?: StyleProps;
}

const selectorPrefix = 'adhere-ui-fd-card-layout';

/**
 * InternalCard
 * @description 设计器中的 Card 容器，属性对齐 antd Card
 */
const InternalCard: FC<InternalCardLayoutProps> = ({
  id,
  children,
  className,
  title,
  extra,
  variant,
  size,
  hoverable,
  loading,
  type,
  styleProps,
}) => {
  const context = useContext(DesignContext);

  const targetProps = useMemo(() => {
    const parsedChildren = (children?.map((_item) =>
      parseDesign({
        parentId: id,
        value: _item,
        context,
      }),
    ) ?? []) as React.ReactNode;

    const style = styleCodeStringToCSSProperties(styleProps?.styles ?? '');
    const headerStyle = styleCodeStringToCSSProperties(styleProps?.headerStyles ?? '');
    const bodyStyle = styleCodeStringToCSSProperties(styleProps?.bodyStyles ?? '');

    return {
      classNames: {
        root: classNames(selectorPrefix, {}),
      },
      styles: {
        root: style,
        header: headerStyle,
        body: bodyStyle,
      },
      title,
      extra,
      variant,
      size,
      hoverable,
      loading,
      type,
      children: parsedChildren,
    };
  }, [
    children,
    className,
    context,
    extra,
    hoverable,
    id,
    loading,
    size,
    styleProps,
    title,
    type,
    variant,
  ]);

  return <Card {...targetProps} />;
};

export default InternalCard;
