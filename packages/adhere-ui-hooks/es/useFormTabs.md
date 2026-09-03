# useSegmentedFormTabs

将 **antd `Segmented`** 与 **单个 `Form` 实例** 联动：各分段面板内为 `Form.Item`，提交时若校验失败，按配置顺序自动切换到**第一个包含错误字段**的分段。

## 适用场景

- 一个 `Form` 包裹多个分段面板（常用 `hidden` 切换显示，字段仍参与校验）
- 各分段均有必填等规则，用户可能在非当前分段点击提交
- 需要在 `validateFields` 失败后定位到未填写的分段

不适用：每个分段独立 `Form` 实例（需自行聚合校验，本 hook 不负责）。

## 安装与引用

Hook 位于 Common，宿主通过 `@/` 别名引用：

```javascript
import { useSegmentedFormTabs } from '@/hooks/useSegmentedFormTabs';
```

## API

### 入参 `options`

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `form` | `FormInstance` | 是 | antd Form 实例（如 `Form.useForm()[0]`、`FormContext` 中的 `formInstance`） |
| `tabs` | `SegmentedFormTab[]` | 是 | 分段与字段映射，**建议 `useMemo` 稳定引用** |
| `defaultTab` | `string` | 否 | 初始激活分段 `key`，默认 `tabs[0].key` |

#### `SegmentedFormTab`

| 属性 | 类型 | 说明 |
|------|------|------|
| `key` | `string` | 与 `Segmented` 的 `value` / `options[].value` 一致 |
| `fieldNames` | `NamePath[]` | 该分段内 `Form.Item` / `Form.List` 的 `name` 列表，支持嵌套路径如 `['user', 'name']`；Form.List 子字段可写 `['users', 'name']` 或 `['users', '*', 'name']`（匹配 `['users', 0, 'name']`） |

`NamePath` 与 antd Form 一致：`string | number | (string | number)[]`。

### 返回值

| 属性 | 类型 | 说明 |
|------|------|------|
| `activeTab` | `string` | 当前激活分段 key，绑定 `Segmented` 的 `value` |
| `setActiveTab` | `(key: string) => void` | 切换分段，绑定 `Segmented` 的 `onChange` |
| `validateFields` | `FormInstance['validateFields']` | 包装后的校验方法，**提交时必须使用此方法**，勿直接调用 `form.validateFields` |

## 切换规则

1. 调用 `validateFields()`（或传入 `nameList`）触发全量/局部校验。
2. 校验失败时读取 antd 返回的 `error.errorFields`。
3. **按 `tabs` 数组顺序** 查找第一个「其 `fieldNames` 与任一错误字段匹配」的分段并 `setActiveTab`。
4. 字段匹配规则：
   - 错误字段 key 与配置的 `fieldName` **完全相等**；或
   - 错误字段 key 以 `fieldName.` 为前缀（嵌套子字段归属父字段所在分段）；或
   - **Form.List**：错误路径中的纯数字段（list 下标）可与配置中省略的下标对齐，例如配置 `['users', 'name']` 匹配错误 `['users', 0, 'name']`；也可显式写 `['users', '*', 'name']`；仅配置 list 根 `['users']` 时匹配该 list 下任意项。
5. 若按顺序未命中，再按第一个错误字段名做前缀回退查找（同样支持 Form.List 下标对齐）。
6. 错误字段不在任何 `tabs.fieldNames` 中（如表单底部的公共字段）时，**不切换**分段。
7. 仍将原始校验错误 `throw`，调用方 `catch` 行为与 antd 一致。
8. `tabs` 引用变化时，若当前 `activeTab` 仍存在于新 `tabs` 中，**保持当前分段**。`defaultTab` 的**值**变化时仍切换到新的 `defaultTab`（与原先 `defaultTab` 变化时的行为一致）。仅当当前 key 已不存在时才回退到 `defaultTab` / `tabs[0].key`。

**示例**：第一页 `checkList`、第二页 `judge` 均未填，用户在第二页提交 → 切换到第一页（`tabs` 中靠前的分段优先）。

## Form.List

`Form.List` 校验失败时，antd 的 `errorFields[].name` 会带 list 下标，例如 `['users', 0, 'name']`。`fieldNames` 有三种写法：

