import WangEditorCssStr from './lib/wang-editor-css';
import WangEditorViewCssStr from './lib/wang-editor-view-css';

import { useUpdateEffect } from 'ahooks';
import classNames from 'classnames';
import React, {
  PropsWithoutRef,
  ReactElement,
  RefAttributes,
  forwardRef,
  memo,
  useContext,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import type { ConfigProviderContext } from '@baifendian/adhere-ui-configprovider/es/types';
import type { IDomEditor } from '@wangeditor/editor';

import ReactDOMStr from '../common-lib/react-dom.production.min';
import ReactStr from '../common-lib/react.production.min';
import WangEditorStr from './lib/wang-editor-5.1.23';
import WangEditorReactStr from './lib/wang-editor-react-1.0.6';
import type {
  EditorProps,
  ToolBarProps,
  WangEditorSandboxComponent,
  WangEditorSandboxHandler,
  WangEditorSandboxProps,
} from './types';

const selectorPrefix = 'adhere-ui-richtext-wangeditor-sandbox';

const editorId = 'wangEditorWrap';

const InternalWangEditorSandbox = memo<
  PropsWithoutRef<WangEditorSandboxProps> & RefAttributes<WangEditorSandboxHandler>
>(
  forwardRef<WangEditorSandboxHandler, WangEditorSandboxProps>((props, ref): ReactElement => {
    const { wrapStyle, wrapClassName, wangEditorStyle, toolBarProps, editorProps } = props;

    const wrapRef = useRef<HTMLDivElement | null>(null);

    const frameRef = useRef<HTMLIFrameElement | null>(null);

    const isMount = useRef<boolean>(false);

    const value = useRef<string>(props.value as string);

    const editor = useRef<IDomEditor | null>(null);

    const isTriggerChange = useRef(false);

    // @ts-ignore
    const configProvider = useContext<ConfigProviderContext>(ConfigProvider.Context);

    /**
     * langMap
     * @description 国际化的映射
     */
    const langMap = useMemo<Map<string, string>>(
      () =>
        new Map<string, string>([
          ['zh_CN', 'zh-CN'],
          ['en_US', 'en'],
        ]),
      [],
    );

    const defaultToolBarConfig = useMemo<ToolBarProps>(
      () => ({
        defaultConfig: {},
        mode: 'default',
      }),
      [],
    );

    const defaultEditorProps = useMemo<EditorProps>(
      () => ({
        defaultConfig: {},
        mode: 'default',
      }),
      [],
    );

    /**
     * renderWangEditor
     * @description 渲染富文本
     */
    function renderWangEditor() {
      return new Promise<{ window: Window; document: Document; wrap: HTMLDivElement }>(
        (resolve) => {
          const document = frameRef?.current?.contentDocument as Document;
          const window = frameRef?.current?.contentWindow as Window;

          if (!document || !window) {
            return;
          }

          const wrap = document.getElementById(editorId) as HTMLDivElement;

          // ----------------------------------------- start
          const styleSheet: CSSStyleSheet = document.styleSheets[0];
          const editorWrapRule: CSSStyleRule = styleSheet.cssRules[3] as CSSStyleRule;
          const headerRule: CSSStyleRule = styleSheet.cssRules[4] as CSSStyleRule;

          const editorWrapRuleCssText = `
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            overflow: hidden;
            box-sizing: border-box;
          `;

          const headerRulesText = `
            flex-shrink: 0;
          `;

          // 有边框
          if (!('bordered' in props) || props.bordered) {
            editorWrapRule.style.cssText = `
              ${editorWrapRuleCssText}
              border: 1px solid #ccc;
            `;
            headerRule.style.cssText = `
              ${headerRulesText}
              border-bottom: 1px solid #ccc;
            `;
          }
          // 没边框
          else {
            editorWrapRule.style.cssText = editorWrapRuleCssText;
            headerRule.style.cssText = headerRulesText;
          }
          // ----------------------------------------- end

          // console.log('render props.toolBarProps', {
          //   ...defaultToolBarConfig,
          //   ...props.toolBarProps,
          // });

          // @ts-ignore
          const { i18nChangeLanguage } = window?.wangEditor;
          i18nChangeLanguage(langMap.get(props.lang || configProvider.intl?.lang || 'zh_CN'));

          const {
            // @ts-ignore
            WangEditorForReact: { Editor, Toolbar },
            // @ts-ignore
            ReactDOM,
          } = window;

          ReactDOM.render(
            <>
              <Toolbar
                editor={editor.current}
                {...defaultToolBarConfig}
                {...(props.toolBarProps ?? {})}
              />
              <Editor
                ref={ref}
                {...defaultEditorProps}
                {...(props.editorProps ?? {})}
                onCreated={(_editor) => {
                  editor.current = _editor;
                  render().then(() => {
                    if (editorProps?.onCreated) {
                      editorProps.onCreated(_editor);
                    }
                  });
                }}
                value={value.current}
                onChange={(_editor) => {
                  if (!isTriggerChange.current) {
                    isTriggerChange.current = true;
                    return;
                  }

                  if (props.onChange) {
                    props.onChange(_editor.getHtml());
                  }
                }}
              />
            </>,
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
        wrapRef.current.style.height = `${document.documentElement.offsetHeight / getZoom()}px`;
      }
    }

    function getZoom() {
      let ratio = window.devicePixelRatio;

      if (ratio) {
        ratio = Math.round(ratio * 100);
      }

      return 100 / Number(ratio);
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

        return renderWangEditor();
      });
    }

    /**
     * useImperativeHandle
     * @description 向外暴漏的方法
     */
    useImperativeHandle(ref, () => ({
      /**
       * getEditor
       * @description 获取编辑器对象
       * @return {IDomEditor | null}
       */
      getEditor(): IDomEditor | null {
        return editor.current;
      },
      /**
       * getWangEditor
       * @description 获取wangEditor对象
       * @return {}
       */
      getWangEditor() {
        // @ts-ignore
        return frameRef?.current?.contentWindow?.wangEditor;
      },
    }));

    /**
     * useLayoutEffect
     * @description initEditor
     */
    useLayoutEffect(() => {
      function onLoad() {
        return render();
      }

      frameRef?.current?.addEventListener('load', onLoad);

      const reactUrl = URL.createObjectURL(new Blob([ReactStr], { type: 'text/javascript' }));
      const reactDOMUrl = URL.createObjectURL(new Blob([ReactDOMStr], { type: 'text/javascript' }));
      const wangEditorUrl = URL.createObjectURL(
        new Blob([WangEditorStr], { type: 'text/javascript' }),
      );
      const wangEditorReactUrl = URL.createObjectURL(
        new Blob([WangEditorReactStr], { type: 'text/javascript' }),
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
            }
            
            html > body > #${editorId} > [data-w-e-toolbar=true] {
            }
            
            html > body > #${editorId} > [data-w-e-textarea=true] {
              flex-grow: 1;
              min-height: 0;
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
            
            ${WangEditorCssStr}
            ${'readOnly' in props || props.readOnly ? WangEditorViewCssStr : ''}
            
            body {
              zoom: ${getZoom()};
            }
          </style>
          <script src="${reactUrl}"><\/script>
          <script src="${reactDOMUrl}"><\/script>
          <script src="${wangEditorUrl}"><\/script>
          <script src="${wangEditorReactUrl}"><\/script>
        </head>
        <html lang="en" class="${classNames({
          editor: !('readOnly' in props) || !props.readOnly,
        })}">
        <body>
          <div id="${editorId}" class="editor-content-view" style="${wangEditorStyle ?? ''}"></div>
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
        URL.revokeObjectURL(wangEditorUrl);
        URL.revokeObjectURL(wangEditorReactUrl);
      };
    }, []);

    /**
     * 及时销毁 editor
     */
    useEffect(() => {
      return () => {
        if (editor.current === null) return;

        editor.current.destroy();

        editor.current = null;

        render();
      };
    }, [editor]);

    /**
     * useUpdateEffect
     * @description value
     */
    useUpdateEffect(() => {
      value.current = props.value as string;

      if (isMount.current) {
        render().then(() => {});
      }
    }, [props.value]);

    /**
     * useUpdateEffect
     * @description toolBarProps, editorProps
     */
    useUpdateEffect(() => {
      // console.log('toolBarProps change', toolBarProps);

      if (isMount.current) {
        render().then(() => {});
      }
    }, [toolBarProps, editorProps]);

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

const WangEditorSandbox = InternalWangEditorSandbox as WangEditorSandboxComponent;

WangEditorSandbox.displayName = 'WangEditorSandbox';

WangEditorSandbox.AntdFormRequireValidator = (editor, tip) => ({
  validator: (rule, value, callback) => {
    if (editor?.()?.isEmpty?.()) {
      callback(tip);
    } else {
      callback();
    }
  },
});

export default WangEditorSandbox;
