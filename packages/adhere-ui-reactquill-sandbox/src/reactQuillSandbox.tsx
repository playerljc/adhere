import { useUpdateEffect } from 'ahooks';
import classNames from 'classnames';
import Quill from 'quill';
import React, {
  ForwardRefRenderFunction,
  ReactElement,
  forwardRef,
  memo,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';
import ReactQuill from 'react-quill';

import ReactDOMStr from './lib/react-dom.production.min';
import ReactQuillStr from './lib/react-quill';
import ReactStr from './lib/react.production.min';
import { ReactQuillSandboxHandler, ReactQuillSandboxProps } from './types';

import QuillBubbleCssStr from './lib/quill.bubble.css';
import QuillSnowCssStr from './lib/quill.snow.css';

/**
 * ReactQuill主题对应的样式
 */
const THEME_MAP = new Map<string, string>([
  ['snow', QuillSnowCssStr],
  ['bubble', QuillBubbleCssStr],
]);

const selectorPrefix = 'adhere-ui-reactquillsandbox';

/**
 * ReactQuillSandbox
 * @param props
 * @param ref
 * @constructor
 */
const ReactQuillSandbox: ForwardRefRenderFunction<
  ReactQuillSandboxHandler,
  ReactQuillSandboxProps
> = (props, ref): ReactElement => {
  const { wrapStyle, wrapClassName, quillStyle, ..._props } = props;
  const frameRef = useRef<HTMLIFrameElement>(null);

  const reactQuillRef = useRef<ReactQuill>();

  /**
   * render
   */
  function render(): Promise<{ window: Window; document: Document; wrap: HTMLDivElement }> {
    return new Promise((resolve) => {
      const document = frameRef?.current?.contentDocument as Document;
      const window = frameRef?.current?.contentWindow as Window;

      const wrap = document.getElementById('quillWrap') as HTMLDivElement;

      // @ts-ignore
      window.ReactDOM.render(<window.ReactQuill ref={reactQuillRef} {..._props} />, wrap, () =>
        resolve({
          document,
          window,
          wrap,
        }),
      );
    });
  }

  /**
   * useImperativeHandle
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
            html,body {
              width: 100%;
              height: 100%;
              margin: 0;      
              padding: 0;
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
          <script src="${reactUrl}"><\/script>
          <script src="${reactDOMUrl}"><\/script>
          <script src="${reactQuillUrl}"><\/script>
        </head>
        <html lang="en">
        <body>
          <div id="quillWrap" style="width: 100%;height: 100%;${quillStyle || ''}"></div>
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
    };
  }, []);

  /**
   * useUpdateEffect
   */
  useUpdateEffect(() => {
    render().then(({ wrap }) => {
      wrap.style.cssText = `width: 100%;height: 100%;${props.quillStyle || ''}`;
    });
  }, Array.from(Object.values(_props)));

  return (
    <div className={classNames(`${selectorPrefix}`, wrapClassName || '')} style={wrapStyle || {}}>
      <iframe ref={frameRef} className={`${selectorPrefix}-frame`}></iframe>
    </div>
  );
};

export default memo(
  forwardRef<ReactQuillSandboxHandler, ReactQuillSandboxProps>(ReactQuillSandbox),
);
