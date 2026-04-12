import classNames from 'classnames';
import React, { type CSSProperties, useMemo } from 'react';
import type { ReactNode } from 'react';

import DesignFieldWrapper from '../../../components/DesignFieldWrapper';
import DroppableContainer from '../../../components/DroppableContainer';
import type { DesignValue } from '../../../types';
import {
  isRootFieldId,
  normalizeDesignChildren,
  styleCodeStringToCSSProperties,
} from '../../../utils';
import InternalFlexLayout, { type InternalFlexLayoutProps } from './InternalFlexLayout';

const selectorPrefix = 'adhere-ui-fd-layout';

function FlexLayoutDesign({ value }: { value: DesignValue }) {
  const {
    id,
    props: { children, styleProps, fieldProps, flexProps },
  } = value;

  const resolvedChildren = useMemo<DesignValue[] | undefined>(() => {
    return normalizeDesignChildren(children, { returnUndefinedIfEmpty: true });
  }, [children]);

  const style = useMemo(
    () => styleCodeStringToCSSProperties(styleProps?.styles ?? ''),
    [styleProps],
  );

  const targetFlexStyle = useMemo<CSSProperties>(() => {
    const { minSize, scroll, ..._flexProps } = flexProps ?? {};

    return {
      ..._flexProps,
      minWidth: minSize ? 0 : 'initial',
      minHeight: minSize ? 0 : 'initial',
    };
  }, [flexProps]);

  const targetContainerStyle = useMemo(() => {
    const { scroll } = flexProps ?? {};

    if (isRootFieldId(id)) {
      return {
        overflow: 'auto',
      };
    }

    return {
      overflow: scroll ? 'auto' : 'hidden',
    };
  }, [flexProps, id]);

  return (
    <DesignFieldWrapper
      id={id}
      className={classNames(`${selectorPrefix}-design-field-wrapper`, {
        [`${selectorPrefix}-design-field-wrapper-fill`]: isRootFieldId(id),
        [`${selectorPrefix}-design-field-wrapper-no-border`]: isRootFieldId(id),
      })}
      style={targetFlexStyle}
    >
      <DroppableContainer
        id={id}
        value={value}
        className={`${selectorPrefix}-droppable-container`}
        style={targetContainerStyle}
      >
        <InternalFlexLayout
          {...(fieldProps as InternalFlexLayoutProps)}
          id={id}
          style={style ?? {}}
          children={resolvedChildren}
        />
      </DroppableContainer>
    </DesignFieldWrapper>
  );
}

/**
 * renderDesign
 * @param props
 */
export function renderDesign({ value }: { value: DesignValue }): ReactNode {
  return <FlexLayoutDesign value={value} />;
}
