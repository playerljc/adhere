import { useMount, useUpdateLayoutEffect } from 'ahooks';
import classNames from 'classnames';
import React, { forwardRef, memo, useImperativeHandle, useMemo, useRef } from 'react';
import type { ForwardRefRenderFunction, ReactElement } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { ExpressionHandle, ExpressionProps } from './types';

// 缺省的触发字符code
const defaultTriggerCharCode = 32;

// html的空格
const htmlSpace = '&nbsp;';

// 非html的空格
const charSpace = '';

/**
 * Expression
 * @param props
 * @param ref
 * @constructor
 */
const Expression: ForwardRefRenderFunction<ExpressionHandle, ExpressionProps> = (
  {
    className,
    style,
    value,
    triggerCharCode,
    operators,
    onChange,
    onContinuousTextChange,
    onEditorInputEnd,
    children,
  },
  ref,
): ReactElement => {
  const operatorsConfig = useMemo(
    () =>
      operators ?? [
        {
          label: '()',
          value: '()',
        },
        {
          label: 'AND',
          value: 'AND',
        },
        {
          label: 'OR',
          value: 'OR',
        },
        {
          label: 'NOT',
          value: 'NOT',
        },
      ],
    [operators],
  );

  // input对象
  const editorElement = useRef<HTMLDivElement | null>(null);

  // 运算符下拉
  const operatorsElement = useRef<HTMLUListElement | null>(null);

  // placeholder
  const placeholderElement = useRef<HTMLDivElement | null>(null);

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

  useUpdateLayoutEffect(() => {
    onReady();
  }, [value]);

  useMount(() => {
    onReady();
  });

  useImperativeHandle(ref, () => ({
    setCursorPosition,
    getCursorContext: () => ({
      cursorContextElement: cursorContextElement.current,
      cursorContextParentElement: cursorContextParentElement.current,
      continuousText,
      preCursorContextElement,
      preCursorIndex,
      cursorIndex,
    }),
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
    }

    if (!value?.trim?.()) {
      setCursorToEnd(editorElement.current);
    }
  }

  /**
   * setCursorToEnd
   * @description 将光标设置到内容末尾
   * @param {HTMLElement} element
   */
  function setCursorToEnd(element) {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(element);
    range.collapse(false); // 将光标设置到末尾
    selection?.removeAllRanges?.();
    selection?.addRange?.(range);
  }

  /**
   * setCursorPosition
   * @description 设置光标的位置
   * @param {HTMLElement} element
   * @param {number} offset
   */
  function setCursorPosition(element, offset) {
    const range = document.createRange();
    range.setStart(element.childNodes[0], offset);
    range.collapse(true);

    const sel = window.getSelection();
    sel?.removeAllRanges?.();
    sel?.addRange?.(range);
  }

  /**
   * getCurrentElementWithCursor
   * @description 获取光标输入的的element
   * @return {Node|null}
   */
  function getCurrentElementWithCursor() {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      return range.startContainer /*.parentElement*/;
    }
    return null;
  }

  /**
   * getCurrentParentElementWithCursor
   * @description 获取光标输入的parentElement
   * @return {HTMLElement|null}
   */
  function getCurrentParentElementWithCursor() {
    const currentElement = getCurrentElementWithCursor();
    if (currentElement) {
      return currentElement.parentElement;
    }

    return null;
  }

  /**
   * getCursorIndex
   * @description 获取光标的索引
   * @return {number}
   */
  function getCursorIndex() {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const preSelectionRange = range.cloneRange();
      preSelectionRange.selectNodeContents(range.startContainer);
      preSelectionRange.setEnd(range.startContainer, range.startOffset);
      return preSelectionRange.toString().length;
    }
    return -1;
  }

  /**
   * isEditorEmpty
   * @description 编辑器是否为空
   * @return {boolean}
   */
  function isEditorEmpty() {
    return editorElement?.current?.innerHTML?.trim?.() === '';
  }

  /**
   * showOperators
   * @description 显示运算符选择下拉
   */
  function showOperators() {
    operatorsElement?.current?.classList?.add?.('system-quick-search-operators--show');
  }

  /**
   * hideOperators
   * @description 关闭运算符选择下拉
   */
  function hideOperators() {
    operatorsElement?.current?.classList?.remove?.('system-quick-search-operators--show');
  }

  /**
   * showPlaceholder
   * @description 显示placeholder
   */
  function showPlaceholder() {
    placeholderElement?.current?.classList?.add?.('system-quick-search-editor-placeholder--show');
  }

  /**
   * hidePlaceholder
   * @description 隐藏placeholder
   */
  function hidePlaceholder() {
    placeholderElement?.current?.classList?.remove?.(
      'system-quick-search-editor-placeholder--show',
    );
  }

  /**
   * createTextElement
   * @description 创建文本元素
   * @param {string} html 文本的内容
   * @return {HTMLSpanElement}
   */
  function createTextElement(html) {
    const textElement = document.createElement('span');
    textElement.className = 'text';
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
    const operatorElement = document.createElement('span');
    operatorElement.className = 'operator';
    operatorElement.setAttribute('contenteditable', 'false');
    operatorElement.innerText = text;
    return operatorElement;
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
   * onEditorInput
   * @description 编辑框input
   */
  function onEditorInput(e) {
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

    const text = e.data;
    if (text !== null) {
      setContinuousText(text);
    }

    // 连续输入
    onContinuousTextChange?.(continuousText.current);

    // input输入结束
    if (text !== String.fromCharCode(triggerCharCode ?? defaultTriggerCharCode)) {
      onEditorInputEnd?.(text, continuousText.current);
    }

    // onChange
    onChange?.(editorElement?.current?.innerHTML);
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
   * onEditorPaste
   * @description 编辑框粘贴
   * @param e
   */
  function onEditorPaste(e) {
    // 禁止粘贴内容
    e.preventDefault();
  }

  /**
   * onEditorKeyDown
   * @description 编辑框keyDown
   * @param e
   * @return {boolean}
   */
  function onEditorKeyDown(e) {
    // 默认空格
    if (e.keyCode === triggerCharCode ?? defaultTriggerCharCode) {
      showOperators();
      return false;
    }

    // 屏蔽回车操作
    if (e.keyCode === 13) {
      hideOperators();
      e.stopPropagation();
      e.preventDefault();
      return false;
    }

    hideOperators();
  }

  /**
   * onEditorBlur
   * @description 编辑框失去焦点
   */
  function onEditorBlur() {
    setTimeout(() => {
      hideOperators();
    }, 1500);

    if (isEditorEmpty()) {
      showPlaceholder();
    } else {
      hidePlaceholder();
    }
  }

  /**
   * onOperatorsClick
   * @description 选择运算符
   * @param {string} operator
   */
  function onOperatorsClick(operator) {
    if (operator) {
      // 括号
      if (operator === '()') {
        const leftElement = createOperatorElement('(');
        const rightElement = createOperatorElement(')');
        const textElement = createTextElement('&nbsp;&nbsp;');

        // 如果是在editor的文本中进行的编辑
        if (cursorContextParentElement.current === editorElement.current) {
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

          // @ts-ignore
          editorElement?.current?.replaceChild?.(df, cursorContextElement);

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
            cursorContextParentElement.current,
          );

          setCursorPosition(textElement, 1);
        }
      }
      // 其他符号
      else {
        const operatorElement = createOperatorElement(operator);
        const textElement = createTextElement('&nbsp;');

        // 如果是在editor的文本中进行的编辑
        if (cursorContextParentElement.current === editorElement.current) {
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

          // @ts-ignore
          editorElement?.current?.replaceChild(df, cursorContextElement.current);

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
            cursorContextParentElement.current,
          );

          setCursorPosition(textElement, 0);
        }
      }

      onChange?.(editorElement?.current?.innerHTML);
    }

    hideOperators();
  }

  // 获取插入的父元素
  // function getInsertParentElement() {
  //   return cursorContextParentElement.current === editor.current
  //     ? cursorContextParentElement.current
  //     : cursorContextParentElement.current.parentElement;
  // }

  return (
    <div className={classNames('system-quick-search', className ?? '')} style={style ?? {}}>
      <div
        className="system-quick-search-editor"
        contentEditable="true"
        ref={editorElement}
        dangerouslySetInnerHTML={{ __html: value as string }}
        onInput={onEditorInput}
        onKeyDown={onEditorKeyDown}
        onBlur={onEditorBlur}
        onCompositionStart={onEditorCompositionStart}
        onCompositionEnd={onEditorCompositionEnd}
        onPaste={onEditorPaste}
      ></div>

      <div className="system-quick-search-editor-placeholder" ref={placeholderElement}>
        {Intl.v('please enter search keyword')}
      </div>

      <ul className="system-quick-search-operators" ref={operatorsElement}>
        {operatorsConfig.map(({ label, value }) => (
          <li
            key={value}
            onClick={() => {
              onOperatorsClick(value);
            }}
          >
            {label}
          </li>
        ))}
      </ul>

      {children}
    </div>
  );
};

export default memo(forwardRef<ExpressionHandle, ExpressionProps>(Expression));
