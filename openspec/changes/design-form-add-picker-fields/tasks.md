**参考文档（Props 与 Actions 的唯一依据）**  
- DatePicker、DatePicker.RangePicker：[date-picker-cn.md](https://ant.design/components/date-picker-cn.md)  
- TimePicker、TimePicker.RangePicker：[time-picker-cn.md](https://ant.design/components/time-picker-cn.md)  
- ColorPicker：[color-picker-cn.md](https://ant.design/components/color-picker-cn.md)

## 1. DatePicker 控件实现

- [x] 1.1 在 `Fields/integration/antd/DatePicker` 下新增 constant.ts，导出唯一 TYPE（如 FormDesignDatePicker）
- [x] 1.2 实现 DatePicker 的 renderDesign.tsx（桌面端设计态，使用 LabelDesign/ValueDesign 与 antd DatePicker）
- [x] 1.3 实现 DatePicker 的 renderDesignToMobile.tsx（移动端设计态）
- [x] 1.4 实现 DatePicker 的 renderMainProperty.tsx（参考 antd props，仅做基础类型 props：format、picker、showTime、allowClear；并增加 isBirthday、dateBoundMode、dateBoundBaseValue、dateBoundIncludeBase，设计/运行态按 BirthdayPicker 与 BoundedTimePicker 逻辑渲染）
- [x] 1.5 实现 DatePicker 的 renderFormProperty.tsx（hidden、noStyle、valuePropName、validateTrigger 等）
- [x] 1.6 按需实现 DatePicker 的 renderStyleProperty.tsx，与现有控件一致
- [x] 1.7 实现 DatePicker 的 index.ts（define 与 defaultValue，日期 value 使用可序列化格式或 null）

## 2. DateRangePicker 控件实现

- [x] 2.1 在 `Fields/integration/antd/DateRangePicker` 下新增 constant.ts，导出唯一 TYPE（如 FormDesignDateRangePicker）
- [x] 2.2 实现 DateRangePicker 的 renderDesign.tsx（桌面端设计态，使用 antd DatePicker.RangePicker）
- [x] 2.3 实现 DateRangePicker 的 renderDesignToMobile.tsx（移动端设计态）
- [x] 2.4 实现 DateRangePicker 的 renderMainProperty.tsx（参考 antd props，仅做基础类型 props：format、picker、showTime、allowClear 等）
- [x] 2.5 实现 DateRangePicker 的 renderFormProperty.tsx
- [x] 2.6 按需实现 DateRangePicker 的 renderStyleProperty.tsx
- [x] 2.7 实现 DateRangePicker 的 index.ts（define 与 defaultValue，日期范围 value 使用可序列化格式或 null）

## 3. TimePicker 控件实现

- [x] 3.1 在 `Fields/integration/antd/TimePicker` 下新增 constant.ts，导出唯一 TYPE（如 FormDesignTimePicker）
- [x] 3.2 实现 TimePicker 的 renderDesign.tsx（桌面端设计态）
- [x] 3.3 实现 TimePicker 的 renderDesignToMobile.tsx（移动端设计态）
- [x] 3.4 实现 TimePicker 的 renderMainProperty.tsx（参考 antd props，仅做基础类型 props：format、minuteStep、allowClear 等）
- [x] 3.5 实现 TimePicker 的 renderFormProperty.tsx
- [x] 3.6 按需实现 TimePicker 的 renderStyleProperty.tsx
- [x] 3.7 实现 TimePicker 的 index.ts（define 与 defaultValue）

## 4. TimeRangePicker 控件实现

- [x] 4.1 在 `Fields/integration/antd/TimeRangePicker` 下新增 constant.ts，导出唯一 TYPE（如 FormDesignTimeRangePicker）
- [x] 4.2 实现 TimeRangePicker 的 renderDesign.tsx（桌面端设计态，使用 antd TimePicker.RangePicker）
- [x] 4.3 实现 TimeRangePicker 的 renderDesignToMobile.tsx（移动端设计态）
- [x] 4.4 实现 TimeRangePicker 的 renderMainProperty.tsx（参考 antd props，仅做基础类型 props：format、minuteStep、allowClear 等）
- [x] 4.5 实现 TimeRangePicker 的 renderFormProperty.tsx
- [x] 4.6 按需实现 TimeRangePicker 的 renderStyleProperty.tsx
- [x] 4.7 实现 TimeRangePicker 的 index.ts（define 与 defaultValue）

## 5. ColorPicker 控件实现

- [x] 5.1 在 `Fields/integration/antd/ColorPicker` 下新增 constant.ts，导出唯一 TYPE（如 FormDesignColorPicker）
- [x] 5.2 实现 ColorPicker 的 renderDesign.tsx（桌面端设计态，依赖 antd ColorPicker API）
- [x] 5.3 实现 ColorPicker 的 renderDesignToMobile.tsx（移动端设计态）
- [x] 5.4 实现 ColorPicker 的 renderMainProperty.tsx（参考 antd props，仅做基础类型 props：format、showText、allowClear 等）
- [x] 5.5 实现 ColorPicker 的 renderFormProperty.tsx
- [x] 5.6 按需实现 ColorPicker 的 renderStyleProperty.tsx
- [x] 5.7 实现 ColorPicker 的 index.ts（define 与 defaultValue，value 为色值字符串）

## 6. 注册与集成

- [x] 6.1 在 `Fields/integration/antd/index.ts` 中 import 五个 Picker 的 define，将 DatePicker、DateRangePicker、TimePicker、TimeRangePicker、ColorPicker 加入 toolBox 与 designItems
- [x] 6.2 在 `@packages/adhere-util-intl/src/locales/zh_CN.js` 中优先复用既有 key；若不存在则新增语义明确的英文 key（如 date_picker、date_range_picker、time_picker、time_range_picker、color_picker）
- [x] 6.3 若项目内 Components 或类型定义存在控件 type 枚举，补充 FormDesignDatePicker、FormDesignDateRangePicker、FormDesignTimePicker、FormDesignTimeRangePicker、FormDesignColorPicker
- [x] 6.4 确认运行态解析逻辑能根据 designValue.type 找到对应 DesignItem 并渲染（依赖现有 parseDesign/getItems 机制，无需改 parse 则本项为验证）

## 7. MainProperty 按 antd API 补全基础类型属性

- [x] 7.1 DatePicker：在 renderMainProperty 中补全共同 API + DatePicker 专属 API 的全部基础类型（allowClear、disabled、format、picker、placeholder、size、status、variant、showTime、showWeek、needConfirm 等）；当 picker 为 year/quarter/month/week 时动态展示对应小节的基础类型（format、multiple 等）
- [x] 7.2 DateRangePicker：在 renderMainProperty 中补全 RangePicker API 的全部基础类型（format、showTime、allowClear、disabled、allowEmpty 等）
- [x] 7.3 TimePicker：在 renderMainProperty 中补全 TimePicker API 的全部基础类型（allowClear、changeOnScroll、disabled、format、hourStep、minuteStep、secondStep、needConfirm、placeholder、showNow、size、status、use12Hours、variant 等）
- [x] 7.4 TimeRangePicker：在 renderMainProperty 中补全 RangePicker 相关基础类型（含 order 等）
- [x] 7.5 ColorPicker：在 renderMainProperty 中补全 ColorPicker API 的全部基础类型（allowClear、defaultFormat、disabled、disabledAlpha、disabledFormat、format、showText、size、trigger 等）

## 8. 五个 Picker 的 Actions（renderActions / renderActionsProperty / renderActionsToMobile）

- [x] 8.1 在 Dict 中新增或扩展事件配置：DatePickerEvents（onChange、onOk、onPanelChange）、DateRangePickerEvents（onCalendarChange、onChange、onFocus、onBlur）、TimePickerEvents（onChange、onOpenChange）、TimeRangePickerEvents（onCalendarChange、onChange）、ColorPickerEvents（onChange、onChangeComplete、onFormatChange、onOpenChange、onClear），供各 Picker 的 renderActionsProperty 使用
- [x] 8.2 DatePicker：新增 renderActions.tsx、renderActionsProperty.tsx、renderActionsToMobile.tsx；index 中 hasActionsProperty 设为 true 并挂载上述三个 render
- [x] 8.3 DateRangePicker：同上
- [x] 8.4 TimePicker：同上
- [x] 8.5 TimeRangePicker：同上
- [x] 8.6 ColorPicker：同上

## 7. 补全 MainProperty 与 picker 联动（DatePicker）

- [x] 7.1 按 [antd DatePicker 共同 API](https://ant.design/components/date-picker-cn#api) 与 [DatePicker 专属 API](https://ant.design/components/date-picker-cn#datepicker) 补全 DatePicker 的 MainProperty 中全部基础类型 props
- [x] 7.2 当 picker 为 year/quarter/month/week 时，MainProperty 动态展示 [picker=year](https://ant.design/components/date-picker-cn#datepickerpickeryear)、[quarter](https://ant.design/components/date-picker-cn#datepickerpickerquarter)、[month](https://ant.design/components/date-picker-cn#datepickerpickermonth)、[week](https://ant.design/components/date-picker-cn#datepickerpickerweek) 文档中的基础类型属性

## 8. 补全其余 Picker 的 MainProperty（按 antd API）

- [x] 8.1 按 [RangePicker API](https://ant.design/components/date-picker-cn#rangepicker) 补全 DateRangePicker 的 MainProperty 基础类型 props
- [x] 8.2 按 [TimePicker API](https://ant.design/components/time-picker-cn#api) 补全 TimePicker 的 MainProperty 基础类型 props
- [x] 8.3 按 [TimePicker.RangePicker](https://ant.design/components/time-picker-cn#rangepicker) 补全 TimeRangePicker 的 MainProperty 基础类型 props
- [x] 8.4 按 [ColorPicker API](https://ant.design/components/color-picker-cn#api) 补全 ColorPicker 的 MainProperty 基础类型 props

## 9. Picker 的 Actions 与事件（五个控件）

- [x] 9.1 在 Dict 中新增或扩展事件列表：DatePickerEvents（onChange、onOk、onPanelChange）、DateRangePickerEvents（onCalendarChange、onChange、onFocus、onBlur）、TimePickerEvents（onChange、onOpenChange）、TimeRangePickerEvents（onCalendarChange、onChange）、ColorPickerEvents（onChange、onChangeComplete、onFormatChange、onOpenChange、onClear），并注册到 Components/Select 等供 Form 使用
- [x] 9.2 为 DatePicker 实现 renderActions.tsx、renderActionsProperty.tsx、renderActionsToMobile.tsx，index 中 hasActionsProperty: true 并挂载上述三个 render
- [x] 9.3 为 DateRangePicker 实现 renderActions、renderActionsProperty、renderActionsToMobile，hasActionsProperty: true
- [x] 9.4 为 TimePicker 实现 renderActions、renderActionsProperty、renderActionsToMobile，hasActionsProperty: true
- [x] 9.5 为 TimeRangePicker 实现 renderActions、renderActionsProperty、renderActionsToMobile，hasActionsProperty: true
- [x] 9.6 为 ColorPicker 实现 renderActions、renderActionsProperty、renderActionsToMobile，hasActionsProperty: true
