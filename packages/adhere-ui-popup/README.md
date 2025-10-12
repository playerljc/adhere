# 简介
&ensp;&ensp;移动端全屏弹窗组件，提供从底部弹出的全屏交互界面，支持自定义标题、操作按钮等。

# ✨ 特性
- 支持 React(18.x)
- 提供 Popup 核心弹窗类和工厂方法
- 提供 Trigger、TriggerPrompt 触发器组件
- 支持自定义操作按钮和回调
- 支持生命周期钩子（onCreate、onBeforeShow、onAfterShow、onBeforeClose、onAfterClose、onDestroy）
- 支持弹窗实例管理（创建、显示、关闭、销毁）
- 支持 SubmitButton 自动处理异步加载状态
- 支持国际化
- 支持修改主题
- 支持动态引入(babel-plugin-import)

# 🖥 兼容环境
- 现代浏览器

# 📦 安装
```javascript
npm install @baifendian/adhere-ui-popup --save
``` 

```javascript
yarn add @baifendian/adhere-ui-popup
```

# 📖 使用

## Popup 核心 API

```tsx
import Popup from '@baifendian/adhere-ui-popup';

// 创建弹窗实例
const popup = Popup.create({
  children: <div>弹窗内容</div>,
  zIndex: 11000,
  onCreate: () => console.log('创建'),
  onBeforeShow: () => console.log('显示前'),
  onAfterShow: () => console.log('显示后'),
  onBeforeClose: () => {
    // 可以返回 Promise 来异步控制关闭
    return Promise.resolve();
  },
  onAfterClose: () => console.log('关闭后'),
  onDestroy: () => console.log('销毁'),
});

// 显示弹窗
Popup.show(popup);

// 关闭弹窗
Popup.close(popup);

// 销毁弹窗
Popup.destroy(popup);

// 关闭所有弹窗
Popup.closeAll();
```

## TriggerPrompt 组件

带确认按钮的弹窗触发器，适用于需要用户确认的场景。

```tsx
import Popup from '@baifendian/adhere-ui-popup';

function App() {
  const formRef = useRef();
  
  return (
    <Popup.TriggerPrompt
      renderTrigger={() => <button>选择用户</button>}
      title="用户信息"
      okText="确认"
      isShowCloseAction={false}
      value={{ name: '张三', age: 25 }}
      onChange={(result) => {
        console.log('选择结果:', result);
      }}
      onSubmit={() => {
        // 返回 Promise，处理异步操作
        return formRef.current.validAndGetValues();
      }}
    >
      <UserForm ref={formRef} />
    </Popup.TriggerPrompt>
  );
}
```

## Trigger 组件

通用弹窗触发器，支持自定义多个操作按钮。

```tsx
import Popup from '@baifendian/adhere-ui-popup';

function App() {
  return (
    <Popup.Trigger
      renderTrigger={() => <button>打开弹窗</button>}
      title="选择"
      closeIcon={true}
      extra={<span>额外内容</span>}
      disabled={false}
      isShowCloseAction={true}
      closeActionPosition="end"
      actions={[
        {
          key: 'submit',
          color: 'primary',
          children: '提交',
          onClick: () => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve('提交成功');
              }, 1000);
            });
          },
        },
        {
          key: 'save',
          color: 'default',
          children: '暂存',
          onClick: () => Promise.resolve('暂存成功'),
        },
      ]}
      beforeTrigger={() => {
        // 触发前的异步操作
        return Promise.resolve();
      }}
      onChange={(result) => {
        console.log('操作结果:', result);
      }}
    >
      <div>弹窗内容</div>
    </Popup.Trigger>
  );
}
```

## SubmitButton 组件

带自动加载状态的提交按钮。

```tsx
import { SubmitButton } from '@baifendian/adhere-ui-popup';

function App() {
  return (
    <SubmitButton
      color="primary"
      onClick={async () => {
        // 自动显示 loading 状态
        await new Promise(resolve => setTimeout(resolve, 2000));
        return '操作成功';
      }}
    >
      提交
    </SubmitButton>
  );
}
```

## 表单集成

与 Ant Design Form 集成使用。

```tsx
import { Form } from 'antd';
import Popup from '@baifendian/adhere-ui-popup';

function App() {
  return (
    <Form>
      <Form.Item
        name="user"
        label="选择用户"
        rules={[{ required: true, message: '请选择用户' }]}
      >
        <Popup.TriggerPrompt
          renderTrigger={() => <button>选择用户</button>}
          title="用户列表"
          onSubmit={() => {
            // 返回选中的用户数据
            return Promise.resolve({ id: 1, name: '张三' });
          }}
        >
          <UserList />
        </Popup.TriggerPrompt>
      </Form.Item>
    </Form>
  );
}
```

