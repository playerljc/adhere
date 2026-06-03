import {
  Button,
  Image,
  Modal,
  Segmented,
  Slider,
  Space,
  Upload,
  message,
  type UploadFile,
  type UploadProps,
} from 'antd';
import classNames from 'classnames';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Cropper, type ReactCropperElement } from 'react-cropper';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import Intl from '@baifendian/adhere-util-intl';

import type { UploadDataSourceManagerFormItemValue } from '../../../../components';
import { LabelDesign, ValueDesign } from '../../../../components';
import { SELECT_PREFIX } from '../../../../constant';
import type { DesignContextType, DesignValue } from '../../../../types';
import {
  computeLabelValueColSpan,
  findDataSourceItemConfigByDynamicId,
  findDesignValueById,
} from '../../../../utils';

export type ImageUploadCropShape = 'rect' | 'circle' | 'triangle' | 'diamond';

export type ImageUploadCropMeta = {
  shape: ImageUploadCropShape;
  aspect?: number;
  flipX?: boolean;
  flipY?: boolean;
  rotate?: number;
};

export type ImageUploadValueItem = {
  id: string;
  fileName: string;
  path: string;
  thumbUrl?: string;
  width?: number;
  height?: number;
  cropMeta?: ImageUploadCropMeta;
};

type UploadResponse = {
  resCode: number;
  data?: { id: string; fileName: string; path: string };
  resMsg?: string;
};

const selectorPrefix = `${SELECT_PREFIX}-image-upload-crop-modal`;

type UploadFileWithMeta = UploadFile & { cropMeta?: ImageUploadCropMeta };

function valueToDoneFileList(value: ImageUploadValueItem[] | undefined): UploadFileWithMeta[] {
  return (value ?? []).map((item) => ({
    uid: item.id || item.path || item.fileName,
    name: item.fileName,
    status: 'done',
    url: item.thumbUrl || item.path,
    thumbUrl: item.thumbUrl,
    cropMeta: item.cropMeta,
  }));
}

function matchValueItemToFile(item: ImageUploadValueItem, file: UploadFile): boolean {
  const uid = String(file.uid ?? '');
  if (item.id && uid && item.id === uid) return true;
  if (item.path && file.url && item.path === String(file.url)) return true;
  if (item.fileName && file.name && item.fileName === file.name) return true;
  return false;
}

function maskCanvas(canvas: HTMLCanvasElement, shape: ImageUploadCropShape): HTMLCanvasElement {
  if (shape === 'rect') return canvas;

  const w = canvas.width;
  const h = canvas.height;
  const out = document.createElement('canvas');
  out.width = w;
  out.height = h;
  const ctx = out.getContext('2d');
  if (!ctx) return canvas;

  ctx.save();
  ctx.beginPath();

  if (shape === 'circle') {
    const r = Math.min(w, h) / 2;
    ctx.arc(w / 2, h / 2, r, 0, Math.PI * 2);
  } else if (shape === 'triangle') {
    ctx.moveTo(w / 2, 0);
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
  } else if (shape === 'diamond') {
    ctx.moveTo(w / 2, 0);
    ctx.lineTo(w, h / 2);
    ctx.lineTo(w / 2, h);
    ctx.lineTo(0, h / 2);
    ctx.closePath();
  }

  ctx.clip();
  ctx.drawImage(canvas, 0, 0);
  ctx.restore();
  return out;
}

async function canvasToFile(canvas: HTMLCanvasElement, fileName: string): Promise<File> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error('toBlob failed'));
          return;
        }
        resolve(new File([blob], fileName, { type: blob.type || 'image/png' }));
      },
      'image/png',
      0.92,
    );
  });
}

