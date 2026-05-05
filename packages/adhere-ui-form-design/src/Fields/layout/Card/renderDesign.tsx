import classNames from 'classnames';
import React, { type CSSProperties, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';

import { DesignContext } from '../../../Design/Context';
import { SELECT_PREFIX } from '../../../constant';
import DesignFieldWrapper from '../../../components/DesignFieldWrapper';
import DroppableContainer from '../../../components/DroppableContainer';
import type { DesignValue } from '../../../types';
import { isRootFieldId, normalizeDesignChildren } from '../../../utils';
import InternalCard, { type InternalCardLayoutProps } from './InternalCard';
import { resolveFieldPropsForDesignEditor } from './resolveFieldPropsForDesignEditor';

const selectorPrefix = `${SELECT_PREFIX}-layout`;

function CardLayoutDesign({ value }: { value: DesignValue }) {
  const { id, props } = value;
  const { children, styleProps, flexProps, fieldActionTypes } = props;

  const designContext = useContext(DesignContext);
  const terminal = designContext.getTerminal();
  const isFormMode = designContext.mode === 'form';
  const fieldProps = useMemo(
    () => resolveFieldPropsForDesignEditor(props, terminal),
    [props, terminal],
  );

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
      fieldActionTypes={fieldActionTypes}
      className={classNames(`${selectorPrefix}-design-field-wrapper`, {
        [`${selectorPrefix}-design-field-wrapper-fill`]: isRootFieldId(id),
        [`${selectorPrefix}-design-field-wrapper-no-border`]: isRootFieldId(id),
      })}
      style={targetFlexStyle}
    >
      <DroppableContainer
        id={id}
        value={value}
        className={classNames(`${selectorPrefix}-droppable-container`, {
          [`${selectorPrefix}-droppable-container-design-mode`]: !isFormMode,
        })}
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
