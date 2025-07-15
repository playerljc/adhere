# Adhere UI RichText Sandbox

富文本编辑器沙箱组件，提供隔离的编辑环境，避免样式冲突和全局污染。

## 功能特性

- 🛡️ **沙箱隔离**: 通过iframe提供完全隔离的编辑环境
- 📝 **多编辑器支持**: 支持ReactQuill和WangEditor两种编辑器
- 🎨 **样式隔离**: 避免编辑器样式与主应用样式冲突
- 🌍 **国际化支持**: 内置多语言支持
- 📱 **响应式设计**: 自适应高度调整
- 🔧 **高度可配置**: 支持丰富的配置选项
- 🚀 **性能优化**: 使用React.memo和useCallback优化性能

## 组件列表

### ReactQuillSandbox

基于ReactQuill的富文本编辑器沙箱组件。

#### 基本用法

```tsx
import ReactQuillSandbox from '@baifendian/adhere-ui-richtext-sandbox';

function MyComponent() {
  const [value, setValue] = useState('<p>Hello World</p>');
  
  return (
    <ReactQuillSandbox
      value={value}
      onChange={setValue}
      theme="snow"
      placeholder="请输入内容..."
    />
  );
}
```

#### 高级用法

```tsx
import ReactQuillSandbox from '@baifendian/adhere-ui-richtext-sandbox';

function AdvancedComponent() {
  const editorRef = useRef<ReactQuillSandboxHandler>(null);
  const [value, setValue] = useState('<p>Hello World</p>');
  
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['image', 'code-block']
    ]
  };
  
  const handleFocus = () => {
    editorRef.current?.focus();
  };
  
  return (
    <div>
      <button onClick={handleFocus}>聚焦编辑器</button>
      <ReactQuillSandbox
        ref={editorRef}
        value={value}
        onChange={setValue}
        modules={modules}
        theme="snow"
        wrapStyle={{ height: '400px' }}
        quillStyle="border: 1px solid #ccc;"
      />
    </div>
  );
}
```

### WangEditorSandbox

基于WangEditor的富文本编辑器沙箱组件。

#### 基本用法

```tsx
import WangEditorSandbox from '@baifendian/adhere-ui-richtext-sandbox';

function MyComponent() {
  const [value, setValue] = useState('<p>Hello World</p>');
  
  return (
    <WangEditorSandbox
      value={value}
      onChange={setValue}
      bordered={true}
      gap={60}
    />
  );
}
```

#### 高级用法

```tsx
import WangEditorSandbox from '@baifendian/adhere-ui-richtext-sandbox';

function AdvancedComponent() {
  const editorRef = useRef<WangEditorSandboxHandler>(null);
  const [value, setValue] = useState('<p>Hello World</p>');
  
  const toolBarProps = {
    defaultConfig: {
      toolbarKeys: [
        'headerSelect',
        'bold',
        'italic',
        'underline',
        '|',
        'bulletedList',
        'numberedList',
        '|',
        'insertImage',
        'insertTable'
      ]
    }
  };
  
  const editorProps = {
    defaultConfig: {
      placeholder: '请输入内容...',
      autoFocus: false,
      MENU_CONF: {}
    },
    onCreated: (editor) => {
      console.log('编辑器创建完成', editor);
    }
  };
  
  return (
    <div>
      <WangEditorSandbox
        ref={editorRef}
        value={value}
        onChange={setValue}
        toolBarProps={toolBarProps}
        editorProps={editorProps}
        bordered={true}
        gap={60}
        lang="zh_CN"
        direction="ltr"
      />
    </div>
  );
}
```

## API 文档

### ReactQuillSandbox Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `value` | `string` | - | 编辑器内容值 |
| `onChange` | `(value: string, delta: DeltaStatic, source: Sources, editor: UnprivilegedEditor) => void` | - | 内容变化回调 |
| `theme` | `'snow' \| 'bubble'` | `'snow'` | 编辑器主题 |
| `placeholder` | `string` | - | 占位符文本 |
| `readOnly` | `boolean` | `false` | 是否只读 |
| `modules` | `StringMap` | - | Quill模块配置 |
| `formats` | `string[]` | - | 允许的格式列表 |
| `wrapClassName` | `string` | - | 外层容器的CSS类名 |
| `wrapStyle` | `React.CSSProperties` | - | 外层容器的内联样式 |
| `quillStyle` | `string` | - | Quill编辑器的内联样式字符串 |