const CropModal = ({
  open,
  src,
  fileName,
  initialShape,
  initialAspect,
  allowFlip,
  onCancel,
  onOk,
}: {
  open: boolean;
  src: string;
  fileName: string;
  initialShape: ImageUploadCropShape;
  initialAspect?: number;
  allowFlip: boolean;
  onCancel: () => void;
  onOk: (result: { file: File; cropMeta: ImageUploadCropMeta; thumbUrl: string; width: number; height: number }) => void;
}) => {
  const cropperRef = useRef<ReactCropperElement | null>(null);
  const [shape, setShape] = useState<ImageUploadCropShape>(initialShape);
  const [aspect, setAspect] = useState<number | undefined>(initialAspect);
  const [flipX, setFlipX] = useState(false);
  const [flipY, setFlipY] = useState(false);
  const [rotate, setRotate] = useState(0);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (!open) return;
    setShape(initialShape);
    setAspect(initialAspect);
    setFlipX(false);
    setFlipY(false);
    setRotate(0);
    setZoom(1);
  }, [open, initialShape, initialAspect]);

  const effectiveAspect = useMemo(() => {
    if (shape === 'circle') return 1;
    return aspect;
  }, [shape, aspect]);

  useEffect(() => {
    const cropper = cropperRef.current?.cropper;
    if (!cropper) return;
    cropper.setAspectRatio(effectiveAspect ?? NaN);
  }, [effectiveAspect]);

  useEffect(() => {
    const cropper = cropperRef.current?.cropper;
    if (!cropper) return;
    // 切换形状后刷新选区，使 clip-path / border-radius 立即生效
    cropper.crop();
  }, [shape]);

  useEffect(() => {
    const cropper = cropperRef.current?.cropper;
    if (!cropper) return;
    cropper.scaleX(flipX ? -1 : 1);
  }, [flipX]);

  useEffect(() => {
    const cropper = cropperRef.current?.cropper;
    if (!cropper) return;
    cropper.scaleY(flipY ? -1 : 1);
  }, [flipY]);

  useEffect(() => {
    const cropper = cropperRef.current?.cropper;
    if (!cropper) return;
    cropper.rotateTo(rotate);
  }, [rotate]);

  useEffect(() => {
    const cropper = cropperRef.current?.cropper;
    if (!cropper) return;
    cropper.zoomTo(zoom);
  }, [zoom]);

  const doOk = async () => {
    const cropper = cropperRef.current?.cropper;
    if (!cropper) return;

    const canvas = cropper.getCroppedCanvas();
    if (!canvas) return;

    const masked = maskCanvas(canvas, shape);
    const thumbUrl = masked.toDataURL('image/png');
    const file = await canvasToFile(masked, fileName);

    onOk({
      file,
      thumbUrl,
      width: masked.width,
      height: masked.height,
      cropMeta: { shape, aspect, flipX, flipY, rotate },
    });
  };

  return (
    <Modal
      open={open}
      title={Intl.get('image_crop')}
      width={860}
      onCancel={onCancel}
      onOk={() => void doOk()}
      destroyOnHidden
    >
      <div className={`${selectorPrefix}-body`}>
        <div className={`${selectorPrefix}-toolbar`}>
          <span>{Intl.get('crop_shape')}：</span>
          <Segmented
            value={shape}
            onChange={(v) => {
              const next = v as ImageUploadCropShape;
              setShape(next);
              if (next === 'circle') {
                setAspect(1);
              }
            }}
            options={[
              { label: Intl.get('crop_rectangle'), value: 'rect' },
              { label: Intl.get('crop_circle'), value: 'circle' },
              { label: Intl.get('crop_triangle'), value: 'triangle' },
              { label: Intl.get('crop_diamond'), value: 'diamond' },
            ]}
          />

          <span>{Intl.get('crop_aspect')}：</span>
          <Segmented
            value={shape === 'circle' ? 1 : aspect ?? 'free'}
            disabled={shape === 'circle'}
            onChange={(v) => {
              if (shape === 'circle') return;
              if (v === 'free') setAspect(undefined);
              else setAspect(Number(v));
            }}
            options={[
              { label: Intl.get('crop_free'), value: 'free' },
              { label: '1:1', value: 1 },
              { label: '4:3', value: 4 / 3 },
              { label: '16:9', value: 16 / 9 },
            ]}
          />

          {allowFlip && (
            <Space>
              <Button onClick={() => setFlipX((v) => !v)}>{Intl.get('flip_x')}</Button>
              <Button onClick={() => setFlipY((v) => !v)}>{Intl.get('flip_y')}</Button>
            </Space>
          )}
        </div>

        <div className={`${selectorPrefix}-slider-row`}>
          <span>{Intl.get('rotate')}：</span>
          <Slider
            min={-180}
            max={180}
            value={rotate}
            onChange={(v) => setRotate(v as number)}
            className={`${selectorPrefix}-slider`}
          />
          <span className={`${selectorPrefix}-slider-value`}>{rotate}°</span>
        </div>

        <div className={`${selectorPrefix}-slider-row`}>
          <span>{Intl.get('zoom')}：</span>
          <Slider
            min={0.5}
            max={3}
            step={0.01}
            value={zoom}
            onChange={(v) => setZoom(v as number)}
            className={`${selectorPrefix}-slider`}
          />
          <span className={`${selectorPrefix}-slider-value`}>{zoom.toFixed(2)}</span>
        </div>

        <div
          className={classNames(`${selectorPrefix}-cropper-wrap`, {
            [`${selectorPrefix}-cropper-wrap-shape-circle`]: shape === 'circle',
            [`${selectorPrefix}-cropper-wrap-shape-triangle`]: shape === 'triangle',
            [`${selectorPrefix}-cropper-wrap-shape-diamond`]: shape === 'diamond',
          })}
        >
          <Cropper
            ref={cropperRef}
            src={src}
            className={`${selectorPrefix}-cropper`}
            viewMode={1}
            dragMode="move"
            background={false}
            responsive
            autoCropArea={1}
            checkOrientation={false}
            guides={shape === 'rect'}
            aspectRatio={effectiveAspect}
          />
        </div>
      </div>
    </Modal>
  );
};

