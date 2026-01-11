import React, { useMemo } from 'react';
import type { ReactNode } from 'react';

import DesignFieldWrapper from '../../../components/DesignFieldWrapper';
import DroppableContainer from '../../../components/DroppableContainer';
import type { DesignValue } from '../../../types';
import { styleCodeStringToCSSProperties } from '../../../utils';
import InternalFlowLayout, { type InternalFlowLayoutProps } from './InternalFlowLayout';

const selectorPrefix = 'adhere-ui-fd-flow-layout';

function FlowLayoutDesign({ value }: { value: DesignValue }) {
  const {
    id,
    props: { children, styleProps, fieldProps },
  } = value;

  const style = useMemo(
    () => styleCodeStringToCSSProperties(styleProps?.styles ?? ''),
    [styleProps],
  );

  return (
    <DesignFieldWrapper id={id} className={`${selectorPrefix}-design-field-wrapper`}>
      <DroppableContainer
        id={id}
        value={value}
        className={`${selectorPrefix}-droppable-container`}
        style={{
          overflow: 'auto',
        }}
      >
        <InternalFlowLayout
          {...(fieldProps as InternalFlowLayoutProps)}
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
  return <FlowLayoutDesign value={value} />;
}
