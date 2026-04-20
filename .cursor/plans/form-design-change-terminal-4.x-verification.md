## 目的

对 `.cursor/plans/form-design-change-terminal-布局双端变换分析_143ca048.plan.md` 第 4 节（4.1 ~ 4.6）里提出的“移动端相对桌面端的属性变化规则”，做一次**现状验证**（基于当前代码实际行为）。

## 结论（现状）

- **结论 1：不存在“自动映射/自动变换”**  
  `TableGridLayout/FlexLayout/Card/Tabs/Collapse/Steps` 这 6 个布局的 `renderDesignToMobile` 目前均为同一导出：`export { renderDesign as renderDesignToMobile } from './renderDesign';`，即**移动渲染与桌面完全一致**，不会在切换到 mobile 时自动修改 `fieldProps` 或布局行为。
  - 代表性文件：
    - `packages/adhere-ui-form-design/src/Fields/layout/TableGridLayout/renderDesignToMobile.tsx`
    - `packages/adhere-ui-form-design/src/Fields/layout/FlexLayout/renderDesignToMobile.tsx`
    - `packages/adhere-ui-form-design/src/Fields/layout/Card/renderDesignToMobile.tsx`
    - `packages/adhere-ui-form-design/src/Fields/layout/Tabs/renderDesignToMobile.tsx`
    - `packages/adhere-ui-form-design/src/Fields/layout/Collapse/renderDesignToMobile.tsx`
    - `packages/adhere-ui-form-design/src/Fields/layout/Steps/renderDesignToMobile.tsx`

- **结论 2：当前“desktop/mobile 切换”主要是预览层（画布宽度）**  
  `DesignEditor` 在 mobile 预览时显示“预览宽度”选择器，并通过 CSS 变量控制 viewport 宽度。
  - 文件：`packages/adhere-ui-form-design/src/Design/DesignEditor/index.tsx`
  - 关键点：mobile 时写入 `--fd-design-editor-mobile-viewport-width`

- **结论 3：存在“按终端编辑写入”的能力，但不是自动变换**  
  `Design/index.tsx` 的 `setFieldProps` 在 `currentTerminal === 'mobile'` 时走 `updateFieldPropsByTerminal`（overlay patch），用于“在移动端编辑属性时，把差异写到 mobile 覆盖层”。这解决的是“同一组件在不同终端的属性差异保存”，但**不等价**于 4.1 ~ 4.6 中的“自动把 TG/FL/TB/ST 等属性按规则改掉”。
  - 文件：`packages/adhere-ui-form-design/src/Design/index.tsx`

## 对 4.1 ~ 4.6 的逐条验证结果

> 下表中的“期望”来自 4.1~4.6 建议规则；“现状”基于上面的真实渲染事实。

| 模块 | 4.x 规则期望（示例） | 现状（切换到 mobile 时） |
|---|---|---|
| 4.1 TableGridLayout | TG-1：`columnCount>1` 自动覆盖为 1；`colgroup` 变为单列 | **不会自动变化**（移动渲染与桌面一致） |
| 4.2 FlexLayout | FL-1/FL-2：可能把横向改纵向、gap 增大 | **不会自动变化** |
| 4.3 Card | CD-1：默认不变，或 size 升档（若策略） | **不会自动变化** |
| 4.4 Tabs | TB-1：left/right 变 top | **不会自动变化** |
| 4.5 Collapse | CP-1 默认不变；CP-2 可选改 icon 位置 | **不会自动变化** |
| 4.6 Steps | ST-1：横向变纵向（或等价 API） | **不会自动变化** |

## 建议下一步（如果要让 4.1~4.6 成为“已实现行为”）

- 引入“断点覆盖（mobile overrides）”的**自动应用**与**可逆存储**（4.x 规则写成纯函数），在切换到 mobile 时对渲染层 merge，或提供“同步到移动”的显式动作，而不是静默覆盖桌面配置。

