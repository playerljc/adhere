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
import Util from '@baifendian/adhere-util';
import type { IDomEditor } from '@wangeditor/editor';

import ReactDOMStr from '../common-lib/react-dom.18.3.1production.min.js';
import ReactStr from '../common-lib/react.18.3.1.production.min.js';
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
    const {
      wrapStyle,
      wrapClassName,
      wangEditorStyle,
      toolBarProps,
      editorProps,
      injectionScripts,
      injectionScriptsByString,
      injectionStyles,
      injectionStylesByString,
      gap = 60,
      direction = 'ltr',
      onRender,
    } = props;

    const wrapRef = useRef<HTMLDivElement | null>(null);

    const frameRef = useRef<HTMLIFrameElement | null>(null);

    const resizeObserverRef = useRef<ResizeObserver | null>(null);

    const isMount = useRef<boolean>(false);

    const value = useRef<string>(props.value as string);

    const editor = useRef<IDomEditor | null>(null);

    const isTriggerChange = useRef(false);

    const reactRootRef = useRef<any>(null);

    // @ts-ignore
    const configProvider = useContext<ConfigProviderContext>(ConfigProvider.Context);

    /**
     * langMap
     * @description 国际化的映射
     */
    const langMap = useMemo<Map<string, string>>(() => {
      const map = new Map<string, string>([
        ['zh_CN', 'zh-CN'],
        ['en_US', 'en'],
      ]);

      Object.keys(props?.locales ?? []).forEach((key) => {
        map.set(key, key);
      });

      return map;
    }, [props?.locales]);

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
              border: 1px solid var(--w-e-textarea-border-color);
            `;
            headerRule.style.cssText = `
              ${headerRulesText}
              border-bottom: 1px solid var(--w-e-textarea-border-color);
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
          const { i18nAddResources, i18nChangeLanguage } = window?.wangEditor;

          // 添加新的国际化
          if (props.locales) {
            Object.keys(props.locales).forEach((localeKey) => {
              i18nAddResources(localeKey, props.locales?.[localeKey]);
            });
          }

          // 切换国际化
          i18nChangeLanguage(langMap.get(props.lang || configProvider.intl?.lang || 'zh_CN'));

          // 检查依赖是否加载
          // @ts-ignore
          if (!window.WangEditorForReact) {
            console.error('[WangEditorSandbox] WangEditorForReact is not loaded on window');
            return;
          }

          // @ts-ignore
          if (!window.ReactDOM) {
            console.error('[WangEditorSandbox] ReactDOM is not loaded on window');
            return;
          }

          // @ts-ignore
          if (!window.React) {
            console.error('[WangEditorSandbox] React is not loaded on window');
            return;
          }

          const {
            // @ts-ignore
            WangEditorForReact,
            // @ts-ignore
            ReactDOM,
          } = window;

          const { Editor, Toolbar } = WangEditorForReact;

          // 检查组件是否存在
          if (!Editor || !Toolbar) {
            console.error('[WangEditorSandbox] Editor or Toolbar component is undefined');
            return;
          }

          if ((ReactDOM as any)?.createRoot) {
            if (!reactRootRef.current) {
              reactRootRef.current = (ReactDOM as any).createRoot(wrap);
            }

            try {
              // @ts-ignore
              const React = window.React;
              
              const element = React.createElement(
                React.Fragment,
                null,
                React.createElement(Toolbar, {
                  editor: editor.current,
                  ...defaultToolBarConfig,
                  ...(props.toolBarProps ?? {}),
                }),
                React.createElement(Editor, {
                  ref: ref,
                  ...defaultEditorProps,
                  ...(props.editorProps ?? {}),
                  onCreated: (_editor) => {
                    editor.current = _editor;
                    render().then(() => {
                      if (editorProps?.onCreated) {
                        editorProps.onCreated(_editor);
                      }

                      onRender?.();
                    });
                  },
                  value: value.current,
                  onChange: (_editor) => {
                    if (!isTriggerChange.current) {
                      isTriggerChange.current = true;
                      return;
                    }

                    if (props.onChange) {
                      props.onChange(_editor.getHtml());
                    }
                  },
                }),
              );
              
              reactRootRef.current.render(element);
            } catch (error) {
              console.error('[WangEditorSandbox] Render error:', error);
              throw error;
            }

            isMount.current = true;

            resolve({
              document,
              window,
              wrap,
            });
          } else {
            try {
              // @ts-ignore
              const React = window.React;
              
              const element = React.createElement(
                React.Fragment,
                null,
                React.createElement(Toolbar, {
                  editor: editor.current,
                  ...defaultToolBarConfig,
                  ...(props.toolBarProps ?? {}),
                }),
                React.createElement(Editor, {
                  ref: ref,
                  ...defaultEditorProps,
                  ...(props.editorProps ?? {}),
                  onCreated: (_editor) => {
                    editor.current = _editor;
                    render().then(() => {
                      if (editorProps?.onCreated) {
                        editorProps.onCreated(_editor);
                      }

                      onRender?.();
                    });
                  },
                  value: value.current,
                  onChange: (_editor) => {
                    if (!isTriggerChange.current) {
                      isTriggerChange.current = true;
                      return;
                    }

                    if (props.onChange) {
                      props.onChange(_editor.getHtml());
                    }
                  },
                }),
              );
              
              ReactDOM.render(
                element,
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
            } catch (error) {
              console.error('[WangEditorSandbox] Render error (legacy):', error);
              throw error;
            }
          }
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
      wrap.innerHTML = `<div class="w-view">${props.value as string}</div>`;

      // if (wrapRef.current) {
      //   wrapRef.current.style.height = `${document.documentElement.offsetHeight / getZoom()}px`;
      // }
    }

    function getZoom() {
      let ratio = window.devicePixelRatio;

      if (ratio) {
        ratio = Math.round(ratio * 100);
      }

      return 100 / Number(ratio);
    }

    function monitorHeightChange() {
      const document = frameRef?.current?.contentDocument as Document;

      if (!document) return;

      const editEL = document.getElementById(editorId);

      if (!editEL) return;

      // 创建一个 ResizeObserver 实例
      resizeObserverRef.current = new ResizeObserver((entries) => {
        requestAnimationFrame(() => {
          for (const entry of entries) {
            if (entry.target === editEL) {
              const newHeight = entry.contentRect.height;
              if (wrapRef.current) {
                wrapRef.current.style.height = `${newHeight + gap}px`;
              }
            }
          }
        });
      });

      // 开始观察 body 元素
      resizeObserverRef.current.observe(editEL);
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
          monitorHeightChange();
          renderHTML();
          resolve();
          return;
        }

        return renderWangEditor().then(() => {
          resolve();
        });
      });
    }

    function getWindow() {
      return frameRef?.current?.contentWindow as Window;
    }

    function getDocument() {
      return frameRef?.current?.contentDocument as Document;
    }

    function getWangEditor() {
      // @ts-ignore
      return frameRef?.current?.contentWindow?.wangEditor;
    }

    function getEditor(): IDomEditor | null {
      return editor.current;
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
        return getEditor();
      },
      /**
       * getWangEditor
       * @description 获取wangEditor对象
       * @return {}
       */
      getWangEditor() {
        return getWangEditor();
      },
      getWindow() {
        return getWindow();
      },
      getDocument() {
        return getDocument();
      },
      setTheme(theme): void {
        const document = getDocument();

        Object.keys(theme).forEach((key: string) => {
          const value = theme[key];

          if (value) {
            document.documentElement.style.setProperty(
              `--w-e-${Util.pascalCaseToKebabCase2(key, '-')}`,
              value,
            );
          }
        });
      },
    }));

    /**
     * useLayoutEffect
     * @description initEditor
     */
    useLayoutEffect(() => {
      function onLoad() {
        return render().then(() => {
          onRender?.();
        });
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

      const injectionScriptToString =
        injectionScriptsByString
          ?.map((string) => {
            const url = URL.createObjectURL(new Blob([string], { type: 'text/javascript' }));
            return `<script src="${url}"><\/script>`;
          })
          ?.join('') ?? '';

      const injectionStyleToString =
        injectionStylesByString
          ?.map((string) => {
            const url = URL.createObjectURL(new Blob([string], { type: 'text/css' }));
            return `<link rel="stylesheet" href="${url}"/>`;
          })
          ?.join('') ?? '';

      const iframeUrl = URL.createObjectURL(
        new Blob(
          [
            `
        <!DOCTYPE html>
        <head>
          <meta charset="UTF-8" />
          <meta
                  name="viewport"
                  content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width"
          />
          <meta http-equiv="Content-Security-Policy" content="default-src'self'; blob:">
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
            
            ${
              'readOnly' in props || props.readOnly
                ? `.w-view {
                    color: var(--w-e-textarea-color);
                  }`
                : ''
            }
            ${WangEditorCssStr}
            ${'readOnly' in props || props.readOnly ? WangEditorViewCssStr : ''}
            
            body {
              /*zoom: ${getZoom()};*/
            }
          </style>
          ${injectionStyleToString}
          ${
            injectionStyles?.map((href) => `<link rel="stylesheet" href="${href}" />`)?.join('') ??
            ''
          }
          <script src="${reactUrl}"><\/script>
          <script src="${reactDOMUrl}"><\/script>
          <script src="${wangEditorUrl}"><\/script>
          <script src="${wangEditorReactUrl}"><\/script>
          ${injectionScripts?.map((href) => `<script src="${href}"></script>`)?.join('') ?? ''}
          ${injectionScriptToString}
        </head>
        
        <html lang="en" class="${classNames({
          editor: !('readOnly' in props) || !props.readOnly,
        })}">
          <body>
            <div id="${editorId}" dir="${direction}" class="editor-content-view" style="${
              wangEditorStyle ?? ''
            }"></div>
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

        if (reactRootRef.current && typeof reactRootRef.current.unmount === 'function') {
          reactRootRef.current.unmount();
          reactRootRef.current = null;
        }

        if (resizeObserverRef.current) {
          resizeObserverRef.current.disconnect();
        }
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

        render().then(() => {
          onRender?.();
        });
      };
    }, [editor]);

    /**
     * useUpdateEffect
     * @description value
     */
    useUpdateEffect(() => {
      value.current = props.value as string;

      if (isMount.current) {
        render().then(() => {
          onRender?.();
        });
      }
    }, [props.value]);

    /**
     * useUpdateEffect
     * @description toolBarProps, editorProps
     */
    useUpdateEffect(() => {
      // console.log('toolBarProps change', toolBarProps);

      if (isMount.current) {
        render().then(() => {
          onRender?.();
        });
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
