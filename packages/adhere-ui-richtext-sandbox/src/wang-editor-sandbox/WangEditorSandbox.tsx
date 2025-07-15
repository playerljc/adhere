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
  useCallback,
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

/** CSS选择器前缀 */
const SELECTOR_PREFIX = 'adhere-ui-richtext-wangeditor-sandbox';

/** 编辑器容器ID */
const EDITOR_ID = 'wangEditorWrap';

/** 默认高度调整值 */
const DEFAULT_HEIGHT_GAP = 60;

/** 默认文本方向 */
const DEFAULT_DIRECTION = 'ltr';

/**
 * iframe窗口类型扩展
 */
interface IframeWindow extends Window {
  wangEditor: {
    i18nAddResources: (locale: string, resources: Record<string, string>) => void;
    i18nChangeLanguage: (locale: string) => void;
  };
  WangEditorForReact: {
    Editor: React.ComponentType<any>;
    Toolbar: React.ComponentType<any>;
  };
  ReactDOM: {
    render: (
      element: React.ReactElement,
      container: HTMLElement,
      callback?: () => void
    ) => void;
  };
}

/**
 * 渲染结果接口
 */
interface RenderResult {
  window: IframeWindow;
  document: Document;
  wrap: HTMLDivElement;
}

/**
 * WangEditor沙箱组件
 * 
 * 该组件通过iframe沙箱环境运行WangEditor编辑器，提供隔离的编辑环境，
 * 避免样式冲突和全局污染。
 * 
 * @param props - 组件属性
 * @param ref - 转发引用
 * @returns React元素
 */
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
      gap = DEFAULT_HEIGHT_GAP,
      direction = DEFAULT_DIRECTION,
    } = props;

    // 引用
    const wrapRef = useRef<HTMLDivElement | null>(null);
    const frameRef = useRef<HTMLIFrameElement | null>(null);
    const resizeObserverRef = useRef<ResizeObserver | null>(null);
    const isMount = useRef<boolean>(false);
    const value = useRef<string>(props.value as string);
    const editor = useRef<IDomEditor | null>(null);
    const isTriggerChange = useRef(false);

    // 配置提供者上下文
    const configProvider = useContext<ConfigProviderContext>(ConfigProvider.Context);

    /**
     * 国际化映射
     * @description 将配置提供者的语言映射到WangEditor支持的语言
     */
    const langMap = useMemo<Map<string, string>>(() => {
      const map = new Map<string, string>([
        ['zh_CN', 'zh-CN'],
        ['en_US', 'en'],
      ]);

      // 添加自定义国际化
      Object.keys(props?.locales ?? {}).forEach((key) => {
        map.set(key, key);
      });

      return map;
    }, [props?.locales]);

    /**
     * 默认工具栏配置
     */
    const defaultToolBarConfig = useMemo<ToolBarProps>(
      () => ({
        defaultConfig: {},
        mode: 'default',
      }),
      []
    );

    /**
     * 默认编辑器配置
     */
    const defaultEditorProps = useMemo<EditorProps>(
      () => ({
        defaultConfig: {},
        mode: 'default',
      }),
      []
    );

    /**
     * 获取设备像素比缩放值
     * @returns 缩放比例
     */
    const getZoom = useCallback((): number => {
      const ratio = window.devicePixelRatio;
      if (ratio) {
        return 100 / Math.round(ratio * 100);
      }
      return 1;
    }, []);

    /**
     * 渲染WangEditor编辑器
     * @returns Promise<RenderResult> 渲染结果
     */
    const renderWangEditor = useCallback((): Promise<RenderResult> => {
      return new Promise<RenderResult>((resolve, reject) => {
        const document = frameRef?.current?.contentDocument;
        const window = frameRef?.current?.contentWindow as IframeWindow;

        if (!document || !window) {
          reject(new Error('iframe document or window not available'));
          return;
        }

        const wrap = document.getElementById(EDITOR_ID) as HTMLDivElement;
        if (!wrap) {
          reject(new Error(`Editor container with id '${EDITOR_ID}' not found`));
          return;
        }

        try {
          // 获取样式表并更新样式
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

          // 根据bordered属性设置边框样式
          if (!('bordered' in props) || props.bordered) {
            editorWrapRule.style.cssText = `
              ${editorWrapRuleCssText}
              border: 1px solid #ccc;
            `;
            headerRule.style.cssText = `
              ${headerRulesText}
              border-bottom: 1px solid #ccc;
            `;
          } else {
            editorWrapRule.style.cssText = editorWrapRuleCssText;
            headerRule.style.cssText = headerRulesText;
          }

          // 设置国际化
          const { i18nAddResources, i18nChangeLanguage } = window.wangEditor;

          // 添加新的国际化资源
          if (props.locales) {
            Object.keys(props.locales).forEach((localeKey) => {
              i18nAddResources(localeKey, props.locales?.[localeKey] || {});
            });
          }

          // 切换语言
          const currentLang = props.lang || configProvider.intl?.lang || 'zh_CN';
          i18nChangeLanguage(langMap.get(currentLang) || 'zh-CN');

          const { WangEditorForReact: { Editor, Toolbar }, ReactDOM } = window;

          // 渲染编辑器
          ReactDOM.render(
            React.createElement(React.Fragment, null, [
              React.createElement(Toolbar, {
                key: 'toolbar',
                editor: editor.current,
                ...defaultToolBarConfig,
                ...(props.toolBarProps ?? {}),
              }),
              React.createElement(Editor, {
                key: 'editor',
                ref: ref,
                ...defaultEditorProps,
                ...(props.editorProps ?? {}),
                onCreated: (_editor: IDomEditor) => {
                  editor.current = _editor;
                  render().then(() => {
                    if (editorProps?.onCreated) {
                      editorProps.onCreated(_editor);
                    }
                  }).catch((error) => {
                    console.error('Failed to render after editor created:', error);
                  });
                },
                value: value.current,
                onChange: (_editor: IDomEditor) => {
                  if (!isTriggerChange.current) {
                    isTriggerChange.current = true;
                    return;
                  }

                  if (props.onChange) {
                    props.onChange(_editor.getHtml());
                  }
                },
              }),
            ]),
            wrap,
            () => {
              isMount.current = true;
              resolve({
                document,
                window,
                wrap,
              });
            }
          );
        } catch (error) {
          reject(error);
        }
      });
    }, [props, configProvider.intl?.lang, langMap, defaultToolBarConfig, defaultEditorProps, editorProps, ref]);

    /**
     * 渲染HTML内容（只读模式）
     */
    const renderHTML = useCallback((): void => {
      const document = frameRef?.current?.contentDocument;
      if (!document) return;

      const wrap = document.getElementById(EDITOR_ID) as HTMLDivElement;
      if (wrap) {
        wrap.innerHTML = props.value as string;
      }
    }, [props.value]);

    /**
     * 监听高度变化
     */
    const monitorHeightChange = useCallback((): void => {
      const document = frameRef?.current?.contentDocument;
      if (!document) return;

      const editElement = document.getElementById(EDITOR_ID);
      if (!editElement) return;

      // 清理之前的观察器
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }

      // 创建新的ResizeObserver实例
      resizeObserverRef.current = new ResizeObserver((entries) => {
        requestAnimationFrame(() => {
          for (const entry of entries) {
            if (entry.target === editElement) {
              const newHeight = entry.contentRect.height;
              if (wrapRef.current) {
                wrapRef.current.style.height = `${newHeight + gap}px`;
              }
            }
          }
        });
      });

      // 开始观察元素
      resizeObserverRef.current.observe(editElement);
    }, [gap]);

    /**
     * 渲染内容
     * @returns Promise<RenderResult | void> 渲染结果
     */
    const render = useCallback((): Promise<RenderResult | void> => {
      return new Promise<void>((resolve) => {
        // 只读模式
        if ('readOnly' in props && props.readOnly) {
          monitorHeightChange();
          renderHTML();
          resolve();
          return;
        }

        // 编辑模式
        renderWangEditor().catch((error) => {
          console.error('Failed to render WangEditor:', error);
          resolve();
        });
      });
    }, [props.readOnly, monitorHeightChange, renderHTML, renderWangEditor]);

    /**
     * 向外暴露的方法
     */
    useImperativeHandle(ref, () => ({
      getEditor: (): IDomEditor | null => {
        return editor.current;
      },
      getWangEditor: () => {
        const iframeWindow = frameRef?.current?.contentWindow as IframeWindow;
        return iframeWindow?.wangEditor as any;
      },
      getWindow: (): Window => {
        return frameRef?.current?.contentWindow as Window;
      },
    }));

    /**
     * 初始化iframe和编辑器
     */
    useLayoutEffect(() => {
      const onLoad = (): void => {
        render().catch((error) => {
          console.error('Failed to render editor:', error);
        });
      };

      const iframe = frameRef.current;
      if (!iframe) return;

      iframe.addEventListener('load', onLoad);

      // 创建资源URL
      const reactUrl = URL.createObjectURL(new Blob([ReactStr], { type: 'text/javascript' }));
      const reactDOMUrl = URL.createObjectURL(new Blob([ReactDOMStr], { type: 'text/javascript' }));
      const wangEditorUrl = URL.createObjectURL(
        new Blob([WangEditorStr], { type: 'text/javascript' })
      );
      const wangEditorReactUrl = URL.createObjectURL(
        new Blob([WangEditorReactStr], { type: 'text/javascript' })
      );

      // 处理注入的脚本和样式
      const injectionScriptToString = injectionScriptsByString
        ?.map((script) => {
          const url = URL.createObjectURL(new Blob([script], { type: 'text/javascript' }));
          return `<script src="${url}"><\/script>`;
        })
        ?.join('') ?? '';

      const injectionStyleToString = injectionStylesByString
        ?.map((style) => {
          const url = URL.createObjectURL(new Blob([style], { type: 'text/css' }));
          return `<link rel="stylesheet" href="${url}"/>`;
        })
        ?.join('') ?? '';

      // 创建iframe内容
      const iframeContent = `
        <!DOCTYPE html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="Content-Security-Policy" content="default-src 'self'; blob:">
          <title>WangEditor Sandbox</title>
          <style>
            html, body {
              margin: 0;
              padding: 0;
              height: 100%;
              overflow: hidden;
            }

            html.editor {
              width: 100%;
              height: 100%;
            }

            html.editor > body {
              width: 100%;
              height: 100%;
            }

            html.editor > body > #${EDITOR_ID} {
            }
            
            html > body > #${EDITOR_ID} > [data-w-e-toolbar=true] {
            }
            
            html > body > #${EDITOR_ID} > [data-w-e-textarea=true] {
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
              /*zoom: ${getZoom()};*/
            }
          </style>
          ${injectionStyleToString}
          ${injectionStyles?.map((href) => `<link rel="stylesheet" href="${href}" />`)?.join('') ?? ''}
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
            <div id="${EDITOR_ID}" dir="${direction}" class="editor-content-view" style="${
              wangEditorStyle ?? ''
            }"></div>
          </body>
        </html>
      `;

      const iframeUrl = URL.createObjectURL(
        new Blob([iframeContent], { type: 'text/html' })
      );

      iframe.src = iframeUrl;

      // 清理函数
      return () => {
        iframe.removeEventListener('load', onLoad);
        
        // 清理URL对象
        URL.revokeObjectURL(iframeUrl);
        URL.revokeObjectURL(reactUrl);
        URL.revokeObjectURL(reactDOMUrl);
        URL.revokeObjectURL(wangEditorUrl);
        URL.revokeObjectURL(wangEditorReactUrl);

        // 清理ResizeObserver
        if (resizeObserverRef.current) {
          resizeObserverRef.current.disconnect();
        }
      };
    }, [props.readOnly, wangEditorStyle, direction, getZoom, injectionScripts, injectionScriptsByString, injectionStyles, injectionStylesByString]);

    /**
     * 及时销毁编辑器
     */
    useEffect(() => {
      return () => {
        if (editor.current === null) return;

        editor.current.destroy();
        editor.current = null;
        render().catch((error) => {
          console.error('Failed to render after editor destroy:', error);
        });
      };
    }, [render]);

    /**
     * 监听value变化
     */
    useUpdateEffect(() => {
      value.current = props.value as string;

      if (isMount.current) {
        render().catch((error) => {
          console.error('Failed to update editor value:', error);
        });
      }
    }, [props.value, render]);

    /**
     * 监听toolBarProps和editorProps变化
     */
    useUpdateEffect(() => {
      if (isMount.current) {
        render().catch((error) => {
          console.error('Failed to update editor props:', error);
        });
      }
    }, [toolBarProps, editorProps, render]);

    return (
      <div
        ref={wrapRef}
        className={classNames(SELECTOR_PREFIX, wrapClassName ?? '')}
        style={wrapStyle ?? {}}
      >
        <iframe 
          ref={frameRef} 
          className={`${SELECTOR_PREFIX}-frame`}
          title="WangEditor Sandbox"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    );
  })
);

// 类型断言
const WangEditorSandbox = InternalWangEditorSandbox as WangEditorSandboxComponent;

// 设置显示名称
WangEditorSandbox.displayName = 'WangEditorSandbox';

// 添加静态方法
WangEditorSandbox.AntdFormRequireValidator = (editor, tip) => ({
  validator: (rule, value, callback) => {
    const editorInstance = editor();
    if (editorInstance?.isEmpty?.()) {
      callback(tip);
    } else {
      callback();
    }
  },
});

export default WangEditorSandbox;
