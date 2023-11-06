import { useUpdateEffect } from 'ahooks';
import classNames from 'classnames';
import Quill from 'quill';
import React, {
  PropsWithoutRef,
  ReactElement,
  RefAttributes,
  forwardRef,
  memo,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';
import ReactQuill from 'react-quill';

import PropTypesStr from '../common-lib/prop-types.min';
import ReactDOMStr from '../common-lib/react-dom.production.min';
import ReactStr from '../common-lib/react.production.min';
import QuillBubbleCssStr from './lib/quill.bubble';
import QuillSnowCssStr from './lib/quill.snow';
import ReactQuillStr from './lib/react-quill';
import type {
  ReactQuillSandboxComponent,
  ReactQuillSandboxHandler,
  ReactQuillSandboxProps,
} from './types';

const editorId = 'quillWrap';

/**
 * ReactQuill主题对应的样式
 */
const THEME_MAP = new Map<string, string>([
  ['snow', QuillSnowCssStr],
  ['bubble', QuillBubbleCssStr],
]);

const selectorPrefix = 'adhere-ui-richtext-reactquill-sandbox';

/**
 * ReactQuillSandbox
 * @param props
 * @param ref
 * @constructor
 */
const InternalReactQuillSandbox = memo<
  PropsWithoutRef<ReactQuillSandboxProps> & RefAttributes<ReactQuillSandboxHandler>
>(
  forwardRef<ReactQuillSandboxHandler, ReactQuillSandboxProps>((props, ref): ReactElement => {
    const { wrapStyle, wrapClassName, quillStyle, value: _value, ..._props } = props;

    const wrapRef = useRef<HTMLDivElement>(null);

    const frameRef = useRef<HTMLIFrameElement>(null);

    const isMount = useRef<boolean>(false);

    const value = useRef<string>(props.value as string);

    const reactQuillRef = useRef<ReactQuill>();

    /**
     * renderQuill
     * @description 渲染富文本
     */
    function renderQuill() {
      return new Promise<{ window: Window; document: Document; wrap: HTMLDivElement }>(
        (resolve) => {
          const document = frameRef?.current?.contentDocument as Document;
          const window = frameRef?.current?.contentWindow as Window;

          if (!document || !window) return;

          const wrap = document.getElementById(editorId) as HTMLDivElement;

          // @ts-ignore
          window.ReactDOM.render(
            // @ts-ignore
            <window.ReactQuill
              ref={reactQuillRef}
              {..._props}
              value={value.current ?? ''}
              onChange={(params) => {
                if (!isMount.current) return;
                // console.log('onChange', params);

                if (props.onChange) {
                  // @ts-ignore
                  props?.onChange?.(params);
                }
              }}
            />,
            wrap,
            () => {
              isMount.current = true;

              resolve({
                document,
                window,
                wrap,
              });
            },
          );
        },
      );
    }

    /**
     * renderHTML
     * @description 渲染HTML
     */
    function renderHTML() {
      const document = frameRef?.current?.contentDocument as Document;

      if (!document) return;

      const wrap = document.getElementById(editorId) as HTMLDivElement;
      wrap.innerHTML = props.value as string;

      if (wrapRef.current) {
        wrapRef.current.style.height = `${document.documentElement.offsetHeight}px`;
      }
    }

    /**
     * render
     * @description 渲染内容
     */
    function render(): Promise<{
      window: Window;
      document: Document;
      wrap: HTMLDivElement;
    } | void> {
      return new Promise<void>((resolve) => {
        // 只读模式
        if ('readOnly' in props && props.readOnly) {
          renderHTML();
          resolve();
          return;
        }

        return renderQuill();
      });
    }

    /**
     * useImperativeHandle
     * @description 向外暴漏的方法
     */
    useImperativeHandle(ref, () => ({
      focus() {
        reactQuillRef.current?.focus();
      },
      blur() {
        reactQuillRef.current?.blur();
      },
      getEditor(): Quill {
        return reactQuillRef.current?.getEditor() as Quill;
      },
      getQuill(): Quill {
        // @ts-ignore
        return (frameRef?.current?.contentWindow as Window)?.ReactQuill?.Quill;
      },
    }));

    /**
     * useLayoutEffect
     */
    useLayoutEffect(() => {
      function onLoad() {
        render().then(() => {});
      }

      frameRef?.current?.addEventListener('load', onLoad);

      const propTypesUrl = URL.createObjectURL(
        new Blob([PropTypesStr], { type: 'text/javascript' }),
      );
      const reactUrl = URL.createObjectURL(new Blob([ReactStr], { type: 'text/javascript' }));
      const reactDOMUrl = URL.createObjectURL(new Blob([ReactDOMStr], { type: 'text/javascript' }));
      const reactQuillUrl = URL.createObjectURL(
        new Blob([ReactQuillStr], { type: 'text/javascript' }),
      );

      const iframeUrl = URL.createObjectURL(
        new Blob(
          [
            `
        <!DOCTYPE html>
        <head>
          <meta charset="UTF-8" />
          <title></title>
          <style>
            html, body {
              margin: 0;
              padding: 0;
            }

            html.editor {
              width: 100%;
              height: 100%;
            }

            html.editor > body {
              width: 100%;
              height: 100%;
            }

            html.editor > body > #${editorId} {
              width: 100%;
              height: 100%;
            }

            ::-webkit-scrollbar-thumb {
              background-color: rgba(0, 0, 0, 0.1);
              border-radius: 4px;
            }
            *::-webkit-scrollbar-track {
              background-color: rgba(0, 0, 0, 0.1);
            }
            ::-webkit-scrollbar {
              width: 10px;
              height: 10px;
            }

            .quill {
              display: flex;
              flex-direction: column;
              width: 100%;
              height: 100%;
              padding: 0;
              margin: 0;
            }

            .quill > .ql-toolbar {
              flex-shrink: 0;
            }

            .quill > .ql-container {
              flex-grow: 1;
              min-height: 0;
            }

            ${THEME_MAP.get('snow') as string}
          </style>
          <script src="${propTypesUrl}"><\/script>
          <script src="${reactUrl}"><\/script>
          <script src="${reactDOMUrl}"><\/script>
          <script src="${reactQuillUrl}"><\/script>
        </head>
        <html lang="en" class="${classNames({
          editor: !('readOnly' in props) || !props.readOnly,
        })}">
        <body>
          <div id="${editorId}" style="${quillStyle ?? ''}"></div>
        </body>
        </html>
        `,
          ],
          {
            type: 'text/html',
          },
        ),
      );
      frameRef!.current!.src = iframeUrl;

      return () => {
        frameRef?.current?.removeEventListener('load', onLoad);
        URL.revokeObjectURL(iframeUrl);
        URL.revokeObjectURL(reactUrl);
        URL.revokeObjectURL(reactDOMUrl);
        URL.revokeObjectURL(reactQuillUrl);
        URL.revokeObjectURL(propTypesUrl);
      };
    }, []);

    /**
     * useUpdateEffect
     */
    useUpdateEffect(() => {
      value.current = props.value as string;

      if (isMount.current) {
        render().then(() => {});
      }
    }, [props.value]);

    useUpdateEffect(() => {
      if (isMount.current) {
        render().then(() => {});
      }
    }, [_props]);

    return (
      <div
        ref={wrapRef}
        className={classNames(`${selectorPrefix}`, wrapClassName ?? '')}
        style={wrapStyle ?? {}}
      >
        <iframe ref={frameRef} className={`${selectorPrefix}-frame`}></iframe>
      </div>
    );
  }),
);

const ReactQuillSandbox = InternalReactQuillSandbox as ReactQuillSandboxComponent;

ReactQuillSandbox.AntdFormRequireValidator = (editor, tip) => ({
  validator: (rule, value, callback) => {
    if (editor?.()?.getLength?.() > 1) {
      callback();
    } else {
      callback(tip);
    }
  },
});

export default ReactQuillSandbox;
