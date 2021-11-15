import React, { useState } from 'react';

import Playground from '@/lib/Playground';

export default () => {
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
    <div className="Page">
      <h1>CSS</h1>
      <p>提供很多公共的样式</p>
      <ul>
        <li>- 普通样式的重置</li>
        <li>- ant-design 样式的重置</li>
        <li>- 分辨率的控制</li>
        <li>- 常用的样式做成函数和混入</li>
      </ul>

      <h2 id="gridlayout">gridlayout.css - 一个多列的布局实现,可以实现最多11列的布局</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import '@baifendian/adhere/lib/css.less';
  
  const list = [];
  list.length = 50;
  list.fill(0);

  const [gridData, setGridData] = useState(
    list.map((t, index) => ({
      name: "姓名" + (index + 1),
      sex: '男',
    })),
  );
  
  <ul className="g-grid-list column4">
      {gridData.map((t) => (
        <li className="g-grid-list-item" key={t.name}>
          {t.name}
        </li>
      ))}
    </ul>
  `}
      >
        <ul className="g-grid-list column4">
          {gridData.map((t) => (
            <li className="g-grid-list-item" key={t.name}>
              {t.name}
            </li>
          ))}
        </ul>
      </Playground>

      <h2 id="normalize-antd">normalize-antd.less - 对antd样式的重写</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  @import "./vars";
  
  /**
    这里是对antd样式的normalize
   */
  
  // Spin
  .ant-spin-nested-loading {
    display: flex;
    width: 100%;
    min-height: 100%;
    > .ant-spin-container {
      width: 100%;
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

      `}
      />

      <h2 id="normalize-default">normalize-default.less - 对缺省样式的重写</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
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
  }
  
  /* Sections
     ========================================================================== */
  
  /**
   * Remove the margin in all browsers.
   */
  
  body {
    margin: 0;
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
  input { /* 1 */
    overflow: visible;
  }
  
  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */
  
  button,
  select { /* 1 */
    text-transform: none;
  }
  
  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */
  
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  
  /**
   * Remove the inner border and padding in Firefox.
   */
  
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }
  
  /**
   * Restore the focus styles unset by the previous rule.
   */
  
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
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
  
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }
  
  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */
  
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  
  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */
  
  [type="search"] {
    outline-offset: -2px; /* 2 */
    -webkit-appearance: textfield; /* 1 */
  }
  
  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */
  
  [type="search"]::-webkit-search-decoration {
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
  
  html,body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "Microsoft YaHei",Arial,Helvetica,sans-serif,"宋体";
  
    * {
      box-sizing: border-box;
    }
  }
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
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

      `}
      />

      <h2 id="vars">vars.less - less全局变量的定义</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  /* 全局的less - modifyVars */

  @adhere-primary-color: #17A293;
  
  /* 最大层级 */
  @adhere-common-max-zindex: 19999;

      `}
      />

      <h2 id="mixin">mixin.less - less全局的函数和混入</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  /* 全局的less函数和mixin */
  
  /**
    文字在一行上overflow
   */
  .common-text-inline-overflow() {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
  /**
    文字在多行上overflow，行数可控
   */
  .common-text-overflow-multi(@line: 3) {
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
  .common-hover-overflow-auto() {
    overflow: hidden;
    &:hover {
      overflow: auto;
    }
  }
  
  // 文字换行
  .common-word-break {
    white-space: normal;
    word-wrap: break-word;
    word-break: break-word;
  }

      `}
      />

      <h2 id="index">css.less - 对上述文件的一个整合引用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  @import "./vars";
  @import "./mixin";
  @import "./normalize-default";
  @import "./normalize-antd";
  @import "./gridlayout";
      `}
      />
    </div>
  );
};
