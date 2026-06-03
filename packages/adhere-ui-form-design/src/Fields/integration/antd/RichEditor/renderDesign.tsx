import { useDebounce } from 'ahooks';
import classNames from 'classnames';
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

import { WangEditorSandbox } from '@baifendian/adhere-ui-richtext-sandbox';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../../Design/Context';
import { LabelDesign, ValueDesign } from '../../../../components';
import { SELECT_PREFIX } from '../../../../constant';
import type { DesignContextType, DesignValue } from '../../../../types';
import { computeLabelValueColSpan, findDesignValueById, isRichEditorHtmlEmpty } from '../../../../utils';
import { buildRichEditorMenuConf } from './buildMenuConf';
import { RichEditorPathInsertModal } from './RichEditorPathInsertModal';
import { resolveRichEditorPlaceholder } from './resolvePlaceholder';
import { RICH_EDITOR_BASIC_TOOLBAR_KEYS, RICH_EDITOR_FULL_TOOLBAR_KEYS } from './toolbarConfig';

import './index.less';

const selectorPrefix = `${SELECT_PREFIX}-rich-editor`;

type RichEditorFieldProps = {
  readOnly?: boolean;
  disabled?: boolean;
  bordered?: boolean;
  placeholder?: unknown;
  minHeight?: number;
  height?: number;
  gap?: number;
  direction?: 'ltr' | 'rtl';
  toolbarPreset?: string;
  fill?: boolean;
};

type PathInsertState = {
  open: boolean;
  title: string;
  onInsert?: (path: string) => void;
};