const listSelectorPrefix = `${SELECT_PREFIX}-image-upload`;

const FieldImageUpload = ({
  value,
  onChange,
  uploadProps,
  cropEnabled,
  cropShape,
  cropAspect,
  cropAllowFlip,
  designMode,
}: {
  value?: ImageUploadValueItem[];
  onChange?: (value: ImageUploadValueItem[]) => void;
  uploadProps: UploadProps;
  cropEnabled: boolean;
  cropShape: ImageUploadCropShape;
  cropAspect?: number;
  cropAllowFlip: boolean;
  /** 设计器内未配置数据源时，用本地裁剪图预览，不请求上传接口 */
  designMode?: boolean;
}) => {
  const doneFromValue = useMemo(() => valueToDoneFileList(value), [value]);
  const [fileList, setFileList] = useState<UploadFileWithMeta[]>(doneFromValue);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewSrc, setPreviewSrc] = useState('');

  const [cropOpen, setCropOpen] = useState(false);
  const [cropSrc, setCropSrc] = useState<string>('');
  const [cropFileName, setCropFileName] = useState<string>('image.png');
  const [cropFileUid, setCropFileUid] = useState<string>('');

  // 用 uid 关联裁剪信息（beforeUpload resolve 后 file 仍在上传链路里）
  const cropMetaMapRef = useRef<Map<string, ImageUploadCropMeta>>(new Map());
  const cropThumbMapRef = useRef<Map<string, string>>(new Map());
  const cropSizeMapRef = useRef<Map<string, { width: number; height: number }>>(new Map());
  const pendingResolveRef = useRef<((file: File) => void) | null>(null);
  const pendingRejectRef = useRef<((reason?: any) => void) | null>(null);

  useEffect(() => {
    setFileList((prev) => {
      const pending = prev.filter((f) => f.status && f.status !== 'done');
      const doneIds = new Set(doneFromValue.map((f) => String(f.uid)));
      const keptPending = pending.filter((f) => !doneIds.has(String(f.uid)));
      return [...doneFromValue, ...keptPending];
    });
  }, [doneFromValue]);

  const customRequest: UploadProps['customRequest'] = async (options) => {
    const { onSuccess, onError, file, action, headers, withCredentials, method = 'post', name = 'file' } =
      options as any;
    const url = (action as string | undefined)?.trim();

    // 设计器未配置上传地址：用裁剪后的 base64 本地预览，避免 Missing upload action
    if (!url) {
      if (designMode) {
        const uid = String((file as any).uid ?? `${Date.now()}`);
        const thumbUrl =
          cropThumbMapRef.current.get(uid) ||
          URL.createObjectURL(file as File);

        onSuccess?.({
          resCode: 0,
          data: {
            id: uid,
            fileName: (file as File).name || 'image.png',
            path: thumbUrl,
          },
          resMsg: '',
        });
        return;
      }
      message.warning(Intl.get('upload_data_source_placeholder'));
      onError?.(new Error(Intl.get('upload_data_source_placeholder')));
      return;
    }

    try {
      const form = new FormData();
      form.append(name, file as File);

      const res = await fetch(url, {
        method: String(method || 'post').toUpperCase(),
        body: form,
        headers: headers as any,
        credentials: withCredentials ? 'include' : 'same-origin',
      });

      const json = (await res.json()) as UploadResponse;
      onSuccess?.(json, res);
    } catch (e) {
      onError?.(e);
    }
  };

  const handlePreview = (file: UploadFile) => {
    const f = file as UploadFileWithMeta;
    const src =
      f.url ||
      f.thumbUrl ||
      cropThumbMapRef.current.get(String(f.uid ?? '')) ||
      '';
    if (!src) {
      message.warning(Intl.get('upload_preview_unavailable'));
      return;
    }
    setPreviewSrc(src);
    setPreviewOpen(true);
  };

  const findValueItemByFile = (file: UploadFile) =>
    (value ?? []).find((it) => matchValueItemToFile(it, file));

  const itemRender: UploadProps['itemRender'] = (originNode, file) => {
    const shape = findValueItemByFile(file)?.cropMeta?.shape;
    if (!shape || shape === 'rect') {
      return originNode;
    }
    return (
      <div
        className={classNames(`${listSelectorPrefix}-list-item`, `${listSelectorPrefix}-list-item-${shape}`)}
      >
        {originNode}
      </div>
    );
  };

  const beforeUpload: UploadProps['beforeUpload'] = async (file) => {
    if (!cropEnabled) return file as any;

    const uid = String((file as any).uid ?? `${Date.now()}`);
    setCropFileUid(uid);

    const src = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ''));
      reader.onerror = () => reject(new Error('read file error'));
      reader.readAsDataURL(file);
    });

    setCropSrc(src);
    setCropFileName(file.name || 'image.png');
    setCropOpen(true);

    return new Promise<File>((resolve, reject) => {
      pendingResolveRef.current = (cropped) => {
        // 维持 uid，便于 onChange 用 uid 取 meta
        (cropped as any).uid = uid;
        resolve(cropped);
      };
      pendingRejectRef.current = reject;
    });
  };

  return (
    <>
      <Upload
        {...uploadProps}
        fileList={fileList}
        beforeUpload={beforeUpload}
        customRequest={customRequest}
        onPreview={handlePreview}
        itemRender={itemRender}
        onChange={(info) => {
          const nextList = info.fileList.map((f) => {
            const uid = String(f.uid ?? '');
            const thumb = cropThumbMapRef.current.get(uid);
            if (!thumb) return f;
            return { ...f, url: thumb, thumbUrl: thumb };
          });
          setFileList(nextList);

          const current = info.file as UploadFile;
          if (current.status !== 'done') return;

          const response = current.response as UploadResponse | undefined;
          if (!response || response.resCode !== 0 || !response.data) {
            message.error(response?.resMsg || Intl.get('upload_response_invalid'));
            return;
          }

          const base = response.data;
          const uid = String(current.uid ?? '');
          const meta = cropMetaMapRef.current.get(uid);
          const thumbUrl = cropThumbMapRef.current.get(uid);
          const size = cropSizeMapRef.current.get(uid);

          const data: ImageUploadValueItem = {
            id: base.id,
            fileName: base.fileName,
            path: base.path,
            thumbUrl: thumbUrl || undefined,
            width: size?.width,
            height: size?.height,
            cropMeta: meta ?? undefined,
          };

          const prev = value ?? [];
          const exists = prev.some((it) => it.id && it.id === data.id);
          const next = exists ? prev.map((it) => (it.id === data.id ? data : it)) : [...prev, data];
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

      {previewSrc ? (
        <Image
          wrapperStyle={{ display: 'none' }}
          src={previewSrc}
          preview={{
            visible: previewOpen,
            scaleStep: 0.5,
            onVisibleChange: (visible) => {
              setPreviewOpen(visible);
              if (!visible) setPreviewSrc('');
            },
          }}
        />
      ) : null}

      <CropModal
        open={cropOpen}
        src={cropSrc}
        fileName={cropFileName}
        initialShape={cropShape}
        initialAspect={cropAspect}
        allowFlip={cropAllowFlip}
        onCancel={() => {
          setCropOpen(false);
          pendingRejectRef.current?.(new Error('cancel'));
          pendingResolveRef.current = null;
          pendingRejectRef.current = null;
        }}
        onOk={({ file, cropMeta, thumbUrl, width, height }) => {
          const uid = cropFileUid;
          cropMetaMapRef.current.set(uid, cropMeta);
          cropThumbMapRef.current.set(uid, thumbUrl);
          cropSizeMapRef.current.set(uid, { width, height });
          setCropOpen(false);
          pendingResolveRef.current?.(file);
          pendingResolveRef.current = null;
          pendingRejectRef.current = null;
        }}
      />
    </>
  );
};

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
        {({ fieldProps, style, actions }) => {
          const {
            uploadDataSource,
            cropEnabled,
            cropShape,
            cropAspect,
            cropAllowFlip,
            ...rest
          } = fieldProps as any;

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

          const hasUploadAction = !!action?.trim();

          return (
            <FieldImageUpload
              uploadProps={uploadProps}
              cropEnabled={!!cropEnabled}
              cropShape={(cropShape ?? 'rect') as ImageUploadCropShape}
              cropAspect={typeof cropAspect === 'number' ? cropAspect : undefined}
              cropAllowFlip={!!cropAllowFlip}
              designMode={context.mode !== 'form' && !hasUploadAction}
            />
          );
        }}
      </ValueDesign>
    ),
  };
}

