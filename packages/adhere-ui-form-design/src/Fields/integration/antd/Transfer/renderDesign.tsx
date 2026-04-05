import { Transfer, type TransferProps } from 'antd';
import React, { useContext } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { LabelDesign, ValueDesign } from '../../../../components';
import type { TransferDataSourceManagerFormItemValue } from '../../../../components';
import type { DesignContextType, DesignValue, I18nValue } from '../../../../types';
import { computeLabelValueColSpan, findDesignValueById, resolveI18nText } from '../../../../utils';

function parseTransferData(
  transferOptions: TransferDataSourceManagerFormItemValue | undefined,
  lang: string,
): TransferProps['dataSource'] {
  if (!transferOptions) return [];

  if (transferOptions.type === 'static' && transferOptions.dataSource) {
    return transferOptions.dataSource.map((item) => ({
      key: item.key,
      title: resolveI18nText(item.title, lang),
      description: resolveI18nText(item.description, lang),
      disabled: item.disabled,
    }));
  }

  return [];
}

/**
 * renderDesign
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

  const root = getDesignValue();
  const parent = parentId && root ? findDesignValueById(parentId, root) : undefined;

  const { labelColSpan, valueColSpan } = computeLabelValueColSpan(parent, formItemProps);

  return {
    key: id,
    require: formItemProps?.require ?? false,
    labelColSpan,
    valueColSpan,
    label: <LabelDesign formItemProps={formItemProps} styleProps={styleProps} />,
    value: (
      <ValueDesign value={value}>
        {({ fieldProps, style }) => {
          const { intl } = useContext(ConfigProvider.Context);
          const lang = intl.lang!;

          const {
            transferOptions,
            leftTitle,
            rightTitle,
            leftOperation,
            rightOperation,
            ...transferProps
          } = fieldProps as typeof fieldProps & {
            transferOptions?: TransferDataSourceManagerFormItemValue;
            leftTitle?: I18nValue | string;
            rightTitle?: I18nValue | string;
            leftOperation?: I18nValue | string;
            rightOperation?: I18nValue | string;
          };

          const dataSource = parseTransferData(transferOptions, lang);

          // 解析国际化标题
          const resolvedLeftTitle = resolveI18nText(leftTitle, lang) || undefined;
          const resolvedRightTitle = resolveI18nText(rightTitle, lang) || undefined;

          // 构建操作按钮文字数组 [右移文字, 左移文字]
          const operations: string[] = [];
          const resolvedRightOp = resolveI18nText(rightOperation, lang);
          const resolvedLeftOp = resolveI18nText(leftOperation, lang);
          if (resolvedRightOp) operations[0] = resolvedRightOp;
          if (resolvedLeftOp) operations[1] = resolvedLeftOp;

          return (
            <Transfer
              {...(transferProps as TransferProps)}
              dataSource={dataSource}
              style={style}
              titles={[resolvedLeftTitle, resolvedRightTitle]}
              operations={operations.length > 0 ? operations : undefined}
              render={(item) => item.title}
            />
          );
        }}
      </ValueDesign>
    ),
  };
}
