import { Button, Upload, message, type UploadFile, type UploadProps } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import Intl from '@baifendian/adhere-util-intl';

import type { UploadDataSourceManagerFormItemValue } from '../../../../components';
import { FieldWithTip, LabelDesign, ValueDesign } from '../../../../components';
import type { DesignContextType, DesignValue } from '../../../../types';
import {
  computeLabelValueColSpan,
  findDataSourceItemConfigByDynamicId,
  findDesignValueById,
} from '../../../../utils';

export type FileUploadValueItem = {
  id: string;
  fileName: string;
  path: string;
};

type UploadResponse = {
  resCode: number;
  data?: FileUploadValueItem;
  resMsg?: string;
};

function valueToDoneFileList(value: FileUploadValueItem[] | undefined): UploadFile[] {
  return (value ?? []).map((item) => ({
    uid: item.id || item.path || item.fileName,
    name: item.fileName,
    status: 'done',
    url: item.path,
  }));
}

function matchValueItemToFile(item: FileUploadValueItem, file: UploadFile): boolean {
  const uid = String(file.uid ?? '');
  if (item.id && uid && item.id === uid) return true;
  if (item.path && file.url && item.path === String(file.url)) return true;
  if (item.fileName && file.name && item.fileName === file.name) return true;
  return false;
}

const FieldFileUpload = ({
  value,
  onChange,
  uploadProps,
}: {
  value?: FileUploadValueItem[];
  onChange?: (value: FileUploadValueItem[]) => void;
  uploadProps: UploadProps;
}) => {
  const doneFromValue = useMemo(() => valueToDoneFileList(value), [value]);
  const [fileList, setFileList] = useState<UploadFile[]>(doneFromValue);

  useEffect(() => {
    setFileList((prev) => {
      const pending = prev.filter((f) => f.status && f.status !== 'done');
      const doneIds = new Set(doneFromValue.map((f) => String(f.uid)));
      const keptPending = pending.filter((f) => !doneIds.has(String(f.uid)));
      return [...doneFromValue, ...keptPending];
    });
  }, [doneFromValue]);

  return (
    <Upload
      {...uploadProps}
      fileList={fileList}
      onChange={(info) => {
        setFileList(info.fileList);

        const current = info.file as UploadFile;
        if (current.status !== 'done') {
          return;
        }

        const response = current.response as UploadResponse | undefined;
        if (!response || response.resCode !== 0 || !response.data) {
          message.error(response?.resMsg || Intl.get('upload_response_invalid'));
          return;
        }

        const data = response.data;

        const prev = value ?? [];
        const exists = prev.some((it) => it.id && it.id === data.id);
        const next = exists
          ? prev.map((it) => (it.id === data.id ? data : it))
          : [...prev, data];

        onChange?.(next);
      }}
      onRemove={(file) => {
        const prev = value ?? [];
        const next = prev.filter((it) => !matchValueItemToFile(it, file as UploadFile));
        onChange?.(next);
        return true;
      }}
    >
      <Button disabled={uploadProps.disabled}>{Intl.get('upload')}</Button>
    </Upload>
  );
};

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

  const root = context.getDesignValue();
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
        {({ fieldProps, style, actions, lang }) => {
          const { uploadDataSource, ...rest } = fieldProps as typeof fieldProps & {
            uploadDataSource?: UploadDataSourceManagerFormItemValue;
          };

          const cfg =
            uploadDataSource?.type === 'dynamic' && uploadDataSource.dynamicConfigId
              ? findDataSourceItemConfigByDynamicId(root, uploadDataSource.dynamicConfigId)
              : undefined;

          const action = cfg?.request?.url?.trim() ? cfg.request.url : (rest as any).action;
          const headers = cfg?.request?.headers ?? (rest as any).headers;

          const uploadProps: UploadProps = {
            ...(rest as UploadProps),
            action,
            headers,
            ...actions,
            style,
          };

          return (
            <FieldWithTip tip={fieldProps.tip as any} tipStyles={styleProps?.tipStyles} lang={lang}>
              <FieldFileUpload uploadProps={uploadProps} />
            </FieldWithTip>
          );
        }}
      </ValueDesign>
    ),
  };
}

