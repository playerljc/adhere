## 使用说明（共用前置）

- **启动**：`packages/adhere-ui-form-design/` 下执行 `npm run e2e`，访问 `http://localhost:8080/`
- **初始状态**：默认 desktop 模式（无“预览宽度”下拉）
- **切换方式**：点击顶部工具栏的“桌面/手机”图标切换（若自动化不稳定，可作为手工步骤）
- **搭建测试画布**：为保证可重复，建议每条用例从“清空所有”开始，确保画布干净。

> 说明：当前实现侧重“窄屏预览 + 可在移动端编辑时写入 mobile 覆盖层”，**不包含** 4.1~4.6 中的“自动映射规则”。因此每条用例同时给出两套断言：\n+> - **现状断言（当前代码应满足）**\n+> - **目标断言（若未来实现 4.1~4.6 自动变换，应满足）**

---

## 用例 TG：TableGridLayout（表格栅格）

### 目标

验证桌面多列与移动单列（若实现 TG-1）或现状“无自动变化”。

### 步骤

1. desktop 模式，点击“清空所有”
2. 从左侧工具箱拖入 **表格布局（TableGridLayout）** 到画布
3. 选中该布局，在右侧属性面板设置：
   - `columnCount = 2`（或更高）
   - `colgroup` 调整为两列（若面板支持）
4. 切换到 mobile 模式
5. 观察画布表现，并检查属性面板当前值（如能看到）

### 现状断言（当前）

- `columnCount`、`colgroup` **不会**因为切换到 mobile 而自动变化
- 仅画布宽度变窄（出现“预览宽度”下拉）

### 目标断言（若实现 TG-1）

- mobile 下自动生效覆盖：
  - `columnCount -> 1`
  - `colgroup -> ['auto']` 或 `['100%']`
- 切回 desktop 后恢复原桌面值（不丢失）

---

## 用例 FL：FlexLayout（弹性布局）

### 目标

验证横向/不换行场景在移动端是否会改为纵向（若实现 FL-1），或现状“不自动变”。

### 步骤

1. desktop 模式清空画布
2. 拖入 **flex布局（FlexLayout）**
3. 在属性面板设置：
   - `direction = horizontal`
   - `wrap = false`
   - `gap = 0` 或较小值（便于观察）
4. 在 flex 容器里拖入 3~4 个简单控件（如“按钮/单行文本”）
5. 切换到 mobile 模式观察排列

### 现状断言（当前）

- `direction/wrap/gap` 不会因模式切换自动变化

### 目标断言（若实现 FL-1/FL-2）

- mobile 覆盖可选生效：
  - `direction -> vertical`（当横向明显溢出时）
  - `gap` 适度增大（+4~8px）
- 切回 desktop 不丢失桌面原值

---

## 用例 CD：Card（卡片）

### 目标

验证移动端不强制改变 Card 视觉属性（现状/目标都应尽量稳定）。

### 步骤

1. desktop 模式清空画布
2. 拖入 **卡片布局（Card）**
3. 设置属性：
   - `size = default`（或可选项）
   - `hoverable = true/false`（任意）
4. 切换到 mobile 模式

### 现状断言（当前）

- 不自动修改 `size/hoverable/variant` 等属性

### 目标断言（若实现 CD-1 可选策略）

- 默认仍不变；若策略开启“触控增大”，则 mobile 下 `size` 可能升一档（且可逆）

---

## 用例 TB：Tabs（标签页）

### 目标

验证侧边 Tabs 在移动端是否转换为顶部（若实现 TB-1），或现状“不自动变”。

### 步骤

1. desktop 模式清空画布
2. 拖入 **标签页（Tabs）**
3. 设置：
   - `tabPlacement = left`（或 right）
   - 准备 2~3 个 tab（能看到切换即可）
4. 切换到 mobile 模式观察 tab 位置

### 现状断言（当前）

- `tabPlacement` 不会自动变化（仍为 left/right）

### 目标断言（若实现 TB-1）

- mobile 下自动覆盖 `tabPlacement -> top`
- 切回 desktop 恢复 left/right

---

## 用例 CP：Collapse（折叠面板）

### 目标

验证折叠面板默认不改（CP-1），以及可选的 icon 位置变化（CP-2）。

### 步骤

1. desktop 模式清空画布
2. 拖入 **折叠面板（Collapse）**
3. 设置：
   - `accordion` 任意
   - `expandIconPosition = start`（若支持）
4. 切换到 mobile 模式

### 现状断言（当前）

- 不自动修改 `accordion/expandIconPosition/ghost/bordered` 等

### 目标断言（若实现 CP-2 且启用策略）

- mobile 下 `expandIconPosition` 可选改为 `end`（且可逆）

---

## 用例 ST：Steps（步骤条）

### 目标

验证横向 Steps 在移动端是否改为纵向（若实现 ST-1），或现状“不自动变”。

### 步骤

1. desktop 模式清空画布
2. 拖入 **步骤条（Steps）**
3. 设置：
   - `direction = horizontal`（若属性面板提供）
   - 准备 3 步以上
4. 切换到 mobile 模式观察方向/可用性

### 现状断言（当前）

- 不自动修改 `direction/size` 等

### 目标断言（若实现 ST-1）

- mobile 下自动覆盖为 `direction -> vertical`（或组件等价 API）
- 切回 desktop 恢复 `horizontal`

