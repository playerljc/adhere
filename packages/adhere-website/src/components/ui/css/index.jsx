import React, { useState } from 'react';

import PlayGroundPage, { Section, CodeBoxSection } from '@/lib/PlaygroundPage';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `gridlayout.css`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'gridlayout.css',
            info: 'gridlayout.css - 一个多列的布局实现,可以实现最多11列的布局',
          },
        },
        codeText: `
  @grid-list-padding: 20px;
  @grid-list-margin-bottom: 20px;
  @grid-list-item-interval: 20px;

  /*
    多列的列表
   */
  .g-grid-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: @grid-list-padding @grid-list-padding 0 @grid-list-padding;
  }

  .g-grid-list-item {
    box-sizing: border-box;
    width: 100%;
    margin-bottom: @grid-list-margin-bottom;
  }

  .g-grid-list.column2 > .g-grid-list-item {
    width: calc((100% - (2 - 1) * @grid-list-item-interval) / 2);
    margin-right: @grid-list-item-interval;
  }

  .g-grid-list.column2 > .g-grid-list-item:nth-of-type(2n) {
    margin-right: 0;
  }

  .g-grid-list.column3 > .g-grid-list-item {
    width: calc((100% - (3 - 1) * @grid-list-item-interval) / 3);
    margin-right: @grid-list-item-interval;
  }

  .g-grid-list.column3 > .g-grid-list-item:nth-of-type(3n) {
    margin-right: 0;
  }

  .g-grid-list.column4 > .g-grid-list-item {
    width: calc((100% - (4 - 1) * @grid-list-item-interval) / 4);
    margin-right: @grid-list-item-interval;
  }

  .g-grid-list.column4 > .g-grid-list-item:nth-of-type(4n) {
    margin-right: 0;
  }

  .g-grid-list.column5 > .g-grid-list-item {
    width: calc((100% - (5 - 1) * @grid-list-item-interval) / 5);
    margin-right: @grid-list-item-interval;
  }

  .g-grid-list.column5 > .g-grid-list-item:nth-of-type(5n) {
    margin-right: 0;
  }

  .g-grid-list.column6 > .g-grid-list-item {
    width: calc((100% - (6 - 1) * @grid-list-item-interval) / 6);
    margin-right: @grid-list-item-interval;
  }

  .g-grid-list.column6 > .g-grid-list-item:nth-of-type(6n) {
    margin-right: 0;
  }

  .g-grid-list.column7 > .g-grid-list-item {
    width: calc((100% - (7 - 1) * @grid-list-item-interval) / 7);
    margin-right: @grid-list-item-interval;
  }

  .g-grid-list.column7 > .g-grid-list-item:nth-of-type(7n) {
    margin-right: 0;
  }

  .g-grid-list.column8 > .g-grid-list-item {
    width: calc((100% - (8 - 1) * @grid-list-item-interval) / 8);
    margin-right: @grid-list-item-interval;
  }

  .g-grid-list.column8 > .g-grid-list-item:nth-of-type(8n) {
    margin-right: 0;
  }

  .g-grid-list.column9 > .g-grid-list-item {
    width: calc((100% - (9 - 1) * @grid-list-item-interval) / 9);
    margin-right: @grid-list-item-interval;
  }

  .g-grid-list.column9 > .g-grid-list-item:nth-of-type(9n) {
    margin-right: 0;
  }

  .g-grid-list.column10 > .g-grid-list-item {
    width: calc((100% - (10 - 1) * @grid-list-item-interval) / 10);
    margin-right: @grid-list-item-interval;
  }

  .g-grid-list.column10 > .g-grid-list-item:nth-of-type(10n) {
    margin-right: 0;
  }

  .g-grid-list.column11 > .g-grid-list-item {
    width: calc((100% - (11 - 1) * @grid-list-item-interval) / 11);
    margin-right: @grid-list-item-interval;
  }

  .g-grid-list.column11 > .g-grid-list-item:nth-of-type(11n) {
    margin-right: 0;
  }

  .g-grid-list.column12 > .g-grid-list-item {
    width: calc((100% - (12 - 1) * @grid-list-item-interval) / 12);
    margin-right: @grid-list-item-interval;
  }

  .g-grid-list.column12 > .g-grid-list-item:nth-of-type(12n) {
    margin-right: 0;
  }
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <ul className="g-grid-list column4">
            {gridData.map((t) => (
              <li className="g-grid-list-item" key={t.name}>
                {t.name}
              </li>
            ))}
          </ul>
        ),
      },
      {
        id: `p2`,
        name: `mixin.less`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'mixin.less',
            info: 'mixin.less - less全局的函数和混入',
          },
        },
        codeText: `
  /* 全局的less函数和mixin */

  /**
    文字在一行上overflow
   */
  .adhere-text-inline-overflow() {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  /**
    文字在多行上overflow，行数可控
   */
  .adhere-text-overflow-multi(@line: 3) {
    display: -webkit-box;
    overflow: hidden;
    text-align: justify;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: @line;
  }

  /**
   显示滚动条
   */
  .adhere-hover-overflow-auto() {
    overflow: hidden;
    &:hover {
      overflow: auto;
    }
  }

  /**
    文字换行
   */
  .adhere-word-break() {
    white-space: pre-wrap; // 只对中文起作用，强制换行
    word-wrap: break-word; // 只对英文起作用，以单词作为换行依据
    word-break: break-all; // 只对英文起作用，以字母作为换行依据
  }

  /**
    不能选取
   */
  .adhere-no-select() {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /**
    横向滚动的元素
   */
  .adhere-scroll-x-block() {
    font-size: 0;
    white-space: nowrap;

    // 是否由内容支撑
    &.fill {
      display: inline-block;
    }

    // 是否滚动
    &.scroll {
      overflow: auto;
    }

    > .adhere-scroll-x-block-item {
      display: inline-block;
    }
  }

  /**
    文字水平对齐
   */
  .adhere-text-middle() {
    vertical-align: middle;
  }

  /**
   块级元素垂直居中
   */
  .adhere-block-vertical-center() {
    position: absolute;
    left: 50%;
    transform: translateY(-50%);
  }

  /**
   块级元素水平居中
   */
  .adhere-block-horizontal-center() {
    position: absolute;
    top: 50%;
    transform: translateX(-50%);
  }

  /**
   块级元素水平和垂直都居中
   */
  .adhere-block-center() {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }

  /**
    哀悼模式
   */
  .adhere-mourning-mode() {
    filter: grayscale(1);
  }

  /**
   首行缩进
   */
  .adhere-first-line-indent(@indent: 2em) {
    text-indent: @indent;
  }

  /**
   首字下沉
   */
  .adhere-first-letter(@font-size: 40px) {
    float: left;
    font-size: @font-size;
  }

  /*
   字母以大写开头
   ----重点间隔也算是重新开头
  */
  .adhere-text-capitalize {
    text-transform: capitalize;
  }

  /*
   字母全部大写
   */
  .adhere-text-uppercase {
    text-transform: uppercase;
  }

  /*
   字母全部小写
   */
  .adhere-text-lowercase {
    text-transform: lowercase;
  }
      `,
        type: 'PlayGround',
      },
      {
        id: `p3`,
        name: `vars.less`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'vars.less',
            info: 'vars.less - less全局变量的定义',
          },
        },
        codeText: `
  /* 全局的less - modifyVars */

  /* 主颜色 */
  @adhere-primary-color: #2480ff;

  /* 缺省的颜色 */
  @adhere-normal-color: #d9d9d9;

  /* 最大层级 */
  @adhere-common-max-zindex: 19999;
      `,
        type: 'PlayGround',
      },
      {
        id: `p4`,
        name: `switch.less`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'switch.less',
            info: 'switch.less - 一个将checkbox转换成switch的样式',
          },
        },
        codeText: `
  /**
    ---------------------------------------------adhere-ui-css-switch------------------------------------------------
   */
  .adhere-ui-css-switch,
  .adhere-ui-css-switch > .checkbox {
    position: relative;
    box-sizing: border-box;
    vertical-align: middle;
  }

  .adhere-ui-css-switch.ios,
  .adhere-ui-css-switch.ios > .checkbox {
    display: inline-block;
    width: 52px;
    height: 32px;
    border-radius: 16px;
  }

  .adhere-ui-css-switch.material,
  .adhere-ui-css-switch.material > .checkbox {
    width: 36px;
    height: 14px;
    border-radius: 36px;
  }

  .adhere-ui-css-switch.material {
    display: inline-block;
  }

  .adhere-ui-css-switch.material > .checkbox {
    display: block;
  }

  .adhere-ui-css-switch > input[type='checkbox'] {
    display: none;
    outline: 0;
  }

  .adhere-ui-css-switch > .checkbox {
    margin: 0;
    padding: 0;
    border: none;
    transition-duration: 0.3s;
    -webkit-appearance: none;
  }

  .adhere-ui-css-switch.ios > .checkbox::before {
    position: absolute;
    top: 2px;
    left: 2px;
    box-sizing: border-box;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 16px;
    transform: scale(1);
    transition-duration: 0.3s;
    content: '';
  }

  .adhere-ui-css-switch > .checkbox::after {
    position: absolute;
    z-index: 2;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    content: '';
  }

  .adhere-ui-css-switch.ios > .checkbox::after {
    top: 2px;
    left: 2px;
    width: 28px;
    height: 28px;
    border-radius: 14px;
  }

  .adhere-ui-css-switch.material > .checkbox::after {
    top: -3px;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 20px;
  }

  .adhere-ui-css-switch.ios > input[type='checkbox']:checked + .checkbox::before {
    transform: scale(0);
  }

  .adhere-ui-css-switch.ios > input[type='checkbox']:checked + .checkbox::after {
    transform: translateX(20px);
  }

  .adhere-ui-css-switch.material > input[type='checkbox']:checked + .checkbox::after {
    transform: translateX(16px);
  }

  /**
    ----------------------------------------------------adhere-ui-css-switch----------------------------------------------
   */
  .adhere-ui-css-switch > .checkbox {
    background: #e5e5e5;
  }

  .adhere-ui-css-switch.ios > .checkbox::before {
    background-color: #fff;
  }

  .adhere-ui-css-switch > .checkbox::after {
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  }

  .adhere-ui-css-switch.ios > input[type='checkbox']:checked + .checkbox {
    background: #4cd964;
  }

  .adhere-ui-css-switch.ios > input[type='checkbox']:disabled + .checkbox {
    background: #e5e5e5;
  }

  .adhere-ui-css-switch.material > input[type='checkbox']:checked + .checkbox {
    background: rgba(33, 150, 243, 0.5);
  }

  .adhere-ui-css-switch.material > input[type='checkbox']:disabled + .checkbox {
    background: #e5e5e5;
  }

  .adhere-ui-css-switch.material > input[type='checkbox']:checked + .checkbox::after {
    background: #2196f3;
  }

  .adhere-ui-css-switch.material > input[type='checkbox']:disabled + .checkbox::after {
    background: #fff;
  }
      `,
        type: 'PlayGround',
      },
      {
        id: `p5`,
        name: `normalize-antd.less`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'normalize-antd.less',
            info: 'normalize-antd.less - 对antd样式的重写',
          },
        },
        codeText: `
  @import './vars';

  /**
    这里是对antd样式的normalize
   */

  // Spin
  .ant-spin-nested-loading {
    display: flex;
    width: 100%;
    //min-height: 100%;
    height: 100%;
    > .ant-spin-container {
      width: 100%;
      height: 100%;
    }
  }

  // .ant-select-dropdown
  .ant-select-dropdown {
    z-index: @adhere-common-max-zindex + 1;
  }

  // .ant-notification
  .ant-notification {
    z-index: @adhere-common-max-zindex + 2;
  }

  // .ant-message
  .ant-message {
    z-index: @adhere-common-max-zindex + 2;
  }

  // .ant-card
  .ant-card {
    > .ant-card-body {
      height: 100%;
    }
  }

  .ant-select-tree {
    .ant-select-tree-node-content-wrapper {
      white-space: nowrap;
    }
  }

  .ant-tree-title {
    display: inline-block;
    max-width: 300px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .ant-picker-dropdown {
    z-index: @adhere-common-max-zindex + 2;
  }

  .ant-tabs-content {
    width: 100%;
    height: 100%;
  }
      `,
        type: 'PlayGround',
      },
      {
        id: `p6`,
        name: `normalize-default.less`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'normalize-default.less',
            info: 'normalize-default.less - 对缺省样式的重写',
          },
        },
        codeText: `
  /**
    这里是对基本的html元素样式的normalize 基于了normalize.css
   */

  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

  /* Document
     ========================================================================== */

  /**
   * 1. Correct the line height in all browsers.
   * 2. Prevent adjustments of font size after orientation changes in iOS.
   */

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    -webkit-overflow-scrolling: touch;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  /* Sections
     ========================================================================== */

  /**
   * Remove the margin in all browsers.
   */

  body {
    margin: 0;
    -webkit-overflow-scrolling: touch;
  }

  /**
   * Render the \`main\` element consistently in IE.
   */

  main {
    display: block;
  }

  /**
   * Correct the font size and margin on \`h1\` elements within \`section\` and
   * \`article\` contexts in Chrome, Firefox, and Safari.
   */

  h1 {
    margin: 0.67em 0;
    font-size: 2em;
  }

  /* Grouping content
     ========================================================================== */

  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */

  pre {
    font-size: 1em; /* 2 */
    font-family: monospace, monospace; /* 1 */
  }

  /* Text-level semantics
     ========================================================================== */

  /**
   * Remove the gray background on active links in IE 10.
   */

  a {
    background-color: transparent;
  }

  /**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */

  abbr[title] {
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
    border-bottom: none; /* 1 */
  }

  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */

  b,
  strong {
    font-weight: bolder;
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */

  code,
  kbd,
  samp {
    font-size: 1em; /* 2 */
    font-family: monospace, monospace; /* 1 */
  }

  /**
   * Add the correct font size in all browsers.
   */

  small {
    font-size: 80%;
  }

  /**
   * Prevent \`sub\` and \`sup\` elements from affecting the line height in
   * all browsers.
   */

  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /* Embedded content
     ========================================================================== */

  /**
   * Remove the border on images inside links in IE 10.
   */

  img {
    border-style: none;
  }

  /* Forms
     ========================================================================== */

  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0; /* 2 */
    font-size: 100%; /* 1 */
    font-family: inherit; /* 1 */
    line-height: 1.15; /* 1 */
  }

  /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */

  button,
  input {
    /* 1 */
    overflow: visible;
  }

  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */

  button,
  select {
    /* 1 */
    text-transform: none;
  }

  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  /**
   * Remove the inner border and padding in Firefox.
   */

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  /**
   * Restore the focus styles unset by the previous rule.
   */

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
   * Correct the padding in Firefox.
   */

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  /**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from \`fieldset\` elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    \`fieldset\` elements in all browsers.
   */

  legend {
    display: table; /* 1 */
    box-sizing: border-box; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    color: inherit; /* 2 */
    white-space: normal; /* 1 */
  }

  /**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */

  progress {
    vertical-align: baseline;
  }

  /**
   * Remove the default vertical scrollbar in IE 10+.
   */

  textarea {
    overflow: auto;
  }

  /**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */

  [type='search'] {
    outline-offset: -2px; /* 2 */
    -webkit-appearance: textfield; /* 1 */
  }

  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to \`inherit\` in Safari.
   */

  ::-webkit-file-upload-button {
    font: inherit; /* 2 */
    -webkit-appearance: button; /* 1 */
  }

  /* Interactive
     ========================================================================== */

  /*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */

  details {
    display: block;
  }

  /*
   * Add the correct display in all browsers.
   */

  summary {
    display: list-item;
  }

  /* Misc
     ========================================================================== */

  /**
   * Add the correct display in IE 10+.
   */

  template {
    display: none;
  }

  /**
   * Add the correct display in IE 10.
   */

  [hidden] {
    display: none;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Microsoft YaHei', Arial, Helvetica, sans-serif, '宋体';

    * {
      box-sizing: border-box;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  iframe {
    border: none;
  }

  /* 滚动条整体样式 */
  *::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  *::-webkit-scrollbar-thumb {
    /* 滚动条里面小方块 */
    background-color: #dcdcdc;
    border-radius: 6px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  }

  *::-webkit-scrollbar-track {
    /* 滚动条里面轨道 */
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }
      `,
        type: 'PlayGround',
      },
      {
        id: `p7`,
        name: `css.css`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'css.css',
            info: 'css.css - 对上述文件的一个整合引用',
          },
        },
        codeText: `
  @import './vars';
  @import './mixin';
  @import './normalize-default';
  @import './normalize-antd';
  @import './gridlayout';
  @import './switch';
      `,
        type: 'PlayGround',
      },
    ];
  }

  const list = [];
  list.length = 50;
  list.fill(0);

  const [gridData, setGridData] = useState(
    list.map((t, index) => ({
      name: `姓名${index + 1}`,
      sex: '男',
    })),
  );

  return (
    <PlayGroundPage>
      <Section title="CSS">
        <p>提供很多公共的样式</p>
        <ul>
          <li>- 默认样式的重置</li>
          <li>- ant-design 样式的重置</li>
          <li>- 主题less变量定义</li>
          <li>- switch样式</li>
          <li>- gridlayout样式</li>
          <li>- 全局通用less函数</li>
          <li>- 全局通用iconfont</li>
        </ul>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />
    </PlayGroundPage>
  );
};
