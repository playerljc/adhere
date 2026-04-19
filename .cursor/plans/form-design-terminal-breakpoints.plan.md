---
name: 表单设计器终端与断点覆盖
overview: 断点覆盖、Intl 四语料、utils 抽象、工具栏同组激活态；移动预览画布支持主流宽度预设下拉（默认 375）+ 设计区样式美化。
todos:
  - id: schema-overrides
    content: 扩展 DesignValueProps（如 fieldPropsByTerminal）+ reducer/序列化约定 + parseDesign/Internal* merge 点
  - id: utils-abstract
    content: 在 adhere-ui-form-design/src/utils 抽取树遍历、按类型 merge、应用默认覆盖规则等纯函数并加单测入口
  - id: intl-locales
    content: 在 adhere-util-intl/src/locales 的 zh_CN/en_US/pt_PT/ar_EG 同步新增词条
  - id: toolbar-terminal
    content: setCurrentTerminal + 首组桌面/移动按钮激活态（Toolbar 内 Context 或 DesignEditor 重建 groups）
  - id: mobile-viewport-style
    content: 移动模式下视口宽度预设下拉（utils 常量表 + Intl 标签）+ 默认 375 + CSS 变量驱动 + 画布居中/样式美化（DesignEditor）
  - id: properties-ui
    content: 属性面板可选「移动覆盖」编辑区（若本迭代包含）；否则文档化第二阶段
---

# 表单设计器：断点覆盖 + 工具栏激活态（实施计划）

## 已锁定决策（来自需求确认）

1. **数据模型**：使用**断点覆盖**，不采用「切换时直接覆盖唯一一份 `fieldProps`」的不可逆方案。**两套配置并存、互不冲突**（见下文「基线 + 移动覆盖」产品语义）。
2. **国际化**：新增文案必须写入 [`packages/adhere-util-intl/src/locales`](packages/adhere-util-intl/src/locales) 下 **zh_CN / en_US / pt_PT / ar_EG** 四个文件，保持 key 一致。
3. **工具函数**：与终端、树遍历、merge、默认规则相关的逻辑应**抽象、通用**，放在 [`packages/adhere-ui-form-design/src/utils`](packages/adhere-ui-form-design/src/utils)，供设计器、预览、导出等复用。
4. **工具栏 UX**：[`toolbarActions/index.ts`](packages/adhere-ui-form-design/src/Design/Toolbar/toolbarActions/index.ts) 中 **桌面 / 移动** 同属第一组，两者应呈现 **互斥激活态**（当前终端对应按钮为激活）。
5. **移动预览画布**：切换到 `mobile` 时，设计区（表单画布）采用 **默认宽度 375px**；提供 **下拉选择多种主流逻辑宽度预设**（见 §2「视口预设」），选中后更新视口宽度（CSS 变量 `--fd-design-editor-mobile-viewport-width`）。**样式美化**（居中、留白、轻设备条），与桌面全宽形成清晰对比；宿主仍可通过 CSS 变量覆盖。

---

## 1. 数据层：`DesignValueProps` 断点覆盖

### 1.1 产品语义（已与你方口径对齐）

- **`fieldProps`（基线）**：表示 **桌面端 / 默认** 下的完整（或当前设计器一直沿用的）主配置，**持久保留**，不因切换到移动预览而被改写。
- **移动覆盖（单独一份）**：例如 `fieldPropsByTerminal.mobile`（命名以 types 定稿为准），只存 **与基线的差量**（`Partial<FieldProps>`）。在属性面板中体现为：**移动端模式下增加「移动覆盖」单独区块**，只读写这一份差量；**不**把移动端的编辑写回基线 `fieldProps`，这样 **desktop 与 mobile 两层配置不会互相覆盖冲突**。
- **渲染时**：对当前 `terminal` 做 **merge（基线 ⊕ 当前终端差量）** 得到「有效 `fieldProps`」再交给各 `Internal*`。desktop 通常差量为空或未定义，有效值即基线；mobile 为 `merge(基线, mobile差量)`，未出现在差量里的键仍沿用基线。

### 1.2 技术字段名（实现时二选一，在 types 中定稿）

- `fieldPropsByTerminal?: Partial<Record<Terminal, Partial<FieldProps>>>`（desktop 基线仍可只用 `fieldProps`，`byTerminal.desktop` 可留空表示「同基线」），或
- `fieldPropsOverrides?: { mobile?: Partial<FieldProps> }`（若短期只关心 mobile）。

### 1.3 合并与写入

