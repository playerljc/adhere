# ImportantConfirm 重要确认对话框

一个带有警告图标的确认对话框组件，用于需要用户特别注意的重要操作确认。

## 特性

- 🚨 内置警告图标，突出重要操作
- 📱 基于 antd-mobile 的 Dialog 组件
- 🎯 支持组件式和函数式两种调用方式
- 🎨 支持自定义样式和主题
- 🌍 支持国际化
- 📝 完整的 TypeScript 类型支持

## 安装

```bash
npm install @baifendian/adhere-mobile-ui-confirm-importantconfirm
```

## 使用方法

### 作为组件使用

```tsx
import ImportantConfirm from '@baifendian/adhere-mobile-ui-confirm-importantconfirm';

function MyComponent() {
  const handleDelete = () => {
    console.log('删除操作已确认');
  };

  return (
    <ImportantConfirm 
      onConfirm={handleDelete}
      content="确定要删除这个文件吗？此操作不可撤销。"
    >
      <button>删除文件</button>
    </ImportantConfirm>
  );
}
```

### 作为函数调用

```tsx
import ImportantConfirm from '@baifendian/adhere-mobile-ui-confirm-importantconfirm';

async function handleDeleteFile() {
  const confirmed = await ImportantConfirm.open({
    content: '确定要删除这个文件吗？此操作不可撤销。',
    confirmText: '删除',
    cancelText: '取消'
  });
  
  if (confirmed) {
    // 执行删除操作
    await deleteFile();
  }
}
```

## API

### ImportantConfirm Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义CSS类名 | `string` | - |
| style | 自定义内联样式 | `CSSProperties` | - |
| children | 子元素内容 | `ReactNode` | - |
| ... | 继承 antd-mobile Dialog.confirm 的所有属性 | `DialogConfirmProps` | - |

### ImportantConfirm.open()

静态方法，用于以函数形式打开确认对话框。

#### 参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| props | 对话框配置属性 | `DialogConfirmProps` | - |

#### 返回值

| 类型 | 说明 |
| --- | --- |
| `Promise<boolean>` | 用户的选择结果，`true` 表示确认，`false` 表示取消 |

## 样式定制

组件使用CSS变量来控制样式，你可以通过以下变量进行定制：

```css
:root {
  /* 图标宽度 */
  --adhere-important-confirm-icon-width: 40px;
  
  /* 图标右边距 */
  --adhere-important-confirm-icon-margin: 10px;
}
```

## 国际化

组件使用 `@baifendian/adhere-util-intl` 进行国际化，支持以下文本：

- `hint`: 对话框标题
- `confirm_action`: 默认确认文本

## 示例

### 基础用法

```tsx
import ImportantConfirm from '@baifendian/adhere-mobile-ui-confirm-importantconfirm';

function BasicExample() {
  return (
    <ImportantConfirm
      content="确定要执行这个重要操作吗？"
      onConfirm={() => console.log('操作已确认')}
    >
      <button>执行重要操作</button>
    </ImportantConfirm>
  );
}
```

### 自定义按钮文本

```tsx
import ImportantConfirm from '@baifendian/adhere-mobile-ui-confirm-importantconfirm';

function CustomButtonsExample() {
  return (
    <ImportantConfirm
      content="确定要删除这个项目吗？"
      confirmText="删除"
      cancelText="保留"
      onConfirm={() => console.log('项目已删除')}
    >
      <button>删除项目</button>
    </ImportantConfirm>
  );
}
```

### 异步操作

```tsx
import ImportantConfirm from '@baifendian/adhere-mobile-ui-confirm-importantconfirm';

async function AsyncExample() {
  const confirmed = await ImportantConfirm.open({
    content: '确定要提交这个表单吗？',
    confirmText: '提交',
    cancelText: '取消'
  });
  
  if (confirmed) {
    try {
      await submitForm();
      console.log('表单提交成功');
    } catch (error) {
      console.error('表单提交失败:', error);
    }
  }
}
```

## 注意事项

1. 组件基于 antd-mobile 的 Dialog 组件，确保项目中已正确安装和配置 antd-mobile
2. 图标使用 base64 编码的 SVG，确保网络环境支持
3. 组件会自动阻止点击事件的冒泡，避免触发父元素的点击事件
4. 建议在重要操作（如删除、提交等）中使用此组件，提升用户体验

## 更新日志

### 1.0.0

- 初始版本发布
- 支持组件式和函数式调用
- 完整的 TypeScript 类型支持
- 国际化支持


