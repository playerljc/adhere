# DelConfirm 删除确认组件

删除确认提示组件，在删除操作时弹出确认对话框，用户确认后才执行删除操作。

## ✨ 特性

- 🚀 支持 React 18.x
- 🎨 支持 Ant Design 5.x
- 🌍 支持国际化
- 🎯 支持主题定制
- 📦 支持动态引入 (babel-plugin-import)
- 🔒 类型安全，完整的 TypeScript 支持

## 🖥 兼容环境

- 现代浏览器
- IE11

## 📦 安装

```bash
npm install @baifendian/adhere-ui-confirm-delconfirm --save
```

```bash
yarn add @baifendian/adhere-ui-confirm-delconfirm
```

## 🔨 使用

### 基础用法

```tsx
import React from 'react';
import { Button } from 'antd';
import DelConfirm from '@baifendian/adhere-ui-confirm-delconfirm';

const MyComponent = () => {
  const handleDelete = async () => {
    // 执行删除操作
    await deleteRecord(id);
  };

  return (
    <DelConfirm success={handleDelete}>
      <Button type="primary" danger>删除</Button>
    </DelConfirm>
  );
};
```

### 静态方法调用

```tsx
import DelConfirm from '@baifendian/adhere-ui-confirm-delconfirm';

const handleDeleteClick = () => {
  DelConfirm.open({
    title: '确认删除',
    text: '确定要删除这条记录吗？此操作不可恢复。',
    success: async () => {
      await deleteRecord(id);
      message.success('删除成功');
    }
  });
};
```

### 自定义样式

```tsx
<DelConfirm 
  success={handleDelete}
  className="custom-del-confirm"
  style={{ display: 'inline-block' }}
>
  <Button type="link" danger>删除</Button>
</DelConfirm>
```

## 📖 API

### DelConfirm Props

| 参数 | 说明 | 类型 | 默认值 | 必填 |
|------|------|------|--------|------|
| className | 自定义CSS类名 | `string` | - | 否 |
| style | 自定义内联样式 | `CSSProperties` | - | 否 |
| zIndex | 对话框层级 | `number` | 资源字典中的最大层级 | 否 |
| success | 确认删除成功后的回调函数 | `() => Promise<void>` | - | 是 |
| children | 子元素，通常是触发删除确认的按钮或链接 | `ReactNode` | - | 否 |

### DelConfirm.open 参数

| 参数 | 说明 | 类型 | 默认值 | 必填 |
|------|------|------|--------|------|
| success | 确认删除成功后的回调函数 | `() => Promise<void>` | - | 否 |
| title | 对话框标题 | `string` | 国际化提示文本 | 否 |
| text | 对话框内容 | `string` | 确认删除提示 | 否 |
| zIndex | 对话框层级 | `number` | 资源字典中的最大层级 | 否 |
| width | 对话框宽度 | `number` | 350 | 否 |

## 🌍 国际化

组件支持国际化，默认使用以下键值：

- `hint`: 对话框标题
- `confirm_delete`: 确认删除提示文本

## 🎨 主题定制

可以通过CSS变量或主题配置来自定义样式：

```css
.adhere-ui-del-confirm {
  /* 自定义样式 */
}
```

## 📝 注意事项

1. `success` 回调函数必须返回 Promise
2. 组件会自动阻止点击事件的冒泡
3. 对话框的 z-index 默认使用资源字典中的最大层级值
4. 建议在删除操作中添加适当的错误处理

## 🔗 相关链接

- [在线演示](http://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/delconfirm)
- [GitHub 仓库](https://github.com/playerljc/adhere)
- [问题反馈](https://github.com/playerljc/adhere/issues)