- **渲染规则**：在 [`parseDesign`](packages/adhere-ui-form-design/src/Fields/parse/parseDesign.tsx) 或各布局 `renderDesign` 入口之前，对传入的 `value` 做一次 **resolvedValue**（纯函数）：`resolvedFieldProps = mergeFieldPropsForTerminal(base, overrides, terminal)`。
- **Reducer**：新增 `updateFieldPropsByTerminal`（或等价 payload：`id` + `terminal` + `patch`）专门更新差量；**更新基线**仍走现有 `updateFieldProps`。属性面板在移动模式下改布局属性时，应 dispatch 到 **差量** reducer，避免动到基线。
- **默认规则**（与先前分析报告一致，放在 utils 中可配置/可测）：
  - TableGridLayout：`columnCount>1` → 移动覆盖建议单列等（**仅写入 overrides**，不删基线）。
  - Tabs：`tabPlacement` 为 left/right → 移动覆盖 `top`。
  - Steps：移动覆盖纵向（以 `StepsSwiper`/antd 实际 API 为准）。
  - FlexLayout：默认**不自动**改方向，或提供显式「一键生成移动覆盖」动作而非切换终端即改。

---

## 2. `packages/adhere-ui-form-design/src/utils` 抽象清单（示例命名）

以下应为 **纯函数** + 明确类型，避免依赖 React：

| 能力 | 建议模块/函数 |
|------|----------------|
| 深度遍历设计树 | `walkDesignValueTree(value, visit)` |
| 按终端解析最终 fieldProps | `resolveFieldPropsForTerminal(props, terminal)` |
| 按布局类型应用内置默认移动规则（生成 overrides 草稿） | `buildDefaultMobileFieldPropsOverrides(type, baseFieldProps)` |
| merge 策略（数组下标、data[0] 等特殊结构） | `mergeFieldPropsDeep(base, patch)`（若与 lodash.merge 行为不一致则单独实现并注释） |
| 设计器移动预览默认宽度 | `MOBILE_DESIGN_VIEWPORT_DEFAULT_WIDTH = 375`（与首选项 id 对齐） |
| 主流移动视口预设表 | `MOBILE_VIEWPORT_PRESETS: { id; widthPx; intlLabelKey }[]`（供下拉与文档单一数据源） |

布局特有的分支（如 TableGridLayout 的 `data[0]`）可放在同一文件的分派表或 `layoutBreakpointRules.ts` 中，由 `buildDefaultMobileFieldPropsOverrides` 调用。

### 视口宽度预设（下拉）

- **交互**：仅在 `terminal === 'mobile'` 时展示（建议放在 **DesignEditor 头部工具栏旁** 或画布上方细条，避免塞进已拥挤的 `Toolbar` 首组；若首组仍有空间也可与移动按钮同区，以视觉稿为准）。
- **控件**：`Select` / `Dropdown` 选项为 **预设列表**，每项展示「设备俗称 + 逻辑宽度」（文案走 Intl，宽度数字可拼接或分 key）。
- **建议内置预设**（`widthPx` 为 CSS 像素逻辑宽度，可按产品增删）：

  | id（示例） | widthPx | 说明（文档/中文 label 用） |
  |------------|-----------|---------------------------|
  | `w360` | 360 | 常见 Android 基准 |
  | `w375` | 375 | iPhone SE / 6/7/8 / X 等 |
  | `w390` | 390 | iPhone 12–15 等 |
  | `w393` | 393 | Pixel 等 |
  | `w414` | 414 | iPhone Plus / 非 Max 大屏逻辑宽 |
  | `w428` | 428 | iPhone Pro Max 类等 |

- **状态**：`mobileViewportPresetId`（或仅存 `mobileViewportWidthPx`）放在 **设计器 UI 状态**（`Design` 内 `useState` + Context getter/setter），**默认** `w375`。**不写入** `DesignValue` JSON（与表单 schema 无关）；若未来需持久化会话，再通过 `DesignProps` 受控扩展。
- **生效方式**：选中预设后 `setState` + 在视口容器上写 `style={{ ['--fd-design-editor-mobile-viewport-width' as string]: `${widthPx}px` }}`（或与 less 中 `max-width: var(...)` 一致）。

### 移动画布尺寸与视觉（样式）

- **挂载位置**：优先在 [`DesignEditor`](packages/adhere-ui-form-design/src/Design/DesignEditor/index.tsx) 的 `-body` / `-form` 外包一层「视口」容器，根据 `getTerminal() === 'mobile'` 切换 class（如 `${selectPrefix}-viewport-mobile`），样式写在对应 `index.less`（或设计器全局 less），**避免**行内硬编码魔法数散落。
- **默认宽度**：内容区 `max-width: var(--fd-design-editor-mobile-viewport-width, 375px)`；`margin-inline: auto`；**外层**（`-body`）保持 `overflow: auto`，防止宿主窗口较窄时裁切。
- **美化方向**（与现有 `SELECT_PREFIX` 设计 token 对齐）：
  - 移动模式下槽位背景与画布条区分：画布白底 + 轻圆角 + 细边框或浅阴影，形成简洁「设备条」观感，避免过重 skeuomorphism；
  - 与工具栏 `-item-active` 使用同一套中性色与圆角变量，保证设计器整体一致。
