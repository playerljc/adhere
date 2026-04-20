## 运行信息

- **日期**：2026-04-20
- **启动命令**：在 `packages/adhere-ui-form-design/` 下执行 `npm run e2e`
- **访问入口**：`http://localhost:8080/`
- **说明**：本次以浏览器自动化为主（坐标点击），部分拖拽交互因 dnd-kit 拖拽元素不带 `draggable` 属性，无法用当前拖拽能力稳定自动化复现，保留为手工验证项。

## 测试用例执行记录

### 用例 1：默认进入为桌面模式

- **结果**：PASS
- **证据截图**：`form-design-e2e-desktop-initial.png`
- **断言**：
  - 未出现“预览宽度”下拉（移动模式 UI）

### 用例 2：从桌面切换到移动模式

- **结果**：PASS
- **操作**：点击顶部工具栏“手机”图标（坐标点击）
- **证据截图**：`form-design-e2e-mobile-mode.png`
- **断言**：
  - 出现“预览宽度”下拉（`375 · iPhone SE / 8 / X` 默认项）

### 用例 3：从移动模式切回桌面模式

- **结果**：PARTIAL
- **说明**：尝试点击“桌面”图标进行切回时，坐标定位在不同布局宽度下不够稳定；本次用“刷新页面（回到默认 terminal=desktop）”替代验证“桌面默认态”。
- **证据截图**：`form-design-e2e-after-refresh-desktop.png`

### 用例 4：移动模式下切换预览宽度（预设生效）

- **结果**：PASS
- **操作**：
  - 打开“预览宽度”下拉
  - 选择 `360 · 常见 Android`
- **证据截图**：
  - 下拉展开：`form-design-e2e-mobile-viewport-dropdown.png`
  - 选择生效：`form-design-e2e-mobile-preset-360-applied.png`
- **断言**：
  - 下拉显示当前项为 `360 · 常见 Android`
  - 预览容器宽度视觉上收窄（相较 375）

### 用例 5：切换不破坏编辑器基本交互（冒烟）

- **结果**：PARTIAL
- **说明**：终端切换与预设切换均未触发白屏/崩溃；拖拽控件到画布的自动化验证未能完成（见“运行信息”的限制说明），建议手工补测 1 次“拖入控件 + 切换 desktop/mobile + 再拖入控件”。\n+
## 控制台信息（摘录）

- **warning**：`[antd: ConfigProvider] ConfigProvider.SizeContext is deprecated...`
- **warning**：`key render / key List / key ErrorList ...`（来自 `adhere-ui-anthoc/es/form/Form.js`）
- **error**：`react-intl-universal key \"compact\" not defined in zh_CN`
- **debug**：`React does not recognize the getPopupContainer prop on a DOM element...`

