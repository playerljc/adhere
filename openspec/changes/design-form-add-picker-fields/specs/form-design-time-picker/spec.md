# form-design-time-picker

**参考文档**：Props 与 Actions 以 [time-picker-cn.md](https://ant.design/components/time-picker-cn.md)（TimePicker）为准。

## ADDED Requirements

### Requirement: TimePicker 工具箱与注册

表单设计器 SHALL 在工具箱中提供 TimePicker 控件入口，并作为 DesignItem 注册到 designItems，type 为唯一常量（如 FormDesignTimePicker）。用户 SHALL 能从工具箱拖拽 TimePicker 到画布。

#### Scenario: 工具箱中可见 TimePicker

- **WHEN** 用户打开表单设计器并查看工具箱
- **THEN** 工具箱列表中 SHALL 显示“时间选择”或等价国际化文案，且该项对应 type 为 TimePicker 的 DesignItem

#### Scenario: 拖拽后画布出现 TimePicker 设计态

- **WHEN** 用户从工具箱将 TimePicker 拖入画布
- **THEN** 画布 SHALL 新增一个 designValue 节点，其 type 为 TimePicker 的 TYPE 常量，且设计态 SHALL 渲染出 antd TimePicker 的只读/占位展示

### Requirement: TimePicker 设计态与移动端设计态渲染

设计器 SHALL 提供 TimePicker 的 renderDesign（桌面端）与 renderDesignToMobile（移动端），根据 designValue 的 formItemProps、fieldProps、styleProps 渲染出与运行态一致的标签、布局和控件展示。

#### Scenario: 桌面端设计态展示正确

- **WHEN** 画布在桌面端解析包含 TimePicker type 的 designValue
- **THEN** 该节点 SHALL 通过对应 DesignItem 的 renderDesign 渲染，展示标签与 TimePicker 控件区域，且样式与布局与现有控件一致

#### Scenario: 移动端设计态展示正确

- **WHEN** 画布在移动端解析包含 TimePicker type 的 designValue
- **THEN** 该节点 SHALL 通过 renderDesignToMobile 渲染，在移动端设计态下正确展示标签与 TimePicker 区域

### Requirement: TimePicker 属性面板

设计器 SHALL 为 TimePicker 提供 MainProperty 与 FormProperty 配置。MainProperty SHALL 覆盖 [antd TimePicker API](https://ant.design/components/time-picker-cn#api) 中的**全部基础类型** props（如 allowClear、changeOnScroll、disabled、format、hourStep、minuteStep、secondStep、needConfirm、placeholder、showNow、size、status、use12Hours、variant 等）。FormProperty 与现有控件一致。

#### Scenario: MainProperty 变更反映到设计态

- **WHEN** 用户在右侧属性面板修改 TimePicker 的 format 或 minuteStep
- **THEN** 设计态 SHALL 使用更新后的 fieldProps 重新渲染，展示与配置一致

#### Scenario: FormProperty 影响表单项行为

- **WHEN** 用户修改 TimePicker 的 FormProperty（如 hidden、validateTrigger）
- **THEN** 设计数据 SHALL 保存这些 formItemProps，运行态渲染时 SHALL 应用于 Form.Item

### Requirement: TimePicker 默认值与运行态

TimePicker 的 DesignItem SHALL 定义合理的 defaultValue（formItemProps、fieldProps）。设计数据中时间 value 的持久化形式 SHALL 为可序列化格式，运行态解析后 SHALL 能正确传给 antd TimePicker 并展示。

#### Scenario: 新拖入的 TimePicker 有默认配置

- **WHEN** 用户从工具箱首次拖入 TimePicker
- **THEN** 该节点的 formItemProps 与 fieldProps SHALL 为 DesignItem 定义的 defaultValue，且设计态 SHALL 能正常渲染无报错

#### Scenario: 运行态能正确渲染 TimePicker 设计数据

- **WHEN** 运行态根据包含 TimePicker 节点的设计 JSON 渲染表单
- **THEN** 对应表单项 SHALL 渲染为 antd TimePicker，且 format、minuteStep 等 fieldProps 与设计时配置一致

### Requirement: TimePicker Actions 与事件

设计器 SHALL 为 TimePicker 提供 renderActions、renderActionsProperty、renderActionsToMobile，hasActionsProperty 为 true。事件可选项 SHALL 与 antd TimePicker API 一致：onChange、onOpenChange。事件列表 SHALL 由 Dict 提供，供 ActionsProperty 使用。