- **可访问性**：不强制加 `role="application"`；窄屏下焦点顺序与桌面一致。

---

## 3. `adhere-util-intl` 词条

- **原则**：设计器 UI 用到的**所有新字符串**均通过 `Intl.get('...')`，key 在 **四个 locale 文件**中同时添加。
- **待补充 key 示例**（以最终实现为准，避免半句英文）：
  - 终端切换、覆盖编辑、清空移动覆盖、「仅预览 / 已保存移动覆盖」等。
  - **视口预设**：如 `mobile_viewport_preset`、`mobile_viewport_width_375`（或统一 `mobile_viewport_label` + 参数）、各预设「名称 + 尺寸」展示用 key；`Select` 的 `placeholder` / `aria-label`。
- **注意**：[`zh_CN.js`](packages/adhere-util-intl/src/locales/zh_CN.js) 中已有 `desktop_mode` / `mobile_mode`，新增 key 勿重复；若语义扩展，可新增 `terminal_desktop` 辅助文案等，与产品确认后定稿。

---

## 4. 工具栏：同组互斥激活态 + `setCurrentTerminal`

### 现状问题

- [`defaultGroups`](packages/adhere-ui-form-design/src/Design/Toolbar/toolbarActions/index.ts) 在模块加载时构造 `ToolBarItem.el`，**不会**随 `terminal` 更新。
- [`renderToolbarEntry`](packages/adhere-ui-form-design/src/Design/Toolbar/index.tsx) 仅包裹 `${selectPrefix}-item`，无激活类名。

### 推荐实现

- **方案 A（推荐）**：在 [`Toolbar/index.tsx`](packages/adhere-ui-form-design/src/Design/Toolbar/index.tsx) 内 `useContext(DesignContext)`，读取 `getTerminal()`；对 `entry.item.key === 'changeDesktopMode' | 'changeMobileMode'` 的 `-item` 增加 modifier class（如 `-item-active`），并与 `terminal === 'desktop'|'mobile'` 对应。
- **方案 B**：在 [`DesignEditor`](packages/adhere-ui-form-design/src/Design/DesignEditor/index.tsx) 用 `useMemo` 每帧根据 `getTerminal()` 重建 `toolbarGroup` 传给 `Toolbar`（需把 `defaultGroups` 从静态改为工厂函数或复制一份带 `active` 的 metadata）。
- **激活样式**：在 [`Toolbar/index.less`](packages/adhere-ui-form-design/src/Design/Toolbar/index.less) 增加 `-item-active`（依赖 antd 变量或现有 token，避免硬编码破坏主题）。
- **行为**：[`changeDesktopMode`](packages/adhere-ui-form-design/src/Design/Toolbar/toolbarActions/changeDesktopMode/index.tsx) / [`changeMobileMode`](packages/adhere-ui-form-design/src/Design/Toolbar/toolbarActions/changeMobileMode/index.tsx) 的 `onClick` 调用 `setCurrentTerminal('desktop'|'mobile')`；**溢出下拉**中同一组项也应带相同 active 类（`renderToolbarEntry` 与 overflow 菜单内 wrapper 一致）。

---

## 5. 实施顺序建议

1. Context + Toolbar 切换与激活态 + **移动视口 375 与画布样式**（用户可立刻感知终端与窄屏布局）。
2. `DesignValueProps` 类型 + reducer + `resolveFieldPropsForTerminal` + `parseDesign`/布局渲染接入。
3. utils 抽取与（可选）默认覆盖生成动作。
4. 四语言 locale。
5. 属性面板「移动覆盖」编辑（可列为第二阶段，避免首 PR 过大）。

---

## 6. 依赖与风险

- **向后兼容**：旧 JSON 无 `fieldPropsByTerminal` / `mobile` 差量时，merge 结果等于基线，行为与现网一致。
- **运行时写回**：Tabs/Collapse/Steps 等在设计器内通过 `setFieldProps` 同步 UI 状态（如 `defaultActiveKey`）的路径，**建议一律写入基线 `fieldProps`**，避免与「仅存在于差量」的字段产生双写；若未来确有「仅移动端的交互状态」，再单独字段扩展。
- **内联 `setFieldProps` 与两层模型**：布局组件内若继续调用 `setFieldProps(id, { ...fieldProps, ... })`，应传入 **已 merge 后的展示对象**时需警惕别把 merge 结果整块写回基线——实施时应在 Context 提供「按当前 terminal 写基线或写差量」的封装 API，避免误把 mobile 有效值flatten 进 `fieldProps`。
