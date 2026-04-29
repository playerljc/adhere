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

### 模式
- [ ] 表单填写模式
- [ ] 表单查看模式

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
- [x] Collapse

### 高级组件

- [x] QRCode
- [x] 签名组件
- [x] Divider分割线
- ImageCaptcha(图片的验证码) - 暂时先暂停
  - [ ] 支持维护一个接口地址生成图片
  - [ ] 拖拽形状验证码(rc-slider-captcha)

- [ ]PhoneWithAreaCode(不同区域的电话号码选择)
- [ ]ChinaPhone - 中国电话

- [ ] 短信验证码
- [ ] QuickRangeDate(快速的时间范围选择)
- Upload(文件的上传)
  - [ ] 自定义接口
  - 上传到各种外部的OSS服务
    - [ ] 阿里云OSS
    - [ ] 腾讯云OSS
    - [ ] 七牛云OSS
    - 
- [ ] ImageCroppingUpload(图片的上传可以对图片进行处理)

- MapSelectPoint(地图中选点的操作)
    - [ ] 百度MAP
    - [ ] 高德MAP
    - [ ] 腾讯MAP
    - [ ] 天地图
    - [ ] GoogleMAP
    - [ ] MapBOX
    - [ ] OSM

- [ ] RichEditor(富文本)
- [ ] 表达式(可以输入表达式)

## 高级

- 大纲视图
  - [x] Tree展示
  - [x] 元素互换位置
  
- 工具栏
  - 不同终端视图的切换
    - [x] 切换到桌面端
    - [x] 切换到移动端
  - [ ] 还原和恢复的功能
  - [x] 全屏的功能
  - [ ] 导入固定的模板
  - [x] 清空
  - [x] 生成JSON
  - [ ] 预览表单

- [ ] 设计视图左右面板支持隐藏和显示的功能

## FAQ

- [ ] **event 中的 this 不应该是 designContext，应该是 formContext**
- [x] Tabs,Steps,Collapse 拖拽多副本 uuid 重复问题
- [x] Tabs,Steps,Collapse 中项中的 FlexLayout 布局不能删除
- [x] Collapse 只能激活一个的设置
- [x] placeholder 设置需要支持国际化
- [x] 拖上来的表单 Field 的 name 需要有默认值
- [x] Alert Link Text Divider Button SubmitButton 是可以多动到FlexLayout TableGridLayout Card中的