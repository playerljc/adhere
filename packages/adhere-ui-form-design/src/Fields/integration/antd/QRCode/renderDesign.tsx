import { CheckCircleFilled, CloseCircleFilled, ReloadOutlined } from '@ant-design/icons';
import { Button, QRCode, Space, Spin } from 'antd';
import type { QRCodeProps } from 'antd';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { LabelDesign, ValueDesign } from '../../../../components';
import type { DesignContextType, DesignValue } from '../../../../types';
import { computeLabelValueColSpan, findDesignValueById } from '../../../../utils';

function getStatusRenderByTemplate(
  template?: string,
): Pick<QRCodeProps, 'statusRender' | 'onRefresh'> {
  if (!template || template === 'default') {
    return {};
  }

  if (template === 'antd-example') {
    const statusRender: QRCodeProps['statusRender'] = (info) => {
      switch (info.status) {
        case 'expired':
          return (
            <div>
              <CloseCircleFilled style={{ color: 'red' }} /> {info.locale?.expired}
              <p>
                <Button type="link" onClick={info.onRefresh}>
                  <ReloadOutlined /> {info.locale?.refresh}
                </Button>
              </p>
            </div>
          );
        case 'loading':
          return (
            <Space direction="vertical" align="center">
              <Spin />
              <p>Loading...</p>
            </Space>
          );
        case 'scanned':
          return (
            <div>
              <CheckCircleFilled style={{ color: 'green' }} /> {info.locale?.scanned}
            </div>
          );
        default:
          return null;
      }
    };

    return {
      statusRender,
      onRefresh: () => {},
    };
  }

  return {};
}

/**
 * renderDesign - QRCode design mode (desktop)
 * value 来源使用 formItemProps.initialValue
 */
export function renderDesign({
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

  const rawValue = (formItemProps as { initialValue?: string })?.initialValue;

  return {
    key: id,
    require: formItemProps?.require ?? false,
    labelColSpan,
    valueColSpan,
    label: <LabelDesign formItemProps={formItemProps} styleProps={styleProps} />,
    value: (
      <ValueDesign value={value}>
        {({ fieldProps: fp, style, actions }) => {
          const fieldProps = (fp ?? {}) as QRCodeProps & { statusRenderTemplate?: string };
          const { statusRenderTemplate, ...restFieldProps } = fieldProps;

          const statusRenderProps = getStatusRenderByTemplate(statusRenderTemplate);

          return (
            <QRCode
              {...(restFieldProps as QRCodeProps)}
              {...statusRenderProps}
              style={style ?? {}}
              {...actions}
              value={rawValue || '-'}
            />
          );
        }}
      </ValueDesign>
    ),
  };
}

