import { useMount, useUpdateLayoutEffect } from 'ahooks';
import { Empty } from 'antd';
import classNames from 'classnames';
import type {
  ClipboardEvent,
  CompositionEvent,
  FocusEvent,
  KeyboardEvent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';
import React, { forwardRef, memo, useImperativeHandle, useMemo, useRef } from 'react';

import { CloseCircleOutlined } from '@ant-design/icons';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Hooks from '@baifendian/adhere-ui-hooks';
import Util from '@baifendian/adhere-util';
import Intl from '@baifendian/adhere-util-intl';

import View from './View';
import { ElasticSearch, Math, Sql } from './operators';
import type {
  ExpressionComponent,
  ExpressionHandle,
  ExpressionProps,
  OperatorItem,
  OperatorType,
  Operators,
  ParseCallbackParams,
  QuickTipItem,
} from './types';

const { useTheme } = ConfigProvider;

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

/** 默认触发字符代码 - 空格 */
const DEFAULT_TRIGGER_CHAR_CODE = 32;

/** HTML空格实体 */
const HTML_SPACE = '&shy;';

/** 弹层宽度 */
const MODAL_WIDTH = 300;

const { useSetState } = Hooks;

export const selectorPrefix = 'adhere-ui-expression';

/**
 * 表达式编辑器组件
 * 支持富文本编辑、运算符插入、快速提示等功能
 *
 * @template T - 快速提示数据类型
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns JSX元素
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
        isUseTriggerCharCode = true,
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
      // 运算符配置
      const operatorsConfig = useMemo<Operators>(
        () => operators ?? (ElasticSearch as OperatorItem[]),
        [operators],
      );

      // DOM引用
      const contextRef = useRef<HTMLDivElement | null>(null);
      const editorRef = useRef<HTMLDivElement | null>(null);
      const operatorsRef = useRef<HTMLDivElement | null>(null);
      const quickTipRef = useRef<HTMLDivElement | null>(null);
      const placeholderRef = useRef<HTMLDivElement | null>(null);

      // 光标状态
      const cursorContextParentElement = useRef<Node | null>(null);
      const cursorContextElement = useRef<Node | null>(null);
      const cursorIndex = useRef<number>(-1);

      // 连续输入状态
      const preCursorIndex = useRef(0);
      const preCursorContextElement = useRef<Node | null>(null);
      const continuousText = useRef('');
      const comStart = useRef(false);

      // 状态管理
      const [operatorsShowRef, setOperatorsShow] = useSetState(false);
      const [quickTipShowRef, setQuickTipShow] = useSetState(false);
      const [placeholderShowRef, setPlaceholderShow] = useSetState(true);
      const [showAllowClearRef, setShowAllClear] = useSetState(false);

      // 触发字符
      const triggerChar = useMemo(
        () => String.fromCharCode(triggerCharCode ?? DEFAULT_TRIGGER_CHAR_CODE),
        [triggerCharCode],
      );

      // 主题配置
      useTheme<HTMLElement>({
        elRef: contextRef,
        group: 'normal',
        displayName: 'Expression',
      });

      // 组件挂载时初始化
      useMount(() => {
        const editor = getEditorEl();
        if (editor) {
          editor.innerHTML = value ?? '';
        }
        setCursorToEnd(editor as HTMLElement);
        onReady();
      });

      // 值变化时更新
      useUpdateLayoutEffect(() => {
        onReady();
      }, [value]);

      // 暴露组件方法
      useImperativeHandle(ref, () => ({
        setValue: (_value: string) => {
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
        onOperatorsClick,
      }));

      /**
       * 组件就绪处理
       */
      function onReady(): void {
        initial();
      }

      /**
       * 初始化组件状态
       */
      function initial(): void {
        if (isEditorEmpty()) {
          showPlaceholder();
        } else {
          hidePlaceholder();
        }
      }

      /**
       * 获取编辑器元素
       * @returns 编辑器DOM元素
       */
      function getEditorEl(): HTMLElement | null {
        if (isFont()) {
          return editorRef?.current?.firstElementChild as HTMLElement;
        } else {
          return editorRef?.current;
        }
      }

      /**
       * 检查编辑器是否为空
       * @returns 是否为空
       */
      function isEditorEmpty(): boolean {
        return getEditorEl()?.innerHTML?.trim?.() === '';
      }

      /**
       * 清空编辑器内容
       */
      function clear(): void {
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
       * 检查是否包含实体字符
       * @param str - 待检查字符串
       * @returns 是否包含实体字符
       */
      function containsEntityCharacters(str: string): boolean {
        const entityRegex = /^&#\d+;/gim;
        return entityRegex.test(str);
      }

      /**
       * 显示模态框
       * @param currentEl - 当前元素
       * @param callback - 回调函数
       */
      function showModal(currentEl: HTMLElement, callback?: () => void): void {
        const point = getCursorRectByDocument();

        if (point && currentEl) {
          const contextWidth = contextRef.current?.offsetWidth;
          const contextHeight = contextRef?.current?.offsetHeight;
          const contextRect = contextRef.current?.getBoundingClientRect?.();

          if (!!contextWidth && !!contextHeight && contextRef && currentEl && contextRect) {
            if (point?.x === 0 && point?.y === 0) {
              currentEl.style.left = `${contextRect.x + 20}px`;
              currentEl.style.top = `${contextRect.y + contextHeight - 2}px`;
            } else if (contextRect?.x + contextWidth - point?.x < MODAL_WIDTH) {
              currentEl.style.left = `${contextRect.x + contextWidth - MODAL_WIDTH - 10}px`;
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
       * 显示运算符选择器
       */
      function showOperators(): void {
        showModal(operatorsRef.current as HTMLElement, () => setOperatorsShow(true, () => {}));
      }

      /**
       * 隐藏运算符选择器
       */
      function hideOperators(): void {
        setOperatorsShow(false);
      }

      /**
       * 显示快速提示
       */
      function showQuickTip(): void {
        showModal(quickTipRef.current as HTMLElement, () => setQuickTipShow(true));
      }

      /**
       * 隐藏快速提示
       */
      function hideQuickTip(): void {
        setQuickTipShow(false);
      }

      /**
       * 显示占位符
       */
      function showPlaceholder(): void {
        setPlaceholderShow(true);
      }

      /**
       * 隐藏占位符
       */
      function hidePlaceholder(): void {
        setPlaceholderShow(false);
      }

      /**
       * 创建文本元素
       * @param html - 文本内容
       * @returns 文本元素
       */
      function createTextElement(html: string): HTMLSpanElement {
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
       * 创建运算符元素
       * @param text - 运算符文本
       * @returns 运算符元素
       */
      function createOperatorElement(text: string): HTMLSpanElement {
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
       * 检查是否是font元素
       * @returns 是否是font元素
       */
      function isFont(): boolean {
        return editorRef?.current?.firstElementChild?.tagName?.toLowerCase?.() === 'font';
      }

      /**
       * 设置连续输入文本
       * @param text - 当前输入文本
       */
      function setContinuousText(text: string): void {
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
       * 编辑器输入法开始事件
       */
      function onEditorCompositionStart(): void {
        comStart.current = true;
      }

      /**
       * 编辑器输入法结束事件
       * @param e - 输入法事件
       */
      function onEditorCompositionEnd(e: CompositionEvent<HTMLDivElement>): void {
        comStart.current = false;
        onEditorInput(e);
      }

      /**
       * 编辑器输入事件
       * @param e - 输入事件
       */
      function onEditorInput(e?: any): void {
        if (comStart.current) return; // 中文输入过程中不处理

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

        const text = e?.nativeEvent?.data;

        if (text === undefined) return;

        if (!!text) {
          setContinuousText(text);

          if (!disableQuickTip) {
            onContinuousTextChange?.(continuousText.current);
          }
        } else {
          if (!disableQuickTip) {
            onContinuousTextChange?.(cursorContextElement?.current?.textContent as string);
          }
        }

        if (!disableQuickTip) {
          if (text !== triggerChar) {
            showQuickTip();
          }
        }

        // 输入结束回调
        if (text !== triggerChar) {
          onEditorInputEnd?.(text, continuousText.current);
        }

        // 值变化回调
        onChange?.(editorRef?.current?.innerHTML);

        setShowAllClear(!isEditorEmpty());
      }

      /**
       * 编辑器粘贴事件
       * @param e - 粘贴事件
       */
      function onEditorPaste(e: ClipboardEvent<HTMLDivElement>): void {
        // 禁止粘贴内容
        e.preventDefault();
        onEditorPasteEnd?.(e);
      }

      /**
       * 编辑器按键事件
       * @param e - 按键事件
       * @returns 是否阻止默认行为
       */
      function onEditorKeyDown(e: KeyboardEvent<HTMLDivElement>): boolean {
        if (!isUseTriggerCharCode) return false;

        // 默认空格触发运算符
        if (e.keyCode === (triggerCharCode ?? DEFAULT_TRIGGER_CHAR_CODE)) {
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
        return true;
      }

      /**
       * 编辑器失去焦点事件
       * @param e - 焦点事件
       */
      function onEditorBlur(e: FocusEvent<HTMLDivElement>): void {
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
       * 运算符点击处理
       * @param operator - 运算符
       * @param operatorType - 运算符类型
       */
      function onOperatorsClick(operator: string, operatorType: OperatorType): void {
        if (!operator) return;

        const editor = getEditorEl();
        if (!editor) return;

        try {
          // 括号处理
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
            const textElement = createTextElement(`${HTML_SPACE}${HTML_SPACE}`);

            // 在editor的文本中进行编辑
            if (cursorContextParentElement.current === editor || isEditorEmpty()) {
              const text = cursorContextElement?.current?.textContent;
              const startElement = createTextElement(
                text?.substring?.(0, cursorIndex.current + 1) || '',
              );
              const endElement = createTextElement(
                text?.substring?.(cursorIndex.current + 1) || '',
              );

              const df = document.createDocumentFragment();
              df.appendChild(startElement);
              df.appendChild(leftElement);
              df.appendChild(textElement);
              df.appendChild(rightElement);

              if (endElement && endElement.textContent) {
                endElement.textContent.length !== 0 && df.appendChild(endElement);
              }

              if (isEditorEmpty()) {
                editor?.appendChild?.(df);
              } else {
                editor?.replaceChild?.(df, cursorContextElement.current!);
              }

              setCursorPosition(textElement, 1);
            }
            // 在text文本中进行编辑
            else {
              const text = cursorContextElement?.current?.textContent;
              const startElement = createTextElement(
                text?.substring?.(0, cursorIndex.current) || '',
              );
              const endElement = createTextElement(text?.substring?.(cursorIndex.current) || '');

              const df = document.createDocumentFragment();
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
          // 其他符号处理
          else {
            const operatorElement = createOperatorElement(operator);
            const textElement = createTextElement(HTML_SPACE);

            // 在editor的文本中进行编辑
            if (cursorContextParentElement.current === editor || isEditorEmpty()) {
              const text = cursorContextElement?.current?.textContent;
              const startElement = createTextElement(
                text?.substring?.(0, cursorIndex.current) || '',
              );
              const endElement = createTextElement(text?.substring?.(cursorIndex.current) || '');

              const df = document.createDocumentFragment();
              df.appendChild(startElement);
              df.appendChild(operatorElement);
              df.appendChild(textElement);
              if (endElement && endElement.textContent) {
                endElement.textContent.length !== 0 && df.appendChild(endElement);
              }

              if (isEditorEmpty()) {
                editor?.appendChild?.(df);
              } else {
                editor?.replaceChild(df, cursorContextElement.current!);
              }

              setCursorPosition(textElement, 0);
            }
            // 在text文本中进行编辑
            else if (
              (cursorContextParentElement?.current as HTMLElement)?.classList?.contains?.('text')
            ) {
              const text = cursorContextElement?.current?.textContent;
              const startElement = createTextElement(
                text?.substring?.(0, cursorIndex.current) || '',
              );
              const endElement = createTextElement(text?.substring?.(cursorIndex.current) || '');

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

          onEditorInput();
          onChange?.(editorRef?.current?.innerHTML);
        } catch (error) {
          console.error('运算符插入失败:', error);
        }

        hideOperators();
      }

      /**
       * 快速提示点击处理
       * @param e - 点击事件
       * @param item - 提示项
       */
      function onQuickTipClick(e: React.MouseEvent, item: QuickTipItem): void {
        const tip = item[quickTipProp ?? 'value'];

        const editor = getEditorEl() as HTMLElement;
        if (!editor || !tip) return;

        try {
          const text = cursorContextElement.current?.textContent || '';
          const startIndex = text.lastIndexOf(continuousText.current, preCursorIndex.current);
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
        } catch (error) {
          console.error('快速提示插入失败:', error);
        }

        hideQuickTip();
        hidePlaceholder();
      }

      return (
        <div
          ref={contextRef}
          className={classNames(selectorPrefix, className ?? '')}
          style={style ?? {}}
        >
          {/* 编辑器 */}
          <div
            ref={editorRef}
            className={classNames(`${selectorPrefix}-editor`, editorClassName ?? '', {
              [`${selectorPrefix}-editor--show-clear`]: !!allowClear,
            })}
            style={editorStyle ?? {}}
            contentEditable="true"
            onInput={onEditorInput}
            onKeyDown={onEditorKeyDown}
            onKeyUp={onEditorInput}
            onBlur={onEditorBlur}
            onCompositionStart={onEditorCompositionStart}
            onCompositionEnd={onEditorCompositionEnd}
            onPaste={onEditorPaste}
            onClick={onEditorInput}
          />

          {/* 清空按钮 */}
          {!!allowClear && showAllowClearRef.current && (
            <div className={`${selectorPrefix}-editor-clear`}>
              <CloseCircleOutlined
                onClick={() => {
                  clear();
                  getEditorEl()?.focus();
                }}
              />
            </div>
          )}

          {/* 占位符 */}
          <div
            className={classNames(`${selectorPrefix}-editor-placeholder`, {
              [`${selectorPrefix}-editor-placeholder--show`]: placeholderShowRef.current,
            })}
            ref={placeholderRef}
          >
            {placeholder ?? Intl.get('enter_keyword')}
          </div>

          {/* 运算符选择器 */}
          <div
            ref={operatorsRef}
            className={classNames(`${selectorPrefix}-operators`, operatorWrapClassName ?? '', {
              [`${selectorPrefix}-operators--show`]: operatorsShowRef.current,
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

          {/* 快速提示 */}
          <div
            ref={quickTipRef}
            className={classNames(`${selectorPrefix}-quick-tips`, quickTipWrapClassName ?? '', {
              [`${selectorPrefix}-quick-tips--show`]: quickTipShowRef.current,
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

Expression.ElasticSearchOptions = ElasticSearch;
Expression.SqlOptions = Sql;
Expression.MathOptions = Math;

/**
 * 解析HTML为文本
 * @param queryHtml - HTML字符串
 * @param callback - 解析回调函数
 * @returns 解析后的文本
 */
Expression.parse = (
  queryHtml: string,
  callback: (value: ParseCallbackParams) => string,
): string => {
  if (!queryHtml) return '';

  const context = document.createElement('div');
  context.innerHTML = queryHtml;

  if (context?.firstElementChild?.tagName?.toLowerCase() === 'font') {
    context.innerHTML = context.firstElementChild.innerHTML;
  }

  return Array.from(context.childNodes)
    .map((node) => {
      // 元素节点
      if (node.nodeType === 1) {
        const element = node as HTMLElement;
        // 文本节点
        if (element.classList.contains('text')) {
          return callback?.({ nodeType: 3, value: node.textContent }) ?? '';
        }
        // 运算符
        else if (element.classList.contains('operator')) {
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
};

/**
 * Antd表单必填验证器
 * @param tip - 错误提示信息
 * @returns 验证器配置
 */
Expression.AntdFormRequireValidator = (tip: string) => ({
  validator(rule: any, value: string, callback: (tip?: any) => {}) {
    if (value === undefined || value === null || value === '') {
      callback(tip);
    } else {
      const context = document.createElement('div');
      context.innerHTML = value;

      if (context.innerText) {
        callback();
      } else {
        callback(tip);
      }
    }
  },
});

Expression.displayName = 'Expression';

export default Expression;
