# form-design-feedback-fields

**参考文档**：`Text` / `Link` 以 [Typography 文档](https://ant.design/components/typography-cn/) 为准，`Alert` 以 [Alert 文档](https://ant.design/components/alert-cn/) 为准，`Button` / `SubmitButton` 以 [Button 文档](https://ant.design/components/button-cn/) 为准。

## ADDED Requirements

### Requirement: 反馈类字段工具箱与注册

表单设计器 SHALL 在工具箱中提供 `Text`、`Alert`、`Link`、`Button`、`SubmitButton` 入口，并将它们作为独立 `DesignItem` 注册到 `designItems`，每个字段 SHALL 使用唯一的 `TYPE` 常量。用户 SHALL 能从工具箱拖拽这些节点到画布。

#### Scenario: 工具箱中可见反馈类字段

- **WHEN** 用户打开表单设计器并查看工具箱
- **THEN** 工具箱列表中 SHALL 显示文本、提示、链接、按钮和提交按钮相关入口，且这些入口对应独立的 `DesignItem`

#### Scenario: 拖拽后画布出现对应设计态

- **WHEN** 用户从工具箱将任意一个反馈类字段拖入画布
- **THEN** 画布 SHALL 新增一个 `designValue` 节点，其 `type` 为对应 `TYPE` 常量，且设计态 SHALL 正确渲染

### Requirement: 展示类字段设计态与移动端设计态

`Text`、`Alert`、`Link` SHALL 提供桌面端 `renderDesign` 与移动端 `renderDesignToMobile`。这些字段 SHALL 以展示/提示节点方式渲染，不依赖表单值绑定，且其 `MainProperty` / `StyleProperty` SHALL 能控制基础显示内容和样式。

#### Scenario: Text 在桌面端展示正确

- **WHEN** 画布在桌面端解析包含 `Text` 的 `designValue`
- **THEN** 该节点 SHALL 通过 `renderDesign` 渲染为纯文本展示，且可通过属性面板修改文本内容与样式

#### Scenario: Alert 在移动端展示正确

- **WHEN** 画布在移动端解析包含 `Alert` 的 `designValue`
- **THEN** 该节点 SHALL 通过 `renderDesignToMobile` 渲染为警告提示样式，且消息、描述和类型配置 SHALL 生效

#### Scenario: Link 的跳转信息可配置

- **WHEN** 用户在属性面板配置 `Link` 的链接地址或打开方式
- **THEN** 设计态与运行态 SHALL 使用更新后的配置渲染链接文案与跳转行为

### Requirement: 动作类字段设计态与动作属性

`Button`、`SubmitButton` SHALL 提供桌面端与移动端设计态，并支持动作相关配置。`Button` SHALL 能配置基础按钮属性与点击行为；`SubmitButton` SHALL 以提交按钮语义渲染，且在运行态与表单提交流程联动。

#### Scenario: Button 的动作配置生效

- **WHEN** 用户为 `Button` 配置点击事件或按钮样式
- **THEN** 运行态 SHALL 使用这些配置渲染按钮，并在触发点击时执行对应行为

#### Scenario: SubmitButton 以提交按钮语义工作

- **WHEN** 用户将字段配置为 `SubmitButton`
- **THEN** 运行态 SHALL 使用 `htmlType="submit"` 或等价语义渲染，并在表单上下文中触发提交

### Requirement: 属性面板、默认值与运行态

反馈类字段 SHALL 为不同节点提供合理的 `defaultValue` 和属性面板配置。展示类字段 SHALL 以 `MainProperty` + `StyleProperty` 为主，动作类字段 SHALL 额外提供 `ActionsProperty`；其中 `Button` / `SubmitButton` 的事件列表 SHALL 与按钮文档中的基础回调一致。

#### Scenario: 修改属性后设计态即时更新

- **WHEN** 用户在右侧属性面板修改文本内容、提示类型、链接地址或按钮类型
- **THEN** 设计态 SHALL 使用更新后的 `fieldProps` 重新渲染，且变化在运行态中保持一致

#### Scenario: 设计数据可持久化并重新解析

- **WHEN** 用户保存包含这些反馈类字段的设计 JSON 并在之后重新打开
- **THEN** 这些节点 SHALL 被正确解析并渲染，且不影响现有字段的加载
