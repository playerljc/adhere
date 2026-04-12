# ToDo List

## 基本
- [x] `.field` 激活状态下的样式
- [x] `.field` 激活状态下的工具栏 (进行中)
- [x] `.FlowLayout` 的 `MainProperty` 面板
- [x] `.FlowLayout` 的 `StyleProperty` 面板
- [x] `.TableGridLayout` 的 `StyleProperty` 面板
- [x] `antd-input` 的 `MainProperty` 词条缺失
- [ ] 整体样式
- [x] `.Toolbox` 样式
- [x] 右侧属性面板样式
- [ ] `.Design` 工具栏 (terminal 切换)

## 控件

### 基本
- **Input**
  - [x] 控件属性加入选项：是否是 `OptimizedInput`
- **TextArea**
  - [x] 控件属性加入选项：是否是 `OptimizedTextArea`
- **InputNumber**
  - [x] 千分位支持
    - [x] French
    - [x] German
    - [x] US
    - [x] International
- [x] ColorPicker
- [x] DatePicker
- [x] TimePicker

### 文本
- [x] alert 文本提示
- [x] 超链接
- [x] 按钮
- [x] 提交按钮

### 数据源
- [x] Select
- [x] CheckboxGroup
- [x] RadioGroup
- [x] Segmented
- [x] TreeSelect
- [x] Cascader
- [x] Transfer
- [x] EditorTable
- [ ] AutoComplete
- [ ] TreeTable

### 布局
- [x] Card
- [x] Tabs
- [x] Step
- [ ] Collapse

### 其他
- [ ] QuickRangeDate
- [ ] QRCode
- [ ] Upload
- [ ] ImageCroppingUpload
- [ ] MapSelectPoint
- [ ] PhoneWithAreaCode
- [ ] ImageCode
- [ ] RichEditor
- [ ] 手写组件

## 高级
- [ ] 大纲视图
- [ ] 控件互换位置

## FAQ
- [ ] **saga 和 store 不应该是局部的**
  - 引深到 Model 中使用的 saga 应该能从全局获取
- [ ] **event 中的 this 不应该是 designContext，应该是 formContext**
- [ ] Tabs,Steps,Collapse中项中的FlexLayout布局不能删除
- [ ] Collapse布局的less完善
- [ ] Collapse只能激活一个的设置
