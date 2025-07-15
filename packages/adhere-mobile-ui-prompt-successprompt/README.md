# Adhere Mobile UI Success Prompt

移动端成功提示组件，提供轻量级Toast提示和模态对话框两种展示方式。

## 安装

```bash
npm install @baifendian/adhere-mobile-ui-prompt-successprompt
```

## 使用方法

### 基本用法

```tsx
import SuccessDialog from '@baifendian/adhere-mobile-ui-prompt-successprompt';

// Toast提示
SuccessDialog.openSuccessMessage();

// 对话框提示
SuccessDialog.openSuccessDialog();
```

### 自定义配置

```tsx
// 自定义Toast提示
const toastHandler = SuccessDialog.openSuccessMessage({
  content: '保存成功！',
  duration: 2000,
  maskClickable: true
});

// 手动关闭Toast
setTimeout(() => toastHandler.close(), 1000);

// 自定义对话框
const dialogHandler = SuccessDialog.openSuccessDialog({
  content: '数据保存成功！',
  duration: 5000,
  title: '操作结果',
  closeOnMaskClick: false
});

// 手动关闭对话框
setTimeout(() => dialogHandler.close(), 2000);
```

### 禁用自动关闭

```tsx
// 禁用Toast自动关闭
SuccessDialog.openSuccessMessage({
  duration: 0
});

// 禁用对话框自动关闭
SuccessDialog.openSuccessDialog({
  duration: 0,
  content: '请确认操作结果'
});
```

## API

### SuccessDialog.openSuccessMessage(props?)

显示轻量级成功提示消息。

#### 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| props | `ToastShowProps` | - | Toast配置属性 |

#### 返回值

返回 `ToastHandler`，可用于手动关闭提示。

### SuccessDialog.openSuccessDialog(props)

显示成功对话框。

#### 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| props | `SuccessDialogProps` | - | 对话框配置属性 |
| props.duration | `number \| (() => void)` | `3000` | 自动关闭持续时间（毫秒），设为0禁用自动关闭 |
| props.content | `React.ReactNode` | `'操作成功'` | 对话框内容 |
| props.title | `string` | `'提示'` | 对话框标题 |
| props.closeOnMaskClick | `boolean` | `true` | 是否允许点击遮罩关闭 |

#### 返回值

返回 `ModalShowHandler`，可用于手动关闭对话框。

## 类型定义

```tsx
import type { 
  SuccessDialogComponent, 
  SuccessDialogProps, 
  Duration 
} from '@baifendian/adhere-mobile-ui-prompt-successprompt';
```

## 样式定制

组件支持通过CSS变量进行样式定制：

```css
:root {
  --dialog-icon-margin-right: 15px;
  --dialog-icon-color: #52c41a;
  --dialog-icon-font-size: 22px;
  --dialog-content-color: #333;
}
```

## 注意事项

1. 组件会自动管理定时器，避免内存泄漏
2. 支持国际化，默认使用 `Intl.get('operation_successful')` 和 `Intl.get('hint')`
3. 对话框会自动显示成功图标（CheckCircleFill）
4. 建议在移动端使用，依赖 `antd-mobile` 组件库


