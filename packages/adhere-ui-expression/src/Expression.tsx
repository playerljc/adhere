import { useMount, useUpdateLayoutEffect } from 'ahooks';
import { Empty } from 'antd';
import classNames from 'classnames';
import React, { forwardRef, memo, useImperativeHandle, useMemo, useRef } from 'react';
import type { PropsWithoutRef, RefAttributes } from 'react';

import { CloseCircleOutlined } from '@ant-design/icons';
import Hooks from '@baifendian/adhere-ui-hooks';
import Util from '@baifendian/adhere-util';
import Intl from '@baifendian/adhere-util-intl';

import View from './View';
import ElasticSearchOperators from './operators/ElasticSearch';
import type {
  ExpressionComponent,
  ExpressionHandle,
  ExpressionProps,
  OperatorItem,
  OperatorType,
  Operators,
} from './types';

const {
  getCurrentParentElementWithCursor,
  getCurrentElementWithCursor,
  setCursorToEnd,
  setCursorPositionToNode,
  setCursorPosition,
  getCursorIndex,
  getCursorRectByDocument,
  isString,
  isFunction,
} = Util;

// 缺省的触发字符code
const defaultTriggerCharCode = 32;

// html的空格
const htmlSpace = '&nbsp;';

// 弹层的宽度
const modalWidth = 300;

const { useSetState } = Hooks;

export const selectorPrefix = 'adhere-ui-expression';

/**
 * Expression
 * @param className
 * @param style
 * @param editorClassName
 * @param editorStyle
 * @param operatorWrapClassName
 * @param operatorWrapStyle
 * @param quickTipWrapClassName
 * @param quickTipWrapStyle
 * @param textClassName
 * @param operatorClassName
 * @param value
 * @param placeholder
 * @param triggerCharCode
 * @param quickTipProp
 * @param quickTipDataSource
 * @param disableQuickTip
 * @param operators
 * @param allowClear
 * @param onChange
 * @param onContinuousTextChange
 * @param onEditorInputEnd
 * @param onEditorBlurEnd
 * @param onEditorKeyDownEnd
 * @param onEditorPasteEnd
 * @param ref
 * @constructor
 */
const InternalExpression = memo<
  PropsWithoutRef<ExpressionProps<any>> & RefAttributes<ExpressionHandle>
