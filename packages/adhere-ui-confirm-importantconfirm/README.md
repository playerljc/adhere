# ImportantConfirm 重要操作确认组件

重要操作确认提示组件，在进行重要操作时弹出确认对话框，用户确认后才执行操作。适用于删除、发布、提交等关键操作场景。

## ✨ 特性

- 🚀 支持 React 18.x
- 🎨 支持 Ant Design 5.x
- 🌍 支持国际化
- 🎯 支持主题定制
- 📦 支持动态引入 (babel-plugin-import)
- 🔒 类型安全，完整的 TypeScript 支持
- ⚠️ 内置警告图标，突出重要操作

## 🖥 兼容环境

- 现代浏览器
- IE11

## 📦 安装

```bash
npm install @baifendian/adhere-ui-confirm-importantconfirm --save
```

```bash
yarn add @baifendian/adhere-ui-confirm-importantconfirm
```

## 🔨 使用

### 基础用法

```tsx
import React from 'react';
import { Button } from 'antd';
import ImportantConfirm from '@baifendian/adhere-ui-confirm-importantconfirm';

const MyComponent = () => {
  const handleImportantAction = async () => {
    // 执行重要操作
    await publishArticle();
  };

  return (
    <ImportantConfirm success={handleImportantAction}>
      <Button type="primary">发布文章</Button>
    </ImportantConfirm>
  );
};
```

### 静态方法调用

```tsx
import ImportantConfirm from '@baifendian/adhere-ui-confirm-importantconfirm';

const handleImportantClick = () => {
  ImportantConfirm.open({
    title: '确认发布',
    text: '确定要发布这篇文章吗？发布后将无法撤回。',
    success: async () => {
      await publishArticle();
      message.success('发布成功');
    }
  });
};
```

### 自定义样式和层级

```tsx
<ImportantConfirm 
  success={handleImportantAction}
  className="custom-important-confirm"
  style={{ display: 'inline-block' }}
  zIndex={9999}
>
  <Button type="primary" danger>删除账户</Button>
</ImportantConfirm>
```

### 复杂操作示例

```tsx
import React from 'react';
import { Button, message } from 'antd';
import ImportantConfirm from '@baifendian/adhere-ui-confirm-importantconfirm';

const ArticleManager = () => {
  const handlePublish = async () => {
    try {
      await publishArticle();
      message.success('文章发布成功');
    } catch (error) {
      message.error('发布失败，请重试');
      throw error; // 重新抛出错误，对话框会保持打开状态
    }
  };

  const handleDelete = async () => {
    try {
      await deleteArticle();
      message.success('文章删除成功');
    } catch (error) {
      message.error('删除失败，请重试');
      throw error;
    }
  };

  return (
    <div>
      <ImportantConfirm success={handlePublish}>
        <Button type="primary">发布文章</Button>
      </ImportantConfirm>
      
      <ImportantConfirm success={handleDelete}>
        <Button type="primary" danger>删除文章</Button>
      </ImportantConfirm>
    </div>
  );
};
```

## 📖 API

### ImportantConfirm Props

| 参数 | 说明 | 类型 | 默认值 | 必填 |
|------|------|------|--------|------|
| className | 自定义CSS类名 | `string` | - | 否 |
| style | 自定义内联样式 | `CSSProperties` | - | 否 |
| zIndex | 对话框层级 | `number` | 资源字典中的最大层级 | 否 |
| success | 确认成功后的回调函数 | `() => Promise<void>` | - | 是 |
| children | 子元素，通常是触发重要操作确认的按钮或链接 | `ReactNode` | - | 否 |

### ImportantConfirm.open 参数

| 参数 | 说明 | 类型 | 默认值 | 必填 |
|------|------|------|--------|------|
| success | 确认成功后的回调函数 | `() => Promise<void>` | - | 否 |
| title | 对话框标题 | `string` | 国际化提示文本 | 否 |
| text | 对话框内容 | `string` | 确认操作提示 | 否 |
| zIndex | 对话框层级 | `number` | 资源字典中的最大层级 | 否 |
| width | 对话框宽度 | `number` | 350 | 否 |

## 🌍 国际化

组件支持国际化，默认使用以下键值：

- `hint`: 对话框标题
- `confirm_action`: 确认操作提示文本

## 🎨 主题定制

可以通过CSS变量或主题配置来自定义样式：

```css
.adhere-ui-important-confirm {
  /* 自定义样式 */
}

.adhere-ui-important-confirm .ant-btn {
  /* 自定义按钮样式 */
}
```

## 📝 注意事项

1. `success` 回调函数必须返回 Promise
2. 组件会自动阻止点击事件的冒泡
3. 对话框的 z-index 默认使用资源字典中的最大层级值
4. 建议在重要操作中添加适当的错误处理
5. 如果 `success` 回调抛出异常，对话框会保持打开状态
6. 组件内置警告图标，用于突出重要操作

## 🔗 相关链接

- [在线演示](http://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/importantconfirm)
- [GitHub 仓库](https://github.com/playerljc/adhere)
- [问题反馈](https://github.com/playerljc/adhere/issues)

