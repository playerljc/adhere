import type { CardProps } from 'antd';
import classNames from 'classnames';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import React, { useContext, useMemo } from 'react';
import type { CSSProperties, FC, ReactNode } from 'react';

import { Card } from '@baifendian/adhere-ui-anthoc';

import { DesignContext } from '../../../Design/Context';
import { SELECT_PREFIX } from '../../../constant';
import type { DesignValue, I18nValue, StyleProps } from '../../../types';
import { resolveI18nText, styleCodeStringToCSSProperties } from '../../../utils';
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

const selectorPrefix = `${SELECT_PREFIX}-card-layout`;

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
  const { intl } = useContext(ConfigProvider.Context);
  const lang = intl?.lang ?? 'zh_CN';

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

    const displayTitle =
      title == null
        ? undefined
        : React.isValidElement(title)
          ? title
          : resolveI18nText(title as I18nValue | string | undefined, lang) || undefined;

    return {
      classNames: {
        root: classNames(selectorPrefix, {}),
      },
      styles: {
        root: style,
        header: headerStyle,
        body: bodyStyle,
      },
      title: displayTitle,
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
    lang,
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