>(
  forwardRef<ExpressionHandle, ExpressionProps<any>>(
    (
      {
        className,
        style,
        editorClassName,
        editorStyle,
        operatorWrapClassName,
        operatorWrapStyle,
        quickTipWrapClassName,
        quickTipWrapStyle,
        textClassName,
        operatorClassName,
        value,
        placeholder,
        triggerCharCode,
        quickTipProp,
        quickTipDataSource,
        disableQuickTip,
        operators,
        allowClear,
        onChange,
        onContinuousTextChange,
        onEditorInputEnd,
        onEditorBlurEnd,
        onEditorKeyDownEnd,
        onEditorPasteEnd,
      },
      ref,
    ) => {
      const operatorsConfig = useMemo<Operators>(
        () => operators ?? (ElasticSearchOperators as OperatorItem[]),
        [operators],
      );

      // contextRef
      const contextRef = useRef<HTMLDivElement | null>(null);

      // input对象
      const editorRef = useRef<HTMLDivElement | null>(null);

      // 运算符下拉
      const operatorsRef = useRef<HTMLDivElement | null>(null);

      // quickTipRef
      const quickTipRef = useRef<HTMLDivElement | null>(null);

      // placeholder
      const placeholderRef = useRef<HTMLDivElement | null>(null);

      // 光标输入处的父元素
      const cursorContextParentElement = useRef<Node | null>(null);

      // 光标输入处的元素
      const cursorContextElement = useRef<Node | null>(null);

      // 光标的索引
      const cursorIndex = useRef<number>(-1);

      // 之前光标的索引
      const preCursorIndex = useRef(0);
      // 之前光标处的元素
      const preCursorContextElement = useRef<Node | null>(null);
      // 连续输入的字符
      const continuousText = useRef('');
      // 若干可见字符的输入之前，而这些可见字符的输入可能需要一连串的键盘操作、点击输入法的备选词等
      const comStart = useRef(false);

      const [operatorsShow, setOperatorsShow] = useSetState(false);

      const [quickTipShow, setQuickTipShow] = useSetState(false);

      const [placeholderShow, setPlaceholderShow] = useSetState(true);

      // allowClear是否显示
      const [showAllowClear, setShowAllClear] = useSetState(false);

      const triggerChar = useMemo(
        () => String.fromCharCode(triggerCharCode ?? defaultTriggerCharCode),
        [triggerCharCode],
      );

      useMount(() => {
        const editor = getEditorEl();
        if (editor) {
          editor.innerHTML = value ?? '';
        }
        setCursorToEnd(editor as HTMLElement);
        onReady();
      });

      useUpdateLayoutEffect(() => {
        onReady();
      }, [value]);

      useImperativeHandle(ref, () => ({
        setValue: (_value) => {
          const editor = getEditorEl();
          if (editor) {
            editor.innerHTML = _value ?? '';
          }
          setCursorToEnd(editor as HTMLElement);
          onReady();
        },
        getValue: () => getEditorEl()?.innerHTML as string,
        isEditorEmpty,
        showOperators,
        hideOperators,
        showQuickTip,
        hideQuickTip,
        clear,
      }));

      /**
       * onReady
       * @description 组件mount
       */
      function onReady() {
        initial();
      }

      /**
       * initial
       * @description 初始化
       */
      function initial() {
        if (isEditorEmpty()) {
          showPlaceholder();
        } else {
          hidePlaceholder();
        }
      }

      /**
       * getEditorEl
       * @return {HTMLElement}
       */
      function getEditorEl() {
        if (isFont()) {
          return editorRef?.current?.firstElementChild;
        } else {
          return editorRef?.current;
        }
      }

      /**
       * isEditorEmpty
       * @description 编辑器是否为空
       * @return {boolean}
       */
      function isEditorEmpty() {
        return getEditorEl()?.innerHTML?.trim?.() === '';
      }

      /**
       * clear
       * @description 清空内容
       */
      function clear() {
        const contextEditor = getEditorEl();

        if (contextEditor) {
          contextEditor.innerHTML = '';
          hideOperators();
          hideQuickTip();
          showPlaceholder();
          setShowAllClear(false);
        }
      }

      /**
       * containsEntityCharacters
       * @description 判断是否是实体字符
       * @param str
       */
      function containsEntityCharacters(str) {
        const entityRegex = /^&#\d+;/gim;
        return entityRegex.test(str);
      }

      /**
       * showModal
       * @description 显示Modal
       * @param {HTMLElement} currentEl
       * @param {Function} callback
       */
      function showModal(currentEl: HTMLElement, callback: Function) {
        const point = getCursorRectByDocument();

        if (point && currentEl) {
          const contextWidth = contextRef.current?.offsetWidth;
          const contextHeight = contextRef?.current?.offsetHeight;

          const contextRect = contextRef.current?.getBoundingClientRect?.();

          if (!!contextWidth && !!contextHeight && contextRef && currentEl && contextRect) {
            if (point?.x === 0 && point?.y === 0) {
              currentEl.style.left = `${contextRect.x + 20}px`;
              currentEl.style.top = `${contextRect.y + contextHeight - 2}px`;
            } else if (contextRect?.x + contextWidth - point?.x < modalWidth) {
              currentEl.style.left = `${contextRect.x + contextWidth - modalWidth - 10}px`;
              currentEl.style.top = `${point.y + 25}px`;
            } else {
              currentEl.style.left = `${point.x + 10}px`;
              currentEl.style.top = `${point.y + 25}px`;
            }
          }
        }

        callback?.();
      }

      /**
       * showOperators
       * @description 显示运算符选择下拉
       */
      function showOperators() {
        showModal(operatorsRef.current as HTMLElement, () => setOperatorsShow(true, () => {}));
      }

      /**
       * hideOperators
       * @description 关闭运算符选择下拉
       */
      function hideOperators() {
        setOperatorsShow(false);
      }

      /**
       * showQuickTip
       */
      function showQuickTip() {
        showModal(quickTipRef.current as HTMLElement, () => setQuickTipShow(true));
      }

      /**
       * hideOperators
       * @description 关闭运算符选择下拉
       */
      function hideQuickTip() {
        setQuickTipShow(false);
      }

      /**
       * showPlaceholder
       * @description 显示placeholder
       */
      function showPlaceholder() {
        setPlaceholderShow(true);
      }

      /**
       * hidePlaceholder
       * @description 隐藏placeholder
       */
      function hidePlaceholder() {
        setPlaceholderShow(false);
      }

      /**
       * createTextElement
       * @description 创建文本元素
       * @param {string} html 文本的内容
       * @return {HTMLSpanElement}
       */
      function createTextElement(html) {
        let targetTextClassName: string = '';

        if (isString(textClassName)) {
          targetTextClassName = textClassName as string;
        } else if (isFunction(textClassName)) {
          targetTextClassName = (textClassName as Function)(html);
        }

        const textElement = document.createElement('span');
        textElement.className = classNames('text', targetTextClassName ?? '');
        textElement.innerHTML = html;
        return textElement;
      }

      /**
       * createOperatorElement
       * @description 创建运算符元素
       * @param {string} text 元素的文本
       * @return {HTMLSpanElement}
       */
      function createOperatorElement(text) {
        let targetOperatorClassName: string = '';

        if (isString(operatorClassName)) {
          targetOperatorClassName = operatorClassName as string;
        } else if (isFunction(operatorClassName)) {
          targetOperatorClassName = (operatorClassName as Function)(text);
        }

        const operatorElement = document.createElement('span');
        operatorElement.className = classNames('operator', targetOperatorClassName ?? '');
        operatorElement.setAttribute('contenteditable', 'false');
        operatorElement.innerHTML = text;
        return operatorElement;
      }

      /**
       * isFont
       * @description 是否是font元素
       * @return {boolean}
       */
      function isFont() {
        return editorRef?.current?.firstElementChild?.tagName?.toLowerCase?.() === 'font';
      }

      /**
       * setContinuousText
       * @description 设置连续输入的字符
       * @param {string} text 当前输入的文本
       */
      function setContinuousText(text) {
        if (
          !preCursorContextElement.current ||
          (preCursorContextElement.current === cursorContextElement.current &&
            preCursorIndex.current + 1 === cursorIndex.current)
        ) {
          preCursorIndex.current = cursorIndex.current;
          preCursorContextElement.current = cursorContextElement.current;
          continuousText.current += text;
        } else {
          preCursorIndex.current = cursorIndex.current;
          preCursorContextElement.current = cursorContextElement.current;
          continuousText.current = text;
        }
      }

      /**
       * onEditorCompositionStart
       * @description 编辑框输入中文开始
       */
      function onEditorCompositionStart() {
        comStart.current = true;
        // console.log('中文输入：开始');
      }

      /**
       * onEditorCompositionEnd
       * @description 编辑框输入中文结束
       * @param e
       */
      function onEditorCompositionEnd(e) {
        comStart.current = false;
        // console.log('中文输入：结束');
        onEditorInput(e);
      }

      /**
       * onEditorInput
       * @description 编辑框input
       */
      function onEditorInput(e) {
        console.log('Input');
        if (comStart.current) return; // 中文输入过程中不截断

        if (cursorContextElement) {
          cursorContextElement.current = getCurrentElementWithCursor();
        }
        if (cursorContextParentElement) {
          cursorContextParentElement.current = getCurrentParentElementWithCursor();
        }
        cursorIndex.current = getCursorIndex();

        if (isEditorEmpty()) {
          showPlaceholder();
        } else {
          hidePlaceholder();
        }

        const text = e.nativeEvent.data;

        if (text !== null) {
          setContinuousText(text);

          if (!disableQuickTip) {
            onContinuousTextChange?.(continuousText.current);
          }
        } else {
          if (!disableQuickTip) {
            onContinuousTextChange?.(cursorContextElement?.current?.textContent as string);
          }
          // console.log('cursorContextElement', cursorContextElement.current?.textContent);
        }

        if (!disableQuickTip) {
          if (text !== triggerChar) {
            showQuickTip();
          }
        }

        // input输入结束
        if (text !== triggerChar) {
          onEditorInputEnd?.(text, continuousText.current);
        }

        // onChange
        onChange?.(editorRef?.current?.innerHTML);

        setShowAllClear(!isEditorEmpty());
      }

      /**
       * onEditorPaste
       * @description 编辑框粘贴
       * @param e
       */
      function onEditorPaste(e) {
        // 禁止粘贴内容
        e.preventDefault();

        onEditorPasteEnd?.(e);
      }

      /**
       * onEditorKeyDown
       * @description 编辑框keyDown
       * @param e
       * @return {boolean}
       */
      function onEditorKeyDown(e) {
        // 默认空格
        if (e.keyCode === (triggerCharCode ?? defaultTriggerCharCode)) {
          hideQuickTip();
          showOperators();
          onEditorKeyDownEnd?.(e);
          return false;
        }

        // 屏蔽回车操作
        if (e.keyCode === 13) {
          hideOperators();
          e.stopPropagation();
          e.preventDefault();
          onEditorKeyDownEnd?.(e);
          return false;
        }

        hideOperators();
        onEditorKeyDownEnd?.(e);
      }

      /**
       * onEditorBlur
       * @description 编辑框失去焦点
       */
      function onEditorBlur(e) {
        e.stopPropagation();
        e.preventDefault();

        if (isEditorEmpty()) {
          showPlaceholder();
        } else {
          hidePlaceholder();
        }

        onEditorBlurEnd?.(e);
      }

      /**
       * onOperatorsClick
       * @description 选择运算符
       * @param {string} operator
       * @param {OperatorType} operatorType
       */
      function onOperatorsClick(operator: string, operatorType: OperatorType) {
        if (operator) {
          const editor = getEditorEl();

          // 括号
          if (operatorType === 'brackets') {
            let left = operator[0];
            let right = operator[1];

            if (containsEntityCharacters(operator)) {
              const arr = operator.split(';').filter((t) => t);
              left = arr[0];
              right = arr[1];
            }

            const leftElement = createOperatorElement(left);
            const rightElement = createOperatorElement(right);
            const textElement = createTextElement(`${htmlSpace}${htmlSpace}`);

            // 如果是在editor的文本中进行的编辑
            if (cursorContextParentElement.current === editor) {
              const text = cursorContextElement?.current?.textContent;
              const startElement = createTextElement(text?.substring?.(0, cursorIndex.current + 1));
              const endElement = createTextElement(text?.substring?.(cursorIndex.current + 1));

              const df = document.createDocumentFragment();
              df.appendChild(startElement);
              df.appendChild(leftElement);
              df.appendChild(textElement);
              df.appendChild(rightElement);

              if (endElement && endElement.textContent) {
                endElement.textContent.length !== 0 && df.appendChild(endElement);
              }

              editor?.replaceChild?.(df, cursorContextElement.current!);

              setCursorPosition(textElement, 1);
            }
            // 如果是在text文本中进行的编辑
            else {
              const text = cursorContextElement?.current?.textContent;
              const startElement = createTextElement(text?.substring?.(0, cursorIndex.current));
              const endElement = createTextElement(text?.substring?.(cursorIndex.current));

              const df = document.createDocumentFragment();
              df.appendChild(startElement);
              df.appendChild(startElement);
              df.appendChild(leftElement);
              df.appendChild(textElement);
              df.appendChild(rightElement);

              if (endElement && endElement.textContent) {
                endElement.textContent.length !== 0 && df.appendChild(endElement);
              }

              cursorContextParentElement?.current?.parentElement?.replaceChild?.(
                df,
                cursorContextParentElement.current as Node,
              );

              setCursorPosition(textElement, 1);
            }
          }
          // 其他符号
          else {
            const operatorElement = createOperatorElement(operator);
            const textElement = createTextElement(htmlSpace);

            // 如果是在editor的文本中进行的编辑
            if (cursorContextParentElement.current === editor) {
              // 光标所在的元素现在是text元素
              // let parentElement = getInsertParentElement();
              // parentElement.appendChild(operatorElement);
              // parentElement.appendChild(textElement);
              // setCursorToEnd(parentElement);

              const text = cursorContextElement?.current?.textContent;
              const startElement = createTextElement(text?.substring?.(0, cursorIndex.current + 1));
              const endElement = createTextElement(text?.substring?.(cursorIndex.current + 1));

              const df = document.createDocumentFragment();
              df.appendChild(startElement);
              df.appendChild(operatorElement);
              df.appendChild(textElement);
              if (endElement && endElement.textContent) {
                endElement.textContent.length !== 0 && df.appendChild(endElement);
              }

              editor?.replaceChild(df, cursorContextElement.current!);

              setCursorPosition(textElement, 0);
            }
            // 如果是在text文本中进行的编辑
            // @ts-ignore
            else if (cursorContextParentElement?.current?.classList?.contains?.('text')) {
              const text = cursorContextElement?.current?.textContent;
              const startElement = createTextElement(text?.substring?.(0, cursorIndex.current));
              const endElement = createTextElement(text?.substring?.(cursorIndex.current));

              const df = document.createDocumentFragment();
              df.appendChild(startElement);
              df.appendChild(operatorElement);
              df.appendChild(textElement);
              if (endElement && endElement.textContent) {
                endElement.textContent.length !== 0 && df.appendChild(endElement);
              }

              cursorContextParentElement?.current?.parentElement?.replaceChild?.(
                df,
                cursorContextParentElement.current as Node,
              );

              setCursorPosition(textElement, 0);
            }
          }

          onChange?.(editorRef?.current?.innerHTML);
        }

        hideOperators();
      }

      /**
       * onQuickTipClick
       * @description 选额智能提示
       * @param e
       * @param item
       */
      function onQuickTipClick(e, item) {
        const tip = item[quickTipProp ?? 'value'];

        const editor = getEditorEl() as HTMLElement;

        // java
        if (tip) {
          // 111
          const text = cursorContextElement.current?.textContent || '';

          const startIndex = text.lastIndexOf(continuousText.current, preCursorIndex.current);
          // 111(java) -> 111java
          // (java)111 -> java111
          // 1(java)11 -> 1java11
          const endIndex = startIndex + continuousText.current.length;

          const df = document.createDocumentFragment();
          const startTextNode = document.createTextNode(text.substring(0, startIndex));
          const endTextNode = document.createTextNode(text.substring(endIndex));
          const collapseEl = document.createElement('div');
          collapseEl.innerHTML = tip;
          df.appendChild(startTextNode);
          Array.from(collapseEl.childNodes).forEach((el) => {
            df.appendChild(el);
          });
          df.appendChild(endTextNode);

          if (contextRef.current === cursorContextParentElement.current) {
            editor.innerHTML = '';
            editor.appendChild(df);
          } else if (editor === cursorContextParentElement.current) {
            if (cursorContextElement?.current?.parentElement) {
              cursorContextElement.current.parentElement.replaceChild(
                df,
                cursorContextElement.current!,
              );
            }
          } else {
            if (cursorContextParentElement?.current?.parentElement) {
              cursorContextParentElement.current.parentElement.replaceChild(
                df,
                cursorContextParentElement.current,
              );
            }
          }

          setCursorPositionToNode(endTextNode, 0);

          onChange?.(editorRef?.current?.innerHTML);
        }

        hideQuickTip();
        hidePlaceholder();
      }

      // 获取插入的父元素
      // function getInsertParentElement() {
      //   return cursorContextParentElement.current === editor.current
      //     ? cursorContextParentElement.current
      //     : cursorContextParentElement.current.parentElement;
      // }

      return (
        <div
          ref={contextRef}
          className={classNames(selectorPrefix, className ?? '')}
          style={style ?? {}}
        >
          {/*editor*/}
          <div
            ref={editorRef}
            className={classNames(`${selectorPrefix}-editor`, editorClassName ?? '', {
              [`${selectorPrefix}-editor--show-clear`]: !!allowClear,
            })}
            style={editorStyle ?? {}}
            contentEditable="true"
            onInput={onEditorInput}
            onKeyDown={onEditorKeyDown}
            onBlur={onEditorBlur}
            onCompositionStart={onEditorCompositionStart}
            onCompositionEnd={onEditorCompositionEnd}
            onPaste={onEditorPaste}
          >
            {/*<span className="text" contentEditable="true"></span>*/}
          </div>

          {/*allowClear*/}
          {!!allowClear && showAllowClear && (
            <div className={`${selectorPrefix}-editor-clear`}>
              <CloseCircleOutlined
                onClick={() => {
                  clear();
                  // @ts-ignore
                  getEditorEl()?.focus();
                }}
              />
            </div>
          )}

          {/*placeholder*/}
          <div
            className={classNames(`${selectorPrefix}-editor-placeholder`, {
              [`${selectorPrefix}-editor-placeholder--show`]: placeholderShow,
            })}
            ref={placeholderRef}
          >
            {placeholder ?? Intl.v('请输入关键词')}
          </div>

          {/*运算符*/}
          <div
            ref={operatorsRef}
            className={classNames(`${selectorPrefix}-operators`, operatorWrapClassName ?? '', {
              [`${selectorPrefix}-operators--show`]: operatorsShow,
            })}
            style={operatorWrapStyle ?? {}}
          >
            <div className={classNames(`${selectorPrefix}-operators-header`)}>
              <i onClick={() => hideOperators()}>
                <CloseCircleOutlined />
              </i>
            </div>

            <ul className={classNames(`${selectorPrefix}-operators-main`)}>
              {operatorsConfig.map(({ label, value, type }) => (
                <li
                  key={value}
                  onClick={() => {
                    onOperatorsClick(value, type);
                  }}
                  dangerouslySetInnerHTML={{ __html: label }}
                />
              ))}
            </ul>
          </div>

          {/*快速补全*/}
          <div
            ref={quickTipRef}
            className={classNames(`${selectorPrefix}-quick-tips`, quickTipWrapClassName ?? '', {
              [`${selectorPrefix}-quick-tips--show`]: quickTipShow,
            })}
            style={quickTipWrapStyle ?? {}}
          >
            <div className={classNames(`${selectorPrefix}-quick-tips-header`)}>
              <i onClick={() => hideQuickTip()}>
                <CloseCircleOutlined />
              </i>
            </div>

            {!(quickTipDataSource || []).length && (
              <div>
                <Empty />
              </div>
            )}

            <ul className={classNames(`${selectorPrefix}-quick-tips-main`)}>
              {!!(quickTipDataSource || []).length &&
                (quickTipDataSource || []).map((t, _index) => (
                  <li key={t.value} onClick={(e) => onQuickTipClick(e, t)}>
                    {t.label}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      );
    },
  ),
);

const Expression = InternalExpression as ExpressionComponent;

Expression.View = View;

/**
 * parse
 * @description 解析
 * @param {string} queryHtml
 * @param {(value: { nodeType: number; value: string | null }) => string} callback
 * @return {string}
 */
Expression.parse = (
  queryHtml: string,
  callback: (value: { nodeType: number; value: string | null }) => string,
): string => {
  if (!queryHtml) return '';

  const context = document.createElement('div');
  context.innerHTML = queryHtml;

  if (context?.firstElementChild?.tagName?.toLowerCase() === 'font') {
    context.innerHTML = context.firstElementChild.innerHTML;
  }

  let result = '';

  result = Array.from(context.childNodes)
    .map((node) => {
      // 元素节点
      if (node.nodeType === 1) {
        // 文本节点
        if ((node as HTMLElement).classList.contains('text')) {
          return callback?.({ nodeType: 3, value: node.textContent }) ?? '';
        }
        // 运算符
        else if ((node as HTMLElement).classList.contains('operator')) {
          return callback?.({ nodeType: 1, value: node.textContent }) ?? '';
        }
      }
      // 文本节点
      else if (node.nodeType === 3) {
        return callback?.({ nodeType: 3, value: node.textContent }) ?? '';
      }

      return '';
    })
    .join('');

  return result;
};

/**
 * validator
 * @return {{validator(*, *): (Promise<void>)}}
 */
Expression.validator = () => ({
  validator(_, value) {
    const context = document.createElement('div');
    context.innerHTML = value;

    if (context.innerText) {
      return Promise.resolve();
    }

    return Promise.reject(new Error(Intl.v('请输入关键字')));
  },
});

export default Expression;
