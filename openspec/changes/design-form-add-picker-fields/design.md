## Context

- **背景**：adhere-ui-form-design 是表单可视化设计器，通过工具箱拖拽、属性面板配置生成表单设计数据，运行态根据设计数据渲染表单。当前已支持 Input、TextArea、InputNumber、Switch、Checkbox、Radio、Rate、Slider 等控件，均位于 `Fields/integration/antd/`，采用统一的 DesignItem 契约（type、renderDesign、renderDesignToMobile、renderFormProperty、renderMainProperty、renderStyleProperty 等）。
- **现状**：设计器通过 `getItems()` 获取 designItems，`parseDesign` 根据 `value.type` 查找对应 DesignItem 并调用其 renderDesign/renderDesignToMobile；新控件只需实现相同契约并注册到 antd 的 install 即可接入。
- **约束**：需与现有控件保持同一套属性面板与设计/运行态行为；依赖 antd 的 DatePicker（含 RangePicker）、TimePicker（含 RangePicker）、ColorPicker，不引入新第三方库；需考虑移动端设计态（renderDesignToMobile）与桌面端一致体验；props 配置项以 `ant.design/components` 对应组件的 props 定义为准，且**首期只做基础类型（string/number/boolean/enum）配置项**，复合类型 props 不做。

## Goals / Non-Goals

**Goals:**

- 为表单设计器增加 DatePicker、DateRangePicker、TimePicker、TimeRangePicker、ColorPicker 五种 Picker 类控件，支持在设计态与运行态正确展示与配置。
- 每个控件具备：工具箱入口、设计态/移动端设计态渲染、MainProperty（控件级配置）、FormProperty（表单项配置）、必要时 StyleProperty，与现有控件模式一致。
- 设计结果 JSON 可持久化并能在运行态正确解析与渲染，不破坏现有设计数据。

**Non-Goals:**

- 不实现与 antd 无关的自定义 Picker 组件；不在本 change 内做 QuickRangeDate、Select、Cascader、TreeSelect 等其它控件；不改变设计器整体架构或已有控件的 API。

## Decisions

