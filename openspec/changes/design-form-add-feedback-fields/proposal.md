## Why

`adhere-ui-form-design` 目前已经支持输入、选择、日期时间和颜色等常见字段，但还缺少一组“反馈/提示/动作”类节点。像 `ToDoList.txt` 里提到的“文本”“alert文本提示”“超链接”“按钮”“提交按钮”，如果不能在设计器里直接配置，很多表单中的说明、引导、跳转和提交动作就只能手写补充，无法在可视化设计阶段完成闭环。

## What Changes

- 在表单设计器中新增一组反馈类字段：`Text`、`Alert`、`Link`、`Button`、`SubmitButton`。
- 这组字段接入现有设计器能力：工具箱注册、`designItems` 注册、桌面端/移动端设计态渲染、`MainProperty`、`StyleProperty`，以及需要时的 `ActionsProperty`。
- `Text`、`Alert`、`Link` 侧重展示与提示，`Button`、`SubmitButton` 侧重动作与提交。
- 不修改现有字段行为；新增字段以独立 `DesignItem` 的方式接入，保持与现有控件一致的设计数据结构。
- 属性与事件参考对应的 antd 官方文档，首期仅实现基础类型配置项，复合类型配置不纳入本次范围。

## Capabilities

### New Capabilities

- `form-design-feedback-fields`: 表单设计器中的反馈/提示/动作类字段完整能力，覆盖文本展示、警告提示、超链接、普通按钮和提交按钮。

### Modified Capabilities

- 无。

## Impact

- **代码**：主要影响 `packages/adhere-ui-form-design`，需要新增字段定义、渲染、属性面板和工具箱注册。
- **依赖**：继续使用现有 antd 组件与项目内设计器基础能力，不新增第三方依赖。
- **系统**：使用表单设计器的应用可以在工具箱中直接拖入这些反馈类节点，减少手工拼装与二次实现。