const FieldRichEditor = ({
  fieldId,
  value,
  onChange,
  fieldProps,
  style,
  actions,
  lang,
}: {
  fieldId: string;
  value?: string;
  onChange?: (value: string) => void;
  fieldProps: RichEditorFieldProps;
  style?: React.CSSProperties;
  actions: Record<string, (...args: unknown[]) => unknown>;
  lang: string;
}) => {
  const designContext = useContext(DesignContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef(actions);
  actionsRef.current = actions;

  const {
    readOnly = false,
    disabled = false,
    bordered = true,
    placeholder,
    minHeight = 300,
    height = 360,
    gap = 60,
    direction = 'ltr',
    toolbarPreset = 'basic',
  } = fieldProps;

  const [pathModal, setPathModal] = useState<PathInsertState>({
    open: false,
    title: '',
  });

  const activateField = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      designContext.setActiveFieldId?.(fieldId);
    },
    [designContext, fieldId],
  );

  const requestPathInsert = useCallback((req: { title: string; onInsert: (path: string) => void }) => {
    setPathModal({
      open: true,
      title: req.title,
      onInsert: req.onInsert,
    });
  }, []);

  const menuConf = useMemo(
    () => buildRichEditorMenuConf({ requestPathInsert }),
    [requestPathInsert],
  );

  const resolvedPlaceholder = useMemo(
    () => resolveRichEditorPlaceholder(placeholder as any, lang),
    [placeholder, lang],
  );

  /** 防抖后再写入编辑器，避免属性面板输入时频繁重建 iframe 抢焦点 */
  const editorPlaceholder = useDebounce(resolvedPlaceholder, { wait: 400 });

  const editorValue = useMemo(
    () => (isRichEditorHtmlEmpty(value) ? '' : (value ?? '')),
    [value],
  );

  const wrapStyle = useMemo(
    () => ({
      ...(style ?? {}),
      ['--fd-rich-editor-min-height' as string]: `${minHeight}px`,
      ['--fd-rich-editor-height' as string]: `${height}px`,
    }),
    [style, minHeight, height],
  );

  const sandboxReadOnly = Boolean(readOnly);
  const editorDisabled = Boolean(disabled) && !readOnly;

  const toolbarKeys = useMemo(() => {
    if (sandboxReadOnly || editorDisabled) {
      return [];
    }
    return toolbarPreset === 'full'
      ? RICH_EDITOR_FULL_TOOLBAR_KEYS
      : RICH_EDITOR_BASIC_TOOLBAR_KEYS;
  }, [sandboxReadOnly, editorDisabled, toolbarPreset]);

  const sandboxKey = [
    toolbarPreset,
    sandboxReadOnly ? 'ro' : editorDisabled ? 'dis' : 'edit',
    bordered ? 1 : 0,
    editorPlaceholder,
  ].join('|');

  const editorConfig = useMemo(() => {
    const bindEditorEvent = (
      handler?: (...args: unknown[]) => unknown,
    ): ((editor: unknown) => void) | undefined => {
      if (!handler) return undefined;
      return (editor: unknown) => {
        handler(editor);
      };
    };

    const actionHandlers = actionsRef.current;

    const config: Record<string, unknown> = {
      placeholder: editorPlaceholder,
      readOnly: sandboxReadOnly || editorDisabled,
      MENU_CONF: menuConf,
      onChange: bindEditorEvent(actionHandlers.onChange),
      onFocus: bindEditorEvent(actionHandlers.onFocus),
      onBlur: bindEditorEvent(actionHandlers.onBlur),
      onDestroyed: bindEditorEvent(actionHandlers.onDestroyed),
      onMaxLength: bindEditorEvent(actionHandlers.onMaxLength),
      onCreated: (editor: unknown) => {
        const ed = editor as { setPlaceholder?: (text: string) => void };
        if (editorPlaceholder && typeof ed?.setPlaceholder === 'function') {
          ed.setPlaceholder(editorPlaceholder);
        }
        bindEditorEvent(actionHandlers.onCreated)?.(editor);
      },
    };

    return config;
  }, [editorPlaceholder, sandboxReadOnly, editorDisabled, menuConf]);

  const toolBarProps = useMemo(
    () => ({
      defaultConfig: {
        toolbarKeys,
      },
    }),
    [toolbarKeys],
  );

  const editorProps = useMemo(
    () => ({
      defaultConfig: editorConfig as any,
    }),
    [editorConfig],
  );

  /** iframe 内点击不会冒泡到 DesignFieldWrapper，需在 iframe 元素上监听 */
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const bindIframeActivate = () => {
      const iframe = root.querySelector('iframe');
      if (!iframe) return undefined;

      const onFrameMouseDown = () => {
        designContext.setActiveFieldId?.(fieldId);
      };

      iframe.addEventListener('mousedown', onFrameMouseDown);
      return () => iframe.removeEventListener('mousedown', onFrameMouseDown);
    };

    let cleanup = bindIframeActivate();
    const timer = window.setTimeout(() => {
      cleanup?.();
      cleanup = bindIframeActivate();
    }, 300);

    return () => {
      window.clearTimeout(timer);
      cleanup?.();
    };
  }, [sandboxKey, designContext, fieldId]);

  return (
    <>
      <div
        ref={containerRef}
        className={classNames(selectorPrefix, {
          [`${selectorPrefix}-disabled`]: editorDisabled,
          [`${selectorPrefix}-readonly`]: sandboxReadOnly,
        })}
        style={wrapStyle}
        onMouseDown={activateField}
      >
        <WangEditorSandbox
          key={sandboxKey}
          wrapStyle={{ width: '100%', height: '100%' }}
          value={editorValue}
          onChange={(html) => onChange?.(html)}
          readOnly={sandboxReadOnly}
          bordered={bordered}
          gap={gap}
          direction={direction}
          toolBarProps={toolBarProps}
          editorProps={editorProps}
          onRender={() => {}}
        />
      </div>
      <RichEditorPathInsertModal
        open={pathModal.open}
        title={pathModal.title || Intl.get('rich_editor_path_modal_title')}
        onCancel={() => setPathModal({ open: false, title: '' })}
        onConfirm={(path) => {
          pathModal.onInsert?.(path);
          setPathModal({ open: false, title: '' });
        }}
      />
    </>
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
        {({ fieldProps, style, actions, lang }) => (
          <FieldRichEditor
            fieldId={id}
            fieldProps={fieldProps as RichEditorFieldProps}
            style={style}
            actions={actions}
            lang={lang}
          />
        )}
      </ValueDesign>
    ),
  };
}
