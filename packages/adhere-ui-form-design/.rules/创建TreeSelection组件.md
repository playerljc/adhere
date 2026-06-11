@packages/adhere-ui-form-design/src/Fields/integration/antd 在此目录中加入 TreeSelection 组件

- 属性参考https://ant.design/components/tree-cn.md ，使用 antd 中的 Tree 组件
- 如果是 jsx 的那种属性值暂时不维护
- treeData 属性需要是数据源形式维护分为静态数据和动态数据，静态数据是输入 JSON 文本的行，之前代码里@packages/adhere-ui-form-design/src/components 有这样的例子，新做一个组件也需要维护在@packages/adhere-ui-form-design/src/components 中
- 实现中如果遇到枚举数据提取到@packages/adhere-ui-form-design/src/Dict 中形成可复用组件
- 将其加入到 Toolbox 中
- 将新增的词条都放入@packages/adhere-util-intl/src 中
- 组件要使用 value 和 onChange 的方式来响应数据，value 和 onChange 都是响应 tree 的 checkbox 事件
- 涉及到 i18n 操作都参考@packages/adhere-ui-form-design/src/Fields/integration/antd/Input/renderMainProperty.tsx
- 涉及到样式的时候都需要将样式写到 less 文件中
- 涉及到 less 文件中的规则涉及到数值的都需要使用 css 变量的方式定义，且有默认值，例如 min-width: var(--phone-with-area-code-code-width, 280px);这种
- 事件 renderActionsProperty 需要处理的是 antd Tree 中的事件
- 需要有自定义的 rule validate 来去校验是否选择可数据，这个 rule
- Tree 上方加入一个搜索功能按关键字进行搜索
- 这个组件的内容区域应该有最大高度，然后超出后可以滚动，但是需要除去查询那部分只是内容区域滚动
