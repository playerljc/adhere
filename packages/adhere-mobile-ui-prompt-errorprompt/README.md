# Adhere Mobile UI Error Prompt

## 简介
&ensp;&ensp;错误提示组件，提供统一的错误提示解决方案，支持Toast轻量提示和Modal对话框两种形式。

## ✨ 特性
- 支持 React 18.x
- 基于 antd-mobile 5.x
- 支持国际化
- 支持修改主题
- 支持动态引入 (babel-plugin-import)
- 完整的 TypeScript 类型支持
- 自动关闭和手动关闭支持

## 🖥 兼容环境
- 现代浏览器，IE11

## 📦 安装
```bash
npm install @baifendian/adhere-mobile-ui-prompt-errorprompt --save
```

```bash
yarn add @baifendian/adhere-mobile-ui-prompt-errorprompt
```

## 🚀 使用

### 基本用法

```tsx
import ErrorPrompt from '@baifendian/adhere-mobile-ui-prompt-errorprompt';

// 显示错误消息提示
ErrorPrompt.openErrorMessage();

// 显示错误对话框
ErrorPrompt.openErrorDialog();
```

### 按需导入

```tsx
import { openErrorMessage, openErrorDialog } from '@baifendian/adhere-mobile-ui-prompt-errorprompt';

// 显示自定义错误消息
openErrorMessage({
  content: '网络连接失败',
  duration: 2000
});

// 显示自定义错误对话框
const handler = openErrorDialog({
  content: '操作失败，请重试',
  duration: 5000,
  title: '错误'
});

// 手动关闭对话框
// handler.close();
```

### 高级用法

```tsx
import ErrorPrompt from '@baifendian/adhere-mobile-ui-prompt-errorprompt';

// 不自动关闭的对话框
const handler = ErrorPrompt.openErrorDialog({
  content: '请确认操作结果',
  duration: 0, // 不自动关闭
  closeOnMaskClick: false // 不允许点击遮罩关闭
});

// 在某个时机手动关闭
setTimeout(() => {
  handler.close();
}, 10000);
```

## 📖 API

### ErrorPrompt

#### openErrorMessage(props?: ToastShowProps): ToastHandler

显示错误消息提示

**参数:**
- `props` (可选): Toast显示属性，继承自antd-mobile的ToastShowProps

**返回值:**
- `ToastHandler`: Toast处理器，可用于手动关闭

#### openErrorDialog(props: ErrorDialogProps): ModalShowHandler

显示错误对话框

**参数:**
- `props`: 错误对话框属性
  - `duration` (可选): 自动关闭持续时间（毫秒），默认为3000ms，设为0或空函数则不自动关闭
  - `content` (可选): 对话框内容，默认为系统异常信息
  - `title` (可选): 对话框标题，默认为"提示"
  - `closeOnMaskClick` (可选): 是否允许点击遮罩关闭，默认为true
  - 其他属性继承自antd-mobile的ModalShowProps

**返回值:**
- `ModalShowHandler`: Modal处理器，可用于手动关闭对话框

### 类型定义

```tsx
import type { 
  ErrorPromptComponent, 
  ErrorDialogProps, 
  Duration 
} from '@baifendian/adhere-mobile-ui-prompt-errorprompt';
```

## 🔧 配置

### babel-plugin-import 配置

```javascript
// .babelrc
{
  "plugins": [
    ["import", {
      "libraryName": "@baifendian/adhere-mobile-ui-prompt-errorprompt",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}
```

## 🌐 国际化

组件使用 `@baifendian/adhere-util-intl` 进行国际化处理，默认显示以下文本：

- 系统异常: `Intl.get('system_exception')`
- 提示: `Intl.get('hint')`

## 🎨 主题定制

组件使用CSS类名前缀 `adhere-mobile-error-prompt`，可以通过CSS变量或样式覆盖来自定义主题。

## 📝 更新日志

详见 [changelog](./changelog) 目录

## 🔗 相关链接

- [在线演示](http://playerljc.github.io/adhere/index.html#/adhere/adhere/mobile/errorprompt)
- [Adhere 主仓库](https://github.com/playerljc/adhere)


