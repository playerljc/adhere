# form-design-date-picker

**参考文档**：Props 与 Actions 以 [date-picker-cn.md](https://ant.design/components/date-picker-cn.md)（DatePicker、DatePicker\[picker=year/quarter/month/week\]）为准。

## ADDED Requirements

### Requirement: DatePicker 工具箱与注册

表单设计器 SHALL 在工具箱中提供 DatePicker 控件入口，并作为 DesignItem 注册到 designItems，type 为唯一常量（如 FormDesignDatePicker）。用户 SHALL 能从工具箱拖拽 DatePicker 到画布。

#### Scenario: 工具箱中可见 DatePicker

- **WHEN** 用户打开表单设计器并查看工具箱
- **THEN** 工具箱列表中 SHALL 显示“日期选择”或等价国际化文案，且该项对应 type 为 DatePicker 的 DesignItem

#### Scenario: 拖拽后画布出现 DatePicker 设计态

- **WHEN** 用户从工具箱将 DatePicker 拖入画布
- **THEN** 画布 SHALL 新增一个 designValue 节点，其 type 为 DatePicker 的 TYPE 常量，且设计态 SHALL 渲染出 antd DatePicker 的只读/占位展示

### Requirement: DatePicker 设计态与移动端设计态渲染

设计器 SHALL 提供 DatePicker 的 renderDesign（桌面端）与 renderDesignToMobile（移动端），根据 designValue 的 formItemProps、fieldProps、styleProps 渲染出与运行态一致的标签、布局和控件展示。

#### Scenario: 桌面端设计态展示正确

- **WHEN** 画布在桌面端解析包含 DatePicker type 的 designValue
- **THEN** 该节点 SHALL 通过对应 DesignItem 的 renderDesign 渲染，展示标签与 DatePicker 控件区域，且样式与布局与现有 Input 等控件一致（如 LabelDesign、ValueDesign）

#### Scenario: 移动端设计态展示正确

- **WHEN** 画布在移动端解析包含 DatePicker type 的 designValue
- **THEN** 该节点 SHALL 通过 renderDesignToMobile 渲染，在移动端设计态下正确展示标签与 DatePicker 区域

### Requirement: DatePicker 属性面板

设计器 SHALL 为 DatePicker 提供 MainProperty 与 FormProperty 配置。MainProperty SHALL 覆盖 [antd DatePicker 共同 API](https://ant.design/components/date-picker-cn#api) 与 [DatePicker 专属 API](https://ant.design/components/date-picker-cn#datepicker) 中的**全部基础类型** props（如 allowClear、disabled、format、picker、placeholder、size、status、variant、showTime、showWeek、needConfirm 等）。**当 picker 为 year/quarter/month/week 时**，MainProperty SHALL **动态展示** [DatePicker\[picker=year\]](https://ant.design/components/date-picker-cn#datepickerpickeryear)、[quarter](https://ant.design/components/date-picker-cn#datepickerpickerquarter)、[month](https://ant.design/components/date-picker-cn#datepickerpickermonth)、[week](https://ant.design/components/date-picker-cn#datepickerpickerweek) 文档中的基础类型（如对应 format、multiple 等）。扩展属性：（1）**是否是生日**（isBirthday，boolean）：为 true 时采用 BirthdayPicker 的 disabledDate 逻辑；（2）**日期边界**：dateBoundMode、dateBoundBaseValue、dateBoundIncludeBase，逻辑与 BoundedTimePicker 一致。FormProperty 与现有控件一致。

#### Scenario: MainProperty 变更反映到设计态

- **WHEN** 用户在右侧属性面板修改 DatePicker 的 format 或 showTime
- **THEN** 设计态 SHALL 使用更新后的 fieldProps 重新渲染，展示格式与是否带时间与配置一致

#### Scenario: 勾选“是否是生日”时禁用今天及之后日期

- **WHEN** 用户将 DatePicker 的 isBirthday 设为 true
- **THEN** 设计态与运行态 SHALL 禁用今天及今天之后的日期，行为与 BirthdayPicker 一致

#### Scenario: 配置“日期边界”时按基准日限制可选范围

- **WHEN** 用户设置 dateBoundMode 为 before 或 after，并可选配置 dateBoundBaseValue、dateBoundIncludeBase
- **THEN** 设计态与运行态 SHALL 按 BoundedTimePicker 逻辑限制只能选基准日之前或之后的日期

#### Scenario: FormProperty 影响表单项行为

- **WHEN** 用户修改 DatePicker 的 FormProperty（如 hidden、validateTrigger）
- **THEN** 设计数据 SHALL 保存这些 formItemProps，运行态渲染时 SHALL 应用于 Form.Item

### Requirement: DatePicker 默认值与运行态

DatePicker 的 DesignItem SHALL 定义合理的 defaultValue（formItemProps、fieldProps）。设计数据中日期 value 的持久化形式 SHALL 为可序列化格式（如 ISO 字符串或时间戳），运行态解析后 SHALL 能正确传给 antd DatePicker 并展示。

#### Scenario: 新拖入的 DatePicker 有默认配置

- **WHEN** 用户从工具箱首次拖入 DatePicker
- **THEN** 该节点的 formItemProps 与 fieldProps SHALL 为 DesignItem 定义的 defaultValue，且设计态 SHALL 能正常渲染无报错

#### Scenario: 运行态能正确渲染 DatePicker 设计数据

- **WHEN** 运行态根据包含 DatePicker 节点的设计 JSON 渲染表单
- **THEN** 对应表单项 SHALL 渲染为 antd DatePicker，且 format、showTime 等 fieldProps 与设计时配置一致

### Requirement: DatePicker Actions 与事件

设计器 SHALL 为 DatePicker 提供 renderActions、renderActionsProperty、renderActionsToMobile（与 Input 一致），hasActionsProperty 为 true。renderActions 提供设计态操作（复制、删除）；renderActionsProperty 提供事件配置，可选项 SHALL 与 antd DatePicker API 一致：onChange、onOk、onPanelChange。事件列表 SHALL 由 Dict 提供（如 DatePickerEvents），供 ActionsProperty 使用。

#### Scenario: 切换 picker 时 MainProperty 动态展示对应基础属性

- **WHEN** 用户将 DatePicker 的 picker 改为 year、quarter、month 或 week
- **THEN** MainProperty 面板 SHALL 展示该 picker 类型在 antd 文档中对应的基础类型属性（如 year 的 format、multiple 等）
