import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import WritingBoard from '@baifendian/adhere-ui-writingboard';
import Intl from '@baifendian/adhere-util-intl';

import { LabelDesign, ValueDesign } from '../../../../components';
import type { DesignContextType, DesignValue } from '../../../../types';
import { computeLabelValueColSpan, findDesignValueById } from '../../../../utils';

type SignatureComponentProps = React.ComponentProps<typeof WritingBoard.Signature>;
type SignatureComponent = React.ComponentType<SignatureComponentProps>;

type SignatureFieldProps = {
  value?: string;
  penColor?: string;
  backgroundColor?: string;
  lineWidth?: number;
  canvasWidth?: number;
  canvasHeight?: number;
  clearOnResize?: boolean;
};

export function createSignatureRenderDesign(SignatureComponent: SignatureComponent) {
  /**
   * renderDesign - SignaturePad design mode
   * 值保存到 fieldProps.value (PNG DataURL)
   */
  return function renderDesign({
    parentId,
    value,
    context,
  }: {
    parentId?: string;
    value: DesignValue;
    context: DesignContextType;
  }): DataItemRow {
    const {
      id,
      props: { formItemProps, styleProps },
    } = value;

    const { getDesignValue } = context;
    const designValue = getDesignValue() as DesignValue;
    const parent = findDesignValueById(parentId as string, designValue) as DesignValue;
    const { labelColSpan, valueColSpan } = computeLabelValueColSpan(parent, formItemProps);

    return {
      key: id,
      require: formItemProps?.require ?? false,
      labelColSpan,
      valueColSpan,
      label: <LabelDesign formItemProps={formItemProps} styleProps={styleProps} />,
      value: (
        <ValueDesign value={value}>
          {({ fieldProps, style }) => (
            <SignaturePadValue
              fieldProps={(fieldProps ?? {}) as SignatureFieldProps}
              style={style}
            />
          )}
        </ValueDesign>
      ),
    };
  };

  function SignaturePadValue({
    value,
    onChange,
    fieldProps,
    style,
  }: {
    value?: string;
    onChange?: (base64?: string) => void;
    fieldProps: SignatureFieldProps;
    style?: React.CSSProperties;
  }) {
    const canvasWidth = fieldProps.canvasWidth ?? 300;
    const canvasHeight = fieldProps.canvasHeight ?? 200;

    return (
      <SignatureComponent
        value={value}
        onChange={onChange}
        style={{
          ...{ width: canvasWidth, height: canvasHeight },
          ...(style ?? {}),
        }}
        modalProps={{
          title: Intl.get('edit_signature'),
          destroyOnClose: true,
          maskClosable: false,
        }}
        coreProps={{
          defaultColor: fieldProps.penColor ?? '#000',
          defaultWidth: fieldProps.lineWidth ?? 2,
        }}
      />
    );
  }
}