### WangEditorSandbox Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `value` | `string` | - | 编辑器内容值 |
| `onChange` | `(html: string) => void` | - | 内容变化回调 |
| `toolBarProps` | `ToolBarProps` | - | 工具栏配置 |
| `editorProps` | `EditorProps` | - | 编辑器配置 |
| `readOnly` | `boolean` | `false` | 是否只读 |
| `bordered` | `boolean` | `true` | 是否显示边框 |
| `gap` | `number` | `60` | 高度调整值 |
| `lang` | `'zh_CN' \| 'en_US' \| 'pt_PT' \| 'ar_EG'` | `'zh_CN'` | 语言设置 |
| `direction` | `'ltr' \| 'rtl'` | `'ltr'` | 文本方向 |
| `locales` | `Record<string, Record<string, string>>` | - | 国际化配置 |
| `injectionScripts` | `string[]` | - | 注入的脚本URL列表 |
| `injectionScriptsByString` | `string[]` | - | 注入的脚本字符串列表 |
| `injectionStyles` | `string[]` | - | 注入的样式URL列表 |
| `injectionStylesByString` | `string[]` | - | 注入的样式字符串列表 |
| `wrapClassName` | `string` | - | 外层容器的CSS类名 |
| `wrapStyle` | `React.CSSProperties` | - | 外层容器的内联样式 |
| `wangEditorStyle` | `string` | - | WangEditor编辑器的内联样式字符串 |

### 通用方法

#### ReactQuillSandboxHandler

| 方法 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `focus()` | - | `void` | 使编辑器获得焦点 |
| `blur()` | - | `void` | 使编辑器失去焦点 |
| `getEditor()` | - | `Quill` | 获取Quill编辑器实例 |
| `getQuill()` | - | `Quill` | 获取Quill类 |

#### WangEditorSandboxHandler

| 方法 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `getEditor()` | - | `IDomEditor \| null` | 获取编辑器实例 |
| `getWangEditor()` | - | `typeof wangEditor` | 获取WangEditor对象 |
| `getWindow()` | - | `Window` | 获取iframe窗口对象 |

### 静态方法

#### AntdFormRequireValidator

用于Antd表单验证的静态方法。

```tsx
import { Form } from 'antd';
import ReactQuillSandbox from '@baifendian/adhere-ui-richtext-sandbox';

const editorRef = useRef<ReactQuillSandboxHandler>(null);

<Form.Item
  name="content"
  rules={[
    ReactQuillSandbox.AntdFormRequireValidator(
      () => editorRef.current?.getEditor(),
      '请输入内容'
    )
  ]}
>
  <ReactQuillSandbox ref={editorRef} />
</Form.Item>
```

## 技术实现

### 沙箱隔离

组件通过iframe实现沙箱隔离，确保编辑器运行在独立的环境中：

1. **样式隔离**: 编辑器样式不会影响主应用
2. **脚本隔离**: 编辑器脚本不会污染全局作用域
3. **DOM隔离**: 编辑器DOM操作限制在iframe内

### 性能优化

1. **React.memo**: 避免不必要的重渲染
2. **useCallback**: 缓存函数引用
3. **useMemo**: 缓存计算结果
4. **ResizeObserver**: 高效监听尺寸变化

### 错误处理

1. **Promise错误捕获**: 所有异步操作都有错误处理
2. **类型安全**: 完整的TypeScript类型定义
3. **边界情况处理**: 处理各种异常情况

## 开发指南

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建
npm run build
```

### 代码规范

- 使用TypeScript进行类型检查
- 遵循ESLint规则
- 使用Prettier格式化代码
- 编写完整的JSDoc文档

### 测试

```bash
# 运行单元测试
npm run test

# 运行E2E测试
npm run test:e2e
```

## 更新日志

### v2.0.0

- ✨ 完整的TypeScript类型支持
- 📝 详细的JSDoc文档
- 🚀 性能优化和代码重构
- 🛡️ 改进的错误处理
- 🎨 更好的代码组织结构

### v1.0.0

- 🎉 初始版本发布
- 📝 支持ReactQuill和WangEditor
- 🛡️ 沙箱隔离功能
- 🌍 国际化支持

## 许可证

MIT License
