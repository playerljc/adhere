# MessageDialog

一个功能强大的 React 对话框组件库，提供多种类型的对话框功能，包括确认框、警告框、输入框等。

## 功能特性

- 🎯 **多种对话框类型**: 支持确认框、警告框、输入框、密码框、数字输入框等
- 🎨 **可定制化**: 支持自定义样式、主题、按钮等
- 🌍 **国际化支持**: 内置国际化支持
- 🔒 **实例管理**: 支持单实例和多实例模式
- 📱 **响应式设计**: 支持移动端和桌面端
- 🎭 **主题支持**: 支持主题切换
- 🔧 **TypeScript**: 完整的 TypeScript 类型支持

## 安装

```bash
npm install @baifendian/adhere-ui-messagedialog
```

## 使用方法

### 基础用法

```tsx
import MessageDialog from '@baifendian/adhere-ui-messagedialog';

// 确认对话框
MessageDialog.Confirm({
  title: '确认删除',
  text: '确定要删除这条记录吗？',
  onSuccess: async () => {
    // 处理确认逻辑
    await deleteRecord();
  }
});

// 警告对话框
MessageDialog.Alert({
  title: '提示',
  text: '操作成功！',
  icon: <SuccessIcon />
});

// 输入对话框
MessageDialog.Prompt({
  title: '请输入名称',
  config: {
    label: '名称',
    type: 'input',
    required: true
  },
  onSuccess: async (value) => {
    // 处理输入值
    await saveName(value);
  }
});
```

### 高级用法

```tsx
// 自定义模态框
const dialog = MessageDialog.Modal({
  config: {
    title: '自定义对话框',
    width: 600,
    centered: true
  },
  children: <CustomContent />
});

// 更新对话框内容
dialog?.update(<NewContent />);

// 设置配置
dialog?.setConfig((draft) => {
  draft.title = '新标题';
});

// 关闭对话框
dialog?.close();
```

### 触发式对话框

```tsx
import { Trigger, TriggerPrompt } from '@baifendian/adhere-ui-messagedialog';

// 触发式确认框
<Trigger
  renderTrigger={() => <Button>删除</Button>}
  modalConfig={{
    config: {
      title: '确认删除',
      width: 400
    }
  }}
  actions={[
    {
      key: 'delete',
      type: 'primary',
      danger: true,
      children: '删除',
      onClick: async () => {
        await deleteRecord();
      }
    }
  ]}
/>

// 触发式输入框
<TriggerPrompt
  renderTrigger={() => <Button>编辑</Button>}
  modalConfig={{
    config: {
      title: '编辑信息',
      width: 500
    }
  }}
  onSubmit={async (values) => {
    await updateInfo(values);
  }}
/>
```

## API 文档

### MessageDialog.Confirm

创建确认对话框。

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | `string \| ReactElement` | - | 对话框标题 |
| text | `string \| ReactElement` | - | 对话框内容 |
| width | `number` | 300 | 对话框宽度 |
| zIndex | `number` | 999 | 对话框层级 |
| local | `string` | - | 国际化语言 |
| icon | `ReactElement` | - | 图标元素 |
| onSuccess | `(params?: any) => Promise<void>` | - | 确认回调函数 |

### MessageDialog.Alert

创建警告对话框。

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | `string \| ReactElement` | - | 对话框标题 |
| text | `string \| ReactElement` | - | 对话框内容 |
| width | `number` | 300 | 对话框宽度 |
| zIndex | `number` | 999 | 对话框层级 |
| local | `string` | - | 国际化语言 |
| icon | `ReactElement` | - | 图标元素 |

### MessageDialog.Prompt

创建输入提示对话框。

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | `string \| ReactElement` | - | 对话框标题 |
| config | `ColumnItemProps` | - | 表单配置 |
| layout | `FormItemLayoutProps` | - | 表单布局 |
| width | `number` | 300 | 对话框宽度 |
| zIndex | `number` | 999 | 对话框层级 |
| local | `string` | - | 国际化语言 |
| onSuccess | `(value: any) => Promise<void>` | - | 确认回调函数 |

### MessageDialog.Modal

创建自定义模态对话框。

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| config | `ModalProps` | {} | 模态框配置 |
| children | `ReactNode` | - | 子元素 |
| defaultCloseBtn | `boolean` | true | 是否显示默认关闭按钮 |

### DialogHandle

对话框句柄接口。

| 属性 | 类型 | 说明 |
|------|------|------|
| el | `HTMLElement` | DOM元素 |
| close | `() => void` | 关闭方法 |
| setConfig | `(callback: (draft: any) => void, children?: ReactNode) => void` | 设置配置方法 |
| update | `(children?: ReactNode) => void` | 更新内容方法 |

## 配置选项

### 全局配置

```tsx
// 设置是否允许多实例共存
MessageDialog.allowMultipleInstances(false);

// 设置自定义渲染包装器
MessageDialog.setRenderToWrapper((children) => (
  <ThemeProvider>{children()}</ThemeProvider>
));
```

### 常量配置

```tsx
import { DEFAULT_WIDTH, DEFAULT_ZINDEX, PROMPT_LAYOUT } from '@baifendian/adhere-ui-messagedialog';

// 默认宽度: 300
// 默认层级: 999
// 默认布局: { labelCol: { span: 6 }, wrapperCol: { span: 18 } }
```

## 类型定义

完整的 TypeScript 类型定义请参考 `src/types.ts` 文件。

## 更新日志

### 最新版本

- ✅ 优化代码质量和结构
- ✅ 完善 TypeScript 类型定义
- ✅ 添加完整的 JSDoc 文档
- ✅ 改进错误处理机制
- ✅ 优化性能，使用 useCallback 和 useMemo
- ✅ 修复类型安全问题
- ✅ 统一代码风格和命名规范

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License

