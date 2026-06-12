import { Transfer, type TransferProps } from 'antd';
import React, { type CSSProperties } from 'react';

import { FieldWithTip } from '../../../../components';
import type { TransferDataSourceManagerFormItemValue } from '../../../../components';
import type { FieldProps, I18nValue, StyleProps } from '../../../../types';
import { resolveI18nText } from '../../../../utils';

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

export type TransferDesignBodyProps = {
  fieldProps: FieldProps;
  style?: CSSProperties;
  styleProps?: StyleProps;
  lang: string;
  actions?: Record<string, (...args: any[]) => any>;
  targetKeys?: TransferProps['targetKeys'];
  onChange?: TransferProps['onChange'];
};

const TransferDesignBody: React.FC<TransferDesignBodyProps> = ({
  fieldProps,
  style,
  styleProps,
  lang,
  actions = {},
  targetKeys,
  onChange,
}) => {
  const {
    transferOptions,
    leftTitle,
    rightTitle,
    leftOperation,
    rightOperation,
    tip,
    ...transferProps
  } = fieldProps as typeof fieldProps & {
    transferOptions?: TransferDataSourceManagerFormItemValue;
    leftTitle?: I18nValue | string;
    rightTitle?: I18nValue | string;
    leftOperation?: I18nValue | string;
    rightOperation?: I18nValue | string;
    tip?: I18nValue | string;
  };

  const dataSource = parseTransferData(transferOptions, lang);

  const resolvedLeftTitle = resolveI18nText(leftTitle, lang) || undefined;
  const resolvedRightTitle = resolveI18nText(rightTitle, lang) || undefined;

  const operations: string[] = [];
  const resolvedRightOp = resolveI18nText(rightOperation, lang);
  const resolvedLeftOp = resolveI18nText(leftOperation, lang);
  if (typeof resolvedRightOp === 'string' || typeof resolvedRightOp === 'number') {
    operations[0] = String(resolvedRightOp);
  }
  if (typeof resolvedLeftOp === 'string' || typeof resolvedLeftOp === 'number') {
    operations[1] = String(resolvedLeftOp);
  }

  const handleChange: TransferProps['onChange'] = (nextTargetKeys, direction, moveKeys) => {
    onChange?.(nextTargetKeys, direction, moveKeys);
    actions.onChange?.(nextTargetKeys, direction, moveKeys);
  };

  const isControlled = typeof onChange === 'function';

  return (
    <FieldWithTip tip={tip as any} tipStyles={styleProps?.tipStyles} lang={lang}>
      <Transfer
        {...(transferProps as TransferProps)}
        {...actions}
        dataSource={dataSource}
        style={style}
        titles={[resolvedLeftTitle, resolvedRightTitle]}
        operations={operations.length > 0 ? operations : undefined}
        render={(item) => item.title}
        {...(isControlled
          ? { targetKeys: targetKeys ?? [], onChange: handleChange }
          : { onChange: handleChange })}
      />
    </FieldWithTip>
  );
};

export default TransferDesignBody;
