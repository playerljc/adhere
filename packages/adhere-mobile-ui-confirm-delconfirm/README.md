# Adhere Mobile UI DelConfirm

移动端删除确认组件，基于 antd-mobile 的 Dialog 组件封装，提供统一的删除确认交互体验。

## 特性

- 🎯 统一的删除确认交互
- 🎨 支持自定义样式和内容
- 🔧 提供组件和静态方法两种使用方式
- 🌍 内置国际化支持
- 📱 专为移动端优化

## 安装

```bash
npm install @baifendian/adhere-mobile-ui-confirm-delconfirm
```

## 使用方法

### 作为组件使用

```tsx
import React from 'react';
import { Button } from 'antd-mobile';
import DelConfirm from '@baifendian/adhere-mobile-ui-confirm-delconfirm';

const MyComponent = () => {
  const handleDelete = () => {
    console.log('删除操作执行');
  };

  return (
    <DelConfirm onConfirm={handleDelete}>
      <Button color="danger">删除</Button>
    </DelConfirm>
  );
};
```

### 作为静态方法使用

```tsx
import React from 'react';
import { Button } from 'antd-mobile';
import DelConfirm from '@baifendian/adhere-mobile-ui-confirm-delconfirm';

const MyComponent = () => {
  const handleDeleteClick = async () => {
    const confirmed = await DelConfirm.open({
      onConfirm: () => {
        console.log('删除操作执行');
      },
      onCancel: () => {
        console.log('用户取消删除');
      }
    });
    
    if (confirmed) {
      console.log('用户确认删除');
    }
  };

  return (
    <Button color="danger" onClick={handleDeleteClick}>
      删除
    </Button>
  );
};
```

## API

### DelConfirm Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义CSS类名 | `string` | - |
| style | 自定义内联样式 | `CSSProperties` | - |
| children | 子元素内容 | `ReactNode` | - |
| ... | 继承 antd-mobile Dialog.confirm 的所有属性 | `DialogConfirmProps` | - |

### DelConfirm.open()

静态方法，直接打开删除确认对话框。

#### 参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| props | 对话框配置属性 | `DialogConfirmProps` | - |

#### 返回值

- `Promise<boolean>`: 用户确认结果，`true` 表示确认删除，`false` 表示取消

## 国际化

组件内置了国际化支持，默认使用以下文案：

- 标题：`Intl.get('hint')`
- 内容：`Intl.get('confirm_delete')`

你可以通过传入自定义的 `title` 和 `content` 来覆盖默认文案：

```tsx
<DelConfirm 
  title="确认删除"
  content="确定要删除这条记录吗？"
  onConfirm={handleDelete}
>
  <Button>删除</Button>
</DelConfirm>
```

## 样式定制

组件使用 CSS 类名 `adhere-ui-mobile-del-confirm`，你可以通过覆盖样式来自定义外观：

```css
.adhere-ui-mobile-del-confirm {
  /* 自定义样式 */
}
```

## 注意事项

1. 组件会自动阻止点击事件的冒泡
2. 建议在删除操作前进行二次确认
3. 静态方法 `open` 返回 Promise，需要使用 `await` 或 `.then()` 处理结果
4. 组件依赖 `@baifendian/adhere-util-intl` 进行国际化处理


