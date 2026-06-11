@packages/adhere-ui-form-design/src/Fields/integration/antd 在此目录中加入 TableSelect 组件

- 属性参考https://ant.design/components/table-cn.md ，使用 antd 中的 Table 组件
- 如果是 jsx 的那种属性值暂时不维护，rowSelection 中的单选多选也要能设置
- 列设置需要加入单独维护功能也就是 columns 属性，需要单独维护到@packages/adhere-ui-form-design/src/components 中，是一个弹窗然后设置列的属性值，是否有需要列也是一个设置
- 分页也需要有设置，如果选择了有分页那么可以设置的项就是 Paging 组件的设置，需要有默认值
- dataSource 属性需要是数据源形式维护分为静态数据和动态数据，静态数据是输入 JSON 文本的行，之前代码里@packages/adhere-ui-form-design/src/components 有这样的例子，新做一个组件也需要维护在@packages/adhere-ui-form-design/src/components 中
- 实现中如果遇到枚举数据提取到@packages/adhere-ui-form-design/src/Dict 中形成可复用组件
- 将其加入到 Toolbox 中
- 将新增的词条都放入@packages/adhere-util-intl/src 中
- 组件要使用 value 和 onChange 的方式来响应数据，value 和 onChange 都是响应 rowSelection 的变化，此组件就是用来进行多选和单选的
- 涉及到 i18n 操作都参考@packages/adhere-ui-form-design/src/Fields/integration/antd/Input/renderMainProperty.tsx
- 涉及到样式的时候都需要将样式写到 less 文件中
- 涉及到 less 文件中的规则涉及到数值的都需要使用 css 变量的方式定义，且有默认值，例如 min-width: var(--phone-with-area-code-code-width, 280px);这种
- 事件 renderActionsProperty 需要处理的是 antd Table 中的事件，如 rowSelection 的事件
- 如果是移动端模式，没有序号列，Select 列需要固定不动，其他列可以滚动
- 需要有自定义的 rule validate 来去校验是否选择可数据，这个 rule
