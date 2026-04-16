// import React from 'react';
// import type { ElementType, ReactNode } from 'react';
//
// import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
//
// import { LabelDesign, ValueDesign } from '../components';
// import type { DesignContextType, DesignValue } from '../types';
// import { computeLabelValueColSpan, findDesignValueById } from '../utils';
//
// type FieldProps = Record<string, any>;
//
// export function createSimpleFieldRenderDesign(Component: ElementType) {
//   return function renderDesign({
//     parentId,
//     value,
//     context,
//   }: {
//     parentId?: string;
//     value: DesignValue;
//     context: DesignContextType;
//   }): DataItemRow {
//     const {
//       id,
//       props: { formItemProps, fieldProps, styleProps },
//     } = value;
//
//     const { getDesignValue } = context;
//     const designValue = getDesignValue() as DesignValue;
//     const parent = findDesignValueById(parentId as string, designValue) as DesignValue;
//
//     const { labelColSpan, valueColSpan } = computeLabelValueColSpan(parent, formItemProps);
//
//     const fill = fieldProps?.fill;
//
//     return {
//       key: id,
//       require: false,
//       labelColSpan,
//       valueColSpan,
//       label: <LabelDesign formItemProps={formItemProps} styleProps={styleProps} />,
//       value: (
//         <ValueDesign value={value}>
//           {({ fieldProps, style, actions }) => {
//             const { children, ...rest } = (fieldProps ?? {}) as FieldProps;
//
//             return React.createElement(
//               Component,
//               {
//                 ...(rest as FieldProps),
//                 style: {
//                   flex: fill ? '1' : 'none',
//                   ...(style ?? {}),
//                 },
//                 ...actions,
//               },
//               children as ReactNode,
//             );
//           }}
//         </ValueDesign>
//       ),
//     };
//   };
// }

/*** --------------- 下方是放在容器中的设置 ------------ ***/
import classNames from 'classnames';
import React, { type CSSProperties, useContext, useMemo } from 'react';
import type { ElementType } from 'react';

import { DesignContext } from '../Design/Context';
import DesignFieldWrapper from '../components/DesignFieldWrapper';
import type { DesignValue } from '../types';
import { actionsCodeStringToEvents, isRootFieldId, styleCodeStringToCSSProperties } from '../utils';

type FieldProps = Record<string, any>;

const selectorPrefix = 'adhere-ui-fd-layout';

function SimpleField({
  value,
  Component,
}: {
  parentId?: string;
  value: DesignValue;
  Component: ElementType;
}) {
  const {
    id,
    props: { fieldProps, /*flexProps,*/ styleProps, actionsProps, fieldActionTypes },
  } = value;

  // const fill = fieldProps?.fill;

  const designContext = useContext(DesignContext);

  const style = useMemo(
    () => styleCodeStringToCSSProperties(styleProps?.styles ?? ''),
    [styleProps],
  );

  // const targetFlexStyle = useMemo<CSSProperties>(() => {
  //   const { minSize, scroll, ..._flexProps } = flexProps ?? {};
  //
  //   return {
  //     ..._flexProps,
  //     minWidth: minSize ? 0 : 'initial',
  //     minHeight: minSize ? 0 : 'initial',
  //   };
  // }, [flexProps]);

  const actions = actionsCodeStringToEvents({
    actions: actionsProps?.actions ?? [],
    designContext,
  });

  console.log('fieldProps======', fieldProps);

  return (
    <DesignFieldWrapper
      id={id}
      fieldActionTypes={fieldActionTypes}
      className={classNames(`${selectorPrefix}-design-field-wrapper`, {
        [`${selectorPrefix}-design-field-wrapper-fill`]: isRootFieldId(id),
        [`${selectorPrefix}-design-field-wrapper-no-border`]: isRootFieldId(id),
      })}
      // style={targetFlexStyle}
    >
      {React.createElement(Component, {
        ...(fieldProps as FieldProps),
        style: {
          // flex: fill ? '1' : 'none',
          ...(style ?? {}),
        },
        ...actions,
      })}
    </DesignFieldWrapper>
  );
}

export function createSimpleFieldRenderDesign(Component: ElementType) {
  return function renderDesign({ parentId, value }: { parentId?: string; value: DesignValue }) {
    return <SimpleField parentId={parentId} value={value} Component={Component} />;
  };
}