# API

## Popup 静态方法

### Popup.create(config)

创建弹窗实例。

**参数：**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| config | 弹窗配置 | `IConfig` | - |

**返回：** `Popup` 实例

### Popup.show(popup)

显示弹窗。

**参数：**
- `popup`: Popup 实例

**返回：** `boolean`

### Popup.showClosePrePopup(popup)

显示弹窗并关闭前一个弹窗。

**参数：**
- `popup`: Popup 实例

**返回：** `boolean`

### Popup.close(popup)

关闭指定弹窗。

**参数：**
- `popup`: Popup 实例

**返回：** `boolean`

### Popup.closeAll()

关闭所有弹窗。

**返回：** `boolean`

### Popup.destroy(popup)

销毁弹窗实例。

**参数：**
- `popup`: Popup 实例

**返回：** `boolean`

### Popup.setEl(el)

设置弹窗容器元素。

**参数：**
- `el`: HTMLElement

### Popup.getEl()

获取弹窗容器元素。

**返回：** `HTMLElement`

### Popup.setRenderToWrapper(wrapper)

设置渲染包装器（用于主题等包裹）。

**参数：**
- `wrapper`: `(children: () => ReactNode) => ReactNode`

## IConfig 配置

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 弹窗内容 | `ReactNode` | - |
| zIndex | 层级 | `number` | `11000` |
| onCreate | 创建时回调 | `() => void` | - |
| onBeforeShow | 显示前回调 | `() => void` | - |
| onAfterShow | 显示后回调 | `() => void` | - |
| onUpdate | 更新时回调 | `() => void` | - |
| onBeforeClose | 关闭前回调，可返回 Promise | `() => Promise<void> \| void` | - |
| onAfterClose | 关闭后回调 | `() => void` | - |
| onDestroy | 销毁时回调 | `() => void` | - |

## TriggerPrompt Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| renderTrigger | 渲染触发器 | `() => ReactNode` | - |
| title | 标题 | `ReactNode` | - |
| children | 弹窗内容 | `ReactNode` | - |
| value | 当前值 | `any` | - |
| onChange | 值变化回调 | `(value: any) => void` | - |
| onSubmit | 提交回调，返回 Promise | `() => Promise<any>` | - |
| okText | 确认按钮文本 | `string` | `'确认'` |
| isShowCloseAction | 是否显示关闭按钮 | `boolean` | `true` |
| closeIcon | 关闭图标 | `ReactNode \| boolean` | `true` |
| extra | 额外内容 | `ReactNode` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| beforeTrigger | 触发前回调 | `() => Promise<void>` | - |
| popupConfig | 弹窗配置 | `Omit<IConfig, 'children'>` | - |

## Trigger Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| renderTrigger | 渲染触发器 | `() => ReactNode` | - |
| title | 标题 | `ReactNode` | - |
| children | 弹窗内容 | `ReactNode` | - |
| value | 当前值 | `any` | - |
| onChange | 值变化回调 | `(value: any) => void` | - |
| actions | 操作按钮配置 | `ActionConfig[]` | - |
| isShowCloseAction | 是否显示关闭按钮 | `boolean` | `true` |
| closeActionPosition | 关闭按钮位置 | `'start' \| 'end'` | `'start'` |
| closeIcon | 关闭图标 | `ReactNode \| boolean` | `true` |
| extra | 额外内容 | `ReactNode` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| beforeTrigger | 触发前回调 | `() => Promise<void>` | - |
| popupConfig | 弹窗配置 | `Omit<IConfig, 'children'>` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |

## ActionConfig

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 按钮唯一标识 | `string \| number` | - |
| children | 按钮文本 | `ReactNode` | - |
| color | 按钮颜色 | `'primary' \| 'default' \| 'danger' \| 'warning'` | - |
| onClick | 点击回调，返回 Promise | `() => Promise<any>` | - |
| ...其他 | 继承 antd-mobile Button 属性 | - | - |

## SubmitButton Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onClick | 点击回调 | `(e: MouseEvent) => Promise<any> \| void` | - |
| ...其他 | 继承 antd-mobile Button 属性 | - | - |

## Ref 方法

### TriggerHandle / TriggerPromptHandle

```typescript
interface TriggerHandle {
  close: () => void;  // 关闭弹窗
}
```

# 线上地址(临时)
[https://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/popup](https://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/popup)
