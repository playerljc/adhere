import { useUpdateEffect } from 'ahooks';
import classNames from 'classnames';
import Quill from 'quill';
import React, {
  PropsWithoutRef,
  ReactElement,
  RefAttributes,
  forwardRef,
  memo,
  useCallback,
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

/** 编辑器容器ID */
const EDITOR_ID = 'quillWrap';

/** 默认高度调整值 */
const DEFAULT_HEIGHT_GAP = 60;

/**
 * ReactQuill主题对应的样式映射
 */
const THEME_MAP = new Map<string, string>([
  ['snow', QuillSnowCssStr],
  ['bubble', QuillBubbleCssStr],
]);

/** CSS选择器前缀 */
const SELECTOR_PREFIX = 'adhere-ui-richtext-reactquill-sandbox';

/**
 * iframe窗口类型扩展
 */
interface IframeWindow extends Window {
  ReactDOM: {
    render: (
      element: React.ReactElement,
      container: HTMLElement,
      callback?: () => void
    ) => any;
  };
  ReactQuill: typeof ReactQuill & {
    Quill: typeof Quill;
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
 * ReactQuill沙箱组件
 * 
 * 该组件通过iframe沙箱环境运行ReactQuill编辑器，提供隔离的编辑环境，
 * 避免样式冲突和全局污染。
 * 
 * @param props - 组件属性
 * @param ref - 转发引用
 * @returns React元素
 */
const InternalReactQuillSandbox = memo<
  PropsWithoutRef<ReactQuillSandboxProps> & RefAttributes<ReactQuillSandboxHandler>
>(
  forwardRef<ReactQuillSandboxHandler, ReactQuillSandboxProps>((props, ref): ReactElement => {
    const { wrapStyle, wrapClassName, quillStyle, value: _value, ...quillProps } = props;

    // 引用
    const wrapRef = useRef<HTMLDivElement>(null);
    const frameRef = useRef<HTMLIFrameElement>(null);
    const resizeObserverRef = useRef<ResizeObserver | null>(null);
    const isMount = useRef<boolean>(false);
    const value = useRef<string>(props.value as string);
    const reactQuillRef = useRef<ReactQuill>();

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
     * 渲染ReactQuill编辑器
     * @returns Promise<RenderResult> 渲染结果
     */
    const renderQuill = useCallback((): Promise<RenderResult> => {
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
          // 创建ReactQuill元素
          const ReactQuillComponent = window.ReactQuill as any;
          const reactQuillElement = React.createElement(ReactQuillComponent, {
            ...quillProps,
            value: value.current ?? '',
            onChange: (value: string, delta: any, source: any, editor: any) => {
              if (!isMount.current) return;
              
              if (props.onChange) {
                props.onChange(value, delta, source, editor);
              }
            },
          });

          // 渲染到容器
          const renderDOM = window.ReactDOM.render as any;
          renderDOM(reactQuillElement, wrap, () => {
            // 设置挂载状态
            isMount.current = true;
            resolve({
              document,
              window,
              wrap,
            });
          });
        } catch (error) {
          reject(error);
        }
      });
    }, [quillProps, props.onChange]);

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
                wrapRef.current.style.height = `${newHeight + DEFAULT_HEIGHT_GAP}px`;
              }
            }
          }
        });
      });

      // 开始观察元素
      resizeObserverRef.current.observe(editElement);
    }, []);

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
        renderQuill().catch((error) => {
          console.error('Failed to render ReactQuill:', error);
          resolve();
        });
      });
    }, [props.readOnly, monitorHeightChange, renderHTML, renderQuill]);

    /**
     * 向外暴露的方法
     */
    useImperativeHandle(ref, () => ({
      focus: () => {
        reactQuillRef.current?.focus();
      },
      blur: () => {
        reactQuillRef.current?.blur();
      },
      getEditor: (): Quill => {
        return reactQuillRef.current?.getEditor() as Quill;
      },
      getQuill: (): Quill => {
        const iframeWindow = frameRef?.current?.contentWindow as IframeWindow;
        return iframeWindow?.ReactQuill?.Quill as unknown as Quill;
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
      const propTypesUrl = URL.createObjectURL(
        new Blob([PropTypesStr], { type: 'text/javascript' })
      );
      const reactUrl = URL.createObjectURL(
        new Blob([ReactStr], { type: 'text/javascript' })
      );
      const reactDOMUrl = URL.createObjectURL(
        new Blob([ReactDOMStr], { type: 'text/javascript' })
      );
      const reactQuillUrl = URL.createObjectURL(
        new Blob([ReactQuillStr], { type: 'text/javascript' })
      );

      // 创建iframe内容
      const iframeContent = `
        <!DOCTYPE html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>ReactQuill Sandbox</title>
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
            
            body {
              /*zoom: ${getZoom()};*/
            }
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
          <div id="${EDITOR_ID}" style="${quillStyle ?? ''}"></div>
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
        URL.revokeObjectURL(reactQuillUrl);
        URL.revokeObjectURL(propTypesUrl);

        // 清理ResizeObserver
        if (resizeObserverRef.current) {
          resizeObserverRef.current.disconnect();
        }
      };
    }, [props.readOnly, quillStyle, getZoom]);

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
     * 监听其他属性变化
     */
    useUpdateEffect(() => {
      if (isMount.current) {
        render().catch((error) => {
          console.error('Failed to update editor props:', error);
        });
      }
    }, [quillProps, render]);

    return (
      <div
        ref={wrapRef}
        className={classNames(SELECTOR_PREFIX, wrapClassName ?? '')}
        style={wrapStyle ?? {}}
      >
        <iframe 
          ref={frameRef} 
          className={`${SELECTOR_PREFIX}-frame`}
          title="ReactQuill Sandbox"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    );
  })
);

// 类型断言
const ReactQuillSandbox = InternalReactQuillSandbox as ReactQuillSandboxComponent;

// 设置显示名称
ReactQuillSandbox.displayName = 'ReactQuillSandbox';

// 添加静态方法
ReactQuillSandbox.AntdFormRequireValidator = (editor, tip) => ({
  validator: (rule, value, callback) => {
    const editorInstance = editor();
    if (editorInstance && editorInstance.getLength && editorInstance.getLength() > 1) {
      callback();
    } else {
      callback(tip);
    }
  },
});

export default ReactQuillSandbox;

