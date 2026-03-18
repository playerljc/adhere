## 1. 反馈类字段基础能力

- [x] 1.1 为 `Text` 新增 `constant`、`index`、桌面端设计态、移动端设计态和默认值。
- [x] 1.2 为 `Alert` 新增 `constant`、`index`、桌面端设计态、移动端设计态和默认值。
- [x] 1.3 为 `Link` 新增 `constant`、`index`、桌面端设计态、移动端设计态和默认值。

## 2. 动作类字段基础能力

- [x] 2.1 为 `Button` 新增 `constant`、`index`、桌面端设计态、移动端设计态和默认值。
- [x] 2.2 为 `SubmitButton` 新增 `constant`、`index`、桌面端设计态、移动端设计态和默认值。

## 3. 属性面板

- [x] 3.1 为 `Text` 实现 `renderMainProperty` 与 `renderStyleProperty`。
- [x] 3.2 为 `Alert` 实现 `renderMainProperty` 与 `renderStyleProperty`。
- [x] 3.3 为 `Link` 实现 `renderMainProperty` 与 `renderStyleProperty`。
- [x] 3.4 为 `Button` 实现 `renderMainProperty`、`renderStyleProperty` 和 `renderActionsProperty`。
- [x] 3.5 为 `SubmitButton` 实现 `renderMainProperty`、`renderStyleProperty` 和 `renderActionsProperty`。

## 4. 注册与集成

- [x] 4.1 在 `Fields/integration/antd/index.ts` 中注册新字段并加入工具箱。
- [x] 4.2 为新字段补充国际化文案 key。
- [x] 4.3 若项目内存在字段类型枚举或导出聚合，补齐对应类型导出。

## 5. 运行态验证

- [x] 5.1 验证设计 JSON 可以正常保存并重新解析这些字段。
- [x] 5.2 验证桌面端与移动端都能正确渲染新字段。
- [x] 5.3 验证按钮类字段的动作配置和提交行为不会影响现有字段。
