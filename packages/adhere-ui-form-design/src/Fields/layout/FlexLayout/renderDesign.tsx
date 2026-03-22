import classNames from 'classnames';
import React, { useMemo } from 'react';
import type { ReactNode } from 'react';

import DesignFieldWrapper from '../../../components/DesignFieldWrapper';
import DroppableContainer from '../../../components/DroppableContainer';
import type { DesignValue } from '../../../types';
import { styleCodeStringToCSSProperties } from '../../../utils';
import InternalFlexLayout, { type InternalFlexLayoutProps } from './InternalFlexLayout';

const selectorPrefix = 'adhere-ui-fd-flex-layout';

function FlexLayoutDesign({ value }: { value: DesignValue }) {
  const {
    id,
    props: { children, styleProps, fieldProps, flexProps },
  } = value;

  const style = useMemo(
    () => styleCodeStringToCSSProperties(styleProps?.styles ?? ''),
    [styleProps],
  );

  return (
    <DesignFieldWrapper
      id={id}
      className={classNames(`${selectorPrefix}-design-field-wrapper`)}
      style={flexProps ?? {}}
    >
      <DroppableContainer
        id={id}
        value={value}
        className={`${selectorPrefix}-droppable-container`}
        style={{
          overflow: 'auto',
        }}
      >
        <InternalFlexLayout
          {...(fieldProps as InternalFlexLayoutProps)}
          id={id}
          style={style ?? {}}
          children={children}
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
