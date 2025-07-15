# ForceUpdate 组件

## 简介
ForceUpdate 是一个用于强制重新挂载子组件的 React 组件。通过改变子组件的 `key` 属性，可以强制 React 重新创建子组件实例，实现组件的完全重新渲染。

## ✨ 特性
- 支持 React 18.x
- 支持国际化
- 支持修改主题
- 支持动态引入 (babel-plugin-import)
- 提供 TypeScript 类型支持
- 通过 ref 暴露强制更新方法

## 🖥 兼容环境
- 现代浏览器，IE11

## 📦 安装
```bash
npm install @baifendian/adhere-ui-forceupdate --save
```

```bash
yarn add @baifendian/adhere-ui-forceupdate
```

## 🔨 使用

### 基础用法
```tsx
import React, { useRef } from 'react';
import ForceUpdate, { type ForceUpdateRefHandle } from '@baifendian/adhere-ui-forceupdate';

const MyComponent = () => {
  const forceUpdateRef = useRef<ForceUpdateRefHandle>(null);

  const handleForceUpdate = async () => {
    // 强制重新挂载子组件
    await forceUpdateRef.current?.reMount();
  };

  return (
    <div>
      <button onClick={handleForceUpdate}>强制更新</button>
      <ForceUpdate ref={forceUpdateRef}>
        <ExpensiveComponent />
      </ForceUpdate>
    </div>
  );
};
```

### 在表单重置中使用
```tsx
import React, { useRef } from 'react';
import { Form, Input, Button } from 'antd';
import ForceUpdate, { type ForceUpdateRefHandle } from '@baifendian/adhere-ui-forceupdate';

const FormComponent = () => {
  const formRef = useRef<ForceUpdateRefHandle>(null);

  const handleReset = async () => {
    // 强制重新挂载表单组件，清除所有状态
    await formRef.current?.reMount();
  };

  return (
    <div>
      <Button onClick={handleReset}>重置表单</Button>
      <ForceUpdate ref={formRef}>
        <Form layout="vertical">
          <Form.Item label="用户名" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="邮箱" name="email">
            <Input />
          </Form.Item>
        </Form>
      </ForceUpdate>
    </div>
  );
};
```

## 📖 API

### ForceUpdate Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 需要强制更新的子组件 | ReactElement | - |

### ForceUpdateRefHandle

| 方法 | 说明 | 类型 |
| --- | --- | --- |
| reMount | 强制重新挂载子组件 | `() => Promise<void>` |

## 💡 注意事项

1. **性能考虑**: 强制重新挂载会完全销毁并重新创建子组件，请谨慎使用，避免频繁调用
2. **状态丢失**: 重新挂载后，子组件的所有内部状态都会丢失
3. **事件监听**: 重新挂载会重新绑定所有事件监听器
4. **异步操作**: `reMount` 方法返回 Promise，建议使用 `await` 等待完成

## 🔗 相关链接
- [线上演示地址](https://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/forceupdate)
