# Adhere UI Hooks

一套实用的 React Hooks 集合，提供状态管理、异步处理、响应式设计等功能。

## 安装

```bash
npm install @baifendian/adhere-ui-hooks
```

## Hooks 列表

### use

用于处理异步 Promise 的 React Hook，提供加载状态、错误处理和重试功能。

```tsx
import { use } from '@baifendian/adhere-ui-hooks';

const { data, isPending, isValidate, reset, reload } = use(fetchUserData, [userId]);

if (isPending) return <Loading />;
if (isValidate) return <Error />;
return <UserInfo data={data} />;
```

### useFirst

用于跟踪组件是否为首次渲染的 React Hook。

```tsx
import { useFirst } from '@baifendian/adhere-ui-hooks';

const [isFirst, setIsFirst] = useFirst();

useEffect(() => {
  if (isFirst) {
    console.log('首次渲染');
    setIsFirst(false);
  }
}, [isFirst]);
```

### useForceUpdate

用于强制组件重新渲染的 React Hook。

```tsx
import { useForceUpdate } from '@baifendian/adhere-ui-hooks';

const forceUpdate = useForceUpdate();

const handleClick = () => {
  // 强制组件重新渲染
  forceUpdate();
};
```

### useItemsRef

用于存储和管理列表项引用的 React Hook。

```tsx
import { useItemsRef } from '@baifendian/adhere-ui-hooks';

const itemsRef = useItemsRef<HTMLDivElement>();

// 设置引用
itemsRef.set('item-1', divRef.current);

// 获取引用
const element = itemsRef.get('item-1');

// 获取所有 keys
const keys = Array.from(itemsRef.getKeys() || []);

// 获取所有引用
const refs = Array.from(itemsRef.getRefs() || []);
```

### useLatestState

返回最新的状态值，防止闭包问题，返回的值使用 useLatest 包装。

```tsx
import { useLatestState } from '@baifendian/adhere-ui-hooks';

const [valueRef, setValue] = useLatestState(0);

useEffect(() => {
  // 总是能获取到最新的值
  console.log('最新值:', valueRef.current);
}, []);

const handleClick = () => {
  setValue(prev => prev + 1);
};
```

### useMediaQuery

用于响应式设计的 React Hook，监听屏幕尺寸变化。

```tsx
import { useMediaQuery } from '@baifendian/adhere-ui-hooks';

const { isPhone, isPad, isPC } = useMediaQuery();

if (isPhone) return <MobileLayout />;
if (isPad) return <TabletLayout />;
return <DesktopLayout />;
```

### usePrevious

用于获取上一次渲染时的值的 React Hook。

```tsx
import { usePrevious } from '@baifendian/adhere-ui-hooks';

const [count, setCount] = useState(0);
const previousCount = usePrevious(count);

useEffect(() => {
  if (previousCount !== undefined && previousCount !== count) {
    console.log(`Count changed from ${previousCount} to ${count}`);
  }
}, [count, previousCount]);
```

### usePropToState

将 props 中的值转换为 state，用于在组件内部对 props 进行更新操作。

```tsx
import { usePropToState } from '@baifendian/adhere-ui-hooks';

interface Props {
  initialValue: string;
}

const MyComponent: React.FC<Props> = ({ initialValue }) => {
  const [value, setValue] = usePropToState(initialValue);
  
  // 当 props 中的 initialValue 变化时，state 会自动同步
  // 同时可以在组件内部修改 value
  
  return (
    <input 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
    />
  );
};
```

### useSafeRef

安全地获取 ref 的当前值，提供默认值支持。

```tsx
import { useSafeRef } from '@baifendian/adhere-ui-hooks';

const divRef = useRef<HTMLDivElement>(null);
const safeValue = useSafeRef(divRef, document.createElement('div'));

// 或者不提供默认值
const element = useSafeRef(divRef);
if (element) {
  // 使用 element
}
```

### useSetState

带有更新成功回调函数的状态管理 Hook，返回最新的值。

```tsx
import { useSetState } from '@baifendian/adhere-ui-hooks';

const [valueRef, setValue] = useSetState(0);

const handleClick = () => {
  setValue(
    prev => prev + 1,
    () => {
      console.log('状态更新完成，当前值:', valueRef.current);
    }
  );
};

// 使用最新值
useEffect(() => {
  console.log('最新值:', valueRef.current);
}, []);
```

