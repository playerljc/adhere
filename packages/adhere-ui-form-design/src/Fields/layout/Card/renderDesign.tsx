import classNames from 'classnames';
import React, { type CSSProperties, useMemo } from 'react';
import type { ReactNode } from 'react';

import DesignFieldWrapper from '../../../components/DesignFieldWrapper';
import DroppableContainer from '../../../components/DroppableContainer';
import type { DesignValue } from '../../../types';
import { isRootFieldId, normalizeDesignChildren } from '../../../utils';
import InternalCard, { type InternalCardLayoutProps } from './InternalCard';

const selectorPrefix = 'adhere-ui-fd-layout';

function CardLayoutDesign({ value }: { value: DesignValue }) {
  const {
    id,
    props: { children, styleProps, fieldProps, flexProps },
  } = value;

  const resolvedChildren = useMemo<DesignValue[] | undefined>(() => {
    return normalizeDesignChildren(children, { returnUndefinedIfEmpty: true });
  }, [children]);

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
        <InternalCard
          {...(fieldProps as InternalCardLayoutProps)}
          id={id}
          styleProps={styleProps ?? {}}
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
  return <CardLayoutDesign value={value} />;
}