0. **参考文档（Props 与 Actions 的唯一依据）**
   - **DatePicker**、**DatePicker.RangePicker** 的 props 与 actions（事件）以 [https://ant.design/components/date-picker-cn.md](https://ant.design/components/date-picker-cn.md) 文档中的 API 为准。实现 MainProperty、renderActionsProperty 时，仅从该文档的「共同的 API」「DatePicker」「DatePicker\[picker=year/quarter/month/week]」「RangePicker」等章节选取基础类型 props 与事件回调。
   - **TimePicker**、**TimePicker.RangePicker** 的 props 与 actions 以 [https://ant.design/components/time-picker-cn.md](https://ant.design/components/time-picker-cn.md) 文档中的 API 为准。实现时仅从该文档的 API、RangePicker 等章节选取基础类型 props 与事件回调。
   - **ColorPicker** 的 props 与 actions 以 [https://ant.design/components/color-picker-cn.md](https://ant.design/components/color-picker-cn.md) 文档中的 API 为准。实现时仅从该文档的 API 章节选取基础类型 props 与事件回调。
   - **理由**：统一以 antd 官方文档为唯一参考，避免与其它链接或版本不一致导致实现偏差。

1. **目录与命名**
   - 在 `Fields/integration/antd/` 下新增五个 Picker 目录，每个目录包含 constant、index（define）、renderDesign、renderDesignToMobile、renderMainProperty、renderFormProperty、renderStyleProperty（按需）、**renderActions、renderActionsProperty、renderActionsToMobile**；与 Input 保持一致。
   - **理由**：与现有 antd 集成方式一致，便于查找与维护。**备选**：单目录 Picker 下分子类型——未采纳，因会与现有“一控件一目录”的约定不一致。

2. **DesignItem 契约**
   - 五个 Picker 均实现与 Input 相同的 DesignItem 接口，**包含 renderActions、renderActionsProperty、renderActionsToMobile**，hasActionsProperty 设为 true。renderActions 提供设计态操作（如复制、删除）；renderActionsProperty 提供事件配置面板，可选项与 antd 对应组件 API 中的事件回调一致（参考 antd 文档 API 部分）。
   - **理由**：与 Input 等控件一致，便于在设计器内配置事件（onChange、onOk、onPanelChange 等）。

3. **类型与常量**
   - 每个控件在 constant 中导出唯一 TYPE（如 `FormDesignDatePicker`、`FormDesignTimePicker`、`FormDesignColorPicker`），用于 designValue.type 与 designItems 注册；若项目内 Components 或类型定义中有控件枚举，需在此 change 中补充这三种 type。
   - **理由**：与现有 Slider/Input 的 TYPE 用法一致，避免与 antd 组件名冲突。

4. **属性面板范围（参考 antd 各组件 API，仅基础类型）**
   - **DatePicker**：MainProperty 覆盖 [DatePicker 共同 API](https://ant.design/components/date-picker-cn#api) 与 [DatePicker 专属 API](https://ant.design/components/date-picker-cn#datepicker) 中的基础类型（如 allowClear、disabled、format、picker、placeholder、size、status、variant、showTime、showWeek、needConfirm 等）；**当 picker 为 year/quarter/month/week 时，动态展示** [DatePicker\[picker=year\]](https://ant.design/components/date-picker-cn#datepickerpickeryear)、[quarter](https://ant.design/components/date-picker-cn#datepickerpickerquarter)、[month](https://ant.design/components/date-picker-cn#datepickerpickermonth)、[week](https://ant.design/components/date-picker-cn#datepickerpickerweek) 文档中的基础类型（如对应 format、multiple 等）。扩展属性：isBirthday、dateBoundMode、dateBoundBaseValue、dateBoundIncludeBase（逻辑同前）。
   - **DateRangePicker**：MainProperty 覆盖 [RangePicker API](https://ant.design/components/date-picker-cn#rangepicker) 中的基础类型（format、showTime、allowClear、disabled、allowEmpty 等）。
   - **TimePicker**：MainProperty 覆盖 [TimePicker API](https://ant.design/components/time-picker-cn#api) 中的基础类型（allowClear、changeOnScroll、disabled、format、hourStep、minuteStep、secondStep、needConfirm、placeholder、showNow、size、status、use12Hours、variant 等）。
   - **TimeRangePicker**：MainProperty 覆盖 TimePicker 及 [RangePicker](https://ant.design/components/time-picker-cn#rangepicker) 中的基础类型（含 order 等）。
   - **ColorPicker**：MainProperty 覆盖 [ColorPicker API](https://ant.design/components/color-picker-cn#api) 中的基础类型（allowClear、defaultFormat、disabled、disabledAlpha、disabledFormat、format、showText、size、trigger 等）。
   - **取舍**：只实现基础类型配置项；复合类型（对象/函数/ReactNode）不提供配置入口。

5. **默认值与 value 形态**
   - DatePicker/TimePicker 的 defaultValue 中 fieldProps 的 value 使用 dayjs 或 antd 支持的日期/时间类型（或 null）；ColorPicker 使用色值字符串。设计态与运行态均通过 formItemProps/fieldProps 传递，与现有控件一致。
   - **理由**：与 antd 受控用法一致，便于运行态直接传给 antd 组件。

6. **国际化**
   - 工具箱文案（label、tooltip、searchLabel）使用 Intl.get：优先在 `@packages/adhere-util-intl/src/locales/zh_CN.js` 中查找并复用既有 key；若不存在，则新增**语义明确的英文 key**（例如 date_picker、date_range_picker、time_picker、time_range_picker、color_picker）。
   - **理由**：与现有 toolBox 项一致，保证多语言支持。

7. **Actions 与事件**
   - 每个 Picker 实现 renderActions（设计态操作：复制、删除，与 Input 一致）、renderActionsProperty（事件配置面板）、renderActionsToMobile。事件可选项与 antd 对应组件 API 一致：DatePicker 为 onChange、onOk、onPanelChange；RangePicker 为 onCalendarChange、onChange、onFocus、onBlur；TimePicker 为 onChange、onOpenChange；TimePicker.RangePicker 为 onCalendarChange、onChange；ColorPicker 为 onChange、onChangeComplete、onFormatChange、onOpenChange、onClear。需在 Dict 中为各 Picker 提供事件列表（可新增 DatePickerEvents、TimePickerEvents、ColorPickerEvents 或复用/扩展 InputEvents），供 renderActionsProperty 使用。

## Risks / Trade-offs

- **[Risk]** antd 的 ColorPicker 在部分 antd 版本中可能为 ColorPicker 或 ColorPicker 所在包不同，需确认项目使用的 antd 版本是否已包含并 API 稳定。  
  **Mitigation**：实现前确认 antd 版本与 ColorPicker 导出；若无则首期可只做 DatePicker + TimePicker，ColorPicker 标为后续任务。

- **[Risk]** 日期/时间 value 的序列化（设计 JSON 存 dayjs 对象会变成普通对象），运行态反序列化后可能需转回 dayjs。  
  **Mitigation**：设计数据中日期/时间建议存 ISO 字符串或时间戳，运行态渲染前用 dayjs 包装；设计态展示也统一用 dayjs 解析，避免不一致。

## Migration Plan

- **部署**：纯新增代码，无数据迁移；发布新版本后，使用方升级依赖即可在工具箱中看到新控件，旧设计数据无需变更。
- **回滚**：若出现问题，回退版本即可；若已有设计数据使用了新控件 type，回退后这些字段在运行态会无法解析（需在文档中说明最低版本与 type 兼容性）。

## Open Questions

- 无；若实现过程中发现 Intl key 或 antd ColorPicker 导出与预期不符，在实现阶段直接按项目现状调整即可。