### useFormTabs

将 **antd `Segmented`** 与 **单个 `Form` 实例** 联动：各分段面板内为 `Form.Item`，提交时若校验失败，按配置顺序自动切换到**第一个包含错误字段**的分段。

**适用场景**：一个 `Form` 包裹多个分段面板（常用 `hidden` 切换显示）；各分段有校验规则且用户可能在非当前分段提交；需要在 `validateFields` 失败后定位到未填写的分段。不适用每个分段独立 `Form` 实例的场景。

```tsx
import { Segmented } from 'antd';
import { useMemo } from 'react';
import { Form } from '@baifendian/adhere-ui-anthoc';
import { useFormTabs } from '@baifendian/adhere-ui-hooks';

const TAB_KEYS = { A: 'tabA', B: 'tabB' } as const;

function MyForm({ form }) {
  const tabs = useMemo(
    () => [
      { key: TAB_KEYS.A, fieldNames: ['checkList'] },
      { key: TAB_KEYS.B, fieldNames: ['judge'] },
    ],
    [],
  );

  const { activeTab, setActiveTab, validateFields } = useFormTabs({
    form,
    tabs,
    defaultTab: TAB_KEYS.A,
  });

  return (
    <>
      <Segmented
        block
        value={activeTab}
        options={[
          { value: TAB_KEYS.A, label: '页签 A' },
          { value: TAB_KEYS.B, label: '页签 B' },
        ]}
        onChange={setActiveTab}
      />
      <div hidden={activeTab !== TAB_KEYS.A}>
        <Form.Item name="checkList" rules={[{ required: true }]} />
      </div>
      <div hidden={activeTab !== TAB_KEYS.B}>
        <Form.Item name="judge" rules={[{ required: true }]} />
      </div>
      <Form.SubmitButton
        onClick={() => validateFields().then(values => { /* 提交 */ })}
      />
    </>
  );
}
```

| 入参 | 类型 | 说明 |
|------|------|------|
| `form` | `FormInstance` | antd Form 实例 |
| `tabs` | `SegmentedFormTab[]` | 分段与字段映射，建议 `useMemo` 稳定引用 |
| `defaultTab` | `string` | 可选，初始分段 key，默认 `tabs[0].key` |

| 返回值 | 类型 | 说明 |
|--------|------|------|
| `activeTab` | `string` | 当前激活分段，绑定 `Segmented` 的 `value` |
| `setActiveTab` | `(key: string) => void` | 切换分段，绑定 `onChange` |
| `validateFields` | `FormInstance['validateFields']` | 包装后的校验，**提交时必须使用**，勿直接调用 `form.validateFields` |

**切换规则**：按 `tabs` 顺序查找第一个与 `error.errorFields` 匹配的分段；字段完全相等或以 `fieldName.` 为前缀的嵌套子字段归属该分段；**Form.List** 支持省略 list 下标（如 `['users', 'name']` 匹配 `['users', 0, 'name']`）或 list 根路径 `['users']`；未命中时再按错误字段名前缀回退；错误不在任何 `tabs.fieldNames` 中时不切换；仍 `throw` 原始校验错误。

**注意**：`tabs` 需引用稳定；`fieldNames` 须与 `Form.Item name` 一致；`hidden` 仅隐藏展示不影响校验；提交链路请统一使用 hook 返回的 `validateFields`。

### useTriggerQuery

用于管理查询参数和搜索状态的 React Hook。

```tsx
import { useTriggerQuery } from '@baifendian/adhere-ui-hooks';

interface SearchParams {
  keyword: string;
  status: string;
  page: number;
}

const {
  fieldsValue,
  searchParams,
  setFieldsValue,
  search,
  reset
} = useTriggerQuery<SearchParams>({
  keyword: '',
  status: 'all',
  page: 1
});

// 更新字段值
setFieldsValue(draft => {
  draft.keyword = 'search term';
});

// 执行搜索
search(() => {
  console.log('搜索完成');
});

// 重置搜索
reset(() => {
  console.log('重置完成');
}, { page: 1 });
```

## 类型定义

所有 hooks 都提供了完整的 TypeScript 类型支持，包括泛型类型参数和详细的返回类型定义。

## 依赖

- React 16.8+
- ahooks
- use-immer
- lodash.debounce

## 许可证

MIT