| 配置 | 匹配的错误 name | 说明 |
|------|-----------------|------|
| `['users']` | `['users', 0, 'name']` 等 | list 根路径，该分段内任意 list 项报错均命中 |
| `['users', 'name']` | `['users', 0, 'name']` | 省略下标，匹配任意项内的 `name` 字段 |
| `['users', '*', 'name']` | 同上 | 显式通配一段，与省略下标等价 |

```jsx
<Form.List name="users">
  {(fields) =>
    fields.map((field) => (
      <Form.Item
        key={field.key}
        name={[field.name, 'name']}
        rules={[{ required: true }]}
      />
    ))
  }
</Form.List>

// tabs 配置示例
const tabs = useMemo(
  () => [
    { key: 'basic', fieldNames: ['title'] },
    { key: 'members', fieldNames: [['users', 'name']] },
  ],
  [],
);
```

嵌套 `Form.List`（如 `items.0.tags.1.value`）同样适用：配置中省略数字下标段即可。

## 基本用法

```jsx
import { Segmented } from 'antd';
import { useMemo } from 'react';
import { Form } from '@baifendian/adhere-ui-anthoc';
import { useSegmentedFormTabs } from '@/hooks/useSegmentedFormTabs';

const TAB_KEYS = {
  A: 'tabA',
  B: 'tabB',
};

function MyForm({ form }) {
  const tabs = useMemo(
    () => [
      { key: TAB_KEYS.A, fieldNames: ['checkList'] },
      { key: TAB_KEYS.B, fieldNames: ['judge'] },
    ],
    []
  );

  const { activeTab, setActiveTab, validateFields } = useSegmentedFormTabs({
    form,
    tabs,
    defaultTab: TAB_KEYS.A,
  });

  const segmentedOptions = useMemo(
    () => [
      { value: TAB_KEYS.A, label: '页签 A' },
      { value: TAB_KEYS.B, label: '页签 B' },
    ],
    []
  );

  return (
    <>
      <Segmented
        block
        value={activeTab}
        options={segmentedOptions}
        onChange={setActiveTab}
      />

      <div hidden={activeTab !== TAB_KEYS.A}>
        <Form.Item name="checkList" rules={[{ required: true }]}>
          {/* ... */}
        </Form.Item>
      </div>

      <div hidden={activeTab !== TAB_KEYS.B}>
        <Form.Item name="judge" rules={[{ required: true }]}>
          {/* ... */}
        </Form.Item>
      </div>

      {/* 不属于任何分段的字段：校验失败不会切换 Segmented */}
      <Form.Item name="remark">{/* ... */}</Form.Item>

      <Form.SubmitButton
        onClick={() =>
          validateFields().then(values => {
            // 提交逻辑
          })
        }
      />
    </>
  );
}
```

## 与 FormContext 配合

审计步骤等模块常从 `FormContext` 取 `formInstance`，需在 `useContext` **之后** 再调用本 hook：

```jsx
const { formInstance } = useContext(FormContext);

const segmentedFormTabs = useMemo(
  () => [
    { key: TAB_KEYS.VERIFICACAO, fieldNames: ['checkList'] },
    { key: TAB_KEYS.DISTRIBUICAO, fieldNames: ['judge'] },
  ],
  []
);

const { activeTab, setActiveTab, validateFields } = useSegmentedFormTabs({
  form: formInstance,
  tabs: segmentedFormTabs,
  defaultTab: TAB_KEYS.VERIFICACAO,
});
```

工程内参考实现：`packages/Manager/src/components/system/SystemAudit/Steps/ChefedesecçãodaFiscalizaçãoSucessiva/Form/index.jsx`。

## 注意事项

- **`tabs` 引用稳定**：内联数组会导致 `validateFields` 每次渲染重建，建议 `useMemo`。
- **字段名与 `Form.Item name` 一致**：`fieldNames` 漏配则该分段校验失败时不会自动切换。
- **隐藏面板仍会校验**：`hidden` 仅影响展示，不影响 antd 校验；切换分段后错误信息会在对应面板显示。
- **局部校验**：`validateFields(['judge'])` 同样会在失败时按规则切换分段（若错误落在已配置字段上）。
- **不要混用**：提交链路请统一使用 hook 返回的 `validateFields`，否则不会自动跳转分段。

## 相关文件

| 文件 | 说明 |
|------|------|
| `useSegmentedFormTabs.js` | Hook 实现 |
| `README.md` | 本目录公共 hooks 总览 |
