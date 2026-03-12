## Why

表单设计器（adhere-ui-form-design）当前仅支持基础控件（Input、Switch、Radio、Checkbox、Rate、Slider 等），缺少日期、时间、颜色等选择类控件。业务表单常需日期范围、时间点、颜色选择等能力，若设计器不支持这些 Picker 类控件，用户无法在可视化设计阶段配置它们，只能手写或后续扩展，影响设计闭环与一致性。现在补齐 Picker 类字段可让表单设计器覆盖常见表单场景，与 ToDoList 中的规划一致。

## What Changes

- 在表单设计器中新增 **DatePicker**：支持日期选择，可配置常用基础属性（如 format、picker、showTime、allowClear 等）；并在基本属性中增加：（1）**是否是生日**（boolean），为 true 时采用 `@packages/adhere-ui-anthoc/src/date-picker/BirthdayPicker.tsx` 的逻辑（禁用今天及今天之后的日期）；（2）**日期边界**（dateBoundMode / dateBoundBaseValue / dateBoundIncludeBase），采用 `@packages/adhere-ui-anthoc/src/date-picker/BoundedTimePicker.tsx` 的逻辑（可限制只能选基准日期之前或之后的日期）。
- 在表单设计器中新增 **DateRangePicker**：作为独立控件，支持日期范围选择，可配置常用基础属性（如 format、picker、showTime、allowClear 等）。
- 在表单设计器中新增 **TimePicker**：支持时间选择，可配置常用基础属性（如 format、minuteStep、allowClear 等）。
- 在表单设计器中新增 **TimeRangePicker**：作为独立控件，支持时间范围选择，可配置常用基础属性（如 format、minuteStep、allowClear 等）。
- 在表单设计器中新增 **ColorPicker**：支持颜色选择（与 ToDoList 中的 ColorPicker 对应）。
- 上述控件均接入现有设计器能力：工具箱注册、设计态/运行态渲染、MainProperty/FormProperty/StyleProperty、**Actions（renderActions/renderActionsProperty/renderActionsToMobile）** 等属性面板，与现有 Input 等控件保持同一套约定。
- 不改变现有控件的行为与 API；新控件作为新增 designItems 与 toolBox 项接入。
- **参考文档规则**：各组件 props 与 actions 以以下 antd 官方文档为**唯一依据**——DatePicker、DatePicker.RangePicker：[date-picker-cn.md](https://ant.design/components/date-picker-cn.md)；TimePicker、TimePicker.RangePicker：[time-picker-cn.md](https://ant.design/components/time-picker-cn.md)；ColorPicker：[color-picker-cn.md](https://ant.design/components/color-picker-cn.md)。
- 属性配置遵循约束：**只实现基础类型（如 string/number/boolean/enum）props 的配置项**；复合类型 props（对象/函数/ReactNode 等）首期不做；具体字段与事件以上述参考文档中的 API 为准。
- **DatePicker**：MainProperty 需覆盖 antd DatePicker 共同 API 及 DatePicker 专属 API 中的基础类型；当 **picker** 为 year/quarter/month/week 时，属性面板**动态展示**该 picker 类型下的基础类型属性（参考 antd 文档 DatePicker\[picker=year\] 等章节）。
- **DateRangePicker**：MainProperty 需覆盖 antd RangePicker API 中的基础类型。
- **TimePicker / TimeRangePicker**：MainProperty 需覆盖 antd TimePicker 及 RangePicker 文档中的基础类型。
- **ColorPicker**：MainProperty 需覆盖 antd ColorPicker API 中的基础类型。
- 每个 Picker 均实现 **renderActions、renderActionsProperty、renderActionsToMobile**，事件项与 antd 对应组件 API 中的事件回调一致（如 DatePicker：onChange、onOk、onPanelChange；RangePicker：onCalendarChange、onChange；TimePicker：onChange、onOpenChange；ColorPicker：onChange、onChangeComplete、onFormatChange、onOpenChange、onClear 等）。

## Capabilities

### New Capabilities

- `form-design-date-picker`: 表单设计器中 DatePicker 的完整能力（工具箱、设计/运行态、属性面板、与 antd DatePicker 的集成）。
- `form-design-date-range-picker`: 表单设计器中 DateRangePicker 的完整能力（工具箱、设计/运行态、属性面板、与 antd DatePicker.RangePicker 的集成）。
- `form-design-time-picker`: 表单设计器中 TimePicker 的完整能力（工具箱、设计/运行态、属性面板、与 antd TimePicker 的集成）。
- `form-design-time-range-picker`: 表单设计器中 TimeRangePicker 的完整能力（工具箱、设计/运行态、属性面板、与 antd TimePicker.RangePicker 的集成）。
- `form-design-color-picker`: 表单设计器中 ColorPicker 的完整能力（工具箱、设计/运行态、属性面板、与 antd ColorPicker 的集成）。

### Modified Capabilities

- 无（当前 openspec/specs 下无既有能力，本次为纯新增）。

## Impact

- **代码**：`packages/adhere-ui-form-design`，五套 Picker 均含 renderDesign、renderDesignToMobile、renderMainProperty、renderFormProperty、renderStyleProperty、**renderActions、renderActionsProperty、renderActionsToMobile**；DatePicker 的 MainProperty 根据 picker 动态展示 year/quarter/month/week 专属基础属性；Dict 中需为各 Picker 提供可配置事件列表（或复用/扩展现有 Events），供 renderActionsProperty 使用。
- **依赖**：继续使用现有 antd（DatePicker、TimePicker、ColorPicker）与项目内 Design 组件/类型，无新增第三方依赖。
- **API**：对外仅新增设计项类型与 toolbox 项，不修改现有 DesignItem/ToolBoxGroup 等公共类型定义；若存在统一类型扩展点（如 Components 类型），需在对应类型中补充新控件类型。
- **系统**：仅影响使用表单设计器的应用；设计结果 JSON 中会新增对应控件类型，运行态渲染需依赖本次新增的解析与渲染逻辑。
