## Context

- `adhere-ui-form-design` 通过 `DesignItem` 描述控件的设计态、运行态和属性面板能力，现有输入类控件已经形成了统一的注册与渲染模式。
- 这次变更要补齐的是一组非值型字段：`Text`、`Alert`、`Link`、`Button`、`SubmitButton`。它们更多用于说明、提示、跳转和提交，不一定参与表单值绑定。
- 设计原则是尽量沿用现有控件的接入方式，避免为这一组字段单独发明新的体系。

## Goals / Non-Goals

**Goals:**

- 为反馈类字段增加工具箱入口和 `DesignItem` 注册。
- 让这些字段在桌面端设计态、移动端设计态和运行态都能正确渲染。
- 为展示类字段提供最小必要的主属性和样式属性，为按钮类字段提供动作与提交相关配置。

**Non-Goals:**

- 不在本次变更中重构设计器整体架构。
- 不扩展成通用富文本编辑器或复杂交互组件库。
- 不实现复合类型 props 的完整配置面板，只做基础类型与常用枚举项。

## Decisions

1. **字段分组**
   - `Text`、`Alert`、`Link` 归为展示/提示类节点。
   - `Button`、`SubmitButton` 归为动作/提交类节点。
   - 理由：这两组节点在属性面板和运行态行为上差异明显，分开处理更清晰。

2. **DesignItem 契约**
   - 每个字段都实现 `renderDesign`、`renderDesignToMobile`、`renderMainProperty`、`renderStyleProperty`。
   - 展示类节点默认不绑定表单值，`hasFormProperty` 可设为 `false` 或仅保留最小配置。
   - `Button`、`SubmitButton` 需要保留 `ActionsProperty`，用于事件与提交行为配置。
   - 理由：与现有设计器契约保持一致，同时避免给非值型节点塞入不必要的表单字段配置。

3. **属性范围**
   - `Text`：提供文本内容、对齐、字号、颜色、粗细等基础样式配置。
   - `Alert`：提供 `type`、`message`、`description`、`closable`、`showIcon` 等基础类型配置。
   - `Link`：提供链接文案、跳转地址、打开方式、是否禁用等基础配置。
   - `Button`：提供 `type`、`shape`、`size`、`danger`、`ghost`、`loading`、`disabled` 等基础配置。
   - `SubmitButton`：在 `Button` 的基础上补充 `htmlType="submit"` 相关配置，并允许和表单提交动作联动。
   - 理由：只实现基础类型与常见枚举项，先覆盖主流场景。

4. **运行态语义**
   - `Text`、`Alert`、`Link` 直接作为展示节点渲染，不参与表单值序列化。
   - `Button`、`SubmitButton` 作为动作节点渲染，可根据表单上下文触发点击/提交逻辑。
   - 理由：符合这组字段本身的职责边界。

5. **国际化**
   - 工具箱文案优先复用 `Intl.get` 中已有 key。
   - 若没有合适 key，则补充语义明确的新 key，例如 `text`, `alert`, `link`, `button`, `submit_button`。
   - 理由：与现有工具箱项保持一致。

## Risks / Trade-offs

- **[Risk]** `Link` 与 `Text` 的实现方式可能会在 `Typography` 和普通节点之间有选择差异。  
  **Mitigation**：优先沿用现有设计器已有的文本节点实现风格，再逐步补齐能力。

- **[Risk]** `SubmitButton` 的提交行为可能依赖外层表单上下文。  
  **Mitigation**：在设计态只展示静态行为，在运行态通过已有表单上下文完成提交。

- **[Risk]** 展示类字段不绑定值，可能和部分现有属性面板共用逻辑冲突。  
  **Mitigation**：为这些字段单独控制 `hasFormProperty` 和默认值结构。

## Migration Plan

- 这是纯新增变更，不涉及存量设计数据迁移。
- 旧设计数据不受影响；新字段只会在升级后出现在工具箱中。

## Open Questions

- 是否需要把 `Text` 进一步拆成“普通文本”和“富文本”两种节点，当前先按单一文本节点处理。
